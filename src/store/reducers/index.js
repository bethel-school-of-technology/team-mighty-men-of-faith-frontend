"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const whiteListCities_1 = __importDefault(require("./whiteListCities"));
const companies_1 = __importDefault(require("./companies"));
const vehicles_1 = __importDefault(require("./vehicles"));
const tempVehicles_1 = __importDefault(require("./tempVehicles"));
const booking_1 = __importDefault(require("./booking"));
const currentCity_1 = __importDefault(require("./currentCity"));
const selectedTempVehicleId_1 = __importDefault(require("./selectedTempVehicleId"));
const errors_1 = __importDefault(require("./errors"));
const formFields_1 = __importDefault(require("./formFields"));
const paras_1 = __importDefault(require("./paras"));
const snackBar_1 = __importDefault(require("./snackBar"));
const loadingIndicator_1 = __importDefault(require("./loadingIndicator"));
const auth_1 = __importDefault(require("./auth"));
exports.default = (0, redux_1.combineReducers)({
    whiteListCities: whiteListCities_1.default,
    companies: companies_1.default,
    vehicles: vehicles_1.default,
    tempVehicles: tempVehicles_1.default,
    booking: booking_1.default,
    currentCity: currentCity_1.default,
    selectedTempVehicleId: selectedTempVehicleId_1.default,
    errors: errors_1.default,
    snackBar: snackBar_1.default,
    formFields: formFields_1.default,
    paras: paras_1.default,
    loadingIndicator: loadingIndicator_1.default,
    auth: auth_1.default
});
