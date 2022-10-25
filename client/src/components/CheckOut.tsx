import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import PaymentForm from "./PaymentForm";

interface schema {
  containerHeight: number | null;
}
const CheckOut = ({ containerHeight }: schema) => {
  return (
    <StyledContainer>
      <PaymentForm containerHeight={containerHeight} />
    </StyledContainer>
  );
};

export default CheckOut;

const StyledContainer = styled(Container)({
  padding: 0,
  paddingBottom: 5,
  overflow: "hidden",
});
