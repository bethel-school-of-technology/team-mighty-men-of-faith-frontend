"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
function PreFooter() {
    return (<StyledContainerDiv>
      <material_1.Stack sx={{ textAlign: "center" }} spacing={1}>
        <material_1.Typography variant={"h4"}>Want more?</material_1.Typography>
        <material_1.Typography>Contact Us</material_1.Typography>
        <material_1.Typography>Email: info@gmail.com</material_1.Typography>

        <material_1.Divider />
      </material_1.Stack>

      <StyledSocialMediaStack spacing={1}>
        <material_1.Typography variant={"h5"}>Thank you for supporting us!</material_1.Typography>

        <div>
          <StyledButton sx={socialStyles.twitter}>
            <icons_material_1.Twitter />
          </StyledButton>
          <StyledButton sx={socialStyles.facebook}>
            <icons_material_1.Facebook />
          </StyledButton>
          <StyledButton sx={socialStyles.google}>
            <icons_material_1.Instagram />
          </StyledButton>
          <StyledButton sx={socialStyles.github}>
            <icons_material_1.GitHub />
          </StyledButton>
        </div>
      </StyledSocialMediaStack>
    </StyledContainerDiv>);
}
exports.default = PreFooter;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    backgroundColor: "white",
    padding: 20,
});
const StyledSocialMediaStack = (0, styles_1.styled)(material_1.Stack)({
    marginTop: 50,
});
const StyledButton = (0, styles_1.styled)(material_1.Button)({
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    color: "#fff",
});
const socialStyles = {
    twitter: {
        backgroundColor: "#55acee",
        boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
        "&:hover,&:focus,&:visited": {
            backgroundColor: "#55acee",
            boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)",
        },
    },
    facebook: {
        backgroundColor: "#3b5998",
        boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#3b5998",
            boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)",
        },
    },
    google: {
        backgroundColor: "#dd4b39",
        boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#dd4b39",
            boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)",
        },
    },
    github: {
        backgroundColor: "#333333",
        boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#333333",
            boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)",
        },
    },
};
