"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsProvider = void 0;
const util_1 = require("@polkadot/util");
const x_ws_1 = require("@polkadot/x-ws");
const assert_1 = __importDefault(require("assert"));
const chalk_1 = __importDefault(require("chalk"));
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const logger_1 = __importDefault(require("../logger"));
const coder_1 = __importDefault(require("./coder"));
const errors_1 = require("./errors");
const ALIASSES = {
    chain_finalisedHead: 'chain_finalizedHead',
    chain_subscribeFinalisedHeads: 'chain_subscribeFinalizedHeads',
    chain_unsubscribeFinalisedHeads: 'chain_unsubscribeFinalizedHeads'
};
const RETRY_DELAY = 1000;
function shortParams(result, len) {
    try {
        const str = util_1.isString(result) || util_1.isNumber(result)
            ? result.toString()
            : JSON.stringify(result);
        if (str.length > len + 3) {
            return `${str.substr(0, len)}...`;
        }
        return str;
    }
    catch {
        return '...';
    }
}
/**
 * @name WsProvider
 *
 * @description The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.
 *
 * @see [[HttpProvider]]
 */
class WsProvider {
    /**
     * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
     * @param {boolean} autoConnect Whether to connect automatically or not.
     */
    constructor(endpoint, headers = {}) {
        this._handlers = {};
        this._queued = {};
        this._waitingForId = {};
        this._isConnected = false;
        this._subscriptions = {};
        this._emit = (type, ...args) => {
            this._eventemitter.emit(type, ...args);
        };
        this._onSocketClose = (event) => {
            const ms = event.reason || errors_1.getWSErrorString(event.code);
            if (ms.trim() !== 'Normal connection closure') {
                logger_1.default.error(chalk_1.default.red(`Disconnected from ${this._endpoints[this._endpointIndex]}: ${event.code}:: ${event.reason || errors_1.getWSErrorString(event.code)}`));
            }
            this._isConnected = false;
            this._emit('disconnected');
        };
        this._onSocketError = (error) => {
            logger_1.default.warn(`Socket event: ${error.type}`);
            this._emit('error', error);
        };
        this._onSocketMessage = (message) => {
            const response = JSON.parse(message.data);
            const isMsg = util_1.isUndefined(response.method);
            if (isMsg) {
                logger_1.default.debug(`${chalk_1.default.red('⬇')} Id: ${chalk_1.default.bold(`%d`)}, result: ${shortParams(response.result, 60)}`, response.id);
                return this._onSocketMessageResult(response);
            }
            else {
                logger_1.default.debug(`${chalk_1.default.red('⬇')} SubId: ${chalk_1.default.bold(response.params.subscription.toString())}, result: ${shortParams(response.params.result, 60)}`);
                this._onSocketMessageSubscribe(response);
            }
        };
        this._onSocketMessageResult = (response) => {
            const handler = this._handlers[response.id];
            if (!handler) {
                // log.warn(`Unable to find handler for id=${response.id}`);
                return;
            }
            try {
                const { method, params, subscription } = handler;
                const result = this._coder.decodeResponse(response);
                // first send the result - in case of subs, we may have an update
                // immediately if we have some queued results already
                handler.callback(null, result);
                if (subscription) {
                    const subId = `${subscription.type}::${result}`;
                    this._subscriptions[subId] = {
                        ...subscription,
                        method,
                        params
                    };
                    // if we have a result waiting for this subscription already
                    if (this._waitingForId[subId]) {
                        this._onSocketMessageSubscribe(this._waitingForId[subId]);
                    }
                }
            }
            catch (error) {
                handler.callback(error, undefined);
            }
            delete this._handlers[response.id];
        };
        this._onSocketMessageSubscribe = (response) => {
            const method = ALIASSES[response.method] || response.method || 'invalid';
            const subId = `${method}::${response.params.subscription}`;
            const handler = this._subscriptions[subId];
            if (!handler) {
                // store the JSON, we could have out-of-order subid coming in
                this._waitingForId[subId] = response;
                // log.warn(`Unable to find handler for subscription=${subId}`);
                return;
            }
            // housekeeping
            delete this._waitingForId[subId];
            try {
                const result = this._coder.decodeResponse(response);
                handler.callback(null, result);
            }
            catch (error) {
                handler.callback(error, undefined);
            }
        };
        this._onSocketOpen = () => {
            assert_1.default(!util_1.isNull(this._websocket), 'WebSocket cannot be null in onOpen');
            logger_1.default.info('Connected to', this._endpoints[this._endpointIndex]);
            this._isConnected = true;
            this._emit('connected');
            this._sendQueue();
            this._resubscribe();
            return true;
        };
        this._resubscribe = () => {
            const subscriptions = this._subscriptions;
            this._subscriptions = {};
            Object.keys(subscriptions).forEach(
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            async (id) => {
                const { callback, method, params, type } = subscriptions[id];
                // only re-create subscriptions which are not in author (only area where
                // transactions are created, i.e. submissions such as 'author_submitAndWatchExtrinsic'
                // are not included (and will not be re-broadcast)
                if (type.startsWith('author_')) {
                    return;
                }
                try {
                    await this.subscribe(type, method, params, callback);
                }
                catch (error) {
                    logger_1.default.error(chalk_1.default.red(error));
                }
            });
        };
        this._sendQueue = () => {
            Object.keys(this._queued).forEach((id) => {
                try {
                    // we have done the websocket check in onSocketOpen, if an issue, will catch it
                    this._websocket.send(this._queued[id]);
                    delete this._queued[id];
                }
                catch (error) {
                    logger_1.default.error(chalk_1.default.red(error));
                }
            });
        };
        const endpoints = Array.isArray(endpoint) ? endpoint : [endpoint];
        assert_1.default(endpoints.length !== 0, 'WsProvider requires at least one Endpoint');
        endpoints.forEach((endpoint) => {
            assert_1.default(/^(wss|ws):\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);
        });
        this._eventemitter = new eventemitter3_1.default();
        this._coder = new coder_1.default();
        this._endpointIndex = -1;
        this._endpoints = endpoints;
        this._headers = headers;
        this._websocket = null;
    }
    /**
     * @summary `true` when this provider supports subscriptions
     */
    get hasSubscriptions() {
        return true;
    }
    /**
     * get default endpoint
     */
    get endpoint() {
        return this._endpoints[0];
    }
    /**
     * @summary Whether the node is connected or not.
     * @return {boolean} true if connected
     */
    get isConnected() {
        return this._isConnected;
    }
    /**
     * @description Returns a clone of the object
     */
    clone() {
        return new WsProvider(this._endpoints, this._headers);
    }
    /**
     * @summary Manually connect
     * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
     * connect manually using this method.
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async connect() {
        try {
            this._endpointIndex = (this._endpointIndex + 1) % this._endpoints.length;
            this._websocket =
                typeof WebSocket !== 'undefined' && util_1.isChildClass(WebSocket, x_ws_1.WebSocket)
                    ? new x_ws_1.WebSocket(this._endpoints[this._endpointIndex])
                    : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // WS may be an instance of w3cwebsocket, which supports headers
                        new x_ws_1.WebSocket(this._endpoints[this._endpointIndex], undefined, undefined, this._headers, undefined, {
                            // default: true
                            fragmentOutgoingMessages: true,
                            // default: 16K
                            fragmentationThreshold: 256 * 1024
                        });
            this._websocket.onclose = this._onSocketClose;
            this._websocket.onerror = this._onSocketError;
            this._websocket.onmessage = this._onSocketMessage;
            this._websocket.onopen = this._onSocketOpen;
            return new Promise((resolve, reject) => {
                let isConnected = false;
                const eventemitter = this._eventemitter;
                function removeAll(event) {
                    eventemitter.removeListener('connected', onConnect);
                    eventemitter.removeListener('disconnected', onClose);
                    eventemitter.removeListener('error', onClose);
                    if (isConnected) {
                        resolve();
                    }
                    else {
                        reject(event);
                    }
                }
                function onConnect() {
                    isConnected = true;
                    removeAll();
                }
                function onClose(event) {
                    isConnected = false;
                    removeAll(event);
                }
                this._eventemitter.once('connected', onConnect);
                this._eventemitter.once('disconnected', onClose);
                this._eventemitter.once('error', onClose);
            });
        }
        catch (error) {
            logger_1.default.error(chalk_1.default.red(error));
            this._emit('error', error);
            throw error;
        }
    }
    /**
     * @description Connect, never throwing an error, but rather forcing a retry
     */
    async connectWithRetry() {
        try {
            await this.connect();
        }
        catch (error) {
            setTimeout(() => {
                this.connectWithRetry().catch(() => {
                    // does not throw
                });
            }, this._autoConnectMs || RETRY_DELAY);
        }
    }
    /**
     * @description Manually disconnect from the connection, clearing autoconnect logic
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async disconnect() {
        try {
            assert_1.default(!util_1.isNull(this._websocket), 'Cannot disconnect on a non-connected websocket');
            // switch off autoConnect, we are in manual mode now
            this._autoConnectMs = 0;
            // 1000 - Normal closure; the connection successfully completed
            this._websocket.close(1000);
            this._websocket = null;
        }
        catch (error) {
            logger_1.default.error(chalk_1.default.red(error));
            this._emit('error', error);
            throw error;
        }
    }
    /**
     * @summary Listens on events after having subscribed using the [[subscribe]] function.
     * @param  {ProviderInterfaceEmitted} type Event
     * @param  {ProviderInterfaceEmitCb}  sub  Callback
     * @return unsubscribe function
     */
    on(type, sub) {
        this._eventemitter.on(type, sub);
        return () => {
            this._eventemitter.removeListener(type, sub);
        };
    }
    /**
     * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
     * @param method The RPC methods to execute
     * @param params Encoded paramaters as appliucable for the method
     * @param subscription Subscription details (internally used)
     */
    send(method, params, subscription) {
        return new Promise((resolve, reject) => {
            try {
                const json = this._coder.encodeJson(method, params);
                const request = JSON.stringify(json);
                const id = this._coder.getId();
                const callback = (error, result) => {
                    error ? reject(error) : resolve(result);
                };
                logger_1.default.debug(`${chalk_1.default.green(`⬆`)} Id: ${chalk_1.default.bold(`%d`)}, method: ${json.method}, params: ${shortParams(json.params, 1000)}`, json.id);
                this._handlers[id] = {
                    callback,
                    method,
                    params,
                    subscription
                };
                if (this.isConnected && !util_1.isNull(this._websocket)) {
                    this._websocket.send(request);
                }
                else {
                    this._queued[id] = request;
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * @name subscribe
     * @summary Allows subscribing to a specific event.
     * @param  {string}                     type     Subscription type
     * @param  {string}                     method   Subscription method
     * @param  {any[]}                 params   Parameters
     * @param  {ProviderInterfaceCallback} callback Callback
     * @return {Promise<number>}                     Promise resolving to the dd of the subscription you can use with [[unsubscribe]].
     */
    async subscribe(type, method, params, callback) {
        const id = (await this.send(method, params, { callback, type }));
        return id;
    }
    /**
     * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
     */
    async unsubscribe(type, method, id) {
        const subscription = `${type}::${id}`;
        // FIXME This now could happen with re-subscriptions. The issue is that with a re-sub
        // the assigned id now does not match what the API user originally received. It has
        // a slight complication in solving - since we cannot rely on the send id, but rather
        // need to find the actual subscription id to map it
        if (util_1.isUndefined(this._subscriptions[subscription])) {
            logger_1.default.warn(`Unable to find active subscription=${subscription}`);
            return false;
        }
        delete this._subscriptions[subscription];
        const result = (await this.send(method, [id]));
        return result;
    }
}
exports.WsProvider = WsProvider;
