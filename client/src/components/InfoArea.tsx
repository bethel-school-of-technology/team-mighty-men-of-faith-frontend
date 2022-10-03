import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import React from "react";

interface schema {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  title: string;
  description: string;
}

export default function InfoArea({ title, description, Icon }: schema) {
  return (
    <StyledContainerDiv>
      <Icon
        color={"primary"}
        sx={{
          fontSize: "61px",
        }}
      />

      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="GrayText">
        {description}
      </Typography>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled("div")({
  margin: "0 auto",
  marginTop: "24px",

  maxWidth: "360px",
  padding: "0px",
});