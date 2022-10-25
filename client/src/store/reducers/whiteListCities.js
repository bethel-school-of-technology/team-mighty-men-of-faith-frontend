"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
function servicesSearchCategories(state = [], action) {
    switch (action.type) {
        case constants_1.setWhiteListCitiesConst:
            return action.payload;
        default:
            return state;
    }
}
exports.default = servicesSearchCategories;
