import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleMapReact from "google-map-react";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { stateTypes } from "../types";
import CustomizedInputBase from "./CustomizedInputBase";

const key = "AIzaSyDJjNUjcRJeT5FdhYJxg2UCd6-XoiCfQwo";

interface schema {
  containerHeight: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker = (...props:any) => <LocationOnIcon />;

const Location = ({ containerHeight }: schema) => {
  const {
    location: { lat, lng, isDefault },
  } = useSelector((state: stateTypes) => state.formFields);

  return (
    <StyledContainer
      style={{
        height: containerHeight ?? 300,
      }}
    >
      <CustomizedInputBase />
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={{
          lat,
          lng,
        }}
        defaultZoom={11}
      >
        {!isDefault && <Marker lat={lat} lng={lng} />}
      </GoogleMapReact>
    </StyledContainer>
  );
};

export default memo(Location);

const StyledContainer = styled(Container)({
  padding: 0,
  width: "100%",
  position: "relative",
});
