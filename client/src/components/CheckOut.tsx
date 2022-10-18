import {
    Button,
    Container,
    Step,
    StepLabel,
    Stepper,
    Typography
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { stateTypes } from "../types";
import LoginModal from "./LoginModal";
  import PaymentForm from "./PaymentForm";
  import Review from "./Review";
  
  const steps = ["Payment details", "Check Out"];
  
  interface schema {
    containerHeight: number | null;
  }
  const CheckOut = ({ containerHeight }: schema) => {
    const [activeStep, setActiveStep] = useState(0);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const isLoggedIn = useSelector((state: stateTypes) => state.auth.isLoggedIn)
    const shouldPlaceOrder = activeStep === steps.length - 1
    const handleNext = () => {
      if (shouldPlaceOrder && !isLoggedIn){
        setShowLoginModal(true);
        return
      }
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    const getStepContent = (step: number) => {
      switch (step) {
        case 0:
          return <PaymentForm containerHeight={containerHeight} />;
        case 1:
          return <Review />;
        default:
          throw new Error("Unknown step");
      }
    };
  
    return (
      <>
      <StyledContainer>
        <StyledStepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </StyledStepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <StyledButtonDiv>
                {activeStep !== 0 && (
                  <StyledButton
                    onClick={handleBack}
                    color="primary"
                    variant="outlined"
                  >
                    Back
                  </StyledButton>
                )}
                <StyledButton
                  variant="outlined"
                  color="primary"
                  onClick={handleNext}
                >
                  {shouldPlaceOrder ? "Place order" : "Next"}
                </StyledButton>
              </StyledButtonDiv>
            </>
          )}
        </>
      </StyledContainer>
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </>
    );
  };
  
  export default memo(CheckOut);
  
  const StyledContainer = styled(Container)({
    padding: 0,
    paddingBottom: 5,
    overflow: "hidden",
  });
  
  const StyledStepper = styled(Stepper)(({theme}) => ({
    padding: theme.spacing(0, 0, 5, 0),
  }));
  
  const StyledButtonDiv = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
  });
  const StyledButton = styled(Button)(({theme}) => ({
    marginLeft: theme.spacing(1),
    height: 40,
  }));
  