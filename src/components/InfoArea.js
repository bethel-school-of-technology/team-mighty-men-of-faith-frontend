"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
function InfoArea({ title, description, Icon }) {
    return (<StyledContainerDiv>
      <Icon color={"primary"} sx={{
            fontSize: "61px",
        }}/>

      <material_1.Typography variant="h6">{title}</material_1.Typography>
      <material_1.Typography variant="body2" color="GrayText">
        {description}
      </material_1.Typography>
    </StyledContainerDiv>);
}
exports.default = InfoArea;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    margin: "0 auto",
    marginTop: "24px",
    maxWidth: "360px",
    padding: "0px",
});
