/// <reference types="node" />
/// <reference types="mocha" />
import { ConfigExtender, RedspotRuntimeEnvironment } from '../types';
import { ExtenderManager } from './core/config/extenders';
import { TasksDSL } from './core/tasks/dsl';
export declare type GlobalWithRedspotContext = NodeJS.Global & {
    __redspotContext: RedspotContext;
};
export declare class RedspotContext {
    static isCreated(): boolean;
    static createRedspotContext(): RedspotContext;
    static getRedspotContext(): RedspotContext;
    static deleteRedspotContext(): void;
    readonly tasksDSL: TasksDSL;
    readonly extendersManager: ExtenderManager;
    environment?: RedspotRuntimeEnvironment;
    readonly configExtenders: ConfigExtender[];
    private _filesLoadedBeforeConfig?;
    private _filesLoadedAfterConfig?;
    setRedspotRuntimeEnvironment(env: RedspotRuntimeEnvironment): void;
    getRedspotRuntimeEnvironment(): RedspotRuntimeEnvironment;
    setConfigLoadingAsStarted(): void;
    setConfigLoadingAsFinished(): void;
    getFilesLoadedDuringConfig(): string[];
}
