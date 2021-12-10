import { ApiPromise as PolkadotApiPromise } from '@polkadot/api';
import { ApiPromise as IApiPromise } from '../types';
export declare class ApiPromise extends PolkadotApiPromise implements IApiPromise {
    get isReady(): Promise<ApiPromise>;
    get isReadyOrError(): Promise<ApiPromise>;
    connect(): Promise<void>;
}
