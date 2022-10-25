"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentVehicle = exports.getTempVehicles = exports.getCompanies = void 0;
const reselect_1 = require("reselect");
const types_1 = require("../../types");
const vehiclesSelector = (state) => state.vehicles;
const tempVehiclesSelector = (state) => state.tempVehicles;
const selectedTempVehicleSelector = (state) => state.selectedTempVehicleId;
const companiesSelector = (state) => state.companies;
const citySelector = (state) => state.currentCity;
const idSelector = (state, _id) => _id;
const getThemCompanies = (city, companies) => {
    return Object.values(companies[city] ?? []);
};
exports.getCompanies = (0, reselect_1.createSelector)(citySelector, companiesSelector, getThemCompanies);
// ---------------------->
const getThemTempVehicles = (vehicles, city, companyId) => {
    return vehicles[city]?.[companyId] ?? types_1.defaultTempVehicles;
};
const getTempVehicles = () => (0, reselect_1.createSelector)(tempVehiclesSelector, citySelector, idSelector, getThemTempVehicles);
exports.getTempVehicles = getTempVehicles;
function currentVehicle(vehicles, selectVehicleId) {
    return vehicles[selectVehicleId] ?? types_1.defaultSelectedVehicle;
}
exports.getCurrentVehicle = (0, reselect_1.createSelector)(vehiclesSelector, selectedTempVehicleSelector, currentVehicle);
