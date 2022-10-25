"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
function servicesSearchCategories(state = constants_1.paras, action) {
    switch (action.type) {
        case constants_1.setAllParasConst:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
exports.default = servicesSearchCategories;
