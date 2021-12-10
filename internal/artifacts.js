"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifacts = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const errors_1 = require("./core/errors");
const errors_list_1 = require("./core/errors-list");
const glob_1 = require("./util/glob");
class Artifacts {
    constructor(_artifactsPath) {
        this._artifactsPath = _artifactsPath;
    }
    async getArtifactPath(name) {
        const { trueCasePath } = await Promise.resolve().then(() => __importStar(require('true-case-path')));
        const artifactPath = await this._getArtifactPath(name);
        try {
            const trueCaseArtifactPath = await trueCasePath(path.relative(this._artifactsPath, artifactPath), this._artifactsPath);
            if (artifactPath !== trueCaseArtifactPath) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARTIFACTS.WRONG_CASING, {
                    correct: trueCaseArtifactPath,
                    incorrect: artifactPath
                });
            }
            return artifactPath;
        }
        catch (error) {
            if (typeof error.message === 'string' &&
                error.message.includes('no matching file exists')) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.INTERNAL.WRONG_ARTIFACT_PATH, {
                    contractName: name,
                    artifactPath
                });
            }
            // tslint:disable-next-line only-redspot-error
            throw error;
        }
    }
    getArtifactPathSync(name) {
        const { trueCasePathSync } = require('true-case-path');
        const artifactPath = this._getArtifactPathSync(name);
        try {
            const trueCaseArtifactPath = trueCasePathSync(path.relative(this._artifactsPath, artifactPath), this._artifactsPath);
            if (artifactPath !== trueCaseArtifactPath) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.ARTIFACTS.WRONG_CASING, {
                    correct: trueCaseArtifactPath,
                    incorrect: artifactPath
                });
            }
            return trueCaseArtifactPath;
        }
        catch (error) {
            if (typeof error.message === 'string' &&
                error.message.includes('no matching file exists')) {
                throw new errors_1.RedspotError(errors_list_1.ERRORS.INTERNAL.WRONG_ARTIFACT_PATH, {
                    contractName: name,
                    artifactPath
                });
            }
            throw error;
        }
    }
    async readAllArtifact() {
        const artifactPaths = await this.getArtifactPaths();
        return artifactPaths.map((path) => fs_extra_1.default.readJson(path));
    }
    readAllArtifactSync() {
        const artifactPaths = this._getArtifactPathsSync();
        return artifactPaths.map((path) => fs_extra_1.default.readJsonSync(path));
    }
    async readArtifact(name) {
        const artifactPath = await this.getArtifactPath(name);
        return fs_extra_1.default.readJson(artifactPath);
    }
    readArtifactSync(name) {
        const artifactPath = this.getArtifactPathSync(name);
        return fs_extra_1.default.readJsonSync(artifactPath);
    }
    async artifactExists(name) {
        try {
            await this.getArtifactPath(name);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getArtifactPaths() {
        const paths = await glob_1.glob(path.join(this._artifactsPath, `**/*.contract`));
        return paths.sort();
    }
    async copyToArtifactDir(originPath) {
        const pathList = [].concat(originPath);
        for (const filepath of pathList) {
            fs_extra_1.default.ensureDirSync(this._artifactsPath);
            fs_extra_1.default.copyFileSync(filepath, path.resolve(this._artifactsPath, path.basename(filepath)));
        }
    }
    async _getArtifactPath(name) {
        const files = await this.getArtifactPaths();
        return this._getArtifactPathFromFiles(name, files);
    }
    _getArtifactPathsSync() {
        return glob_1.globSync(path.join(this._artifactsPath, `**/*.contract`));
    }
    _getArtifactPathSync(name) {
        const files = this._getArtifactPathsSync();
        return this._getArtifactPathFromFiles(name, files);
    }
    _getArtifactPathFromFiles(contractName, files) {
        const matchingFiles = files.filter((file) => {
            return path.basename(file) === `${contractName}.contract`;
        });
        if (matchingFiles.length === 0) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.ARTIFACTS.NOT_FOUND, {
                contractName
            });
        }
        if (matchingFiles.length > 1) {
            const candidates = matchingFiles.map(path.normalize);
            throw new errors_1.RedspotError(errors_list_1.ERRORS.ARTIFACTS.MULTIPLE_FOUND, {
                contractName,
                candidates: candidates.join(os.EOL)
            });
        }
        return matchingFiles[0];
    }
}
exports.Artifacts = Artifacts;
