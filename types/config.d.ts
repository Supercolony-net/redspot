/// <reference types="mocha" />
import type { ApiOptions } from '@polkadot/api/types';
import type BN from 'bn.js';
export declare type RedspotNetworkAccountsUserConfig = string[];
export interface RedspotNetworkUserConfig {
    endpoint?: string;
    httpHeaders?: Record<string, string>;
    accounts?: RedspotNetworkAccountsUserConfig;
    gasLimit?: string | number | BN;
    types?: ApiOptions['types'];
    typesAlias?: ApiOptions['typesAlias'];
    typesBundle?: ApiOptions['typesBundle'];
    typesChain?: ApiOptions['typesChain'];
    typesSpec?: ApiOptions['typesSpec'];
    rpc?: ApiOptions['rpc'];
    from?: string;
}
export interface NetworksUserConfig {
    [networkName: string]: NetworkUserConfig | undefined;
}
export declare type NetworkUserConfig = RedspotNetworkUserConfig;
export declare type RedspotNetworkConfig = RedspotNetworkUserConfig;
export declare type NetworkConfig = RedspotNetworkConfig;
export interface NetworksConfig {
    [networkName: string]: RedspotNetworkConfig;
}
export declare type RedspotNetworkAccountsConfig = RedspotNetworkHDAccountsConfig | RedspotNetworkAccountConfig[];
export interface RedspotNetworkAccountConfig {
    privateKey: string;
    balance: string;
}
export interface RedspotNetworkHDAccountsConfig {
    mnemonic: string;
    initialIndex: number;
    count: number;
    path: string;
    accountsBalance: string;
}
export interface RedspotNetworkForkingConfig {
    enabled: boolean;
    url: string;
    blockNumber?: number;
}
export interface HttpNetworkConfig {
    chainId?: number;
    from?: string;
    gas: 'auto' | number;
    gasPrice: 'auto' | number;
    gasMultiplier: number;
    url: string;
    timeout: number;
    httpHeaders: {
        [name: string]: string;
    };
    accounts: HttpNetworkAccountsConfig;
}
export declare type HttpNetworkAccountsConfig = 'remote' | string[] | HttpNetworkHDAccountsConfig;
export interface HttpNetworkHDAccountsConfig {
    mnemonic: string;
    initialIndex: number;
    count: number;
    path: string;
}
export interface ProjectPathsUserConfig {
    root?: string;
    cache?: string;
    artifacts?: string;
    tests?: string;
}
export interface ProjectPathsConfig {
    root: string;
    configFile: string;
    cache: string;
    artifacts: string;
    tests: string;
}
export declare type SolidityUserConfig = string | SolcUserConfig | MultiSolcUserConfig;
export interface SolcUserConfig {
    version: string;
    settings?: any;
}
export interface MultiSolcUserConfig {
    compilers: SolcUserConfig[];
    overrides?: Record<string, SolcUserConfig>;
}
export interface SolcConfig {
    version: string;
    settings: any;
}
export interface SolidityConfig {
    compilers: SolcConfig[];
    overrides: Record<string, SolcConfig>;
}
export declare type ContractType = 'ink' | 'solang';
export interface InkConfig {
    version?: string;
    toolchain: string;
    docker?: boolean;
    sources: string[];
}
export interface SolangConfig {
    version?: string;
    sources: string[];
}
export interface ContractConfig {
    ink: InkConfig;
    solang?: SolangConfig;
}
export interface ContractUserConfig {
    ink?: InkConfig;
    solang?: SolangConfig;
}
export interface DockerConfig {
    sudo: boolean;
    runTestnet?: string;
}
export declare type CompilerConfig = InkConfig | SolangConfig;
export interface RedspotUserConfig {
    defaultNetwork?: string;
    paths?: ProjectPathsUserConfig;
    networks?: NetworksUserConfig;
    mocha?: Mocha.MochaOptions;
    docker?: DockerConfig;
    contract?: ContractUserConfig;
}
export interface RedspotConfig {
    defaultNetwork: string;
    paths: ProjectPathsConfig;
    networks: NetworksConfig;
    mocha: Mocha.MochaOptions;
    docker: DockerConfig;
    contract: ContractConfig;
}
export declare type ConfigExtender = (config: RedspotConfig, userConfig: Readonly<RedspotUserConfig>) => void;
export declare type HttpNetworkAccountsUserConfig = 'remote' | string[] | HDAccountsUserConfig;
export interface HttpNetworkUserConfig {
    chainId?: number;
    from?: string;
    gas?: 'auto' | number;
    gasPrice?: 'auto' | number;
    gasMultiplier?: number;
    url?: string;
    timeout?: number;
    httpHeaders?: {
        [name: string]: string;
    };
    accounts?: HttpNetworkAccountsUserConfig;
}
export interface HDAccountsUserConfig {
    mnemonic: string;
    initialIndex?: number;
    count?: number;
    path?: string;
}
export interface RedspotNetworkForkingUserConfig {
    enabled?: boolean;
    url: string;
    blockNumber?: number;
}
export interface RedspotNetworkHDAccountsUserConfig {
    mnemonic?: string;
    initialIndex?: number;
    count?: number;
    path?: string;
    accountsBalance?: string;
}
