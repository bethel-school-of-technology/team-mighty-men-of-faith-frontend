"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
function PaymentForm({ containerHeight }) {
    return (<StyledContainer style={{
            minHeight: containerHeight ? containerHeight - 105 : 300,
        }}>
        <material_1.Typography variant="h6" gutterBottom>
          Payment method
        </material_1.Typography>
        <material_1.Grid container spacing={3}>
          <material_1.Grid item xs={12} md={12}>
            <material_1.FormControl fullWidth variant="outlined">
              <material_1.InputLabel>Card</material_1.InputLabel>
              <material_1.Select labelId="demo-simple-select-label" label="Card" value={"Visa"} onChange={() => null}>
                <material_1.MenuItem value={"Visa"}>Visa</material_1.MenuItem>
                <material_1.MenuItem value={"Master"}>Master</material_1.MenuItem>
              </material_1.Select>
            </material_1.FormControl>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <material_1.TextField variant="outlined" required label="Name on card" fullWidth autoComplete="cc-name"/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <material_1.TextField variant="outlined" required label="Card number" fullWidth autoComplete="cc-number"/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <material_1.TextField variant="outlined" required label="Expiry date" fullWidth autoComplete="cc-exp"/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={6}>
            <material_1.TextField variant="outlined" required label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cc-csc"/>
          </material_1.Grid>
        </material_1.Grid>
  
        <material_1.Typography variant="h6" gutterBottom>
          Additional Information
        </material_1.Typography>
        <material_1.Grid container spacing={3}>
          <material_1.Grid item xs={12} md={4}>
            <material_1.TextField variant="outlined" required label="Name" fullWidth autoComplete="cc-name"/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={4}>
            <material_1.TextField variant="outlined" required label="Contact Number" fullWidth autoComplete="cc-number"/>
          </material_1.Grid>
          <material_1.Grid item xs={12} md={4}>
            <material_1.TextField variant="outlined" required label="Email" fullWidth autoComplete="cc-exp"/>
          </material_1.Grid>
        </material_1.Grid>
  
        <material_1.FormControlLabel control={<material_1.Checkbox color="primary" name="saveCard" value="yes"/>} label="Remember credit card details for next time"/>
      </StyledContainer>);
}
exports.default = PaymentForm;
const StyledContainer = (0, styles_1.styled)(material_1.Container)({
    padding: 0,
    width: "100%",
    position: "relative",
});
