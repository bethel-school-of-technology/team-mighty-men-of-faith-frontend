"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const defaultState = {
    startDateError: false,
    startTimeError: false,
    endDateError: false,
    endTimeError: false,
};
function servicesSearchCategories(state = defaultState, action) {
    switch (action.type) {
        case constants_1.setStartDateErrorTrueConst:
            return {
                ...state,
                startDateError: true,
            };
        case constants_1.setStartDateErrorFalseConst:
            return {
                ...state,
                startDateError: false,
            };
        case constants_1.setEndDateErrorTrueConst:
            return {
                ...state,
                endDateError: true,
            };
        case constants_1.setEndDateErrorFalseConst:
            return {
                ...state,
                endDateError: false,
            };
        case constants_1.setStartTimeErrorTrueConst:
            return {
                ...state,
                startTimeError: true,
            };
        case constants_1.setStartTimeErrorFalseConst:
            return {
                ...state,
                startTimeError: false,
            };
        case constants_1.setEndTimeErrorTrueConst:
            return {
                ...state,
                endTimeError: true,
            };
        case constants_1.setEndTimeErrorFalseConst:
            return {
                ...state,
                endTimeError: false,
            };
        default:
            return state;
    }
}
exports.default = servicesSearchCategories;
