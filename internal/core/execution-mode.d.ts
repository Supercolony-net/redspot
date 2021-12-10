/**
 * Returns true if Redspot is installed locally or linked from its repository,
 * by looking for it using the node module resolution logic.
 *
 * If a config file is provided, we start looking for it from it. Otherwise,
 * we use the current working directory.
 */
export declare function isRedspotInstalledLocallyOrLinked(configPath?: string): boolean;
/**
 * Checks whether we're using Redspot in development mode (that is, we're working _on_ Redspot).
 */
export declare function isLocalDev(): boolean;
export declare function isRunningRedspotCoreTests(): boolean;
