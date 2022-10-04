import {
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel, MenuItem,
    Select,
    TextField,
    Typography
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import React from "react";
  
  interface schema {
    containerHeight: number | null;
  }
  export default function PaymentForm({ containerHeight }: schema) {
    return (
      <StyledContainer
        style={{
          minHeight: containerHeight ? containerHeight - 105 : 300,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Card</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Card"
                value={"Visa"}
                onChange={() => null}
              >
                <MenuItem value={"Visa"}>Visa</MenuItem>
                <MenuItem value={"Master"}>Master</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              required
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              required
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              required
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              required
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
        </Grid>
  
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              required
              label="Name"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              required
              label="Contact Number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              required
              label="Email"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
        </Grid>
  
        <FormControlLabel
          control={<Checkbox color="primary" name="saveCard" value="yes" />}
          label="Remember credit card details for next time"
        />
      </StyledContainer>
    );
  }
  
  const StyledContainer = styled(Container)({
    padding: 0,
    width: "100%",
    position: "relative",
  });
  