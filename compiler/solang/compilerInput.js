"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompilerInput = void 0;
const globby_1 = __importDefault(require("globby"));
const minimatch_1 = __importDefault(require("minimatch"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../../logger"));
async function getCompilerInput(config, patterns) {
    const files = await globby_1.default((patterns === null || patterns === void 0 ? void 0 : patterns.length) ? patterns : config.sources, {
        onlyFiles: true,
        gitignore: true
    });
    const solPaths = files
        .filter((file) => minimatch_1.default(file, '*.sol', { matchBase: true }))
        .map((file) => path_1.default.resolve(file));
    logger_1.default.log(`Solang: ${solPaths.length} matches`);
    return {
        sources: solPaths
    };
}
exports.getCompilerInput = getCompilerInput;
