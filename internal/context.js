"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedspotContext = void 0;
const extenders_1 = require("./core/config/extenders");
const errors_1 = require("./core/errors");
const errors_list_1 = require("./core/errors-list");
const dsl_1 = require("./core/tasks/dsl");
const platform_1 = require("./util/platform");
class RedspotContext {
    constructor() {
        this.tasksDSL = new dsl_1.TasksDSL();
        this.extendersManager = new extenders_1.ExtenderManager();
        this.configExtenders = [];
    }
    static isCreated() {
        const globalWithRedspotContext = global;
        return globalWithRedspotContext.__redspotContext !== undefined;
    }
    static createRedspotContext() {
        if (this.isCreated()) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.CONTEXT_ALREADY_CREATED);
        }
        const globalWithRedspotContext = global;
        const ctx = new RedspotContext();
        globalWithRedspotContext.__redspotContext = ctx;
        return ctx;
    }
    static getRedspotContext() {
        const globalWithRedspotContext = global;
        const ctx = globalWithRedspotContext.__redspotContext;
        if (ctx === undefined) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.CONTEXT_NOT_CREATED);
        }
        return ctx;
    }
    static deleteRedspotContext() {
        const globalAsAny = global;
        globalAsAny.__redspotContext = undefined;
    }
    setRedspotRuntimeEnvironment(env) {
        if (this.environment !== undefined) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.CONTEXT_HRE_ALREADY_DEFINED);
        }
        this.environment = env;
    }
    getRedspotRuntimeEnvironment() {
        if (this.environment === undefined) {
            throw new errors_1.RedspotError(errors_list_1.ERRORS.GENERAL.CONTEXT_HRE_NOT_DEFINED);
        }
        return this.environment;
    }
    setConfigLoadingAsStarted() {
        this._filesLoadedBeforeConfig = platform_1.getRequireCachedFiles();
    }
    setConfigLoadingAsFinished() {
        this._filesLoadedAfterConfig = platform_1.getRequireCachedFiles();
    }
    getFilesLoadedDuringConfig() {
        // No config was loaded
        if (this._filesLoadedBeforeConfig === undefined) {
            return [];
        }
        errors_1.assertRedspotInvariant(this._filesLoadedAfterConfig !== undefined, 'Config loading was set as started and not finished');
        return arraysDifference(this._filesLoadedAfterConfig, this._filesLoadedBeforeConfig);
    }
}
exports.RedspotContext = RedspotContext;
function arraysDifference(a, b) {
    return a.filter((e) => !b.includes(e));
}
