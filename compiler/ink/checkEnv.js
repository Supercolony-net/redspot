"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnv = exports.getCargoContractVersion = void 0;
const child_process_1 = require("child_process");
const semver_1 = __importDefault(require("semver"));
function getCargoContractVersion() {
    var _a;
    try {
        const versionData = child_process_1.execSync('cargo contract -V');
        const [version] = ((_a = versionData.toString().split(/\s/)[1]) === null || _a === void 0 ? void 0 : _a.trim().split('-')) || [];
        return semver_1.default.valid(version);
    }
    catch (error) {
        return null;
    }
}
exports.getCargoContractVersion = getCargoContractVersion;
async function checkEnv({ version }) {
    const currentVersion = getCargoContractVersion();
    if (!currentVersion) {
        return false;
    }
    else if (semver_1.default.lt(currentVersion, version)) {
        return false;
    }
    return currentVersion;
}
exports.checkEnv = checkEnv;
