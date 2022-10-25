"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
function servicesSearchCategories(state = {}, action) {
    switch (action.type) {
        case constants_1.setCompaniesConst: {
            const { data, cityId } = action.payload;
            return {
                ...state,
                [cityId]: data,
            };
        }
        case constants_1.addToCompaniesConst: {
            const { data, cityId } = action.payload;
            return {
                ...state,
                [cityId]: { ...state[cityId], ...data },
            };
        }
        default:
            return state;
    }
}
exports.default = servicesSearchCategories;
