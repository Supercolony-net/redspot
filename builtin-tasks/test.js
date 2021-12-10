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
const path_1 = __importDefault(require("path"));
const config_env_1 = require("../internal/core/config/config-env");
const typescript_support_1 = require("../internal/core/typescript-support");
const glob_1 = require("../internal/util/glob");
const task_names_1 = require("./task-names");
config_env_1.subtask(task_names_1.TASK_TEST_GET_TEST_FILES)
    .addOptionalVariadicPositionalParam('testFiles', 'An optional list of files to test', [])
    .setAction(async ({ testFiles }, { config }) => {
    if (testFiles.length !== 0) {
        return testFiles;
    }
    const jsFiles = await glob_1.glob(path_1.default.join(config.paths.tests, '**/*.js'));
    if (!typescript_support_1.isRunningWithTypescript(config)) {
        return jsFiles;
    }
    const tsFiles = await glob_1.glob(path_1.default.join(config.paths.tests, '**/*.ts'));
    return [...jsFiles, ...tsFiles];
});
config_env_1.subtask(task_names_1.TASK_TEST_SETUP_TEST_ENVIRONMENT, async () => { });
config_env_1.subtask(task_names_1.TASK_TEST_RUN_MOCHA_TESTS)
    .addOptionalVariadicPositionalParam('testFiles', 'An optional list of files to test', [])
    .setAction(async ({ testFiles }, { config }) => {
    const { default: Mocha } = await Promise.resolve().then(() => __importStar(require('mocha')));
    const mocha = new Mocha(config.mocha);
    testFiles.forEach((file) => mocha.addFile(file));
    const testFailures = await new Promise((resolve, _) => {
        mocha.run(resolve);
    });
    return testFailures;
});
config_env_1.task(task_names_1.TASK_TEST, 'Runs mocha tests')
    .addOptionalVariadicPositionalParam('testFiles', 'An optional list of files to test', [])
    .addParam('sourcePattern', 'A glob string that is matched against', undefined, undefined, true)
    .addFlag('noCompile', "Don't compile before running this task")
    .setAction(async ({ noCompile, testFiles, sourcePattern }, { network, run }) => {
    if (!noCompile) {
        await run(task_names_1.TASK_COMPILE, {
            quiet: true,
            sourcePattern: sourcePattern ? [].concat(sourcePattern) : []
        });
    }
    const files = await run(task_names_1.TASK_TEST_GET_TEST_FILES, { testFiles });
    await run(task_names_1.TASK_TEST_SETUP_TEST_ENVIRONMENT);
    const testFailures = await run(task_names_1.TASK_TEST_RUN_MOCHA_TESTS, {
        testFiles: files
    });
    process.exitCode = testFailures;
    return testFailures;
});
