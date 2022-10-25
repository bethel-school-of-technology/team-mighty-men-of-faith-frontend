"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const PreFooter_1 = __importDefault(require("./PreFooter"));
function SectionDownload() {
    const { paraFive } = (0, react_redux_1.useSelector)((state) => state.paras);
    return (<material_1.Stack alignItems="center" spacing={3}>
      <material_1.Typography variant="h4">Professional Service</material_1.Typography>
      <material_1.Typography variant="subtitle1" color={"GrayText"}>
        {paraFive}
      </material_1.Typography>

      <PreFooter_1.default />
    </material_1.Stack>);
}
exports.default = SectionDownload;
