import { Stack, Typography } from "@mui/material";
import React from "react";

export default function FormTitle() {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">Get your car at your door step</Typography>
      <Typography variant="h6" color={"primary"}>
        Premium service
      </Typography>
    </Stack>
  );
}
