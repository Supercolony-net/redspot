/// <reference types="mocha" />
export declare const REDSPOT_NETWORK_DEFAULT_GAS_PRICE = "400000000000";
export declare const DEFAULT_REDSPOT_NETWORK_BALANCE = "10000000000000000000000";
export declare const defaultDefaultNetwork = "development";
export declare const defaultEuropaNetworkParams: {
    gasLimit: string;
    accounts: string[];
    endpoint: string[];
    types: {};
    httpHeaders: {};
};
export declare const defaultLocalhostNetworkParams: {
    gasLimit: string;
    accounts: string[];
    endpoint: string[];
    types: {};
    httpHeaders: {};
};
export declare const defaultMochaOptions: Mocha.MochaOptions;
export declare const defaultDockerOptions: {
    sudo: boolean;
};
export declare const defaultInkConfig: {
    version: string;
    toolchain: string;
    docker: boolean;
    sources: string[];
};
export declare const defaultSolangConfig: {
    sources: string[];
};
