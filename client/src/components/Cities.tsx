import { CircularProgress, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCity } from "../store/actions";
import { stateTypes } from "../types";
import formattedTitle from "../utils/formattedTitle";
import useEffectCities from "../hooks/useEffectCities";

interface schema {
  setShowCitiesFalse: () => void;
}
const Cities = forwardRef((props: schema, ref: any) => {
  const { setShowCitiesFalse } = props;

  const cities = useSelector((state: stateTypes) => state.whiteListCities);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffectCities({ setLoading });

  return (
    <StyledContainerDiv ref={ref}>
      {cities.map((city, index) => (
        <StyledMenuItem
          key={index}
          onClick={() => {
            dispatch(setCurrentCity(city));
            setShowCitiesFalse();
          }}
        >
          <StyledTypography variant={"h6"}>
            {formattedTitle(city)}
          </StyledTypography>
        </StyledMenuItem>
      ))}

      {loading && (
        <StyledCircularProgressDiv>
          <CircularProgress color="primary" />
        </StyledCircularProgressDiv>
      )}
    </StyledContainerDiv>
  );
});

Cities.displayName = "Cities";
export default Cities;

const StyledContainerDiv = styled("div")({
  width: "100%",
  backgroundColor: "lightgray",
  padding: 0,
});

const StyledMenuItem = styled(MenuItem)({
  boxShadow: "none",
  padding: 10,
  backgroundColor: "white",
  "&&:hover": {
    backgroundColor: "white",
  },
});
const StyledTypography = styled(Typography)(({theme}) => ({
  fontSize: 20,
  color: theme.palette.text.secondary,
  margin: "0 10px",
  alignSelf: "center",
}));

const StyledCircularProgressDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
