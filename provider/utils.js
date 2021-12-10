"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeSalt = void 0;
const types_1 = require("@polkadot/types");
const util_1 = require("@polkadot/util");
const util_crypto_1 = require("@polkadot/util-crypto");
const EMPTY_SALT = new Uint8Array();
async function encodeSalt(salt = util_crypto_1.randomAsU8a(), signerAddress) {
    return salt instanceof types_1.Bytes
        ? salt
        : salt && salt.length
            ? util_1.compactAddLength(util_1.u8aToU8a(salt))
            : EMPTY_SALT;
}
exports.encodeSalt = encodeSalt;
