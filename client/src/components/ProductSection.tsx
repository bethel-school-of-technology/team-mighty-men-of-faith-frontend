import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { stateTypes } from "../types";
import InfoArea from "./InfoArea";

export default function ProductSection() {
  const { paraTwo, paraOne, paraThree, paraFour } = useSelector(
    (state: stateTypes) => state.paras
  );

  return (
    <StyledContainerDiv>
      <Typography variant="h4">Great Deals</Typography>
      <Typography variant="subtitle1" color="GrayText">
        {paraTwo}
      </Typography>

      <Grid container>
        <Grid item xs={12} md={4}>
          <InfoArea
            title="Economy"
            description={paraOne}
            Icon={MonetizationOnIcon}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoArea
            title="Insurance"
            description={paraThree}
            Icon={VerifiedUser}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoArea
            title="24/7 Service"
            description={paraFour}
            Icon={QueryBuilderIcon}
          />
        </Grid>
      </Grid>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled("div")({
  marginTop: 55,
  textAlign: "center",
});
