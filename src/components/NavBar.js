"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
function SearchAppBar() {
    return (<StyledAppBar position="sticky">
      <material_1.Toolbar>
        <StyledTypography variant="h5" noWrap color="GrayText">
          CARMIGO
        </StyledTypography>
      </material_1.Toolbar>
    </StyledAppBar>);
}
exports.default = SearchAppBar;
const StyledAppBar = (0, styles_1.styled)(material_1.AppBar)({
    zIndex: 1000,
});
const StyledTypography = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: "block",
    },
}));
