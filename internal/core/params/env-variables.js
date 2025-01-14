"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvRedspotArguments = exports.getEnvVariablesMap = exports.paramNameToEnvVariable = void 0;
const ArgumentsParser_1 = require("../../cli/ArgumentsParser");
const unsafe_1 = require("../../util/unsafe");
const errors_1 = require("../errors");
const errors_list_1 = require("../errors-list");
const REDSPOT_ENV_ARGUMENT_PREFIX = 'REDSPOT_';
function paramNameToEnvVariable(paramName) {
    // We create it starting from the result of ArgumentsParser.paramNameToCLA
    // so it's easier to explain and understand their equivalences.
    return ArgumentsParser_1.ArgumentsParser.paramNameToCLA(paramName)
        .replace(ArgumentsParser_1.ArgumentsParser.PARAM_PREFIX, REDSPOT_ENV_ARGUMENT_PREFIX)
        .replace(/-/g, '_')
        .toUpperCase();
}
exports.paramNameToEnvVariable = paramNameToEnvVariable;
function getEnvVariablesMap(redspotArguments) {
    const values = {};
    for (const [name, value] of Object.entries(redspotArguments)) {
        if (value === undefined) {
            continue;
        }
        values[paramNameToEnvVariable(name)] = value.toString();
    }
    return values;
}
exports.getEnvVariablesMap = getEnvVariablesMap;
function getEnvRedspotArguments(paramDefinitions, envVariables) {
    const envArgs = {};
    for (const paramName of unsafe_1.unsafeObjectKeys(paramDefinitions)) {
        const definition = paramDefinitions[paramName];
        const envVarName = paramNameToEnvVariable(paramName);
        const rawValue = envVariables[envVarName];
        if (rawValue !== undefined) {
            try {
                envArgs[paramName] = definition.type.parse(paramName, rawValue);
            }
            catch (error) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARGUMENTS.INVALID_ENV_VAR_VALUE, {
                    varName: envVarName,
                    value: rawValue
                }, error);
            }
        }
        else {
            envArgs[paramName] = definition.defaultValue;
        }
    }
    // TODO: This is a little type-unsafe, but we know we have all the needed arguments
    return envArgs;
}
exports.getEnvRedspotArguments = getEnvRedspotArguments;
