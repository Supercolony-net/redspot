"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommendedGitIgnore = exports.getUserConfigPath = exports.isCwdInsideProject = void 0;
const find_up_1 = __importDefault(require("find-up"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const packageInfo_1 = require("../util/packageInfo");
const errors_1 = require("./errors");
const errors_list_1 = require("./errors-list");
const JS_CONFIG_FILENAME = 'redspot.config.js';
const TS_CONFIG_FILENAME = 'redspot.config.ts';
function isCwdInsideProject() {
    return (find_up_1.default.sync(TS_CONFIG_FILENAME) !== null ||
        find_up_1.default.sync(JS_CONFIG_FILENAME) !== null);
}
exports.isCwdInsideProject = isCwdInsideProject;
function getUserConfigPath() {
    const tsConfigPath = find_up_1.default.sync(TS_CONFIG_FILENAME);
    if (tsConfigPath !== null) {
        return tsConfigPath;
    }
    const pathToConfigFile = find_up_1.default.sync(JS_CONFIG_FILENAME);
    if (pathToConfigFile === null) {
        throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.NOT_INSIDE_PROJECT);
    }
    return pathToConfigFile;
}
exports.getUserConfigPath = getUserConfigPath;
async function getRecommendedGitIgnore() {
    const packageRoot = packageInfo_1.getPackageRoot();
    const gitIgnorePath = path_1.default.join(packageRoot, 'recommended-gitignore.txt');
    return fs_extra_1.default.readFile(gitIgnorePath, 'utf-8');
}
exports.getRecommendedGitIgnore = getRecommendedGitIgnore;
