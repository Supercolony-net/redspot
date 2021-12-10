"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const execa_1 = __importDefault(require("execa"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const errors_1 = require("../../internal/core/errors");
const errors_list_1 = require("../../internal/core/errors-list");
async function compile(input, verbose, release) {
    const output = [];
    for (const source of input.sources) {
        let args = [
            `+${input.toolchain}`,
            `contract`,
            'build',
            '--manifest-path',
            source.manifestPath
        ];
        if (release) {
            args = args.concat('--release');
        }
        if (verbose) {
            args = args.concat('--', 'verbose');
        }
        console.log('');
        console.log(chalk_1.default.magenta(`===== Compile ${source.name} =====`));
        console.log('');
        await execa_1.default('cargo', args, {
            stdio: 'inherit'
        });
        let result;
        if (fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, `${source.name}.wasm`)) &&
            fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, `${source.name}.contract`))) {
            result = {
                name: source.name,
                wasm: path_1.default.resolve(source.targetDirectory, `${source.name}.wasm`),
                contract: path_1.default.resolve(source.targetDirectory, `${source.name}.contract`)
            };
        }
        else if (fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, 'ink', `${source.name}.wasm`)) &&
            fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, 'ink', `${source.name}.contract`))) {
            result = {
                name: source.name,
                wasm: path_1.default.resolve(source.targetDirectory, 'ink', `${source.name}.wasm`),
                contract: path_1.default.resolve(source.targetDirectory, 'ink', `${source.name}.contract`)
            };
        }
        else if (fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, 'ink', source.name, `${source.name}.wasm`)) &&
            fs_extra_1.default.existsSync(path_1.default.resolve(source.targetDirectory, 'ink', source.name, `${source.name}.contract`))) {
            result = {
                name: source.name,
                wasm: path_1.default.resolve(source.targetDirectory, 'ink', source.name, `${source.name}.wasm`),
                contract: path_1.default.resolve(source.targetDirectory, 'ink', source.name, `${source.name}.contract`)
            };
        }
        if (!result) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.BUILTIN_TASKS.INK_NOT_FOUND_ARTIFACT);
        }
        output.push(result);
    }
    return output;
}
exports.compile = compile;
