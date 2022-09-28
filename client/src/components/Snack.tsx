import React from "react";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { stateTypes } from "../types";
import { clearSnackBar } from "../store/actions";
import ClearIcon from "@mui/icons-material/Clear";


export default function Snack() {
  const snackBarMsg = useSelector((state: stateTypes) => state.snackBar);
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(snackBarMsg.length)}
      action={<ClearIcon onClick={() => dispatch(clearSnackBar())} />}
      onClose={() => dispatch(clearSnackBar())}
      message={snackBarMsg}
      autoHideDuration={5000}
      // key={snackBarMsg}
    />
  );
}
