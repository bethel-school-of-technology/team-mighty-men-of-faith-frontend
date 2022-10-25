"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrder = exports.fetchTempVehicles = exports.fetchVehicle = exports.fetchCompanies = exports.fetchWhiteListCities = exports.shouldChargeByMonth = exports.shouldChargeByDay = exports.setRemoveInsurance = exports.setAddInsurance = exports.setRemoveDriver = exports.setAddDriver = exports.setLocation = exports.setEndTimeErrorFalse = exports.setEndTimeErrorTrue = exports.setStartTimeErrorFalse = exports.setStartTimeErrorTrue = exports.setEndDateErrorFalse = exports.setEndDateErrorTrue = exports.setStartDateErrorFalse = exports.setStartDateErrorTrue = exports.setEndDate = exports.setStartDate = exports.setSelectedVehicleId = exports.setCurrentCity = exports.setBooking = exports.setTempVehicles = exports.setVehicles = exports.setCompanies = exports.setWhiteListCities = exports.clearSnackBar = exports.setSnackBar = exports.clearLoadingIndicator = exports.setLoadingIndicator = void 0;
/* eslint-disable no-useless-escape */
const react_redux_1 = require("react-redux");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
function setLoadingIndicator(payload) {
    return {
        type: constants_1.setLoadingIndicatorConst,
        payload: payload ?? "",
    };
}
exports.setLoadingIndicator = setLoadingIndicator;
function clearLoadingIndicator() {
    return {
        type: constants_1.clearLoadingIndicatorConst,
    };
}
exports.clearLoadingIndicator = clearLoadingIndicator;
function setSnackBar(payload) {
    return {
        type: constants_1.setSnackBarConst,
        payload,
    };
}
exports.setSnackBar = setSnackBar;
function clearSnackBar() {
    return {
        type: constants_1.clearSnackBarConst,
    };
}
exports.clearSnackBar = clearSnackBar;
function setWhiteListCities(payload) {
    return {
        type: constants_1.setWhiteListCitiesConst,
        payload,
    };
}
exports.setWhiteListCities = setWhiteListCities;
function setCompanies(payload) {
    return {
        type: constants_1.setCompaniesConst,
        payload,
    };
}
exports.setCompanies = setCompanies;
function setVehicles(payload) {
    return {
        type: constants_1.setVehiclesConst,
        payload,
    };
}
exports.setVehicles = setVehicles;
function setTempVehicles(payload) {
    return {
        type: constants_1.setTempVehiclesConst,
        payload,
    };
}
exports.setTempVehicles = setTempVehicles;
function setBooking(payload) {
    return {
        type: constants_1.setVehiclesConst,
        payload,
    };
}
exports.setBooking = setBooking;
function setCurrentCity(payload) {
    return {
        type: constants_1.setCurrentCityConst,
        payload,
    };
}
exports.setCurrentCity = setCurrentCity;
function setSelectedVehicleId(payload) {
    return {
        type: constants_1.setSelectedTempVehicleIdConst,
        payload,
    };
}
exports.setSelectedVehicleId = setSelectedVehicleId;
function setStartDate(payload) {
    return {
        type: constants_1.setStartDateConst,
        payload,
    };
}
exports.setStartDate = setStartDate;
function setEndDate(payload) {
    return {
        type: constants_1.setEndDateConst,
        payload,
    };
}
exports.setEndDate = setEndDate;
function setStartDateErrorTrue() {
    return {
        type: constants_1.setStartDateErrorTrueConst,
    };
}
exports.setStartDateErrorTrue = setStartDateErrorTrue;
function setStartDateErrorFalse() {
    return {
        type: constants_1.setStartDateErrorFalseConst,
    };
}
exports.setStartDateErrorFalse = setStartDateErrorFalse;
function setEndDateErrorTrue() {
    return {
        type: constants_1.setEndDateErrorTrueConst,
    };
}
exports.setEndDateErrorTrue = setEndDateErrorTrue;
function setEndDateErrorFalse() {
    return {
        type: constants_1.setEndDateErrorFalseConst,
    };
}
exports.setEndDateErrorFalse = setEndDateErrorFalse;
function setStartTimeErrorTrue() {
    return {
        type: constants_1.setStartTimeErrorTrueConst,
    };
}
exports.setStartTimeErrorTrue = setStartTimeErrorTrue;
function setStartTimeErrorFalse() {
    return {
        type: constants_1.setStartTimeErrorFalseConst,
    };
}
exports.setStartTimeErrorFalse = setStartTimeErrorFalse;
function setEndTimeErrorTrue() {
    return {
        type: constants_1.setEndTimeErrorTrueConst,
    };
}
exports.setEndTimeErrorTrue = setEndTimeErrorTrue;
function setEndTimeErrorFalse() {
    return {
        type: constants_1.setEndTimeErrorFalseConst,
    };
}
exports.setEndTimeErrorFalse = setEndTimeErrorFalse;
function setLocation(payload) {
    return {
        type: constants_1.setLocationConst,
        payload,
    };
}
exports.setLocation = setLocation;
function setAddDriver() {
    return {
        type: constants_1.addDriverConst,
    };
}
exports.setAddDriver = setAddDriver;
function setRemoveDriver() {
    return {
        type: constants_1.removeDriverConst,
    };
}
exports.setRemoveDriver = setRemoveDriver;
function setAddInsurance() {
    return {
        type: constants_1.addInsuranceConst,
    };
}
exports.setAddInsurance = setAddInsurance;
function setRemoveInsurance() {
    return {
        type: constants_1.removeInsuranceConst,
    };
}
exports.setRemoveInsurance = setRemoveInsurance;
function shouldChargeByDay() {
    return {
        type: constants_1.chargeByDayConst,
    };
}
exports.shouldChargeByDay = shouldChargeByDay;
function shouldChargeByMonth() {
    return {
        type: constants_1.chargeByMonthConst,
    };
}
exports.shouldChargeByMonth = shouldChargeByMonth;
function fetchWhiteListCities({ Then, Catch }) {
    return (dispatch) => {
        axios_1.default
            .get(`${process.env.REACT_APP_BACK_END_API}/destinations/USA/cities`)
            .then((result) => {
            const cities = [];
            result.data.forEach((cityId) => {
                cities.push(cityId);
            });
            (0, react_redux_1.batch)(() => {
                dispatch(setWhiteListCities(cities));
                dispatch(setCurrentCity(cities[0]));
            });
            Then?.();
        })
            .catch((err) => {
            (0, react_redux_1.batch)(() => {
                dispatch(setSnackBar("Unable to verify request at the moment!"));
            });
            Catch?.(err);
        });
    };
}
exports.fetchWhiteListCities = fetchWhiteListCities;
function fetchCompanies({ Then, Catch, InvalidRequest }) {
    return (dispatch, getState) => {
        const whiteListCities = getState().whiteListCities;
        const currentCity = getState().currentCity;
        if (!currentCity.length) {
            dispatch(setSnackBar("Not A Valid City To Fetch"));
            InvalidRequest?.();
            return;
        }
        if (!whiteListCities.length) {
            dispatch(setSnackBar("Unable to identify available cities!"));
            InvalidRequest?.();
            return;
        }
        else if (!whiteListCities.some((city) => city === currentCity)) {
            dispatch(setSnackBar("Invalid City To Fetch"));
            InvalidRequest?.();
            return;
        }
        axios_1.default
            .get(`${process.env.REACT_APP_BACK_END_API}/companies/USA/${currentCity}`)
            .then((response) => {
            const companies = {};
            response.data.forEach((company) => {
                companies[company._id] = company;
            });
            dispatch(setCompanies({
                cityId: currentCity,
                data: companies,
            }));
            Then?.();
        })
            .catch((error) => {
            dispatch(setSnackBar("Error Fetching Available Companies! 🙁"));
            Catch?.(error);
        });
    };
}
exports.fetchCompanies = fetchCompanies;
function fetchVehicle({ Then, Catch, _id }) {
    return (dispatch) => {
        dispatch(setLoadingIndicator("Fetching vehicle information..."));
        axios_1.default
            .get(`${process.env.REACT_APP_BACK_END_API}/vehicle/${_id}`)
            .then((response) => {
            const result = response.data;
            (0, react_redux_1.batch)(() => {
                dispatch(setVehicles({
                    [result?._id]: result,
                }));
                dispatch(clearLoadingIndicator());
                dispatch(setCurrentCity(result?.cityId));
            });
            Then?.();
        })
            .catch((err) => {
            (0, react_redux_1.batch)(() => {
                dispatch(setSnackBar("Unable to fetch vehicle at the moment"));
                dispatch(clearLoadingIndicator());
            });
            Catch?.(err);
        });
    };
}
exports.fetchVehicle = fetchVehicle;
function fetchTempVehicles({ countryParam, cityParam, companyId, Then, Catch, }) {
    return (dispatch) => {
        let query = `${process.env.REACT_APP_BACK_END_API}/vehicles/${companyId}?country=${countryParam ?? "USA"}`;
        if (cityParam)
            query += `&city=${cityParam}`;
        axios_1.default
            .get(query)
            .then((response) => {
            const vehicles = [];
            response.data.forEach((vehicle) => {
                vehicles.push({
                    ...vehicle,
                });
            });
            const cityId = cityParam || constants_1.notFound;
            (0, react_redux_1.batch)(() => {
                dispatch(setTempVehicles({
                    cityId,
                    countryParam,
                    cityParam,
                    companyId,
                    vehicles,
                }));
                dispatch(setCurrentCity(cityId));
            });
            Then?.();
        })
            .catch((err) => {
            dispatch(setSnackBar("Unable to fetch vehicles at the moment"));
            Catch?.(err);
        });
    };
}
exports.fetchTempVehicles = fetchTempVehicles;
function postOrder({ vehicleDetails, additionalDetails, Then, Catch, }) {
    return (dispatch) => {
        let query = `${process.env.REACT_APP_BACK_END_API}/orders`;
        const body = {
            vehicleDetails,
            additionalDetails
        };
        dispatch(setLoadingIndicator('Placing Order...'));
        axios_1.default
            .post(query, body)
            .then((response) => {
            Then?.();
        })
            .catch((err) => {
            dispatch(setSnackBar("Unable to post order"));
            Catch?.(err);
        }).finally(() => {
            dispatch(clearLoadingIndicator());
        });
    };
}
exports.postOrder = postOrder;
