import { Avatar, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tempVehiclesItemType } from "../types";
import formattedTitle from "../utils/formattedTitle";
import getPriceStr from "../utils/getPrice";

interface schema {
  car: tempVehiclesItemType;
  onSelect: (arg: string) => void;
}
export default function SingleVehicleOption({ car, onSelect }: schema) {
  return (
    <StyledMenuItem
      key={car._id}
      value={formattedTitle(car.title)}
      onClick={() => onSelect(car._id)}
    >
      <StyledAvatar alt={car.title} src={car.images[0]} variant="square" />
      <StyledDetailsDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySecondaryHeading variant={"h6"}>
            {formattedTitle(car.title)}
          </StyledTypographySecondaryHeading>
          <StyledTypographySecondaryHeading
            variant={"h6"}
            sx={{ marginLeft: 5 }}
          >
            {car.model}
          </StyledTypographySecondaryHeading>
        </StyledFlexBoxDiv>
        <StyledFlexBoxDiv>
          <StyledTypographySmallFont>
            USD{getPriceStr(car.vehicleRentPerDay)}/day
          </StyledTypographySmallFont>
          <StyledTypographySmallFont sx={{ marginLeft: 5 }}>
            USD
            {getPriceStr(car.vehicleRentPerMonth || car.vehicleRentPerDay * 30)}
            /Month
          </StyledTypographySmallFont>
        </StyledFlexBoxDiv>
      </StyledDetailsDiv>
    </StyledMenuItem>
  );
}

const StyledMenuItem = styled(MenuItem)({
  padding: 10,
});
const StyledAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  borderRadius: 10,
  backgroundColor: "lightgray",
  objectFit: "fill",
});

const StyledDetailsDiv = styled("div")({
  flexGrow: 1,
  margin: "0 10px",
  alignSelf: "center",
});
const StyledFlexBoxDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledTypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
const StyledTypographySmallFont = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
}));
