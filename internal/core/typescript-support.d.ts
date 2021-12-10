import { RedspotConfig } from '../../types';
/**
 * Returns true if Redspot will run in using typescript mode.
 * @param configPath The config path if provider by the user.
 */
export declare function willRunWithTypescript(configPath?: string): boolean;
/**
 * Returns true if an Redspot is already running with typescript.
 */
export declare function isRunningWithTypescript(config: RedspotConfig): boolean;
export declare function isTypescriptSupported(): boolean;
export declare function loadTsNode(): void;
