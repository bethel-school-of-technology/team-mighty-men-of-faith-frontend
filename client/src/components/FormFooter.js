"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const useFormFooter_1 = __importDefault(require("../hooks/useFormFooter"));
function FormFooter({ activeTabIndex, setActiveTabIndex, proceedToOrder, }) {
    const { getPrice, chargeByDay, diffDays, months } = (0, useFormFooter_1.default)();
    return (<>
      <StyledRootDiv>
        <material_1.Typography variant="h6">Total: USD {getPrice()}</material_1.Typography>
        <material_1.Typography>
          For {chargeByDay ? diffDays + "/Days" : months + "/Months"}
        </material_1.Typography>
      </StyledRootDiv>

      <StyledGrid container alignItems="center" justifyContent="space-between">
        <material_1.Button color="primary" variant="outlined" onClick={() => setActiveTabIndex(activeTabIndex - 1)} disabled={activeTabIndex <= 0}>
          Go Back
        </material_1.Button>
        <material_1.Button variant="outlined" color="primary" onClick={proceedToOrder}>
          {activeTabIndex < 3 ? 'Proceed To Order' : "Place Order"}
        </material_1.Button>
      </StyledGrid>
    </>);
}
exports.default = FormFooter;
const StyledGrid = (0, styles_1.styled)(material_1.Grid)({
    marginTop: 20,
    marginBottom: 5,
});
const StyledRootDiv = (0, styles_1.styled)("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    marginTop: 30,
});
