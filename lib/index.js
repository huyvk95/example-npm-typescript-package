"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.greet = void 0;
function greet(name) {
    return "Hello ".concat(name);
}
exports.greet = greet;
function getUser() {
    return {
        username: "hehehe",
        password: "hahaha",
    };
}
exports.getUser = getUser;
