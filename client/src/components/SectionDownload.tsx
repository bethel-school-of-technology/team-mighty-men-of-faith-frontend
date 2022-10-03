import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { stateTypes } from "../types";
import PreFooter from "./PreFooter";

export default function SectionDownload() {
  const { paraFive } = useSelector((state: stateTypes) => state.paras);

  const onClick = () => {};

  return (
    <Stack alignItems="center" spacing={3}>
      <Typography variant="h4">Professional Service</Typography>
      <Typography variant="subtitle1" color={"GrayText"}>
        {paraFive}
      </Typography>

      <Button
        color="primary"
        variant="outlined"
        startIcon={<ContactMailIcon />}
        onClick={onClick}
      >
        Contact Us
      </Button>

      <PreFooter />
    </Stack>
  );
}
