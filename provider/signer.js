"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
/**
 * A wrapper for Keyringpair
 */
class Signer {
    /**
     *
     * @param pair An instantiation of keyringpair
     * @param api ApiPromise
     */
    constructor(pair, accountSigner) {
        this.pair = pair;
        this.accountSigner = accountSigner;
    }
    /**
     * @description The Account address
     */
    get address() {
        return this.pair.address;
    }
    /**
     * @description The Account address
     */
    get addressRaw() {
        return this.pair.addressRaw;
    }
    /**
     * @description Public key of account
     */
    get publicKey() {
        return this.pair.publicKey;
    }
    /**
     * @description Public key of account
     */
    sign(data, options) {
        return this.pair.sign(data, options);
    }
    /**
     * Returns the signature of the transaction
     *
     * @param payload - The data to be signed
     * @returns The signature of the transaction
     *
     */
    async signPayload(payload) {
        return this.accountSigner.signPayload(payload);
    }
    /**
     * Get account address asynchronously
     *
     * @returns Account address
     *
     */
    async getAddress() {
        return Promise.resolve(this.pair.address);
    }
    setKeyPair(pair) {
        this.pair = pair;
    }
}
exports.Signer = Signer;
