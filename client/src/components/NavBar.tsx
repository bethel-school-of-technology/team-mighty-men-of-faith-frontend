import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function SearchAppBar() {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <StyledTypography variant="h5" noWrap color="GrayText">
          <Link to={"/"}>CARMIGO</Link>
        </StyledTypography>

        <SearchBar />
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
