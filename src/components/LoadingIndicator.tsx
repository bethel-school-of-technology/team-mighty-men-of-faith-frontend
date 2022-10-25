import { Backdrop, CircularProgress, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { stateTypes } from "../types";

interface schema {
  style?: any;
}
export default function LoadingIndicator({ style }: schema) {
  const { loading, helperText } = useSelector(
    (state: stateTypes) => state.loadingIndicator
  );

  return (
    <StyledBackdrop style={style} open={loading}>
      {Boolean(helperText?.length) && (
        <Typography variant="h6" color={"primary"}>
          {helperText}
        </Typography>
      )}
      <CircularProgress size={50} color={"primary"} />
    </StyledBackdrop>
  );
}

const StyledBackdrop = styled(Backdrop)({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 1500,
  flexDirection: "column",
});
