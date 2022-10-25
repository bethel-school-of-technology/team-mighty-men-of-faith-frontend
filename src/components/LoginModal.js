"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const LoginForm_1 = __importDefault(require("./LoginForm"));
const RegisterForm_1 = __importDefault(require("./RegisterForm"));
function LoginModal({ open, onClose }) {
    const [shouldRegister, setShouldRegister] = (0, react_1.useState)(false);
    return (<material_1.Modal open={open} onClose={onClose}>
      <StyledBox>
        {!shouldRegister ? (<LoginForm_1.default setShouldRegister={setShouldRegister} onClose={onClose}/>) : (<RegisterForm_1.default setShouldRegister={setShouldRegister}/>)}
      </StyledBox>
    </material_1.Modal>);
}
exports.default = LoginModal;
const StyledBox = (0, styles_1.styled)(material_1.Box)({
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
