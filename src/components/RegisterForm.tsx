import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

interface IProps {
  setShouldRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RegisterForm({setShouldRegister}: IProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onRegister = async () => {
    setLoading(true);
    try {
      await axios
      .post(`${process.env.REACT_APP_BACK_END_API}/users`, {
          email,
          password
      });

      setShouldRegister(false)
    }
    catch(err){
      alert('There was an error')
    }
    setLoading(false);
  }

  return (
    <StyledForm>
      <Typography variant="h5" textAlign="center">
        {loading ? 'loading...' : 'Register'}
      </Typography>
      
      <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="outlined" onClick={() => setShouldRegister(false)}>Back</Button>
        <Button variant="contained" onClick={onRegister}>Register</Button>
      </Stack>
    </StyledForm>
  );
}

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});
