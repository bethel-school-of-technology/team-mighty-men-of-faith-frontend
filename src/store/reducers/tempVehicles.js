"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
function tempVehicles(state = {}, action) {
    switch (action.type) {
        case constants_1.setTempVehiclesConst: {
            const { cityId, companyId, countryParam, cityParam, vehicles, } = action.payload;
            return {
                ...state,
                [cityId]: {
                    ...state[cityId],
                    [companyId]: {
                        countryParam,
                        cityParam,
                        vehicles,
                    },
                },
            };
        }
        default:
            return state;
    }
}
exports.default = tempVehicles;
