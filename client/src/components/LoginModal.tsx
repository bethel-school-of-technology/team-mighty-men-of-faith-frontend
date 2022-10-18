import { Box, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface schema {
  open: boolean;
  onClose: () => void;
}
export default function LoginModal({ open, onClose }: schema) {
  const [shouldRegister, setShouldRegister] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <StyledBox>
        {!shouldRegister ? (
          <LoginForm setShouldRegister={setShouldRegister} onClose={onClose}/>
        ) : (
          <RegisterForm setShouldRegister={setShouldRegister} />
        )}
      </StyledBox>
    </Modal>
  );
}

const StyledBox = styled(Box)({
  width: 500,
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: 10,
  padding: 10,
  outline: 'none'
});
