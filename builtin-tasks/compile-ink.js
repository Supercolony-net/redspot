"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const checkEnv_1 = require("../compiler/ink/checkEnv");
const compile_1 = require("../compiler/ink/compile");
const compileDocker_1 = require("../compiler/ink/compileDocker");
const compilerInput_1 = require("../compiler/ink/compilerInput");
const config_env_1 = require("../internal/core/config/config-env");
const errors_1 = require("../internal/core/errors");
const errors_list_1 = require("../internal/core/errors-list");
const argumentTypes_1 = require("../internal/core/params/argumentTypes");
const task_names_1 = require("./task-names");
config_env_1.subtask(task_names_1.TASK_COMPILE_INK_PRE, async (_, { config }) => {
    const isValidEnv = await checkEnv_1.checkEnv({ version: '0.15.0' });
    if (!isValidEnv) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.INK_ENV_ERROR, {
            version: 'v0.15.0'
        });
    }
    console.log(`compiler version: ${isValidEnv}`);
    console.log(`toolchain: ${config.contract.ink.toolchain}`);
});
config_env_1.subtask(task_names_1.TASK_COMPILE_INK_INPUT)
    .addOptionalVariadicPositionalParam('sourcePattern', 'A glob string that is matched against', [])
    .setAction(async ({ sourcePattern }, { config }) => {
    const input = await compilerInput_1.getCompilerInput(config.contract.ink, sourcePattern);
    return input;
});
config_env_1.subtask(task_names_1.TASK_COMPILE_INK_EXEC, async ({ input }, { redspotArguments }) => {
    if (!input.sources.length)
        return;
    const output = await compile_1.compile(input, redspotArguments.verbose, redspotArguments.release);
    return output;
});
config_env_1.subtask(task_names_1.TASK_COMPILE_INK_OUTPUT, async ({ input, output }, { config, artifacts }) => {
    if (!input.sources.length)
        return;
    fs_extra_1.default.ensureDirSync(config.paths.artifacts);
    const names = [];
    const paths = [];
    for (const target of output) {
        if (names.includes(target.name)) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.INK_DUPLICATE_NAME, {
                path1: paths[names.indexOf(target.name)],
                path2: target.contract
            });
        }
        const abiJSON = fs_extra_1.default.readJSONSync(target.contract);
        fs_extra_1.default.writeJSONSync(path_1.default.resolve(config.paths.artifacts, `${target.name}.contract`), abiJSON, { spaces: 2 });
        delete abiJSON.source.wasm;
        fs_extra_1.default.writeJSONSync(path_1.default.resolve(config.paths.artifacts, `${target.name}.json`), abiJSON, { spaces: 2 });
        names.push(target.name);
        paths.push(target.contract);
    }
    console.log('');
    console.log(`🎉  Compile successfully! You can find all artifacts at ${chalk_1.default.cyan(path_1.default.relative(config.paths.root, config.paths.artifacts))}`);
});
config_env_1.subtask(task_names_1.TASK_COMPILE_INK)
    .addOptionalParam('docker', 'Compiling with docker', undefined, argumentTypes_1.boolean)
    .addOptionalVariadicPositionalParam('sourcePattern', 'A glob string that is matched against', [])
    .setAction(async ({ docker, sourcePattern }, { config, run }) => {
    const useDocker = docker !== undefined ? docker : config.contract.ink.docker;
    if (useDocker) {
        console.log(`use docker image: ${compileDocker_1.DOCKER_IMAGE_NAME}`);
        compileDocker_1.compileDocker(config, sourcePattern);
    }
    else {
        await run(task_names_1.TASK_COMPILE_INK_PRE);
        const input = await run(task_names_1.TASK_COMPILE_INK_INPUT, { sourcePattern });
        const output = await run(task_names_1.TASK_COMPILE_INK_EXEC, { input });
        await run(task_names_1.TASK_COMPILE_INK_OUTPUT, { input, output });
    }
});
