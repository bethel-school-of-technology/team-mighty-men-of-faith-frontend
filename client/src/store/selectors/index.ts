import { createSelector } from "reselect";
import {
    companiesItemType,
    companiesStateType,
    defaultSelectedVehicle,
    defaultTempVehicles,
    stateTypes,
    vehiclesItemType,
    vehiclesStateType
} from "../../types";
import { tempVehiclesStateType } from "./../../types/index";

const vehiclesSelector = (state: stateTypes) => state.vehicles;
const tempVehiclesSelector = (state: stateTypes) => state.tempVehicles;
const selectedTempVehicleSelector = (state: stateTypes) =>
  state.selectedTempVehicleId;
const companiesSelector = (state: stateTypes) => state.companies;
const citySelector = (state: stateTypes) => state.currentCity;
const idSelector = (state: stateTypes, id: string) => id;

const getThemCompanies = (
  city: string,
  companies: companiesStateType
): companiesItemType[] => {
  return Object.values(companies[city] ?? []);
};

export const getCompanies = createSelector(
  citySelector,
  companiesSelector,
  getThemCompanies
);

// ---------------------->
const getThemTempVehicles = (
  vehicles: tempVehiclesStateType,
  city: string,
  companyId: string
) => {
  return vehicles[city]?.[companyId] ?? defaultTempVehicles;
};

export const getTempVehicles = () =>
  createSelector(
    tempVehiclesSelector,
    citySelector,
    idSelector,

    getThemTempVehicles
  );

function currentVehicle(
  vehicles: vehiclesStateType,
  selectVehicleId: string | number
): vehiclesItemType {
  return vehicles[selectVehicleId] ?? defaultSelectedVehicle;
}

export const getCurrentVehicle = createSelector(
  vehiclesSelector,
  selectedTempVehicleSelector,

  currentVehicle
);
