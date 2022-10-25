"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserLogin = void 0;
const constants_1 = require("../../constants");
const defaultState = {
    isLoggedIn: false,
    token: "",
};
function AuthReducer(state = defaultState, action) {
    switch (action.type) {
        case constants_1.setAuthConst:
            return action.payload;
        default:
            return state;
    }
}
exports.default = AuthReducer;
function setUserLogin(token) {
    return {
        type: constants_1.setAuthConst,
        payload: {
            token,
            isLoggedIn: true
        }
    };
}
exports.setUserLogin = setUserLogin;
