"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSolangConfig = exports.defaultInkConfig = exports.defaultDockerOptions = exports.defaultMochaOptions = exports.defaultLocalhostNetworkParams = exports.defaultEuropaNetworkParams = exports.defaultDefaultNetwork = exports.DEFAULT_REDSPOT_NETWORK_BALANCE = exports.REDSPOT_NETWORK_DEFAULT_GAS_PRICE = void 0;
exports.REDSPOT_NETWORK_DEFAULT_GAS_PRICE = '400000000000';
exports.DEFAULT_REDSPOT_NETWORK_BALANCE = '10000000000000000000000';
exports.defaultDefaultNetwork = 'development';
exports.defaultEuropaNetworkParams = {
    gasLimit: exports.REDSPOT_NETWORK_DEFAULT_GAS_PRICE,
    accounts: ['//Alice', '//Bob', '//Charlie', '//Dave', '//Eve', '//Ferdie'],
    endpoint: ['ws://127.0.0.1:9944'],
    types: {},
    httpHeaders: {}
};
exports.defaultLocalhostNetworkParams = {
    gasLimit: exports.REDSPOT_NETWORK_DEFAULT_GAS_PRICE,
    accounts: ['//Alice', '//Bob', '//Charlie', '//Dave', '//Eve', '//Ferdie'],
    endpoint: ['ws://127.0.0.1:9944'],
    types: {},
    httpHeaders: {}
};
exports.defaultMochaOptions = {
    timeout: 20000
};
exports.defaultDockerOptions = {
    sudo: false
};
exports.defaultInkConfig = {
    version: 'v0.8.0',
    toolchain: 'nightly',
    docker: false,
    sources: ['**/*']
};
exports.defaultSolangConfig = {
    sources: ['**/*.sol']
};
