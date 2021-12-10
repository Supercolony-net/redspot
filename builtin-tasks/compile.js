"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_env_1 = require("../internal/core/config/config-env");
const argumentTypes_1 = require("../internal/core/params/argumentTypes");
const task_names_1 = require("./task-names");
config_env_1.task(task_names_1.TASK_COMPILE, 'Compiles the entire project, building all artifacts')
    .addOptionalParam('docker', 'Compiling with docker', undefined, argumentTypes_1.boolean)
    .addOptionalVariadicPositionalParam('sourcePattern', 'A glob string that is matched against', [])
    .setAction(async ({ docker, sourcePattern }, { config, run }) => {
    await run(task_names_1.TASK_COMPILE_INK, { docker, sourcePattern });
    if (config.contract.solang) {
        await run(task_names_1.TASK_COMPILE_SOLANG, { sourcePattern });
    }
});
