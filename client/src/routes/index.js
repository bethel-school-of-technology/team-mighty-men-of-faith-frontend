"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Cover_1 = __importDefault(require("../components/Cover"));
const GridImages_1 = __importDefault(require("../components/GridImages"));
const ProductSection_1 = __importDefault(require("../components/ProductSection"));
const SectionCarousel_1 = __importDefault(require("../components/SectionCarousel"));
const SectionPills_1 = __importDefault(require("../components/SectionPills"));
const themeConstants_1 = require("../theme/themeConstants");
const SectionDownload_1 = __importDefault(require("../components/SectionDownload"));
const SectionTabs_1 = __importDefault(require("../components/SectionTabs"));
const useIndex_1 = __importDefault(require("../hooks/useIndex"));
function HomePage() {
    (0, useIndex_1.default)();
    return (<StyledContainerDiv>
      <Cover_1.default />
      <StyledPaper elevation={5} sx={{
            marginTop: -10,
        }}>
        <SectionPills_1.default />
        <SectionCarousel_1.default />
      </StyledPaper>

      <StyledPaper elevation={5}>
        <ProductSection_1.default />
      </StyledPaper>

      <StyledPaper elevation={5}>
        <GridImages_1.default />

        <StyledParaPaper elevation={5}>
          <SectionTabs_1.default />
        </StyledParaPaper>

        <SectionDownload_1.default />
      </StyledPaper>
    </StyledContainerDiv>);
}
exports.default = HomePage;
/* ------------------------------------ */
const StyledContainerDiv = (0, styles_1.styled)("div")({
    backgroundColor: themeConstants_1.grey300,
    // paddingBottom: defaultSpace,
});
const StyledParaPaper = (0, styles_1.styled)(material_1.Paper)({
    backgroundColor: themeConstants_1.primaryMain,
    padding: themeConstants_1.defaultSpace,
    margin: `55px -${themeConstants_1.defaultSpace + themeConstants_1.defaultSpace / 2}px`,
});
const StyledPaper = (0, styles_1.styled)(material_1.Paper)({
    position: "relative",
    margin: themeConstants_1.defaultSpace,
    padding: themeConstants_1.defaultSpace,
    zIndex: 3,
    borderRadius: 10,
    // overflow: "hidden",
});
