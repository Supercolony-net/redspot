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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunningRedspotCoreTests = exports.isLocalDev = exports.isRedspotInstalledLocallyOrLinked = void 0;
const fs = __importStar(require("fs"));
const packageInfo_1 = require("../util/packageInfo");
/**
 * Returns true if Redspot is installed locally or linked from its repository,
 * by looking for it using the node module resolution logic.
 *
 * If a config file is provided, we start looking for it from it. Otherwise,
 * we use the current working directory.
 */
function isRedspotInstalledLocallyOrLinked(configPath) {
    try {
        const resolvedPackageJson = require.resolve('redspot/package.json', {
            paths: [configPath !== null && configPath !== void 0 ? configPath : process.cwd()]
        });
        const thisPackageJson = packageInfo_1.getPackageJsonPath();
        // We need to get the realpaths here, as redspot may be linked and
        // running with `node --preserve-symlinks`
        //
        return (fs.realpathSync(resolvedPackageJson) ===
            fs.realpathSync(thisPackageJson) ||
            // Required to run examples.
            thisPackageJson.includes('redspot/packages/redspot-core/package.json'));
    }
    catch (_) {
        return false;
    }
}
exports.isRedspotInstalledLocallyOrLinked = isRedspotInstalledLocallyOrLinked;
/**
 * Checks whether we're using Redspot in development mode (that is, we're working _on_ Redspot).
 */
function isLocalDev() {
    // TODO: This may give a false positive under yarn PnP
    return isRunningRedspotCoreTests() || !__filename.includes('node_modules');
}
exports.isLocalDev = isLocalDev;
function isRunningRedspotCoreTests() {
    return __filename.endsWith('.ts');
}
exports.isRunningRedspotCoreTests = isRunningRedspotCoreTests;
