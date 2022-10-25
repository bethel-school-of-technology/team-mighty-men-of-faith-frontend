import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../store/reducers/auth";

interface IProps {
  setShouldRegister: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void
}

export default function LoginForm({ setShouldRegister, onClose }: IProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = async () => {
    setLoading(true);
    try {
      const {data} = await axios
      .post(`${process.env.REACT_APP_BACK_END_API}/users/login`, {
          email,
          password
      });
      dispatch(setUserLogin(data.token));
      onClose()
    }
    catch(err){
      alert('There was an error')
    }
    setLoading(false);
  }

  return (
    <StyledForm>
      <Typography variant="h5" textAlign="center">
        {loading ? 'loading...' : 'Login'}
      </Typography>
      <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="outlined" onClick={() => setShouldRegister(true)}>
          Register
        </Button>
        <Button variant="contained"
        onClick={onLogin}
        >Login</Button>
      </Stack>
    </StyledForm>
  );
}

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});
