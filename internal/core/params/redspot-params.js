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
exports.REDSPOT_PARAM_DEFINITIONS = void 0;
const types = __importStar(require("./argumentTypes"));
exports.REDSPOT_PARAM_DEFINITIONS = {
    network: {
        name: 'network',
        defaultValue: undefined,
        description: 'The network to connect to.',
        type: types.string,
        isOptional: true,
        isFlag: false,
        isVariadic: false
    },
    showStackTraces: {
        name: 'showStackTraces',
        defaultValue: false,
        description: 'Show stack traces.',
        type: types.boolean,
        isFlag: true,
        isOptional: true,
        isVariadic: false
    },
    version: {
        name: 'version',
        defaultValue: false,
        description: "Shows redspot's version.",
        type: types.boolean,
        isFlag: true,
        isOptional: true,
        isVariadic: false
    },
    help: {
        name: 'help',
        defaultValue: false,
        description: "Shows this message, or a task's help if its name is provided",
        type: types.boolean,
        isFlag: true,
        isOptional: true,
        isVariadic: false
    },
    config: {
        name: 'config',
        defaultValue: undefined,
        description: 'A Redspot config file.',
        type: types.inputFile,
        isFlag: false,
        isOptional: true,
        isVariadic: false
    },
    verbose: {
        name: 'verbose',
        defaultValue: false,
        description: 'Enables Redspot verbose logging',
        type: types.boolean,
        isFlag: true,
        isOptional: true,
        isVariadic: false
    },
    release: {
        name: 'release',
        defaultValue: false,
        description: 'Enables optimised wasm binary',
        type: types.boolean,
        isFlag: true,
        isOptional: true,
        isVariadic: false
    },
    logLevel: {
        name: 'logLevel',
        defaultValue: '2',
        description: 'Set log levels 1-5',
        type: types.string,
        isFlag: false,
        isOptional: true,
        isVariadic: false
    },
    maxMemory: {
        name: 'maxMemory',
        defaultValue: undefined,
        description: 'The maximum amount of memory that Redspot can use.',
        type: types.int,
        isOptional: true,
        isFlag: false,
        isVariadic: false
    },
    tsconfig: {
        name: 'tsconfig',
        defaultValue: undefined,
        description: 'Reserved redspot argument -- Has no effect.',
        type: types.string,
        isOptional: true,
        isFlag: false,
        isVariadic: false
    }
};
