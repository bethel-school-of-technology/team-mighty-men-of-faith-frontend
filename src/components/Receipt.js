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
const Block_1 = __importDefault(require("@mui/icons-material/Block"));
const CheckCircleOutline_1 = __importDefault(require("@mui/icons-material/CheckCircleOutline"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const selectors_1 = require("../store/selectors");
const formattedTitle_1 = __importDefault(require("../utils/formattedTitle"));
const getPrice_1 = __importDefault(require("../utils/getPrice"));
const Receipt = () => {
    const { title, model, vehicleRentPerDay, vehicleRentPerMonth, driverRentPerDay, driverRentPerMonth, driverAvailable, insuranceRentPerDay, insuranceRentPerMonth, insuranceAvailable, cityId, companyId, } = (0, react_redux_1.useSelector)(selectors_1.getCurrentVehicle);
    const { addDriver, addInsurance, chargeByDay, startDate, endDate, location: { address }, } = (0, react_redux_1.useSelector)((state) => state.formFields);
    return (<StyledContainerGrid container alignItems="center" justifyContent="space-between">
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          City
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {(0, formattedTitle_1.default)(cityId)}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Location
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">{address}</StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Company
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {(0, formattedTitle_1.default)(companyId)}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Vehicle
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {`${(0, formattedTitle_1.default)(title)} - ${model}`}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Vehicle Rent
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            USD{" "}
            {chargeByDay
            ? (0, getPrice_1.default)(vehicleRentPerDay) + "/Day"
            : (0, getPrice_1.default)(vehicleRentPerMonth) + "/Month"}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Start Date
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {startDate.toDateString()}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Start Time
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {startDate.getHours() +
            ":" +
            startDate.getMinutes() +
            ":" +
            startDate.getSeconds()}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          End Date
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {endDate.toDateString()}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          End Time
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {endDate.getHours() +
            ":" +
            endDate.getMinutes() +
            ":" +
            endDate.getSeconds()}
          </StyledTypography>
          <CheckCircleOutline_1.default color="primary"/>
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Driver Included
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {addDriver ? "Yes" : "No"}
          </StyledTypography>

          {addDriver ? (<CheckCircleOutline_1.default color="primary"/>) : (<Block_1.default color="error"/>)}
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      {driverAvailable && addDriver && (<>
          <StyledContainerGrid container alignItems="center" justifyContent="space-between">
            <StyledTypography variant="h6" component="th">
              Driver Rent
            </StyledTypography>
            <StyledBox component="span">
              <StyledTypography variant="caption">
                {chargeByDay
                ? (0, getPrice_1.default)(driverRentPerDay) + "/Day"
                : (0, getPrice_1.default)(driverRentPerMonth || driverRentPerDay * 30) + "/Month"}
              </StyledTypography>

              <CheckCircleOutline_1.default color="primary"/>
            </StyledBox>
          </StyledContainerGrid>
          <material_1.Divider />
        </>)}

      <StyledContainerGrid container alignItems="center" justifyContent="space-between">
        <StyledTypography variant="h6" component="th">
          Insurance Included
        </StyledTypography>
        <StyledBox component="span">
          <StyledTypography variant="caption">
            {addInsurance ? "Yes" : "No"}
          </StyledTypography>
          {addInsurance ? (<CheckCircleOutline_1.default color="primary"/>) : (<Block_1.default color="error"/>)}
        </StyledBox>
      </StyledContainerGrid>
      <material_1.Divider />
      {insuranceAvailable && addInsurance && (<>
          <StyledContainerGrid container alignItems="center" justifyContent="space-between">
            <StyledTypography variant="h6" component="th">
              Insurance Rent
            </StyledTypography>
            <StyledBox component="span">
              <StyledTypography variant="caption">
                USD{" "}
                {chargeByDay
                ? ((0, getPrice_1.default)(insuranceRentPerDay)) + "/Day"
                : (0, getPrice_1.default)(insuranceRentPerMonth || insuranceRentPerDay * 30) +
                    "/Month"}
              </StyledTypography>

              <CheckCircleOutline_1.default color="primary"/>
            </StyledBox>
          </StyledContainerGrid>
          <material_1.Divider />
        </>)}
    </StyledContainerGrid>);
};
exports.default = (0, react_1.memo)(Receipt);
const StyledContainerGrid = (0, styles_1.styled)(material_1.Grid)({
    marginTop: 18,
});
const StyledBox = (0, styles_1.styled)(material_1.Box)({
    display: "inline-flex",
    align: "center",
});
const StyledTypography = (0, styles_1.styled)(material_1.Typography)({
    fontSize: "16px",
    margin: "0 5px",
});
