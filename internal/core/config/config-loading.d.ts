import { RedspotArguments, RedspotConfig } from '../../../types';
export declare function resolveConfigPath(configPath: string | undefined): string;
export declare function loadConfigAndTasks(redspotArguments?: Partial<RedspotArguments>): RedspotConfig;
/**
 * Receives an Error and checks if it's a MODULE_NOT_FOUND and the reason that
 * caused it.
 *
 * If it can infer the reason, it throws an appropiate error. Otherwise it does
 * nothing.
 */
export declare function analyzeModuleNotFoundError(error: any, configPath: string): void;
