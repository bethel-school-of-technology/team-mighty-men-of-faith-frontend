"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../constants/index");
const constants_1 = require("../../constants");
const defaultState = {
    addDriver: false,
    addInsurance: false,
    chargeByDay: true,
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    location: {
        lat: 36.7783,
        lng: 119.4179,
        address: "",
        isDefault: true,
    },
};
function servicesSearchCategories(state = defaultState, action) {
    switch (action.type) {
        case constants_1.addDriverConst:
            return {
                ...state,
                addDriver: true,
            };
        case constants_1.removeDriverConst:
            return {
                ...state,
                addDriver: false,
            };
        case constants_1.addInsuranceConst:
            return {
                ...state,
                addInsurance: true,
            };
        case constants_1.removeInsuranceConst:
            return {
                ...state,
                addInsurance: false,
            };
        case constants_1.chargeByDayConst:
            return {
                ...state,
                chargeByDay: true,
            };
        case constants_1.chargeByMonthConst:
            return {
                ...state,
                chargeByDay: false,
            };
        case index_1.setStartDateConst:
            return {
                ...state,
                startDate: action.payload,
            };
        case constants_1.setEndDateConst:
            return {
                ...state,
                endDate: action.payload,
            };
        case constants_1.setLocationConst:
            return {
                ...state,
                location: {
                    ...action.payload,
                    isDefault: false,
                },
            };
        default:
            return state;
    }
}
exports.default = servicesSearchCategories;
