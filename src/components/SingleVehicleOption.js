"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const formattedTitle_1 = __importDefault(require("../utils/formattedTitle"));
const getPrice_1 = __importDefault(require("../utils/getPrice"));
function SingleVehicleOption({ car, onSelect }) {
    return (<StyledMenuItem key={car._id} value={(0, formattedTitle_1.default)(car.title)} onClick={() => onSelect(car._id)}>
      <StyledAvatar alt={car.title} src={car.images[0]} variant="square"/>
      <StyledDetailsDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySecondaryHeading variant={"h6"}>
            {(0, formattedTitle_1.default)(car.title)}
          </StyledTypographySecondaryHeading>
          <StyledTypographySecondaryHeading variant={"h6"} sx={{ marginLeft: 5 }}>
            {car.model}
          </StyledTypographySecondaryHeading>
        </StyledFlexBoxDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySmallFont>
            USD{(0, getPrice_1.default)(car.vehicleRentPerDay)}/day
          </StyledTypographySmallFont>
          <StyledTypographySmallFont sx={{ marginLeft: 5 }}>
            USD
            {(0, getPrice_1.default)(car.vehicleRentPerMonth || car.vehicleRentPerDay * 30)}
            /Month
          </StyledTypographySmallFont>
        </StyledFlexBoxDiv>
      </StyledDetailsDiv>
    </StyledMenuItem>);
}
exports.default = SingleVehicleOption;
const StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)({
    padding: 10,
});
const StyledAvatar = (0, styles_1.styled)(material_1.Avatar)({
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "lightgray",
    objectFit: "fill",
});
const StyledDetailsDiv = (0, styles_1.styled)("div")({
    flexGrow: 1,
    margin: "0 10px",
    alignSelf: "center",
});
const StyledFlexBoxDiv = (0, styles_1.styled)("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});
const StyledTypographySecondaryHeading = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
}));
const StyledTypographySmallFont = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    fontSize: 12,
    color: theme.palette.text.secondary,
}));
