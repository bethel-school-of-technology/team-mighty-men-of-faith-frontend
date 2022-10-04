import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function SearchAppBar() {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <StyledTypography variant="h5" noWrap color="GrayText">
          CARMIGO
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)({
  zIndex: 1000,
});
const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
