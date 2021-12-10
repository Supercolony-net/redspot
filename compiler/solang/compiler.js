"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
class Compiler {
    constructor({ verbose = false } = {}) {
        this._verbose = verbose;
        this._checkSolang();
    }
    _checkSolang() {
        try {
            child_process_1.execSync('solang -V ');
        }
        catch (error) {
            console.log(chalk_1.default.red('ERROR: No `solang` command found'));
            console.log(`Run the following command to install it:`);
            console.log(chalk_1.default.cyan(`$ cargo install solang  --force --locked`));
            return false;
        }
        return true;
    }
    async run(inputDir, outPutdir) {
        return new Promise((resolve, reject) => {
            fs_extra_1.default.ensureDirSync(path_1.default.resolve(outPutdir));
            const input = fs_extra_1.default
                .readdirSync(path_1.default.resolve(inputDir))
                .filter((f) => f.match(/\.sol$/g));
            let args = [
                `--target`,
                `substrate`,
                '--output',
                path_1.default.resolve(outPutdir),
                input.join(' ')
            ];
            if (this._verbose) {
                args = args.concat('--', 'verbose');
            }
            const child = cross_spawn_1.default('solang', args, {
                stdio: 'inherit',
                cwd: path_1.default.resolve(inputDir)
            });
            console.log(`$ solang ${args.join(' ')}`);
            child.on('close', (code) => {
                if (code !== 0) {
                    console.log();
                    console.log(chalk_1.default.red(`Failed to compile the contracts`));
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject({
                        command: `solang ${args.join(' ')}`
                    });
                    return;
                }
                console.log(`🎉  Compile successfully! You can find them at ${chalk_1.default.cyan(path_1.default.resolve(outPutdir))}`);
                console.log('');
                resolve(undefined);
            });
        });
    }
}
exports.Compiler = Compiler;
