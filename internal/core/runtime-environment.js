"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const debug_1 = __importDefault(require("debug"));
const logger_1 = __importDefault(require("redspot/logger"));
const provider_1 = require("../../provider");
const artifacts_1 = require("../artifacts");
const config_loading_1 = require("./config/config-loading");
const errors_1 = require("./errors");
const errors_list_1 = require("./errors-list");
const task_definitions_1 = require("./tasks/task-definitions");
const log = debug_1.default('redspot:core:hre');
class Environment {
    /**
     * Initializes the Redspot Runtime Environment and the given
     * extender functions.
     *
     * @remarks The extenders' execution order is given by the order
     * of the requires in the redspot's config file and its plugins.
     *
     * @param config The redspot's config object.
     * @param redspotArguments The parsed redspot's arguments.
     * @param tasks A map of tasks.
     * @param extenders A list of extenders.
     */
    constructor(config, redspotArguments, tasks, extenders = []) {
        this.config = config;
        this.redspotArguments = redspotArguments;
        this.tasks = tasks;
        /**
         * Executes the task with the given name.
         *
         * @param name The task's name.
         * @param taskArguments A map of task's arguments.
         *
         * @throws a RS303 if there aren't any defined tasks with the given name.
         * @returns a promise with the task's execution result.
         */
        this.run = async (name, taskArguments = {}) => {
            const taskDefinition = this.tasks[name];
            log('Running task %s', name);
            if (taskDefinition === undefined) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARGUMENTS.UNRECOGNIZED_TASK, {
                    task: name
                });
            }
            const resolvedTaskArguments = this._resolveValidTaskArguments(taskDefinition, taskArguments);
            try {
                return await this._runTaskDefinition(taskDefinition, resolvedTaskArguments);
            }
            catch (e) {
                config_loading_1.analyzeModuleNotFoundError(e, this.config.paths.configFile);
                // tslint:disable-next-line only-redspot-error
                throw e;
            }
        };
        log('Creating RedspotRuntimeEnvironment');
        const networkName = redspotArguments.network !== undefined
            ? redspotArguments.network
            : config.defaultNetwork;
        const networkConfig = config.networks[networkName];
        if (networkConfig === undefined) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.NETWORK.CONFIG_NOT_FOUND, {
                network: networkName
            });
        }
        this.artifacts = new artifacts_1.Artifacts(config.paths.artifacts);
        this.network = provider_1.createNetwork(networkName, config.networks[networkName]);
        if (Number(redspotArguments.logLevel)) {
            logger_1.default.level = Number(redspotArguments.logLevel);
        }
        this._extenders = extenders;
        extenders.forEach((extender) => extender(this));
    }
    /**
     * Injects the properties of `this` (the Redspot Runtime Environment) into the global scope.
     *
     * @param blacklist a list of property names that won't be injected.
     *
     * @returns a function that restores the previous environment.
     */
    injectToGlobal(blacklist = Environment._BLACKLISTED_PROPERTIES) {
        const globalAsAny = global;
        const previousValues = {};
        globalAsAny.hre = this;
        for (const [key, value] of Object.entries(this)) {
            if (blacklist.includes(key)) {
                continue;
            }
            previousValues[key] = globalAsAny[key];
            globalAsAny[key] = value;
        }
        return () => {
            for (const [key, _] of Object.entries(this)) {
                if (blacklist.includes(key)) {
                    continue;
                }
                globalAsAny.hre = previousValues.hre;
                globalAsAny[key] = previousValues[key];
            }
        };
    }
    async _runTaskDefinition(taskDefinition, taskArguments) {
        let runSuperFunction;
        if (taskDefinition instanceof task_definitions_1.OverriddenTaskDefinition) {
            runSuperFunction = async (_taskArguments = taskArguments) => {
                log("Running %s's super", taskDefinition.name);
                return this._runTaskDefinition(taskDefinition.parentTaskDefinition, _taskArguments);
            };
            runSuperFunction.isDefined = true;
        }
        else {
            runSuperFunction = async () => {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.TASK_DEFINITIONS.RUNSUPER_NOT_AVAILABLE, {
                    taskName: taskDefinition.name
                });
            };
            runSuperFunction.isDefined = false;
        }
        const runSuper = runSuperFunction;
        const globalAsAny = global;
        const previousRunSuper = globalAsAny.runSuper;
        globalAsAny.runSuper = runSuper;
        const uninjectFromGlobal = this.injectToGlobal();
        try {
            return await taskDefinition.action(taskArguments, this, runSuper);
        }
        finally {
            uninjectFromGlobal();
            globalAsAny.runSuper = previousRunSuper;
        }
    }
    /**
     * Check that task arguments are within TaskDefinition defined params constraints.
     * Also, populate missing, non-mandatory arguments with default param values (if any).
     *
     * @private
     * @throws RedspotError if any of the following are true:
     *  > a required argument is missing
     *  > an argument's value's type doesn't match the defined param type
     *
     * @param taskDefinition
     * @param taskArguments
     * @returns resolvedTaskArguments
     */
    _resolveValidTaskArguments(taskDefinition, taskArguments) {
        const { paramDefinitions, positionalParamDefinitions } = taskDefinition;
        const nonPositionalParamDefinitions = Object.values(paramDefinitions);
        // gather all task param definitions
        const allTaskParamDefinitions = [
            ...nonPositionalParamDefinitions,
            ...positionalParamDefinitions
        ];
        const initResolvedArguments = { errors: [], values: {} };
        const resolvedArguments = allTaskParamDefinitions.reduce(({ errors, values }, paramDefinition) => {
            try {
                const paramName = paramDefinition.name;
                const argumentValue = taskArguments[paramName];
                const resolvedArgumentValue = this._resolveArgument(paramDefinition, argumentValue);
                if (resolvedArgumentValue !== undefined) {
                    values[paramName] = resolvedArgumentValue;
                }
            }
            catch (error) {
                errors.push(error);
            }
            return { errors, values };
        }, initResolvedArguments);
        const { errors: resolveErrors, values: resolvedValues } = resolvedArguments;
        // if has argument errors, throw the first one
        if (resolveErrors.length > 0) {
            throw resolveErrors[0];
        }
        // append the rest of arguments that where not in the task param definitions
        const resolvedTaskArguments = { ...taskArguments, ...resolvedValues };
        return resolvedTaskArguments;
    }
    /**
     * Resolves an argument according to a ParamDefinition rules.
     *
     * @param paramDefinition
     * @param argumentValue
     * @private
     */
    _resolveArgument(paramDefinition, argumentValue) {
        const { defaultValue, isOptional, name, type } = paramDefinition;
        if (argumentValue === undefined) {
            if (isOptional) {
                // undefined & optional argument -> return defaultValue
                return defaultValue;
            }
            // undefined & mandatory argument -> error
            throw new errors_1.RedspotError(errors_list_1.ERRORS.ARGUMENTS.MISSING_TASK_ARGUMENT, {
                param: name
            });
        }
        // arg was present -> validate type, if applicable
        this._checkTypeValidation(paramDefinition, argumentValue);
        return argumentValue;
    }
    /**
     * Checks if value is valid for the specified param definition.
     *
     * @param paramDefinition {ParamDefinition} - the param definition for validation
     * @param argumentValue - the value to be validated
     * @private
     * @throws RS301 if value is not valid for the param type
     */
    _checkTypeValidation(paramDefinition, argumentValue) {
        const { isVariadic, name: paramName, type } = paramDefinition;
        // in case of variadic param, argValue is an array and the type validation must pass for all values.
        // otherwise, it's a single value that is to be validated
        const argumentValueContainer = isVariadic ? argumentValue : [argumentValue];
        for (const value of argumentValueContainer) {
            type.validate(paramName, value);
        }
    }
}
exports.Environment = Environment;
Environment._BLACKLISTED_PROPERTIES = [
    'injectToGlobal',
    '_runTaskDefinition'
];
