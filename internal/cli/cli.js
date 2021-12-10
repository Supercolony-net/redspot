#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const debug_1 = __importDefault(require("debug"));
const semver_1 = __importDefault(require("semver"));
require("source-map-support/register");
const task_names_1 = require("../../builtin-tasks/task-names");
const context_1 = require("../context");
const config_loading_1 = require("../core/config/config-loading");
const errors_1 = require("../core/errors");
const errors_list_1 = require("../core/errors-list");
const execution_mode_1 = require("../core/execution-mode");
const env_variables_1 = require("../core/params/env-variables");
const redspot_params_1 = require("../core/params/redspot-params");
const project_structure_1 = require("../core/project-structure");
const runtime_environment_1 = require("../core/runtime-environment");
const typescript_support_1 = require("../core/typescript-support");
const global_dir_1 = require("../util/global-dir");
const packageInfo_1 = require("../util/packageInfo");
const analytics_1 = require("./analytics");
const ArgumentsParser_1 = require("./ArgumentsParser");
const logger_1 = __importDefault(require("../../logger"));
const log = debug_1.default('redspot:core:cli');
const ANALYTICS_SLOW_TASK_THRESHOLD = 300;
async function printVersionMessage(packageJson) {
    console.log(packageJson.version);
}
function ensureValidNodeVersion(packageJson) {
    const requirement = packageJson.engines.node;
    if (!semver_1.default.satisfies(process.version, requirement)) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.INVALID_NODE_VERSION, {
            requirement
        });
    }
}
async function main() {
    // We first accept this argument anywhere, so we know if the user wants
    // stack traces before really parsing the arguments.
    let showStackTraces = process.argv.includes('--show-stack-traces');
    try {
        const packageJson = await packageInfo_1.getPackageJson();
        ensureValidNodeVersion(packageJson);
        const envVariableArguments = env_variables_1.getEnvRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, process.env);
        const argumentsParser = new ArgumentsParser_1.ArgumentsParser();
        const { redspotArguments, taskName: parsedTaskName, unparsedCLAs } = argumentsParser.parseRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, envVariableArguments, process.argv.slice(2));
        if (redspotArguments.verbose) {
            debug_1.default.enable('redspot*');
        }
        showStackTraces = redspotArguments.showStackTraces;
        if (redspotArguments.config === undefined &&
            !project_structure_1.isCwdInsideProject() &&
            process.stdout.isTTY === true) {
            // await createProject();
            console.log(chalk_1.default.red(`You are not inside a Redspot project.`));
            console.log('');
            console.log(`Run the following command to create a new Redspot project: `);
            console.log(chalk_1.default.cyan(`  $ npx redspot-new <project-name>`));
            console.log('');
            return;
        }
        // --version is a special case
        if (redspotArguments.version) {
            await printVersionMessage(packageJson);
            return;
        }
        if (!execution_mode_1.isRedspotInstalledLocallyOrLinked()) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.NON_LOCAL_INSTALLATION);
        }
        if (typescript_support_1.willRunWithTypescript(redspotArguments.config)) {
            typescript_support_1.loadTsNode();
        }
        let taskName = parsedTaskName !== null && parsedTaskName !== void 0 ? parsedTaskName : task_names_1.TASK_HELP;
        const ctx = context_1.RedspotContext.createRedspotContext();
        const config = config_loading_1.loadConfigAndTasks(redspotArguments);
        const telemetryConsent = global_dir_1.hasConsentedTelemetry();
        const analytics = await analytics_1.Analytics.getInstance(telemetryConsent);
        const envExtenders = ctx.extendersManager.getExtenders();
        const taskDefinitions = ctx.tasksDSL.getTaskDefinitions();
        // tslint:disable-next-line: prefer-const
        const [abortAnalytics, hitPromise] = await analytics.sendTaskHit(taskName);
        let taskArguments;
        // --help is a also special case
        if (redspotArguments.help && taskName !== task_names_1.TASK_HELP) {
            taskArguments = { task: taskName };
            taskName = task_names_1.TASK_HELP;
        }
        else {
            const taskDefinition = taskDefinitions[taskName];
            if (taskDefinition === undefined) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARGUMENTS.UNRECOGNIZED_TASK, {
                    task: taskName
                });
            }
            if (taskDefinition.isSubtask) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARGUMENTS.RUNNING_SUBTASK_FROM_CLI, {
                    name: taskDefinition.name
                });
            }
            taskArguments = argumentsParser.parseTaskArguments(taskDefinition, unparsedCLAs);
        }
        const env = new runtime_environment_1.Environment(config, redspotArguments, taskDefinitions, envExtenders);
        ctx.setRedspotRuntimeEnvironment(env);
        const timestampBeforeRun = new Date().getTime();
        await env.run(taskName, taskArguments);
        const timestampAfterRun = new Date().getTime();
        if (timestampAfterRun - timestampBeforeRun >
            ANALYTICS_SLOW_TASK_THRESHOLD) {
            await hitPromise;
        }
        else {
            abortAnalytics();
        }
        log(`Killing Redspot after successfully running task ${taskName}`);
    }
    catch (error) {
        let isRedspotError = false;
        if (errors_1.RedspotError.isRedspotError(error)) {
            isRedspotError = true;
            console.error(chalk_1.default.red(`Error ${error.message}`));
        }
        else if (errors_1.RedspotPluginError.isRedspotPluginError(error)) {
            isRedspotError = true;
            console.error(chalk_1.default.red(`Error in plugin ${error.pluginName}: ${error.message}`));
        }
        else if (error instanceof Error) {
            console.error(chalk_1.default.red('An unexpected error occurred:'));
            showStackTraces = true;
        }
        else {
            console.error(chalk_1.default.red('An unexpected error occurred.'));
            showStackTraces = true;
        }
        console.log('');
        if (showStackTraces) {
            console.error(error);
        }
        else {
            if (!isRedspotError) {
                console.error(`If you think this is a bug in Redspot, please report it here: https://github.com/patractlabs/redspot/issues/new`);
            }
            if (errors_1.RedspotError.isRedspotError(error)) {
                logger_1.default.log(error.errorDescriptor.description + '\n');
                // const link = `https://redspot.org/${getErrorCode(
                //   error.errorDescriptor
                // )}`;
                // console.error(
                //   `For more info go to ${link} or run ${REDSPOT_NAME} with --show-stack-traces`
                // );
            }
            else {
                // console.error(
                //   `For more info run ${REDSPOT_NAME} with --show-stack-traces`
                // );
            }
        }
        process.exit(1);
    }
}
main()
    .then(() => process.exit(process.exitCode))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
