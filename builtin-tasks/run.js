"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_env_1 = require("../internal/core/config/config-env");
const errors_1 = require("../internal/core/errors");
const errors_list_1 = require("../internal/core/errors-list");
const scripts_runner_1 = require("../internal/util/scripts-runner");
const task_names_1 = require("./task-names");
const log = debug_1.default('redspot:core:tasks:run');
config_env_1.task(task_names_1.TASK_RUN, 'Runs a user-defined script after compiling the project')
    .addPositionalParam('script', "A js file to be run within redspot's environment")
    .addFlag('noCompile', "Don't compile before running this task")
    .setAction(async ({ noCompile, script }, { redspotArguments, run }) => {
    if (!(await fs_extra_1.default.pathExists(script))) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.RUN_FILE_NOT_FOUND, {
            script
        });
    }
    if (!noCompile) {
        await run(task_names_1.TASK_COMPILE, { quiet: true });
    }
    log(`Running script ${script} in a subprocess so we can wait for it to complete`);
    try {
        process.exitCode = await scripts_runner_1.runScriptWithRedspot(redspotArguments, script);
    }
    catch (error) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.RUN_SCRIPT_ERROR, {
            script,
            error: error.message
        }, error);
    }
});
