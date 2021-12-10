"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const debug_1 = __importDefault(require("debug"));
const context_1 = require("../context");
const config_loading_1 = require("../core/config/config-loading");
const errors_1 = require("../core/errors");
const errors_list_1 = require("../core/errors-list");
const env_variables_1 = require("../core/params/env-variables");
const redspot_params_1 = require("../core/params/redspot-params");
const runtime_environment_1 = require("../core/runtime-environment");
let ctx;
let env;
if (context_1.RedspotContext.isCreated()) {
    ctx = context_1.RedspotContext.getRedspotContext();
    // The most probable reason for this to happen is that this file was imported
    // from the config file
    if (ctx.environment === undefined) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.LIB_IMPORTED_FROM_THE_CONFIG);
    }
    env = ctx.environment;
}
else {
    ctx = context_1.RedspotContext.createRedspotContext();
    const redspotArguments = env_variables_1.getEnvRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, process.env);
    if (redspotArguments.verbose) {
        debug_1.default.enable('redspot*');
    }
    const config = config_loading_1.loadConfigAndTasks(redspotArguments);
    env = new runtime_environment_1.Environment(config, redspotArguments, ctx.tasksDSL.getTaskDefinitions(), ctx.extendersManager.getExtenders());
    ctx.setRedspotRuntimeEnvironment(env);
}
module.exports = env;
