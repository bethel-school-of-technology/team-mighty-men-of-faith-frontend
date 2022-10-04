import { Avatar, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { tempVehiclesItemType } from "../types";
import formattedTitle from "../utils/formattedTitle";


interface schema {
  car: tempVehiclesItemType;
  onSelect: (arg: number) => void;
}
export default function SingleVehicleOption({ car, onSelect }: schema) {
  return (
    <StyledMenuItem
      key={car.id}
      value={formattedTitle(car.title)}
      onClick={() => onSelect(car.id)}
    >
      <StyledAvatar alt={car.title} src={car.avatar} variant="square" />
      <StyledDetailsDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySecondaryHeading variant={"h6"}>
            {formattedTitle(car.title)}
          </StyledTypographySecondaryHeading>
          <StyledTypographySecondaryHeading
            variant={"h6"}
            sx={{ marginLeft: 5 }}
          >
            {car.model}
          </StyledTypographySecondaryHeading>
        </StyledFlexBoxDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySmallFont>
            Rs{car.vehicleRentPerDay}/day
          </StyledTypographySmallFont>
          <StyledTypographySmallFont sx={{ marginLeft: 5 }}>
            Rs{car.vehicleRentPerMonth || car.vehicleRentPerDay * 30}
            /Month
          </StyledTypographySmallFont>
        </StyledFlexBoxDiv>
      </StyledDetailsDiv>
    </StyledMenuItem>
  );
}

const StyledMenuItem = styled(MenuItem)({
  padding: 10,
});
const StyledAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  borderRadius: 10,
  backgroundColor: "lightgray",
  objectFit: "fill",
});

const StyledDetailsDiv = styled("div")({
  flexGrow: 1,
  margin: "0 10px",
  alignSelf: "center",
});
const StyledFlexBoxDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledTypographySecondaryHeading = styled(Typography)(({theme}) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
const StyledTypographySmallFont = styled(Typography)(({theme}) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
}));
