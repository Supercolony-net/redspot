"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompilerInput = exports.getCargoMetadata = void 0;
const child_process_1 = require("child_process");
const globby_1 = __importDefault(require("globby"));
const minimatch_1 = __importDefault(require("minimatch"));
const path_1 = require("path");
function getCargoMetadata(config, cwd) {
    const execCommand = `cargo ${config.toolchain ? `+${config.toolchain}` : ''} metadata --no-deps --format-version 1`;
    const output = child_process_1.execSync(execCommand, {
        maxBuffer: 1024 * 2048,
        cwd
    }).toString();
    const outputObj = JSON.parse(output);
    return outputObj;
}
exports.getCargoMetadata = getCargoMetadata;
async function getCompilerInput(config, patterns) {
    var _a, _b;
    const files = await globby_1.default((patterns === null || patterns === void 0 ? void 0 : patterns.length) ? patterns : config.sources || config.sources, {
        onlyFiles: true,
        gitignore: true
    });
    const manifestPaths = files.filter((file) => minimatch_1.default(file, 'Cargo.toml', { matchBase: true }));
    console.log(`ink: ${manifestPaths.length} matches`);
    const manifests = manifestPaths.map((path) => {
        return getCargoMetadata(config, path_1.dirname(path));
    });
    const input = new Set();
    for (const manifest of manifests) {
            for (const packageInfo of manifest.packages) {
                if (packageInfo.dependencies.find(({ name }) => name === 'ink_lang')) {
                    input.add({
                        id: packageInfo.id,
                        name: ((_b = (_a = packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.targets) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name) || packageInfo.name,
                        manifestPath: packageInfo.manifest_path,
                        targetDirectory: manifest.target_directory
                    });
                }
            }
    }
    const sources = Array.from(input);
    return {
        sources,
        toolchain: config.toolchain
    };
}
exports.getCompilerInput = getCompilerInput;
