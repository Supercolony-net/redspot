import { Artifacts as IArtifacts, EnvironmentExtender, Network, RedspotArguments, RedspotConfig, RedspotRuntimeEnvironment, RunTaskFunction, TasksMap } from '../../types';
export declare class Environment implements RedspotRuntimeEnvironment {
    readonly config: RedspotConfig;
    readonly redspotArguments: RedspotArguments;
    readonly tasks: TasksMap;
    private static readonly _BLACKLISTED_PROPERTIES;
    network: Network;
    artifacts: IArtifacts;
    private readonly _extenders;
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
    constructor(config: RedspotConfig, redspotArguments: RedspotArguments, tasks: TasksMap, extenders?: EnvironmentExtender[]);
    /**
     * Executes the task with the given name.
     *
     * @param name The task's name.
     * @param taskArguments A map of task's arguments.
     *
     * @throws a RS303 if there aren't any defined tasks with the given name.
     * @returns a promise with the task's execution result.
     */
    readonly run: RunTaskFunction;
    /**
     * Injects the properties of `this` (the Redspot Runtime Environment) into the global scope.
     *
     * @param blacklist a list of property names that won't be injected.
     *
     * @returns a function that restores the previous environment.
     */
    injectToGlobal(blacklist?: string[]): () => void;
    private _runTaskDefinition;
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
    private _resolveValidTaskArguments;
    /**
     * Resolves an argument according to a ParamDefinition rules.
     *
     * @param paramDefinition
     * @param argumentValue
     * @private
     */
    private _resolveArgument;
    /**
     * Checks if value is valid for the specified param definition.
     *
     * @param paramDefinition {ParamDefinition} - the param definition for validation
     * @param argumentValue - the value to be validated
     * @private
     * @throws RS301 if value is not valid for the param type
     */
    private _checkTypeValidation;
}
