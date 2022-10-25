"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DriveEta_1 = __importDefault(require("@mui/icons-material/DriveEta"));
const x_date_pickers_1 = require("@mui/x-date-pickers");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const moment_1 = __importDefault(require("moment"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const selectors_1 = require("../store/selectors");
const formattedTitle_1 = __importDefault(require("../utils/formattedTitle"));
const getPrice_1 = __importDefault(require("../utils/getPrice"));
const Cities_1 = __importDefault(require("./Cities"));
const Companies_1 = __importDefault(require("./Companies"));
const FormContainer = (0, react_1.forwardRef)(({ disableInitials }, ref) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const currentCity = (0, react_redux_1.useSelector)((state) => state.currentCity);
    const { driverRentPerDay, vehicleRentPerDay, insuranceRentPerDay, vehicleRentPerMonth, driverRentPerMonth, insuranceRentPerMonth, driverAvailable, insuranceAvailable, title, model, _id, } = (0, react_redux_1.useSelector)(selectors_1.getCurrentVehicle);
    const citiesRef = (0, react_1.useRef)(null);
    const companiesRef = (0, react_1.useRef)(null);
    const [showVehiclesSelection, setShowVehiclesSelection] = (0, react_1.useState)(false);
    const [showCities, setShowCities] = (0, react_1.useState)(false);
    const { 
    // startDateError,
    endDateError, 
    // startTimeError,
    endTimeError, } = (0, react_redux_1.useSelector)((state) => state.errors);
    const { addDriver, addInsurance, chargeByDay, startDate, endDate } = (0, react_redux_1.useSelector)((state) => state.formFields);
    (0, react_1.useEffect)(() => {
        const timeDifference = endDate.getTime() - startDate.getTime();
        if (chargeByDay) {
            if (timeDifference < 60000) {
                if (timeDifference < -86400000) {
                    (0, react_redux_1.batch)(() => {
                        dispatch((0, actions_1.setEndDateErrorTrue)());
                        if (endTimeError) {
                            dispatch((0, actions_1.setEndTimeErrorFalse)());
                        }
                    });
                }
                else {
                    (0, react_redux_1.batch)(() => {
                        dispatch((0, actions_1.setEndTimeErrorTrue)());
                        if (endDate.getDate() - startDate.getDate() < 0) {
                            dispatch((0, actions_1.setEndDateErrorTrue)());
                        }
                        else if (endDateError) {
                            dispatch((0, actions_1.setEndDateErrorFalse)());
                        }
                    });
                }
            }
            else if (endDateError && endTimeError) {
                (0, react_redux_1.batch)(() => {
                    dispatch((0, actions_1.setEndDateErrorFalse)());
                    dispatch((0, actions_1.setEndTimeErrorFalse)());
                });
            }
            else if (endDateError) {
                dispatch((0, actions_1.setEndDateErrorFalse)());
            }
            else if (endTimeError) {
                dispatch((0, actions_1.setEndTimeErrorFalse)());
            }
        }
        else {
            if (endDate.getTime() <= startDate.getTime() + 86400000) {
                (0, react_redux_1.batch)(() => {
                    dispatch((0, actions_1.setEndDateErrorTrue)());
                    if (endTimeError) {
                        dispatch((0, actions_1.setEndTimeErrorFalse)());
                    }
                });
            }
            else if (endDate.getDate() / startDate.getDate() !== 1) {
                (0, react_redux_1.batch)(() => {
                    dispatch((0, actions_1.setEndDateErrorTrue)());
                    if (endTimeError) {
                        dispatch((0, actions_1.setEndTimeErrorFalse)());
                    }
                });
            }
            else if (endDateError && endTimeError) {
                (0, react_redux_1.batch)(() => {
                    dispatch((0, actions_1.setEndDateErrorFalse)());
                    dispatch((0, actions_1.setEndTimeErrorFalse)());
                });
            }
            else if (endDateError) {
                dispatch((0, actions_1.setEndDateErrorFalse)());
            }
            else if (endTimeError) {
                dispatch((0, actions_1.setEndTimeErrorFalse)());
            }
        }
        // eslint-disable-next-line
    }, [startDate, endDate, chargeByDay]);
    const onClickDriver = (e) => {
        switch (e.target.checked) {
            case true:
                return dispatch((0, actions_1.setAddDriver)());
            case false:
                return dispatch((0, actions_1.setRemoveDriver)());
            default:
                return false;
        }
    };
    const onClickInsurance = (e) => {
        switch (e.target.checked) {
            case true:
                return dispatch((0, actions_1.setAddInsurance)());
            case false:
                return dispatch((0, actions_1.setRemoveInsurance)());
            default:
                return false;
        }
    };
    const fucktitle = Boolean(_id)
        ? `${(0, formattedTitle_1.default)(title)} - ${model || ""}`
        : "Choose Your Vehicle";
    const disabled = Boolean(!currentCity.length || !_id);
    return (<StyledContainerDiv ref={ref}>
        <material_1.Grid container spacing={3}>
          <material_1.Grid item xs={12} md={6}>
            <StyledInputLabel>Choose Your City</StyledInputLabel>
            <StyledFormControl disabled={disableInitials} fullWidth variant="outlined">
              <StyledInputLabelValue shrink={false}>
                {(0, formattedTitle_1.default)(currentCity) || "Choose Your City"}
              </StyledInputLabelValue>
              <material_1.Select open={showCities} onOpen={() => setShowCities(true)} onClose={() => setShowCities(false)} 
    // innerRef={citiesRef}
    MenuProps={{
            anchorOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            // getContentAnchorEl: null,
        }}>
                <Cities_1.default ref={citiesRef} setShowCitiesFalse={() => setShowCities(false)}/>
              </material_1.Select>
            </StyledFormControl>
          </material_1.Grid>

          <material_1.Grid item xs={12} md={6}>
            <StyledInputLabel>Choose Your Vehicle</StyledInputLabel>

            <StyledFormControl disabled={!Boolean(currentCity.length) || disableInitials} fullWidth variant="outlined">
              <StyledInputLabelValue shrink={false}>
                {fucktitle}
              </StyledInputLabelValue>

              <material_1.Select open={showVehiclesSelection} onOpen={() => setShowVehiclesSelection(true)} onClose={() => setShowVehiclesSelection(false)} 
    // innerRef={companiesRef}
    MenuProps={{
            anchorOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            // getContentAnchorEl: null,
        }}>
                <Companies_1.default ref={companiesRef} setShowVehiclesFalse={() => setShowVehiclesSelection(false)}/>
              </material_1.Select>
            </StyledFormControl>
          </material_1.Grid>

          <material_1.Grid item xs={12} md={6}>
            <x_date_pickers_1.MobileDatePicker disabled={disabled} label="Start Date" minDate={(0, moment_1.default)(new Date())} value={startDate} onChange={(e) => {
            dispatch((0, actions_1.setStartDate)(e._d));
        }} renderInput={(props) => <material_1.TextField {...props} fullWidth/>}/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <x_date_pickers_1.MobileTimePicker disabled={disabled} label="Start Time" value={startDate} onChange={(e) => dispatch((0, actions_1.setStartDate)(e._d))} renderInput={(props) => <material_1.TextField {...props} fullWidth/>}/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <x_date_pickers_1.MobileDatePicker disabled={disabled} shouldDisableDate={(date) => chargeByDay
            ? false
            : date._d.getDate() / startDate.getDate() !== 1} label="End Date" minDate={(0, moment_1.default)(startDate)} value={endDate} onChange={(e) => dispatch((0, actions_1.setEndDate)(e._d))} renderInput={(props) => <material_1.TextField {...props} fullWidth/>}/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <x_date_pickers_1.MobileTimePicker disabled={disabled} label="End Time" value={endDate} onChange={(e) => dispatch((0, actions_1.setEndDate)(e._d))} renderInput={(props) => <material_1.TextField {...props} fullWidth/>}/>
          </material_1.Grid>
        </material_1.Grid>

        {driverAvailable && (<>
            <StyledStack alignItems="center" justifyContent="space-between" direction="row">
              <material_1.FormControlLabel value="end" control={<material_1.Checkbox disabled={disabled} color="primary" checked={addDriver} onChange={onClickDriver}/>} label="Driver" labelPlacement="end"/>
              <material_1.Typography>
                USD{" "}
                {chargeByDay
                ? (0, getPrice_1.default)(driverRentPerDay) + "/Day"
                : (0, getPrice_1.default)(driverRentPerMonth || driverRentPerDay * 30) + "/Month"}
              </material_1.Typography>
            </StyledStack>
            <material_1.Divider />
          </>)}

        {insuranceAvailable && (<>
            <StyledStack alignItems="center" justifyContent="space-between" direction="row">
              <material_1.FormControlLabel value="end" control={<material_1.Checkbox disabled={disabled} color="primary" checked={addInsurance} onChange={onClickInsurance}/>} label="Insurance" labelPlacement="end"/>
              <material_1.Typography>
                USD{" "}
                {chargeByDay
                ? (0, getPrice_1.default)(insuranceRentPerDay) + "/Day"
                : (0, getPrice_1.default)(insuranceRentPerMonth || insuranceRentPerDay * 30) +
                    "/Month"}
              </material_1.Typography>
            </StyledStack>
            <material_1.Divider />
          </>)}

        <StyledStack alignItems="center" justifyContent="space-between" direction="row">
          <span style={{ padding: 10 }}>
            <material_1.FormControlLabel value="start" control={<DriveEta_1.default color="action"/>} label="Vehicle Rent" labelPlacement="end"/>
          </span>

          <material_1.Typography>
            USD{" "}
            {chargeByDay
            ? (0, getPrice_1.default)(vehicleRentPerDay) + "/Day"
            : (0, getPrice_1.default)(vehicleRentPerMonth || vehicleRentPerDay * 30) + "/Month"}
          </material_1.Typography>
        </StyledStack>
        <material_1.Divider />
        <StyledSwitchGrid container alignItems="center" justifyContent="space-between" direction="row">
          <material_1.Typography variant="subtitle2">Rent/Month</material_1.Typography>
          <material_1.Switch 
    // disabled={disabled}
    // color="default"
    checked={chargeByDay} onChange={(e) => e.target.checked
            ? dispatch((0, actions_1.shouldChargeByDay)())
            : dispatch((0, actions_1.shouldChargeByMonth)())} name="checkedB" inputProps={{ "aria-label": "primary checkbox" }}/>
          <material_1.Typography variant="subtitle2">Rent/Day</material_1.Typography>
        </StyledSwitchGrid>
        <material_1.Divider />
      </StyledContainerDiv>);
});
FormContainer.displayName = "FormContainer";
exports.default = (0, react_1.memo)(FormContainer);
const StyledContainerDiv = (0, styles_1.styled)("div")({
    overflow: "hidden",
});
const StyledInputLabel = (0, styles_1.styled)(material_1.InputLabel)({
    fontSize: "12px",
});
const StyledInputLabelValue = (0, styles_1.styled)(material_1.InputLabel)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
});
const StyledFormControl = (0, styles_1.styled)(material_1.FormControl)({
    whiteSpace: "nowrap",
    margin: "10px 0",
});
const StyledStack = (0, styles_1.styled)(material_1.Stack)({
    marginTop: 20,
});
const StyledSwitchGrid = (0, styles_1.styled)(material_1.Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
});
