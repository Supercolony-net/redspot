"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const context_1 = require("./internal/context");
const config_loading_1 = require("./internal/core/config/config-loading");
const env_variables_1 = require("./internal/core/params/env-variables");
const redspot_params_1 = require("./internal/core/params/redspot-params");
const runtime_environment_1 = require("./internal/core/runtime-environment");
const typescript_support_1 = require("./internal/core/typescript-support");
const console_1 = require("./internal/util/console");
if (!context_1.RedspotContext.isCreated()) {
    // tslint:disable-next-line no-var-requires
    require('source-map-support/register');
    const ctx = context_1.RedspotContext.createRedspotContext();
    if (console_1.isNodeCalledWithoutAScript()) {
        console_1.disableReplWriterShowProxy();
    }
    const redspotArguments = env_variables_1.getEnvRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, process.env);
    if (redspotArguments.verbose) {
        debug_1.default.enable('redspot*');
    }
    if (typescript_support_1.willRunWithTypescript(redspotArguments.config)) {
        typescript_support_1.loadTsNode();
    }
    const config = config_loading_1.loadConfigAndTasks(redspotArguments);
    const env = new runtime_environment_1.Environment(config, redspotArguments, ctx.tasksDSL.getTaskDefinitions(), ctx.extendersManager.getExtenders());
    ctx.setRedspotRuntimeEnvironment(env);
    env.injectToGlobal();
}
