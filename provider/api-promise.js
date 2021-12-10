"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPromise = void 0;
const api_1 = require("@polkadot/api");
class ApiPromise extends api_1.ApiPromise {
    get isReady() {
        return this.connect()
            .then(() => {
            return super.isReady;
        })
            .then((api) => {
            const signer = this._rx.signer;
            signer.keyring && signer.keyring.setSS58Format(api.registry.chainSS58);
            signer.setUp && signer.setUp();
            return api;
        });
    }
    get isReadyOrError() {
        return this.connect()
            .then(() => {
            return super.isReadyOrError;
        })
            .then((api) => {
            const signer = this._rx.signer;
            signer.keyring && signer.keyring.setSS58Format(api.registry.chainSS58);
            signer.setUp && signer.setUp();
            return api;
        });
    }
    async connect() {
        const isConnected = this.isConnected;
        if (!isConnected) {
            await super.connect();
        }
    }
}
exports.ApiPromise = ApiPromise;
