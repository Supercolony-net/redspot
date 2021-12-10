"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_env_1 = require("../internal/core/config/config-env");
const task_names_1 = require("./task-names");
config_env_1.task(task_names_1.TASK_METADATA, 'Output the redspot config').setAction(async (_, { config }) => {
    console.log(JSON.stringify(config));
});
