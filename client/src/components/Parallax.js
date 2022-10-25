"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
function Parallax({ filter, children, style, image, small, }) {
    return (<StyledDiv sx={{
            ...(filter && filterStyles),
            ...(small && smallStyles),
            ...style,
            backgroundImage: "url(" + image + ")",
        }}>
      {children}
    </StyledDiv>);
}
exports.default = Parallax;
const StyledDiv = (0, styles_1.styled)("div")({
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
});
const filterStyles = {
// "&:before": {
//   background: "rgba(0, 0, 0, 0.5)",
// },
// "&:after,&:before": {
//   position: "absolute",
//   zIndex: "1",
//   width: "100%",
//   height: "100%",
//   display: "block",
//   left: "0",
//   top: "0",
//   content: "''",
// },
};
const smallStyles = {
    height: "380px",
};
