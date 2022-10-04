import { styled } from "@mui/material";
import React from "react";
import useSectionPills from "../hooks/useSectionPills";
import FormFooter from "./FormFooter";
import FormSection from "./FormSection";

interface schema {
  disableInitials?: boolean;
}
export default function BookingForm({ disableInitials }: schema) {
  const {
    containerHeight,
    setActiveTabIndex,
    activeTabIndex,
    containerRef,
    proceedToOrder,
  } = useSectionPills();
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
}

/* ------------------------------------ */
const StyledContainer = styled("div")({
  overflow: "hidden",
});
