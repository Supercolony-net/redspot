"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const checkEnv_1 = require("../compiler/ink/checkEnv");
const compile_1 = require("../compiler/solang/compile");
const compilerInput_1 = require("../compiler/solang/compilerInput");
const config_env_1 = require("../internal/core/config/config-env");
const errors_1 = require("../internal/core/errors");
const errors_list_1 = require("../internal/core/errors-list");
const task_names_1 = require("./task-names");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
config_env_1.subtask(task_names_1.TASK_COMPILE_SOLANG_PRE, async (_, { config }) => {
    const isValidEnv = await checkEnv_1.checkEnv({ version: '0.9.1' });
    if (!isValidEnv) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.SOLANG_ENV_ERROR);
    }
});
config_env_1.subtask(task_names_1.TASK_COMPILE_SOLANG_INPUT)
    .addOptionalVariadicPositionalParam('sourcePattern', 'A glob string that is matched against', [])
    .setAction(async ({ sourcePattern }, { config }) => {
    const input = await compilerInput_1.getCompilerInput(config.contract.solang, sourcePattern);
    return input;
});
config_env_1.subtask(task_names_1.TASK_COMPILE_SOLANG_EXEC, async ({ input }, { config, redspotArguments }) => {
    if (!input.sources.length)
        return;
    const output = await compile_1.compile(input, config.paths.artifacts);
    return output;
});
config_env_1.subtask(task_names_1.TASK_COMPILE_SOLANG_OUTPUT, async ({ input, output }, { config, artifacts }) => {
    if (!input.sources.length)
        return;
    for (const filepath of output.outputFiles) {
        const abiJSON = fs_extra_1.default.readJSONSync(filepath);
        const filename = filepath.split('.').slice(0, -1).join('.');
        fs_extra_1.default.writeJSONSync(path_1.default.resolve(config.paths.artifacts, `${filename}.contract`), abiJSON, { spaces: 2 });
        delete abiJSON.source.wasm;
        fs_extra_1.default.writeJSONSync(path_1.default.resolve(config.paths.artifacts, `${filename}.json`), abiJSON, { spaces: 2 });
    }
    console.log('');
    console.log(`🎉  Compile successfully! You can find all artifacts at ${chalk_1.default.cyan(output.outputDirectory)}`);
});
config_env_1.subtask(task_names_1.TASK_COMPILE_SOLANG)
    .addOptionalVariadicPositionalParam('sourcePattern', 'A glob string that is matched against', [])
    .setAction(async ({ sourcePattern }, { run }) => {
    await run(task_names_1.TASK_COMPILE_SOLANG_PRE);
    const input = await run(task_names_1.TASK_COMPILE_SOLANG_INPUT, {
        sourcePattern
    });
    const output = await run(task_names_1.TASK_COMPILE_SOLANG_EXEC, { input });
    await run(task_names_1.TASK_COMPILE_SOLANG_OUTPUT, { input, output });
});
