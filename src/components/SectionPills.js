"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
const BookingForm_1 = __importDefault(require("./BookingForm"));
const FormTitle_1 = __importDefault(require("./FormTitle"));
function SectionPills({ disableInitials }) {
    return (<StyledContainerDiv>
      <FormTitle_1.default />
      <BookingForm_1.default disableInitials={disableInitials}/>
    </StyledContainerDiv>);
}
exports.default = SectionPills;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    backgroundColor: "white",
    padding: "50px 0",
});
