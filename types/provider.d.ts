import { ApiPromise as PolkadotApiPromise } from '@polkadot/api';
import type { Signer as PolkadotSigner } from '@polkadot/api/types';
import type { Keyring as PolkadotKeyring } from '@polkadot/keyring';
import type { KeyringPair as PolkadotKeyringPair } from '@polkadot/keyring/types';
import type { ProviderInterface } from '@polkadot/rpc-provider/types';
import type { Registry as PolkadotRegistry } from '@polkadot/types/types';
import type { Signer as _AccountSigner } from '../provider/account-signer';
export interface Keyring extends PolkadotKeyring {
}
export interface LocalKeyringPair extends PolkadotKeyringPair {
    suri?: string;
}
export interface ApiPromise extends PolkadotApiPromise {
}
export interface Registry extends PolkadotRegistry {
}
export interface WsProvider extends ProviderInterface {
}
export interface JsonRpcObject {
    id: number;
    jsonrpc: '2.0';
}
export interface JsonRpcRequest extends JsonRpcObject {
    method: string;
    params: unknown[];
}
export interface JsonRpcResponseBaseError {
    code: number;
    data?: number | string;
    message: string;
}
interface JsonRpcResponseSingle {
    error?: JsonRpcResponseBaseError;
    result?: unknown;
}
interface JsonRpcResponseSubscription {
    method?: string;
    params: {
        error?: JsonRpcResponseBaseError;
        result: unknown;
        subscription: number | string;
    };
}
export declare type JsonRpcResponseBase = JsonRpcResponseSingle & JsonRpcResponseSubscription;
export declare type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;
export declare type ProviderInterfaceCallback = (error: Error | null, result: any) => void;
export declare type ProviderInterfaceEmitted = 'connected' | 'disconnected' | 'error';
export declare type ProviderInterfaceEmitCb = (value?: any) => any;
export declare type AccountSigner = _AccountSigner;
export interface Signer extends PolkadotSigner {
    address: string;
    accountSigner: AccountSigner;
    pair: LocalKeyringPair;
}
export {};
