export interface booleanActionType {
  type: string;
  payload: boolean;
}

// ---------------------->Index<--------------------
export interface indexActionType {
  type: string;
  payload: number;
}
// ---------------------->string<--------------------
export interface stringActionType {
  type: string;
  payload: string;
}

export interface numberActionType {
  type: string;
  payload: number;
}
// ---------------------->LoadingIndicator<--------------------
export interface loadingIndicatorStateType {
  loading: boolean;
  helperText: string;
}

export type whiteListCitiesActionType = {
  type: string;
  payload: string[];
};
// ---------------------->Companies<--------------------
export type companiesItemType = {
  avatar: string;
  title: string;
  _id: string;
};
export type companiesStateType = {
  [city: string]: {
    [company: string]: companiesItemType;
  };
};
export type companiesActionType = {
  type: string;
  payload: {
    cityId: string;
    data: { [company: string]: companiesItemType };
  };
};

// ---------------------->vehicles<--------------------
export const defaultSelectedVehicle = {
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

export type vehiclesItemType = {
  countryId: string;
  cityId: string;

  driverAvailable: boolean;
  driverRentPerDay: number;
  driverRentPerMonth: number;
  images: string[];
  insuranceAvailable: boolean;
  insuranceRentPerDay: number;
  insuranceRentPerMonth: number;
  model: number;
  vehicleAvailable: boolean;
  vehicleRentPerDay: number;
  vehicleRentPerMonth: number;
  title: string;

  _id: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
};
export type vehiclesStateType = { [id: string]: vehiclesItemType };

export type setVehiclesActionType = {
  type: string;
  payload: vehiclesStateType;
};
// ---------------------->temp vehicles<--------------------
export const defaultSelectedTempVehicle = {
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

export type tempVehiclesItemType = {
  title: string;

  countryId: string;
  cityId: string;

  images: string[];
  model: number;
  vehicleRentPerDay: number;
  vehicleRentPerMonth: number;
  _id: string;
  companyId: string;
};
export type tempVehiclesStateType = {
  [city: string]: {
    [company: string]: {
      countryParam: string | null;
      cityParam: string | null;

      vehicles: tempVehiclesItemType[];
    };
  };
};
export type setTempVehiclesActionType = {
  type: string;
  payload: {
    cityId: string;
    countryParam: string | null;
    cityParam: string | null;
    companyId: string;
    vehicles: tempVehiclesItemType[];
  };
};
export const defaultTempVehicles = {
  countryParam: null,
  cityParam: null,
  vehicles: [],
};
// ---------------------->selectedVehicle<--------------------
export type selectedVehicleActionType = {
  type: string;
  payload: tempVehiclesItemType;
};

// ---------------------->Booking<--------------------
export type bookingStateType =
  | {
      location: any;
      company: string;
      vehicle: string;
      city: string;
      model: number;

      countryId: string;
      cityId: string;
      startDate: Date;
      startTime: Date;
      endDate: Date;
      endTime: Date;
      driver: boolean;
      insurance: boolean;
    }
  | {};

export type bookingActionType = {
  type: string;
  payload: bookingStateType;
};

export type emptyActionType = {
  type: string;
};
type dateType = Date;
export type dateActionType = {
  type: string;
  payload: dateType;
};
// ---------------------->errors<--------------------
export interface errorsStateType {
  startDateError: boolean;
  startTimeError: boolean;
  endDateError: boolean;
  endTimeError: boolean;
}
export interface errorsActionType {
  type: string;
}
// ---------------------->location<--------------------
export interface locationStateType {
  lat: number;
  lng: number;
  address: string;
  isDefault: boolean;
}
export interface locationActionType {
  type: string;
  payload: {
    lat: number;
    lng: number;
    address: string;
  };
}
// ---------------------->formFields<--------------------
export interface formFieldsStateType {
  addDriver: boolean;
  addInsurance: boolean;
  chargeByDay: boolean;
  startDate: dateType;
  endDate: dateType;
  location: locationStateType;
}
// ---------------------->generalParas<--------------------
export interface generalParasStateType {
  aboutUs: string;
  privacyPolicy: string;
  termsOfService: string;
  paraOne: string;
  paraTwo: string;
  paraThree: string;
  paraFour: string;
  paraFive: string;
}

export interface generalParasActionsType {
  type: string;
  payload: generalParasStateType;
}
// ---------------------->Main Application State<--------------------
export interface stateTypes {
  whiteListCities: string[];
  loadingIndicator: loadingIndicatorStateType;

  companies: companiesStateType;
  vehicles: vehiclesStateType;
  tempVehicles: tempVehiclesStateType;
  booking: bookingStateType;
  currentCity: string;
  selectedTempVehicleId: string;
  errors: errorsStateType;

  formFields: formFieldsStateType;
  paras: generalParasStateType;
  snackBar: string;
}
// ----------------------><--------------------
