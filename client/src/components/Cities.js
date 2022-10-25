"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const formattedTitle_1 = __importDefault(require("../utils/formattedTitle"));
const useEffectCities_1 = __importDefault(require("../hooks/useEffectCities"));
const Cities = (0, react_1.forwardRef)((props, ref) => {
    const { setShowCitiesFalse } = props;
    const cities = (0, react_redux_1.useSelector)((state) => state.whiteListCities);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, useEffectCities_1.default)({ setLoading });
    return (<StyledContainerDiv ref={ref}>
      {cities.map((city, index) => (<StyledMenuItem key={index} onClick={() => {
                dispatch((0, actions_1.setCurrentCity)(city));
                setShowCitiesFalse();
            }}>
          <StyledTypography variant={"h6"}>
            {(0, formattedTitle_1.default)(city)}
          </StyledTypography>
        </StyledMenuItem>))}

      {loading && (<StyledCircularProgressDiv>
          <material_1.CircularProgress color="primary"/>
        </StyledCircularProgressDiv>)}
    </StyledContainerDiv>);
});
Cities.displayName = "Cities";
exports.default = Cities;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    width: "100%",
    backgroundColor: "lightgray",
    padding: 0,
});
const StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)({
    boxShadow: "none",
    padding: 10,
    backgroundColor: "white",
    "&&:hover": {
        backgroundColor: "white",
    },
});
const StyledTypography = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    fontSize: 20,
    color: theme.palette.text.secondary,
    margin: "0 10px",
    alignSelf: "center",
}));
const StyledCircularProgressDiv = (0, styles_1.styled)("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
