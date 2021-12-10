"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _keyring, _config, _registry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
const keyring_1 = __importDefault(require("@polkadot/keyring"));
const util_1 = require("@polkadot/util");
const errors_1 = require("../internal/core/errors");
const errors_list_1 = require("../internal/core/errors-list");
const logger_1 = __importDefault(require("../logger"));
let id = 0;
class Signer {
    constructor() {
        _keyring.set(this, void 0);
        _config.set(this, []);
        _registry.set(this, void 0);
        this.init = (registry, config) => {
            __classPrivateFieldSet(this, _config, config);
            __classPrivateFieldSet(this, _registry, registry);
        };
        this.findKeyringPair = (address) => {
            const pairs = __classPrivateFieldGet(this, _keyring).getPairs();
            const findKeyringPair = pairs.find((pair) => __classPrivateFieldGet(this, _registry).createType('AccountId', pair.address).eq(address));
            if (!findKeyringPair) {
                throw new Error(`Can't find the keyringpair for ${address}`);
            }
            return findKeyringPair;
        };
        this.signRaw = async (raw) => {
            return new Promise((resolve) => {
                const signed = this.findKeyringPair(raw.address).sign(raw.data);
                resolve({ id: ++id, signature: util_1.u8aToHex(signed) });
            });
        };
        this.signPayload = async (payload) => {
            const pair = this.findKeyringPair(payload.address);
            return new Promise((resolve) => {
                const signed = __classPrivateFieldGet(this, _registry).createType('ExtrinsicPayload', payload, { version: payload.version })
                    .sign(pair);
                resolve({ id: ++id, ...signed });
            });
        };
        this.setUp = () => {
            for (const account of __classPrivateFieldGet(this, _config)) {
                let pair;
                if (typeof account === 'object') {
                    throw new Error('Account only supports suri format ');
                }
                else if (typeof account === 'string') {
                    try {
                        const meta = {
                            name: account.replace('//', '_').toLowerCase()
                        };
                        pair = this.keyring.addFromUri(account, meta);
                        pair.suri = account;
                        pair.lock = () => { };
                    }
                    catch (error) {
                        logger_1.default.error(error.message);
                        throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.BAD_SURI, { uri: account });
                    }
                }
            }
        };
        this.getPairs = () => {
            return this.keyring.getPairs();
        };
        this.addPair = (pair) => {
            return this.keyring.addPair(pair);
        };
        __classPrivateFieldSet(this, _keyring, new keyring_1.default({
            type: 'sr25519'
        }));
    }
    get keyring() {
        return __classPrivateFieldGet(this, _keyring);
    }
}
exports.Signer = Signer;
_keyring = new WeakMap(), _config = new WeakMap(), _registry = new WeakMap();
