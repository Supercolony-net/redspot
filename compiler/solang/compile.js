"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const execa_1 = __importDefault(require("execa"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function compile(input, outPutDir) {
    const outputDirectory = path_1.default.resolve(outPutDir);
    fs_extra_1.default.ensureDirSync(outputDirectory);
    const args = [
        `--target`,
        'substrate',
        '--output',
        outputDirectory,
        '-v',
        ...input.sources
    ];
    let str = '';
    const { stdout, stderr } = await execa_1.default('solang', args);
    str += stdout;
    str += '\n';
    str += stderr;
    str += '\n';
    console.log(str);
    const contractPaths = new Set();
    const reg = /info:\sSaving\s(.*)\sfor\scontract?/g;
    let arr;
    while ((arr = reg.exec(str)) !== null) {
        const filePath = arr[1].trim();
        contractPaths.add(filePath);
    }
    return {
        outputDirectory,
        outputFiles: Array.from(contractPaths)
    };
}
exports.compile = compile;
