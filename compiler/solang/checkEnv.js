"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnv = void 0;
const child_process_1 = require("child_process");
async function checkEnv({ version }) {
    try {
        child_process_1.execSync('solang --version');
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.checkEnv = checkEnv;
