"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTempVehicles = exports.defaultSelectedTempVehicle = exports.defaultSelectedVehicle = void 0;
// ---------------------->vehicles<--------------------
exports.defaultSelectedVehicle = {
    title: "",
    countryId: "",
    cityId: "",
    driverRentPerDay: 0,
    driverRentPerMonth: 0,
    images: [],
    insuranceRentPerDay: 0,
    insuranceRentPerMonth: 0,
    model: 0,
    vehicleRentPerDay: 0,
    vehicleRentPerMonth: 0,
    vehicleAvailable: true,
    driverAvailable: true,
    insuranceAvailable: true,
    _id: '',
    companyId: "",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
};
// ---------------------->temp vehicles<--------------------
exports.defaultSelectedTempVehicle = {
    title: "",
    countryId: "",
    cityId: "",
    avatar: "",
    model: 0,
    vehicleRentPerDay: 0,
    vehicleRentPerMonth: 0,
    _id: '',
    companyId: "",
};
exports.defaultTempVehicles = {
    countryParam: null,
    cityParam: null,
    vehicles: [],
};
// ----------------------><--------------------
