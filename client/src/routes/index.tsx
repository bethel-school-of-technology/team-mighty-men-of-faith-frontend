import { styled } from "@mui/material";
import { grey300 } from "../theme/themeConstants";
import Cover from "../components/Cover";

export default function HomePage() {
  return (
    <StyledContainerDiv>
      <Cover />
    </StyledContainerDiv>
  );
}

/* ------------------------------------ */
const StyledContainerDiv = styled("div")({
  backgroundColor: grey300,
  // paddingBottom: defaultSpace,
});
