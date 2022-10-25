"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoneAll_1 = __importDefault(require("@mui/icons-material/DoneAll"));
// import SearchIcon from "@material-ui/icons/Search";
const GpsFixed_1 = __importDefault(require("@mui/icons-material/GpsFixed"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const uuid_1 = require("uuid");
const usePlaces_1 = __importDefault(require("../hooks/usePlaces"));
function CustomizedInputBase() {
    const location = (0, react_redux_1.useSelector)((state) => state.formFields.location);
    const { handleSelect, getCurrentLocation, suggestions, setSuggestions, value, setValue, ready, } = (0, usePlaces_1.default)();
    return (<material_1.ClickAwayListener onClickAway={() => setSuggestions([])}>
      <material_1.Box position="absolute" top={10} left="calc(50% - 200px)" zIndex="tooltip">
        <StyledPaper>
          {!location.isDefault && (<StyledIconButton color="primary" aria-label="directions" disabled>
              <DoneAll_1.default color="primary"/>
            </StyledIconButton>)}
          <StyledInputBase value={value} onChange={(e) => setValue(e.target.value)} placeholder="Pick Up/Drop Off Location" inputProps={{ "aria-label": "Search Location" }} disabled={!ready}/>

          {/* <IconButton
          // type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={}
        >
          <SearchIcon />
        </IconButton> */}
          <StyledDivider orientation="vertical"/>
          <StyledIconButton color="primary" aria-label="directions" onClick={getCurrentLocation}>
            <GpsFixed_1.default />
          </StyledIconButton>
          <StyledSuggestionsDiv>
            <>
              {suggestions.map((suggestion) => (<material_1.MenuItem key={(0, uuid_1.v4)()} onClick={() => handleSelect(suggestion)}>
                  {suggestion.description}
                </material_1.MenuItem>))}
            </>
          </StyledSuggestionsDiv>
        </StyledPaper>
      </material_1.Box>
    </material_1.ClickAwayListener>);
}
exports.default = CustomizedInputBase;
const StyledPaper = (0, styles_1.styled)(material_1.Paper)({
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: 400,
});
const StyledIconButton = (0, styles_1.styled)(material_1.IconButton)({
    padding: 10,
});
const StyledInputBase = (0, styles_1.styled)(material_1.InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
}));
const StyledDivider = (0, styles_1.styled)(material_1.Divider)({
    height: 28,
    margin: 4,
});
const StyledSuggestionsDiv = (0, styles_1.styled)("div")({
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
