"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
function FormTitle() {
    return (<material_1.Stack spacing={1}>
      <material_1.Typography variant="h5">Get your car at your door step</material_1.Typography>
      <material_1.Typography variant="h6" color={"primary"}>
        Premium service
      </material_1.Typography>
    </material_1.Stack>);
}
exports.default = FormTitle;
