"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const env_variables_1 = require("../core/params/env-variables");
const redspot_params_1 = require("../core/params/redspot-params");
const ArgumentsParser_1 = require("./ArgumentsParser");
const nodeArgs = [...process.execArgv];
if (process.env.DISABLE_REDSPOT_NETWORK_OPTIMIZATIONS === undefined) {
    nodeArgs.push('--max-semi-space-size=100');
}
const envVariableArguments = env_variables_1.getEnvRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, process.env);
const argumentsParser = new ArgumentsParser_1.ArgumentsParser();
const { redspotArguments } = argumentsParser.parseRedspotArguments(redspot_params_1.REDSPOT_PARAM_DEFINITIONS, envVariableArguments, process.argv.slice(2));
if (redspotArguments.maxMemory !== undefined) {
    nodeArgs.push(`--max-old-space-size=${redspotArguments.maxMemory}`);
}
const childProcess = child_process_1.fork(`${__dirname}/cli`, process.argv.slice(2), {
    stdio: 'inherit',
    execArgv: nodeArgs
});
childProcess.once('close', (status) => {
    process.exit(status);
});
