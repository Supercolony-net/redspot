"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNetwork = exports.addPair = exports.createSigner = exports.createApi = exports.createProvider = void 0;
const util_1 = require("@polkadot/util");
const lazy_1 = require("../internal/util/lazy");
const account_signer_1 = require("./account-signer");
const api_promise_1 = require("./api-promise");
const signer_1 = require("./signer");
const utils_1 = require("./utils");
const ws_provider_1 = require("./ws-provider");
function createProvider(networkConfig) {
    return new ws_provider_1.WsProvider(networkConfig.endpoint, networkConfig.httpHeaders);
}
exports.createProvider = createProvider;
function createApi(provider, config, signer) {
    const api = new api_promise_1.ApiPromise({
        provider,
        types: config.types,
        typesAlias: config.typesAlias,
        typesBundle: config.typesBundle,
        typesChain: config.typesChain,
        typesSpec: config.typesSpec,
        rpc: config.rpc,
        signer: signer
    });
    return api;
}
exports.createApi = createApi;
function createSigner(signer, pair) {
    return new signer_1.Signer(pair, signer);
}
exports.createSigner = createSigner;
function addPair(signer, pair) {
    return signer.addPair(pair);
}
exports.addPair = addPair;
function createNetwork(networkName, networkConfig) {
    const provider = lazy_1.lazyObject(() => {
        return createProvider(networkConfig);
    });
    const signer = new account_signer_1.Signer();
    const api = lazy_1.lazyObject(() => {
        return createApi(provider, networkConfig, signer);
    });
    const registry = api.registry;
    signer.init(registry, networkConfig.accounts);
    const gasLimit = networkConfig.gasLimit !== undefined
        ? util_1.bnToBn(networkConfig.gasLimit)
        : undefined;
    return {
        name: networkName,
        config: networkConfig,
        provider,
        api,
        registry,
        keyring: signer.keyring,
        signer,
        getSigners: async () => {
            await api.isReady;
            const pairs = signer.getPairs();
            return pairs.map((pair) => {
                return new signer_1.Signer(pair, signer);
            });
        },
        getAddresses: async () => {
            await api.isReady;
            const pairs = signer.getPairs();
            return pairs.map((pair) => {
                return pair.address;
            });
        },
        createSigner: createSigner.bind(null, signer),
        addPair: addPair.bind(null, signer),
        gasLimit,
        utils: {
            encodeSalt: utils_1.encodeSalt
        }
    };
}
exports.createNetwork = createNetwork;
