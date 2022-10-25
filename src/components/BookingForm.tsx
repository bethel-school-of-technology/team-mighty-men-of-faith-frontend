import { Container, styled, Typography } from "@mui/material";
import useSectionPills from "../hooks/useSectionPills";
import FormFooter from "./FormFooter";
import FormSection from "./FormSection";
import LoginModal from "./LoginModal";

interface schema {
  disableInitials?: boolean;
}
export default function BookingForm({ disableInitials }: schema) {
  const {
    containerHeight,
    activeTabIndex,
    containerRef,
    isOrderPlaced,
    showLoginModal,
    setShowLoginModal,
    setActiveTabIndex,
    proceedToOrder,
  } = useSectionPills();

  return (
    <>
      {isOrderPlaced ? (
        <StyledContainer>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order is confirmed. We have emailed your order confirmation,
            and will send you an update when your order has shipped.
          </Typography>
        </StyledContainer>
      ) : (
        <StyledDiv>
          <FormSection
            activeTabIndex={activeTabIndex}
            containerHeight={containerHeight}
            containerRef={containerRef}
            disableInitials={disableInitials}
          />

          <FormFooter
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
            proceedToOrder={proceedToOrder}
          />
        </StyledDiv>
      )}
      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}

/* ------------------------------------ */
const StyledDiv = styled("div")({
  overflow: "hidden",
});

const StyledContainer = styled(Container)({
  padding: 50,
  overflow: "hidden",
  textAlign: "center",
});
