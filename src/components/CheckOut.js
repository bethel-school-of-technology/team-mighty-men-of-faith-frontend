"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const PaymentForm_1 = __importDefault(require("./PaymentForm"));
const CheckOut = ({ containerHeight }) => {
    return (<StyledContainer>
      <PaymentForm_1.default containerHeight={containerHeight}/>
    </StyledContainer>);
};
exports.default = CheckOut;
const StyledContainer = (0, styles_1.styled)(material_1.Container)({
    padding: 0,
    paddingBottom: 5,
    overflow: "hidden",
});
