import { RedspotArguments } from '../../types';
export declare function runScript(scriptPath: string, scriptArgs?: string[], extraNodeArgs?: string[], extraEnvVars?: {
    [name: string]: string;
}): Promise<number>;
export declare function runScriptWithRedspot(redspotArguments: RedspotArguments, scriptPath: string, scriptArgs?: string[], extraNodeArgs?: string[], extraEnvVars?: {
    [name: string]: string;
}): Promise<number>;
