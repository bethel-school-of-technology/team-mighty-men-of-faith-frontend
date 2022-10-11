import { tempVehiclesItemType } from "./../../types/index";
/* eslint-disable no-useless-escape */
import { batch } from "react-redux";

import axios from "axios";

import {
  addDriverConst,
  addInsuranceConst,
  chargeByDayConst,
  chargeByMonthConst,
  clearLoadingIndicatorConst,
  clearSnackBarConst,
  notFound,
  removeDriverConst,
  removeInsuranceConst,
  setCompaniesConst,
  setCurrentCityConst,
  setEndDateConst,
  setEndDateErrorFalseConst,
  setEndDateErrorTrueConst,
  setEndTimeErrorFalseConst,
  setEndTimeErrorTrueConst,
  setLoadingIndicatorConst,
  setLocationConst,
  setSelectedTempVehicleIdConst,
  setSnackBarConst,
  setStartDateConst,
  setStartDateErrorFalseConst,
  setStartDateErrorTrueConst,
  setStartTimeErrorFalseConst,
  setStartTimeErrorTrueConst,
  setTempVehiclesConst,
  setVehiclesConst,
  setWhiteListCitiesConst
} from "../../constants";
import {
  bookingActionType,
  companiesActionType,
  companiesItemType,
  // tempVehiclesItemType,
  dateActionType,
  emptyActionType,
  locationActionType,
  setTempVehiclesActionType,
  setVehiclesActionType,
  stateTypes,
  stringActionType,
  whiteListCitiesActionType
} from "../../types";

export function setLoadingIndicator(payload?: string): stringActionType {
  return {
    type: setLoadingIndicatorConst,
    payload: payload ?? "",
  };
}

export function clearLoadingIndicator() {
  return {
    type: clearLoadingIndicatorConst,
  };
}

export function setSnackBar(payload: string): stringActionType {
  return {
    type: setSnackBarConst,
    payload,
  };
}
export function clearSnackBar(): any {
  return {
    type: clearSnackBarConst,
  };
}

export function setWhiteListCities(
  payload: whiteListCitiesActionType["payload"]
): whiteListCitiesActionType {
  return {
    type: setWhiteListCitiesConst,
    payload,
  };
}

export function setCompanies(
  payload: companiesActionType["payload"]
): companiesActionType {
  return {
    type: setCompaniesConst,
    payload,
  };
}

export function setVehicles(
  payload: setVehiclesActionType["payload"]
): setVehiclesActionType {
  return {
    type: setVehiclesConst,
    payload,
  };
}
export function setTempVehicles(
  payload: setTempVehiclesActionType["payload"]
): setTempVehiclesActionType {
  return {
    type: setTempVehiclesConst,
    payload,
  };
}

export function setBooking(
  payload: bookingActionType["payload"]
): bookingActionType {
  return {
    type: setVehiclesConst,
    payload,
  };
}

export function setCurrentCity(payload: string): stringActionType {
  return {
    type: setCurrentCityConst,
    payload,
  };
}
export function setSelectedVehicleId(payload: string): stringActionType {
  return {
    type: setSelectedTempVehicleIdConst,
    payload,
  };
}
export function setStartDate(
  payload: dateActionType["payload"]
): dateActionType {
  return {
    type: setStartDateConst,
    payload,
  };
}
export function setEndDate(payload: dateActionType["payload"]): dateActionType {
  return {
    type: setEndDateConst,
    payload,
  };
}
export function setStartDateErrorTrue() {
  return {
    type: setStartDateErrorTrueConst,
  };
}
export function setStartDateErrorFalse() {
  return {
    type: setStartDateErrorFalseConst,
  };
}
export function setEndDateErrorTrue() {
  return {
    type: setEndDateErrorTrueConst,
  };
}
export function setEndDateErrorFalse() {
  return {
    type: setEndDateErrorFalseConst,
  };
}
export function setStartTimeErrorTrue() {
  return {
    type: setStartTimeErrorTrueConst,
  };
}
export function setStartTimeErrorFalse() {
  return {
    type: setStartTimeErrorFalseConst,
  };
}
export function setEndTimeErrorTrue() {
  return {
    type: setEndTimeErrorTrueConst,
  };
}
export function setEndTimeErrorFalse() {
  return {
    type: setEndTimeErrorFalseConst,
  };
}
export function setLocation(
  payload: locationActionType["payload"]
): locationActionType {
  return {
    type: setLocationConst,
    payload,
  };
}

export function setAddDriver(): emptyActionType {
  return {
    type: addDriverConst,
  };
}
export function setRemoveDriver(): emptyActionType {
  return {
    type: removeDriverConst,
  };
}
export function setAddInsurance(): emptyActionType {
  return {
    type: addInsuranceConst,
  };
}
export function setRemoveInsurance(): emptyActionType {
  return {
    type: removeInsuranceConst,
  };
}
export function shouldChargeByDay(): emptyActionType {
  return {
    type: chargeByDayConst,
  };
}
export function shouldChargeByMonth(): emptyActionType {
  return {
    type: chargeByMonthConst,
  };
}

interface promiseSchema {
  Then?: (arg?: any) => any;
  Catch?: (arg?: any) => any;
  InvalidRequest?: (arg?: any) => any;
}
export function fetchWhiteListCities({ Then, Catch }: promiseSchema) {
  return (dispatch: any) => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_API}/destinations/USA/cities`)
      .then((result) => {
        const cities: string[] = [];
        result.data.forEach((cityId: string) => {
          cities.push(cityId);
        });

        batch(() => {
          dispatch(setWhiteListCities(cities));
          dispatch(setCurrentCity(cities[0]));
        });
        Then?.();
      })
      .catch((err) => {
        batch(() => {
          dispatch(setSnackBar("Unable to verify request at the moment!"));
        });
        Catch?.(err);
      });
  };
}

export function fetchCompanies({ Then, Catch, InvalidRequest }: promiseSchema) {
  return (dispatch: any, getState: () => stateTypes) => {
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
    } else if (!whiteListCities.some((city) => city === currentCity)) {
      dispatch(setSnackBar("Invalid City To Fetch"));

      InvalidRequest?.();
      return;
    }

    axios
      .get(`${process.env.REACT_APP_BACK_END_API}/companies/USA/${currentCity}`)
      .then((response) => {
        const companies: any = {};

        response.data.forEach((company: companiesItemType) => {
          companies[company._id] = company;
        });

        dispatch(
          setCompanies({
            cityId: currentCity,
            data: companies,
          })
        );

        Then?.();
      })
      .catch((error) => {
        dispatch(setSnackBar("Error Fetching Available Companies! 🙁"));

        Catch?.(error);
      });
  };
}

interface vehicleSchema extends promiseSchema {
  _id: string;
}
export function fetchVehicle({ Then, Catch, _id }: vehicleSchema) {
  return (dispatch: any) => {
    dispatch(setLoadingIndicator("Fetching vehicle information..."));

    axios
      .get(`${process.env.REACT_APP_BACK_END_API}/vehicle/${_id}`)
      .then((response) => {
        const result = response.data;

        batch(() => {
          dispatch(
            setVehicles({
              [result?._id]: result,
            })
          );

          dispatch(clearLoadingIndicator());
          dispatch(setCurrentCity(result?.cityId));
        });

        Then?.();
      })
      .catch((err) => {
        batch(() => {
          dispatch(setSnackBar("Unable to fetch vehicle at the moment"));
          dispatch(clearLoadingIndicator());
        });
        Catch?.(err);
      });
  };
}

interface fetchTempVehiclesSchema extends promiseSchema {
  countryParam: string | null;
  cityParam: string | null;
  companyId: string;
}

export function fetchTempVehicles({
  countryParam,
  cityParam,
  companyId,
  Then,
  Catch,
}: fetchTempVehiclesSchema) {
  return (dispatch: any) => {
    let query = `${
      process.env.REACT_APP_BACK_END_API
    }/vehicles/${companyId}?country=${countryParam ?? "USA"}`;

    if (cityParam) query += `&city=${cityParam}`;

    axios
      .get(query)
      .then((response) => {
        const vehicles: tempVehiclesItemType[] = [];

        response.data.forEach((vehicle: any) => {
          vehicles.push({
            ...vehicle,
          });
        });

        const cityId = cityParam || notFound;
        batch(() => {
          dispatch(
            setTempVehicles({
              cityId,
              countryParam,
              cityParam,
              companyId,
              vehicles,
            })
          );
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
