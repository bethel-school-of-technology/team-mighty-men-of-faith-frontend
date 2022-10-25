import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export default function PreFooter() {
  return (
    <StyledContainerDiv>
      <Stack sx={{ textAlign: "center" }} spacing={1}>
        <Typography variant={"h4"}>Want more?</Typography>
        <Typography>Contact Us</Typography>
        <Typography>Email: info@gmail.com</Typography>

        <Divider />
      </Stack>

      <StyledSocialMediaStack spacing={1}>
        <Typography variant={"h5"}>Thank you for supporting us!</Typography>

        <div>
          <StyledButton sx={socialStyles.twitter}>
            <Twitter />
          </StyledButton>
          <StyledButton sx={socialStyles.facebook}>
            <Facebook />
          </StyledButton>
          <StyledButton sx={socialStyles.google}>
            <Instagram />
          </StyledButton>
          <StyledButton sx={socialStyles.github}>
            <GitHub />
          </StyledButton>
        </div>
      </StyledSocialMediaStack>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled("div")({
  backgroundColor: "white",
  padding: 20,
});

const StyledSocialMediaStack = styled(Stack)({
  marginTop: 50,
});
const StyledButton = styled(Button)({
  marginLeft: 5,
  marginRight: 5,
  marginBottom: 10,
  color: "#fff",
});

const socialStyles = {
  twitter: {
    backgroundColor: "#55acee",
    boxShadow:
      "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",

      boxShadow:
        "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)",
    },
  },
  facebook: {
    backgroundColor: "#3b5998",

    boxShadow:
      "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",

      boxShadow:
        "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)",
    },
  },
  google: {
    backgroundColor: "#dd4b39",

    boxShadow:
      "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",

      boxShadow:
        "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)",
    },
  },
  github: {
    backgroundColor: "#333333",

    boxShadow:
      "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",

      boxShadow:
        "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)",
    },
  },
};
