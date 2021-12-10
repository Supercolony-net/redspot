/// <reference types="node" />
import { RedspotArguments, RedspotParamDefinitions } from '../../../types';
import ProcessEnv = NodeJS.ProcessEnv;
export declare function paramNameToEnvVariable(paramName: string): string;
export declare function getEnvVariablesMap(redspotArguments: RedspotArguments): {
    [envVar: string]: string;
};
export declare function getEnvRedspotArguments(paramDefinitions: RedspotParamDefinitions, envVariables: ProcessEnv): RedspotArguments;
