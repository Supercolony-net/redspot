"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEntries = void 0;
function fromEntries(entries) {
    return Object.assign({}, ...entries.map(([name, value]) => ({
        [name]: value
    })));
}
exports.fromEntries = fromEntries;
