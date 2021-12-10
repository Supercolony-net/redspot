"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileDocker = exports.WORK_DIR = exports.DOCKER_IMAGE_NAME = void 0;
const execa_1 = __importDefault(require("execa"));
exports.DOCKER_IMAGE_NAME = 'redspot/contract';
exports.WORK_DIR = '/usr/src/contract';
const compileDocker = (config, patterns = []) => {
    const root = config.paths.root;
    const { stdout: id } = execa_1.default.commandSync('id -u');
    const { stdout: group } = execa_1.default.commandSync('id -g');
    const command = [
        config.docker.sudo ? 'sudo' : '',
        'docker run --rm',
        `-v ${root}:/${exports.WORK_DIR}`,
        `-w ${exports.WORK_DIR}`,
        `-v ${config.paths.cache}/ink/:/cache/`,
        `-e CARGO_HOME=/cache/cargo/`,
        `-e SCCACHE_DIR=/cache/sccache/`,
        exports.DOCKER_IMAGE_NAME,
        `/bin/bash -c`,
        `"npx redspot compile ${patterns.join(' ')} --docker false && chown -R ${id}:${group} ${exports.WORK_DIR}"`
    ].join(' ');
    console.log(`$ ${command}`);
    console.log('');
    execa_1.default.commandSync(command, {
        stdio: 'inherit',
        shell: true
    });
};
exports.compileDocker = compileDocker;
