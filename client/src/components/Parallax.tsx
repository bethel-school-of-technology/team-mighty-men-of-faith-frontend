import { styled } from "@mui/material/styles";

interface schema {
  filter?: boolean;
  children: JSX.Element;
  style?: any;
  image: string;
  small?: boolean;
}

export default function Parallax({
  filter,
  children,
  style,
  image,
  small,
}: schema) {
  return (
    <StyledDiv
      sx={{
        ...(filter && filterStyles),
        ...(small && smallStyles),
        ...style,
        backgroundImage: "url(" + image + ")",
      }}
    >
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled("div")({
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
