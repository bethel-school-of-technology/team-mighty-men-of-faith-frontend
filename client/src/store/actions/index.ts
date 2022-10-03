import { tempVehiclesItemType } from "./../../types/index";
/* eslint-disable no-useless-escape */
import { batch } from "react-redux";

import axios from "axios";

import {
  whiteListCitiesActionType,
  companiesActionType,
  setVehiclesActionType,
  bookingActionType,
  stateTypes,
  stringActionType,
  companiesItemType,
  emptyActionType,
  locationActionType,
  generalParasActionsType,
  setTempVehiclesActionType,
  // tempVehiclesItemType,
  dateActionType,
  numberActionType,
} from "../../types";
import {
  setCompaniesConst,
  setVehiclesConst,
  setWhiteListCitiesConst,
  setCurrentCityConst,
  setSelectedTempVehicleIdConst,
  setStartDateConst,
  setEndDateConst,
  setStartDateErrorTrueConst,
  setStartDateErrorFalseConst,
  setEndDateErrorTrueConst,
  setEndDateErrorFalseConst,
  setStartTimeErrorTrueConst,
  setStartTimeErrorFalseConst,
  setEndTimeErrorTrueConst,
  setEndTimeErrorFalseConst,
  setLocationConst,
  addDriverConst,
  removeDriverConst,
  addInsuranceConst,
  removeInsuranceConst,
  chargeByDayConst,
  chargeByMonthConst,
  setAllParasConst,
  setSnackBarConst,
  clearSnackBarConst,
  setTempVehiclesConst,
  setLoadingIndicatorConst,
  clearLoadingIndicatorConst,
  notFound,
} from "../../constants";

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
export function setSelectedVehicleId(payload: number): numberActionType {
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
export function fetchWhiteListCities({
  Then,
  Catch,
  InvalidRequest,
}: promiseSchema) {
  return (dispatch: any) => {
    axios
      .get(`${process.env.BACK_END_API}/destinations/usa/cities`)
      .then((result) => {
        if (!result.data.success) return InvalidRequest?.();

        const cities: string[] = [];
        result.data.result.forEach((obj: any) => {
          cities.push(obj.cityId);
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
    const currentCity = getState().currentCity?.toLowerCase();

    if (!currentCity.length) {
      dispatch(setSnackBar("Not A Valid City To Fetch"));

      InvalidRequest?.();
      return;
    }
    if (!whiteListCities.length) {
      dispatch(setSnackBar("Unable to identify available cities!"));

      InvalidRequest?.();
      return;
    } else if (!whiteListCities.some((fuckCity) => fuckCity === currentCity)) {
      dispatch(setSnackBar("Invalid City To Fetch"));

      InvalidRequest?.();
      return;
    }

    axios
      .get(`${process.env.BACK_END_API}/companies/usa/${currentCity}`)
      .then((response) => {
        if (!response.data?.success) return InvalidRequest?.();

        const companies: any = {};

        response.data.result.forEach((company: companiesItemType) => {
          companies[company.id] = company;
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
  id: number;
}
export function fetchVehicle({
  Then,
  InvalidRequest,
  Catch,
  id,
}: vehicleSchema) {
  return (dispatch: any) => {
    if (id < 1) {
      dispatch(setSnackBar("Invalid id!"));
      return InvalidRequest?.();
    }

    dispatch(setLoadingIndicator("Fetching vehicle information..."));

    axios
      .get(`${process.env.BACK_END_API}/vehicle/${id}`)
      .then((response) => {
        if (!response.data.success) return InvalidRequest?.();
        const result = response.data?.result?.[0];

        batch(() => {
          dispatch(
            setVehicles({
              [result?.id]: result,
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
  filterParam: string | null;
  sortParam: string | null;
  companyId: string;
}

export function fetchTempVehicles({
  countryParam,
  cityParam,
  filterParam,
  sortParam,
  companyId,
  Then,
  InvalidRequest,
  Catch,
}: fetchTempVehiclesSchema) {
  return (dispatch: any) => {
    let query = `${process.env.BACK_END_API}/vehicles/${companyId.replace(
      /[+\-><\(\)~*\"@]+/g,
      " "
    )}?country=${countryParam ?? "usa"}`;

    if (cityParam) query += `&city=${cityParam}`;
    if (filterParam) query += `&filter=${filterParam}`;
    if (sortParam) query += `&sort=${sortParam}`;

    axios
      .get(query)
      .then((response) => {
        if (!response.data?.success) return InvalidRequest?.();

        const vehicles: tempVehiclesItemType[] = [];

        response.data.result.forEach((vehicle: any) => {
          vehicles.push({
            ...vehicle,
            companyId,
          });
        });

        const cityId = cityParam || notFound;
        batch(() => {
          dispatch(
            setTempVehicles({
              cityId,
              countryParam,
              cityParam,
              filterParam,
              sortParam,
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

export function setAllParas(
  payload: generalParasActionsType["payload"]
): generalParasActionsType {
  return {
    type: setAllParasConst,
    payload,
  };
}

interface letsContactUsSchema extends promiseSchema {
  name: string;
  number: string;
  email: string;
  body: string;
  subject: string;
}
export function letsContactUs({
  name,
  number,
  email,
  body,
  subject,
  Then,
  InvalidRequest,
  Catch,
}: letsContactUsSchema) {
  return (dispatch: any) => {
    if (
      !name.length ||
      !number.length ||
      !email.length ||
      !body.length ||
      !subject.length
    )
      return InvalidRequest?.();

    axios
      .post(`${process.env.BACK_END_API}/contact-us`, {
        name,
        number,
        email,
        body,
        subject,
      })
      .then((res) => {
        dispatch(
          setSnackBar("🎉 Your message has been successfully delivered!")
        );
        Then?.();
      })
      .catch((err) => {
        dispatch(setSnackBar("Unable to send your request at the moment!"));
        Catch?.(err);
      });
  };
}

interface searchQuerySchema extends promiseSchema {
  query: string;
}
export function searchQuery({
  query,
  Then,
  Catch,
  InvalidRequest,
}: searchQuerySchema) {
  axios
    .get(`${process.env.BACK_END_API}/search?q=${query}`)
    .then((response) => {
      if (!response.data?.success) return InvalidRequest?.();

      return Then?.(response.data.result);
    })
    .catch(err => Catch?.(err));
}
