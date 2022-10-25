"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
function LoadingIndicator({ style }) {
    const { loading, helperText } = (0, react_redux_1.useSelector)((state) => state.loadingIndicator);
    return (<StyledBackdrop style={style} open={loading}>
      {Boolean(helperText?.length) && (<material_1.Typography variant="h6" color={"primary"}>
          {helperText}
        </material_1.Typography>)}
      <material_1.CircularProgress size={50} color={"primary"}/>
    </StyledBackdrop>);
}
exports.default = LoadingIndicator;
const StyledBackdrop = (0, material_1.styled)(material_1.Backdrop)({
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1500,
    flexDirection: "column",
});
