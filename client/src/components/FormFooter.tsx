import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useFormFooter from "../hooks/useFormFooter";

interface schema {
  activeTabIndex: number;
  setActiveTabIndex: (arg: number) => void;
  proceedToOrder: () => void;
}
export default function FormFooter({
  activeTabIndex,
  setActiveTabIndex,
  proceedToOrder,
}: schema) {
  const { getPrice, chargeByDay, diffDays, months } = useFormFooter();

  return (
    <>
      <StyledRootDiv>
        <Typography variant="h6">Total: USD {getPrice()}</Typography>
        <Typography>
          For {chargeByDay ? diffDays + "/Days" : months + "/Months"}
        </Typography>
      </StyledRootDiv>

      <StyledGrid container alignItems="center" justifyContent="space-between">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => setActiveTabIndex(activeTabIndex - 1)}
          disabled={activeTabIndex <= 0}
        >
          Go Back
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={proceedToOrder}
          disabled={activeTabIndex >= 3}
        >
          Proceed To Order
        </Button>
      </StyledGrid>
    </>
  );
}

const StyledGrid = styled(Grid)({
  marginTop: 20,
  marginBottom: 5,
});

const StyledRootDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  listStyle: "none",
  marginTop: 30,
});
