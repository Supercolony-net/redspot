"use strict";
// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _id;
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@polkadot/util");
const assert_1 = __importDefault(require("assert"));
function formatErrorData(data) {
    if (util_1.isUndefined(data)) {
        return '';
    }
    const formatted = `: ${util_1.isString(data)
        ? data
            .replace(/Error\("/g, '')
            .replace(/\("/g, '(')
            .replace(/"\)/g, ')')
            .replace(/\(/g, ', ')
            .replace(/\)/g, '')
        : JSON.stringify(data)}`;
    // We need some sort of cut-off here since these can be very large and
    // very nested, pick a number and trim the result display to it
    return formatted.length <= 256 ? formatted : `${formatted.substr(0, 255)}…`;
}
/** @internal */
class RpcCoder {
    constructor() {
        _id.set(this, 0);
    }
    decodeResponse(response) {
        assert_1.default(response, 'Empty response object received');
        assert_1.default(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');
        const isSubscription = !util_1.isUndefined(response.params) && !util_1.isUndefined(response.method);
        assert_1.default(util_1.isNumber(response.id) ||
            (isSubscription &&
                (util_1.isNumber(response.params.subscription) ||
                    util_1.isString(response.params.subscription))), 'Invalid id field in decoded object');
        this._checkError(response.error);
        assert_1.default(!util_1.isUndefined(response.result) || isSubscription, 'No result found in JsonRpc response');
        if (isSubscription) {
            this._checkError(response.params.error);
            return response.params.result;
        }
        return response.result;
    }
    encodeJson(method, params) {
        return this.encodeObject(method, params);
    }
    encodeObject(method, params) {
        return {
            id: __classPrivateFieldSet(this, _id, +__classPrivateFieldGet(this, _id) + 1),
            jsonrpc: '2.0',
            method,
            params
        };
    }
    getId() {
        return __classPrivateFieldGet(this, _id);
    }
    _checkError(error) {
        if (error) {
            const { code, data, message } = error;
            throw new Error(`${code}: ${message}${formatErrorData(data)}`);
        }
    }
}
exports.default = RpcCoder;
_id = new WeakMap();
