"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetRedspotContext = void 0;
const context_1 = require("./context");
// This function isn't meant to be used during the Redspot execution,
// but rather to reset Redspot in between tests.
function resetRedspotContext() {
    if (context_1.RedspotContext.isCreated()) {
        const ctx = context_1.RedspotContext.getRedspotContext();
        if (ctx.environment !== undefined) {
            const globalAsAny = global;
            for (const key of Object.keys(ctx.environment)) {
                globalAsAny[key] = undefined;
            }
        }
        const filesLoadedDuringConfig = ctx.getFilesLoadedDuringConfig();
        filesLoadedDuringConfig.forEach(unloadModule);
        context_1.RedspotContext.deleteRedspotContext();
    }
    // Unload all the redspot's entry-points.
    unloadModule('../register');
    unloadModule('./cli/cli');
    unloadModule('./lib/redspot-lib');
}
exports.resetRedspotContext = resetRedspotContext;
function unloadModule(path) {
    try {
        delete require.cache[require.resolve(path)];
    }
    catch (err) {
        // module wasn't loaded
    }
}
