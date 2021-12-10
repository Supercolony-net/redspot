"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveProjectPaths = exports.resolveConfig = void 0;
const fs = __importStar(require("fs"));
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const path_1 = __importDefault(require("path"));
const lang_1 = require("../../util/lang");
const default_config_1 = require("./default-config");
/**
 * This functions resolves the redspot config, setting its defaults and
 * normalizing its types if necessary.
 *
 * @param userConfigPath the user config filepath
 * @param userConfig     the user config object
 *
 * @returns the resolved config
 */
function resolveConfig(userConfigPath, userConfig) {
    var _a;
    userConfig = cloneDeep_1.default(userConfig);
    return {
        ...userConfig,
        defaultNetwork: (_a = userConfig.defaultNetwork) !== null && _a !== void 0 ? _a : default_config_1.defaultDefaultNetwork,
        paths: resolveProjectPaths(userConfigPath, userConfig.paths),
        networks: resolveNetworksConfig(userConfig.networks),
        mocha: resolveMochaConfig(userConfig),
        contract: resolveContractConfig(userConfig),
        docker: resolveDockerOptions(userConfig)
    };
}
exports.resolveConfig = resolveConfig;
function resolveNetworksConfig(networksConfig = {}) {
    const otherNetworks = lang_1.fromEntries(Object.entries(networksConfig)
        .filter(([_, config]) => config !== undefined)
        .map(([name, config]) => [
        name,
        {
            ...cloneDeep_1.default(default_config_1.defaultLocalhostNetworkParams),
            ...config
        }
    ]));
    return {
        ...otherNetworks
    };
}
function resolveMochaConfig(userConfig) {
    return {
        ...cloneDeep_1.default(default_config_1.defaultMochaOptions),
        ...userConfig.mocha
    };
}
function resolveDockerOptions(userConfig) {
    return {
        ...cloneDeep_1.default(default_config_1.defaultDockerOptions),
        ...userConfig.docker
    };
}
function resolveContractConfig(userConfig) {
    var _a;
    const _defaultInkConfig = cloneDeep_1.default(default_config_1.defaultInkConfig);
    const _defaultSolangConfig = cloneDeep_1.default(default_config_1.defaultSolangConfig);
    const result = {
        ...userConfig.contract,
        ink: {
            ..._defaultInkConfig,
            ...(_a = userConfig.contract) === null || _a === void 0 ? void 0 : _a.ink
        }
    };
    if (userConfig.contract.solang) {
        result.solang = {
            ..._defaultSolangConfig,
            ...userConfig.contract.solang
        };
    }
    return result;
}
/**
 * This function resolves the ProjectPathsConfig object from the user-provided config
 * and its path. The logic of this is not obvious and should well be document.
 * The good thing is that most users will never use this.
 *
 * Explanation:
 *    - paths.configFile is not overridable
 *    - If a path is absolute it is used "as is".
 *    - If the root path is relative, it's resolved from paths.configFile's dir.
 *    - If any other path is relative, it's resolved from paths.root.
 *    - Plugin-defined paths are not resolved, but encouraged to follow the same pattern.
 */
function resolveProjectPaths(userConfigPath, userPaths = {}) {
    const configFile = fs.realpathSync(userConfigPath);
    const configDir = path_1.default.dirname(configFile);
    const root = resolvePathFrom(configDir, '', userPaths.root);
    return {
        ...userPaths,
        root,
        configFile,
        cache: resolvePathFrom(root, '.cache', userPaths.cache),
        artifacts: resolvePathFrom(root, 'artifacts', userPaths.artifacts),
        tests: resolvePathFrom(root, 'tests', userPaths.tests)
    };
}
exports.resolveProjectPaths = resolveProjectPaths;
function resolvePathFrom(from, defaultPath, relativeOrAbsolutePath = defaultPath) {
    if (path_1.default.isAbsolute(relativeOrAbsolutePath)) {
        return relativeOrAbsolutePath;
    }
    return path_1.default.join(from, relativeOrAbsolutePath);
}
