import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { MobileDatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Select,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setAddDriver,
  setAddInsurance,
  setEndDate,
  setEndDateErrorFalse,
  setEndDateErrorTrue,
  setEndTimeErrorFalse,
  setEndTimeErrorTrue,
  setRemoveDriver,
  setRemoveInsurance,
  setStartDate,
  shouldChargeByDay,
  shouldChargeByMonth
} from "../store/actions";
import { getCurrentVehicle } from "../store/selectors";
import { stateTypes } from "../types";
import formattedTitle from "../utils/formattedTitle";
import getPriceStr from "../utils/getPrice";
import Cities from "./Cities";
import Companies from "./Companies";

type schema = {
  disableInitials?: boolean;
};
type refType = HTMLDivElement | null;

const FormContainer = forwardRef<refType, schema>(
  ({ disableInitials }: schema, ref) => {
    const dispatch = useDispatch();
    const currentCity = useSelector((state: stateTypes) => state.currentCity);
    const {
      driverRentPerDay,
      vehicleRentPerDay,
      insuranceRentPerDay,
      vehicleRentPerMonth,
      driverRentPerMonth,
      insuranceRentPerMonth,
      driverAvailable,
      insuranceAvailable,
      title,
      model,
      _id,
    } = useSelector(getCurrentVehicle);
    const citiesRef = useRef(null);
    const companiesRef = useRef(null);

    const [showVehiclesSelection, setShowVehiclesSelection] = useState(false);
    const [showCities, setShowCities] = useState(false);

    const {
      // startDateError,
      endDateError,
      // startTimeError,
      endTimeError,
    } = useSelector((state: stateTypes) => state.errors);
    const { addDriver, addInsurance, chargeByDay, startDate, endDate } =
      useSelector((state: stateTypes) => state.formFields);

    useEffect(() => {
      const timeDifference = endDate.getTime() - startDate.getTime();

      if (chargeByDay) {
        if (timeDifference < 60000) {
          if (timeDifference < -86400000) {
            batch(() => {
              dispatch(setEndDateErrorTrue());
              if (endTimeError) {
                dispatch(setEndTimeErrorFalse());
              }
            });
          } else {
            batch(() => {
              dispatch(setEndTimeErrorTrue());
              if (endDate.getDate() - startDate.getDate() < 0) {
                dispatch(setEndDateErrorTrue());
              } else if (endDateError) {
                dispatch(setEndDateErrorFalse());
              }
            });
          }
        } else if (endDateError && endTimeError) {
          batch(() => {
            dispatch(setEndDateErrorFalse());
            dispatch(setEndTimeErrorFalse());
          });
        } else if (endDateError) {
          dispatch(setEndDateErrorFalse());
        } else if (endTimeError) {
          dispatch(setEndTimeErrorFalse());
        }
      } else {
        if (endDate.getTime() <= startDate.getTime() + 86400000) {
          batch(() => {
            dispatch(setEndDateErrorTrue());
            if (endTimeError) {
              dispatch(setEndTimeErrorFalse());
            }
          });
        } else if (endDate.getDate() / startDate.getDate() !== 1) {
          batch(() => {
            dispatch(setEndDateErrorTrue());
            if (endTimeError) {
              dispatch(setEndTimeErrorFalse());
            }
          });
        } else if (endDateError && endTimeError) {
          batch(() => {
            dispatch(setEndDateErrorFalse());
            dispatch(setEndTimeErrorFalse());
          });
        } else if (endDateError) {
          dispatch(setEndDateErrorFalse());
        } else if (endTimeError) {
          dispatch(setEndTimeErrorFalse());
        }
      }

      // eslint-disable-next-line
    }, [startDate, endDate, chargeByDay]);

    const onClickDriver = (e: any) => {
      switch (e.target.checked) {
        case true:
          return dispatch(setAddDriver());
        case false:
          return dispatch(setRemoveDriver());
        default:
          return false;
      }
    };
    const onClickInsurance = (e: any) => {
      switch (e.target.checked) {
        case true:
          return dispatch(setAddInsurance());
        case false:
          return dispatch(setRemoveInsurance());
        default:
          return false;
      }
    };

    const fucktitle = Boolean(_id)
      ? `${formattedTitle(title)} - ${model || ""}`
      : "Choose Your Vehicle";

    const disabled = Boolean(!currentCity.length || !_id);

    return (
      <StyledContainerDiv ref={ref}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledInputLabel>Choose Your City</StyledInputLabel>
            <StyledFormControl
              disabled={disableInitials}
              fullWidth
              variant="outlined"
            >
              <StyledInputLabelValue shrink={false}>
                {formattedTitle(currentCity) || "Choose Your City"}
              </StyledInputLabelValue>
              <Select
                open={showCities}
                onOpen={() => setShowCities(true)}
                onClose={() => setShowCities(false)}
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
                }}
              >
                <Cities
                  ref={citiesRef}
                  setShowCitiesFalse={() => setShowCities(false)}
                />
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledInputLabel>Choose Your Vehicle</StyledInputLabel>

            <StyledFormControl
              disabled={!Boolean(currentCity.length) || disableInitials}
              fullWidth
              variant="outlined"
            >
              <StyledInputLabelValue shrink={false}>
                {fucktitle}
              </StyledInputLabelValue>

              <Select
                open={showVehiclesSelection}
                onOpen={() => setShowVehiclesSelection(true)}
                onClose={() => setShowVehiclesSelection(false)}
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
                }}
              >
                <Companies
                  ref={companiesRef}
                  setShowVehiclesFalse={() => setShowVehiclesSelection(false)}
                />
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <MobileDatePicker
              disabled={disabled}
              label="Start Date"
              minDate={moment(new Date())}
              value={startDate}
              onChange={(e: any) => {
                dispatch(setStartDate(e._d));
              }}
              renderInput={(props: any) => <TextField {...props} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MobileTimePicker
              disabled={disabled}
              label="Start Time"
              value={startDate}
              onChange={(e: any) => dispatch(setStartDate(e._d))}
              renderInput={(props: any) => <TextField {...props} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MobileDatePicker
              disabled={disabled}
              shouldDisableDate={(date: any) =>
                chargeByDay
                  ? false
                  : date._d.getDate() / startDate.getDate() !== 1
              }
              label="End Date"
              minDate={moment(startDate)}
              value={endDate}
              onChange={(e: any) => dispatch(setEndDate(e._d))}
              renderInput={(props: any) => <TextField {...props} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MobileTimePicker
              disabled={disabled}
              label="End Time"
              value={endDate}
              onChange={(e: any) => dispatch(setEndDate(e._d))}
              renderInput={(props: any) => <TextField {...props} fullWidth />}
            />
          </Grid>
        </Grid>

        {driverAvailable && (
          <>
            <StyledStack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    disabled={disabled}
                    color="primary"
                    checked={addDriver}
                    onChange={onClickDriver}
                  />
                }
                label="Driver"
                labelPlacement="end"
              />
              <Typography>
                USD{" "}
                {chargeByDay
                  ? getPriceStr(driverRentPerDay) + "/Day"
                  : getPriceStr(driverRentPerMonth || driverRentPerDay * 30) + "/Month"}
              </Typography>
            </StyledStack>
            <Divider />
          </>
        )}

        {insuranceAvailable && (
          <>
            <StyledStack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    disabled={disabled}
                    color="primary"
                    checked={addInsurance}
                    onChange={onClickInsurance}
                  />
                }
                label="Insurance"
                labelPlacement="end"
              />
              <Typography>
                USD{" "}
                {chargeByDay
                  ? getPriceStr(insuranceRentPerDay) + "/Day"
                  : getPriceStr(insuranceRentPerMonth || insuranceRentPerDay * 30) +
                    "/Month"}
              </Typography>
            </StyledStack>
            <Divider />
          </>
        )}

        <StyledStack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <span style={{ padding: 10 }}>
            <FormControlLabel
              value="start"
              control={<DriveEtaIcon color="action" />}
              label="Vehicle Rent"
              labelPlacement="end"
            />
          </span>

          <Typography>
            USD{" "}
            {chargeByDay
              ? getPriceStr(vehicleRentPerDay) + "/Day"
              : getPriceStr(vehicleRentPerMonth || vehicleRentPerDay * 30) + "/Month"}
          </Typography>
        </StyledStack>
        <Divider />
        <StyledSwitchGrid
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="subtitle2">Rent/Month</Typography>
          <Switch
            // disabled={disabled}
            // color="default"
            checked={chargeByDay}
            onChange={(e: any) =>
              e.target.checked
                ? dispatch(shouldChargeByDay())
                : dispatch(shouldChargeByMonth())
            }
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography variant="subtitle2">Rent/Day</Typography>
        </StyledSwitchGrid>
        <Divider />
      </StyledContainerDiv>
    );
  }
);

FormContainer.displayName = "FormContainer";
export default memo(FormContainer);

const StyledContainerDiv = styled("div")({
  overflow: "hidden",
});
const StyledInputLabel = styled(InputLabel)({
  fontSize: "12px",
});
const StyledInputLabelValue = styled(InputLabel)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "black",
});

const StyledFormControl = styled(FormControl)({
  whiteSpace: "nowrap",
  margin: "10px 0",
});
const StyledStack = styled(Stack)({
  marginTop: 20,
});
const StyledSwitchGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
});
