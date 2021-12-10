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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationErrors = exports.validateConfig = exports.hexString = exports.DotPathReporter = exports.success = exports.failure = void 0;
const t = __importStar(require("io-ts"));
const lib_1 = require("io-ts/lib");
const errors_1 = require("../errors");
const errors_list_1 = require("../errors-list");
function stringify(v) {
    if (typeof v === 'function') {
        return lib_1.getFunctionName(v);
    }
    if (typeof v === 'number' && !isFinite(v)) {
        if (isNaN(v)) {
            return 'NaN';
        }
        return v > 0 ? 'Infinity' : '-Infinity';
    }
    return JSON.stringify(v);
}
function getContextPath(context) {
    const keysPath = context
        .slice(1)
        .map((c) => c.key)
        .join('.');
    return `${context[0].type.name}.${keysPath}`;
}
function getMessage(e) {
    const lastContext = e.context[e.context.length - 1];
    return e.message !== undefined
        ? e.message
        : getErrorMessage(getContextPath(e.context), e.value, lastContext.type.name);
}
function getErrorMessage(path, value, expectedType) {
    return `Invalid value ${stringify(value)} for ${path} - Expected a value of type ${expectedType}.`;
}
function failure(es) {
    return es.map(getMessage);
}
exports.failure = failure;
function success() {
    return [];
}
exports.success = success;
exports.DotPathReporter = {
    report: (validation) => validation.fold(failure, success)
};
function optional(codec, name = `${codec.name} | undefined`) {
    return new t.Type(name, (u) => u === undefined || codec.is(u), (u, c) => (u === undefined ? t.success(u) : codec.validate(u, c)), (a) => (a === undefined ? undefined : codec.encode(a)));
}
const HEX_STRING_REGEX = /^(0x)?([0-9a-f]{2})+$/gi;
function isHexString(v) {
    if (typeof v !== 'string') {
        return false;
    }
    return v.trim().match(HEX_STRING_REGEX) !== null;
}
exports.hexString = new t.Type('hex string', isHexString, (u, c) => (isHexString(u) ? t.success(u) : t.failure(u, c)), t.identity);
const NetworkConfigAccounts = t.array(t.string);
const HttpHeaders = t.record(t.string, t.string, 'httpHeaders');
const RedspotNetworkConfig = t.type({
    accounts: optional(NetworkConfigAccounts),
    gasLimit: optional(t.union([t.string, t.number])),
    from: optional(t.string),
    types: optional(t.record(t.string, t.unknown)),
    endpoint: optional(t.string),
    httpHeaders: optional(HttpHeaders)
});
const NetworkConfig = RedspotNetworkConfig;
const Networks = t.record(t.string, NetworkConfig);
const ProjectPaths = t.type({
    root: optional(t.string),
    cache: optional(t.string),
    artifacts: optional(t.string),
    tests: optional(t.string)
});
const RedspotConfig = t.type({
    defaultNetwork: optional(t.string),
    networks: optional(Networks),
    paths: optional(ProjectPaths)
}, 'RedspotConfig');
/**
 * Validates the config, throwing a RedspotError if invalid.
 * @param config
 */
function validateConfig(config) {
    const errors = getValidationErrors(config);
    if (errors.length === 0) {
        return;
    }
    let errorList = errors.join('\n  * ');
    errorList = `  * ${errorList}`;
    throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.INVALID_CONFIG, { errors: errorList });
}
exports.validateConfig = validateConfig;
function getValidationErrors(config) {
    const errors = [];
    // io-ts can get confused if there are errors that it can't understand.
    // Especially around Redspot Network's config. It will treat it as an HTTPConfig,
    // and may give a loot of errors.
    if (errors.length > 0) {
        return errors;
    }
    const result = RedspotConfig.decode(config);
    if (result.isRight()) {
        return errors;
    }
    const ioTsErrors = exports.DotPathReporter.report(result);
    return [...errors, ...ioTsErrors];
}
exports.getValidationErrors = getValidationErrors;
