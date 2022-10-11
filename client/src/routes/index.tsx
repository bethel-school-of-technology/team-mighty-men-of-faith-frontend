import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cover from "../components/Cover";
import GridImages from "../components/GridImages";
import ProductSection from "../components/ProductSection";
import SectionCarousel from "../components/SectionCarousel";
import SectionPills from "../components/SectionPills";
import { defaultSpace, grey300, primaryMain } from "../theme/themeConstants";
import SectionDownload from "../components/SectionDownload";
import SectionTabs from "../components/SectionTabs";
import useIndex from "../hooks/useIndex";

export default function HomePage() {
  useIndex()
  return (
    <StyledContainerDiv>
      <Cover />
      <StyledPaper
        elevation={5}
        sx={{
          marginTop: -10,
        }}
      >
        <SectionPills />
        <SectionCarousel />
      </StyledPaper>

      <StyledPaper elevation={5}>
        <ProductSection />
      </StyledPaper>

      <StyledPaper elevation={5}>
        <GridImages />

        <StyledParaPaper elevation={5}>
          <SectionTabs />
        </StyledParaPaper>

        <SectionDownload />
      </StyledPaper>
    </StyledContainerDiv>
  );
}

/* ------------------------------------ */
const StyledContainerDiv = styled("div")({
  backgroundColor: grey300,
  // paddingBottom: defaultSpace,
});
const StyledParaPaper = styled(Paper)({
  backgroundColor: primaryMain,
  padding: defaultSpace,
  margin: `55px -${defaultSpace + defaultSpace / 2}px`,
});
const StyledPaper = styled(Paper)({
  position: "relative",
  margin: defaultSpace,
  padding: defaultSpace,
  zIndex: 3,

  borderRadius: 10,
  // overflow: "hidden",
});
