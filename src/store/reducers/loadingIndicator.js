"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const defaultState = {
    loading: false,
    helperText: "",
};
function loadingIndicator(state = defaultState, action) {
    switch (action.type) {
        case constants_1.setLoadingIndicatorConst:
            return {
                loading: true,
                helperText: action.payload ?? '',
            };
        case constants_1.clearLoadingIndicatorConst:
            return defaultState;
        default:
            return state;
    }
}
exports.default = loadingIndicator;
