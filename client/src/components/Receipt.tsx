import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getCurrentVehicle } from "../store/selectors";
import { stateTypes } from "../types";
import formattedTitle from "../utils/formattedTitle";
import getPriceStr from "../utils/getPrice";


const Receipt = () => {
  const {
    title,
    model,
    vehicleRentPerDay,
    vehicleRentPerMonth,
    driverRentPerDay,
    driverRentPerMonth,
    driverAvailable,
    insuranceRentPerDay,
    insuranceRentPerMonth,
    insuranceAvailable,
    cityId,
    companyId,
  } = useSelector(getCurrentVehicle);

  const {
    addDriver,
    addInsurance,
    chargeByDay,
    startDate,
    endDate,
    location: { address },
  } = useSelector((state: stateTypes) => state.formFields);

  return (
    <StyledContainerGrid
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          City
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {formattedTitle(cityId)}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Location
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">{address}</StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Company
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {formattedTitle(companyId)}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Vehicle
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {`${formattedTitle(title)} - ${model}`}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Vehicle Rent
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            USD{" "}
            {chargeByDay
              ? getPriceStr(vehicleRentPerDay) + "/Day"
              : getPriceStr(vehicleRentPerMonth) + "/Month"}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Start Date
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {startDate.toDateString()}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Start Time
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {startDate.getHours() +
              ":" +
              startDate.getMinutes() +
              ":" +
              startDate.getSeconds()}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          End Date
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {endDate.toDateString()}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          End Time
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {endDate.getHours() +
              ":" +
              endDate.getMinutes() +
              ":" +
              endDate.getSeconds()}
          </StyledTypography>
          <CheckCircleOutlineIcon color="primary" />
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Driver Included
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {addDriver ? "Yes" : "No"}
          </StyledTypography>

          {addDriver ? (
            <CheckCircleOutlineIcon color="primary" />
          ) : (
            <BlockIcon color="error" />
          )}
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      {driverAvailable && addDriver && (
        <>
          <StyledContainerGrid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledTypography variant="h6" component="th">
              Driver Rent
            </StyledTypography>
            <StyledBox component="span">
              <StyledTypography variant="caption">
                {chargeByDay
                  ? getPriceStr(driverRentPerDay) + "/Day"
                  : getPriceStr(driverRentPerMonth || driverRentPerDay * 30) + "/Month"}
              </StyledTypography>

              <CheckCircleOutlineIcon color="primary" />
            </StyledBox>
          </StyledContainerGrid>
          <Divider />
        </>
      )}

      <StyledContainerGrid
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography variant="h6" component="th">
          Insurance Included
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {addInsurance ? "Yes" : "No"}
          </StyledTypography>
          {addInsurance ? (
            <CheckCircleOutlineIcon color="primary" />
          ) : (
            <BlockIcon color="error" />
          )}
        </StyledBox>
      </StyledContainerGrid>
      <Divider />
      {insuranceAvailable && addInsurance && (
        <>
          <StyledContainerGrid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledTypography variant="h6" component="th">
              Insurance Rent
            </StyledTypography>
            <StyledBox component="span">
              <StyledTypography variant="caption">
                USD{" "}
                {chargeByDay
                  ? (getPriceStr(insuranceRentPerDay)) + "/Day"
                  : getPriceStr(insuranceRentPerMonth || insuranceRentPerDay * 30) +
                    "/Month"}
              </StyledTypography>

              <CheckCircleOutlineIcon color="primary" />
            </StyledBox>
          </StyledContainerGrid>
          <Divider />
        </>
      )}
    </StyledContainerGrid>
  );
};

export default memo(Receipt);

const StyledContainerGrid = styled(Grid)({
  marginTop: 18,
});

const StyledBox = styled(Box)({
  display: "inline-flex",
  align: "center",
});

const StyledTypography = styled(Typography as any)({
  fontSize: "16px",
  margin: "0 5px",
});
