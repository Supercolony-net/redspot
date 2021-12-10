"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestnet = void 0;
const execa_1 = __importDefault(require("execa"));
const config_env_1 = require("../internal/core/config/config-env");
const argumentTypes_1 = require("../internal/core/params/argumentTypes");
const task_names_1 = require("./task-names");
const defaultCommand = 'docker run -p 9944:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"';
const runTestnet = (command) => {
    console.log(`$ ${command}`);
    console.log('run testnet');
    return execa_1.default.commandSync(command, {
        stdio: 'inherit',
        shell: true
    });
};
exports.runTestnet = runTestnet;
config_env_1.task(task_names_1.TASK_TESTNET, 'Running the test network')
    .addOptionalParam('command', 'Command to run the test net', undefined, argumentTypes_1.string)
    .setAction(async ({ command }, { config }) => {
    const runCommand = command || config.docker.runTestnet || !config.docker.sudo
        ? defaultCommand
        : `sudo ${defaultCommand}`;
    return exports.runTestnet(runCommand);
});
