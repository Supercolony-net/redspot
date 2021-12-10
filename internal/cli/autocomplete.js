"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complete = void 0;
const redspot_params_1 = require("../core/params/redspot-params");
const ArgumentsParser_1 = require("./ArgumentsParser");
async function complete({ line, point }) {
    let hre;
    try {
        process.env.TS_NODE_TRANSPILE_ONLY = '1';
        require('../../register');
        const { RedspotContext } = require('../context');
        const context = RedspotContext.getRedspotContext();
        hre = context.getRedspotRuntimeEnvironment();
    }
    catch (e) {
        return [];
    }
    const words = line.split(/\s+/).filter((x) => x.length > 0);
    const wordsBeforeCursor = line.slice(0, point).split(/\s+/);
    // examples:
    // `hh compile --network|` => prev: "compile" last: "--network"
    // `hh compile --network |` => prev: "--network" last: ""
    // `hh compile --network ha|` => prev: "--network" last: "ha"
    const [prev, last] = wordsBeforeCursor.slice(-2);
    const coreParams = Object.values(redspot_params_1.REDSPOT_PARAM_DEFINITIONS)
        .map((x) => x.name)
        .map(ArgumentsParser_1.ArgumentsParser.paramNameToCLA)
        .filter((x) => !words.includes(x));
    // check if the user entered a task
    let task;
    let index = 1;
    while (index < words.length) {
        if (isGlobalFlag(words[index])) {
            index += 1;
        }
        else if (isGlobalParam(words[index])) {
            index += 2;
        }
        else if (words[index].startsWith('--')) {
            index += 1;
        }
        else {
            task = words[index];
            break;
        }
    }
    // if a task was found but it's equal to the last word, it means
    // that the cursor is after the task, we ignore the task in this
    // case because if you have a task `foo` and `foobar` and the
    // line is: `hh foo|`, we want tasks to be suggested
    if (task === last) {
        task = undefined;
    }
    if (prev === '--network') {
        return Object.keys(hre.config.networks);
    }
    // if the previous word is a param, then a value is expected
    // we don't complete anything here
    if (prev.startsWith('-')) {
        const paramName = ArgumentsParser_1.ArgumentsParser.cLAToParamName(prev);
        const globalParam = redspot_params_1.REDSPOT_PARAM_DEFINITIONS[paramName];
        if (globalParam !== undefined && !globalParam.isFlag) {
            return [];
        }
    }
    // if there's no task, we complete either tasks or params
    if (task === undefined || hre.tasks[task] === undefined) {
        const tasks = Object.values(hre.tasks)
            .map((x) => x.name)
            .filter((x) => !x.includes(':'));
        if (last.startsWith('-')) {
            return coreParams;
        }
        return tasks;
    }
    if (!last.startsWith('-')) {
        return [];
    }
    // if there's a task and the last word starts with -, we complete its params and the global params
    const taskParams = Object.values(hre.tasks[task].paramDefinitions)
        .map((x) => x.name)
        .map(ArgumentsParser_1.ArgumentsParser.paramNameToCLA)
        .filter((x) => !words.includes(x));
    return [...taskParams, ...coreParams];
}
exports.complete = complete;
function isGlobalFlag(param) {
    var _a;
    const paramName = ArgumentsParser_1.ArgumentsParser.cLAToParamName(param);
    return ((_a = redspot_params_1.REDSPOT_PARAM_DEFINITIONS[paramName]) === null || _a === void 0 ? void 0 : _a.isFlag) === true;
}
function isGlobalParam(param) {
    var _a;
    const paramName = ArgumentsParser_1.ArgumentsParser.cLAToParamName(param);
    return ((_a = redspot_params_1.REDSPOT_PARAM_DEFINITIONS[paramName]) === null || _a === void 0 ? void 0 : _a.isFlag) === false;
}
