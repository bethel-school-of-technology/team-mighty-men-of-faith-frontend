"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MonetizationOn_1 = __importDefault(require("@mui/icons-material/MonetizationOn"));
const QueryBuilder_1 = __importDefault(require("@mui/icons-material/QueryBuilder"));
const VerifiedUser_1 = __importDefault(require("@mui/icons-material/VerifiedUser"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const InfoArea_1 = __importDefault(require("./InfoArea"));
function ProductSection() {
    const { paraTwo, paraOne, paraThree, paraFour } = (0, react_redux_1.useSelector)((state) => state.paras);
    return (<StyledContainerDiv>
      <material_1.Typography variant="h4">Great Deals</material_1.Typography>
      <material_1.Typography variant="subtitle1" color="GrayText">
        {paraTwo}
      </material_1.Typography>

      <material_1.Grid container>
        <material_1.Grid item xs={12} md={4}>
          <InfoArea_1.default title="Economy" description={paraOne} Icon={MonetizationOn_1.default}/>
        </material_1.Grid>
        <material_1.Grid item xs={12} md={4}>
          <InfoArea_1.default title="Insurance" description={paraThree} Icon={VerifiedUser_1.default}/>
        </material_1.Grid>
        <material_1.Grid item xs={12} md={4}>
          <InfoArea_1.default title="24/7 Service" description={paraFour} Icon={QueryBuilder_1.default}/>
        </material_1.Grid>
      </material_1.Grid>
    </StyledContainerDiv>);
}
exports.default = ProductSection;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    marginTop: 55,
    textAlign: "center",
});
