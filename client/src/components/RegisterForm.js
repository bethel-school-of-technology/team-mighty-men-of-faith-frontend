"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
function RegisterForm({ setShouldRegister }) {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const onRegister = async () => {
        setLoading(true);
        try {
            await axios_1.default
                .post(`${process.env.REACT_APP_BACK_END_API}/users`, {
                email,
                password
            });
            setShouldRegister(false);
        }
        catch (err) {
            alert('There was an error');
        }
        setLoading(false);
    };
    return (<StyledForm>
      <material_1.Typography variant="h5" textAlign="center">
        {loading ? 'loading...' : 'Register'}
      </material_1.Typography>
      
      <material_1.TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <material_1.TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

      <material_1.Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
        <material_1.Button variant="outlined" onClick={() => setShouldRegister(false)}>Back</material_1.Button>
        <material_1.Button variant="contained" onClick={onRegister}>Register</material_1.Button>
      </material_1.Stack>
    </StyledForm>);
}
exports.default = RegisterForm;
const StyledForm = (0, material_1.styled)("form")({
    display: "flex",
    flexDirection: "column",
    gap: 20,
});
