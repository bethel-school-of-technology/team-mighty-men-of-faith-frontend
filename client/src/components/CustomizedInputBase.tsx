import DoneAllIcon from "@mui/icons-material/DoneAll";
// import SearchIcon from "@material-ui/icons/Search";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  InputBase, MenuItem,
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import usePlaces from "../hooks/usePlaces";
import { stateTypes } from "../types";

export default function CustomizedInputBase() {
  const location = useSelector(
    (state: stateTypes) => state.formFields.location
  );
  const {
    handleSelect,
    getCurrentLocation,
    suggestions,
    setSuggestions,
    value,
    setValue,
    ready,
  } = usePlaces();

  return (
    <ClickAwayListener onClickAway={() => setSuggestions([])}>
      <Box
        position="absolute"
        top={10}
        left="calc(50% - 200px)"
        zIndex="tooltip"
      >
        <StyledPaper 
        // component="form"
        >
          {!location.isDefault && (
            <StyledIconButton color="primary" aria-label="directions" disabled>
              <DoneAllIcon color="primary" />
            </StyledIconButton>
          )}
          <StyledInputBase
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            placeholder="Pick Up/Drop Off Location"
            inputProps={{ "aria-label": "Search Location" }}
            disabled={!ready}
          />

          {/* <IconButton
            // type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={}
          >
            <SearchIcon />
          </IconButton> */}
          <StyledDivider orientation="vertical" />
          <StyledIconButton
            color="primary"
            aria-label="directions"
            onClick={getCurrentLocation}
          >
            <GpsFixedIcon />
          </StyledIconButton>
          <StyledSuggestionsDiv >
            <>
              {suggestions.map((suggestion: any) => (
                <MenuItem key={v4()} onClick={() => handleSelect(suggestion)}>
                  {suggestion.description}
                </MenuItem>
              ))}
            </>
          </StyledSuggestionsDiv>
        </StyledPaper>
      </Box>
    </ClickAwayListener>
  );
}

const StyledPaper = styled(Paper)({
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: 400,
});

const StyledIconButton = styled(IconButton)({
  padding: 10,
});

const StyledInputBase = styled(InputBase)(({theme}) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));
const StyledDivider = styled(Divider)({
  height: 28,
  margin: 4,
});
const StyledSuggestionsDiv = styled("div")({
  position: "absolute",
  left: 0,
  top: 50,
  width: "100%",
  backgroundColor: "white",
  maxHeight: 250,
  overflowY: "auto",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
