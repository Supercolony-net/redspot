import EventEmitter from 'eventemitter3';
import { JsonRpcResponse, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted, WsProvider as IWsProvider } from '../types';
import Coder from './coder';
interface SubscriptionHandler {
    callback: ProviderInterfaceCallback;
    type: string;
}
interface WsStateAwaiting {
    callback: ProviderInterfaceCallback;
    method: string;
    params: any[];
    subscription?: SubscriptionHandler;
}
interface WsStateSubscription extends SubscriptionHandler {
    method: string;
    params: any[];
}
/**
 * @name WsProvider
 *
 * @description The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.
 *
 * @see [[HttpProvider]]
 */
export declare class WsProvider implements IWsProvider {
    readonly _coder: Coder;
    readonly _endpoints: string[];
    readonly _headers: Record<string, string>;
    readonly _eventemitter: EventEmitter;
    readonly _handlers: Record<string, WsStateAwaiting>;
    readonly _queued: Record<string, string>;
    readonly _waitingForId: Record<string, JsonRpcResponse>;
    _autoConnectMs: number;
    _endpointIndex: number;
    _isConnected: boolean;
    _subscriptions: Record<string, WsStateSubscription>;
    _websocket: WebSocket | null;
    /**
     * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
     * @param {boolean} autoConnect Whether to connect automatically or not.
     */
    constructor(endpoint: string | string[], headers?: Record<string, string>);
    /**
     * @summary `true` when this provider supports subscriptions
     */
    get hasSubscriptions(): boolean;
    /**
     * get default endpoint
     */
    get endpoint(): string;
    /**
     * @summary Whether the node is connected or not.
     * @return {boolean} true if connected
     */
    get isConnected(): boolean;
    /**
     * @description Returns a clone of the object
     */
    clone(): WsProvider;
    /**
     * @summary Manually connect
     * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
     * connect manually using this method.
     */
    connect(): Promise<void>;
    /**
     * @description Connect, never throwing an error, but rather forcing a retry
     */
    connectWithRetry(): Promise<void>;
    /**
     * @description Manually disconnect from the connection, clearing autoconnect logic
     */
    disconnect(): Promise<void>;
    /**
     * @summary Listens on events after having subscribed using the [[subscribe]] function.
     * @param  {ProviderInterfaceEmitted} type Event
     * @param  {ProviderInterfaceEmitCb}  sub  Callback
     * @return unsubscribe function
     */
    on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
    /**
     * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
     * @param method The RPC methods to execute
     * @param params Encoded paramaters as appliucable for the method
     * @param subscription Subscription details (internally used)
     */
    send(method: string, params: any[], subscription?: SubscriptionHandler): Promise<any>;
    /**
     * @name subscribe
     * @summary Allows subscribing to a specific event.
     * @param  {string}                     type     Subscription type
     * @param  {string}                     method   Subscription method
     * @param  {any[]}                 params   Parameters
     * @param  {ProviderInterfaceCallback} callback Callback
     * @return {Promise<number>}                     Promise resolving to the dd of the subscription you can use with [[unsubscribe]].
     */
    subscribe(type: string, method: string, params: any[], callback: ProviderInterfaceCallback): Promise<number | string>;
    /**
     * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
     */
    unsubscribe(type: string, method: string, id: number | string): Promise<boolean>;
    _emit: (type: ProviderInterfaceEmitted, ...args: any[]) => void;
    _onSocketClose: (event: CloseEvent) => void;
    _onSocketError: (error: Event) => void;
    _onSocketMessage: (message: MessageEvent) => void;
    _onSocketMessageResult: (response: JsonRpcResponse) => void;
    _onSocketMessageSubscribe: (response: JsonRpcResponse) => void;
    _onSocketOpen: () => boolean;
    _resubscribe: () => void;
    _sendQueue: () => void;
}
export {};
