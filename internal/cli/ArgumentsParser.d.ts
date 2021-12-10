import { RedspotArguments, RedspotParamDefinitions, TaskArguments, TaskDefinition } from '../../types';
export declare class ArgumentsParser {
    static readonly PARAM_PREFIX = "--";
    static paramNameToCLA(paramName: string): string;
    static cLAToParamName(cLA: string): string;
    parseRedspotArguments(redspotParamDefinitions: RedspotParamDefinitions, envVariableArguments: RedspotArguments, rawCLAs: string[]): {
        redspotArguments: RedspotArguments;
        taskName?: string;
        unparsedCLAs: string[];
    };
    parseTaskArguments(taskDefinition: TaskDefinition, rawCLAs: string[]): TaskArguments;
    private _parseTaskParamArguments;
    private _addRedspotDefaultArguments;
    private _addTaskDefaultArguments;
    private _isCLAParamName;
    private _hasCLAParamNameFormat;
    private _parseArgumentAt;
    private _parsePositionalParamArgs;
}
