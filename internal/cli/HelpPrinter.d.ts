import { RedspotParamDefinitions, TasksMap } from '../../types';
export declare class HelpPrinter {
    private readonly _programName;
    private readonly _executableName;
    private readonly _version;
    private readonly _redspotParamDefinitions;
    private readonly _tasks;
    constructor(_programName: string, _executableName: string, _version: string, _redspotParamDefinitions: RedspotParamDefinitions, _tasks: TasksMap);
    printGlobalHelp(includeSubtasks?: boolean): void;
    printTaskHelp(taskName: string): void;
    private _getParamValueDescription;
    private _getParamsList;
    private _getPositionalParamsList;
    private _printParamDetails;
    private _printPositionalParamDetails;
}
