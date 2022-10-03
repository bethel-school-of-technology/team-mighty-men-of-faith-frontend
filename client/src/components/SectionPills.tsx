import { styled } from "@mui/material/styles";
import React from "react";
import BookingForm from "./BookingForm";
import FormTitle from "./FormTitle";

interface schema {
  disableInitials?: boolean;
}
export default function SectionPills({ disableInitials }: schema) {
  return (
    <StyledContainerDiv>
      <FormTitle />
      <BookingForm disableInitials={disableInitials} />
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled("div")({
  backgroundColor: "white",
  padding: "50px 0",
});
