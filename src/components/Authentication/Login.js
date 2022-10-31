/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../../firebase-config';
import { Box } from "@mui/system";
import { Button, FormControlLabel, TextField } from "@material-ui/core";
import { useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import { CryptoState } from '../../CryptoContext';

function Login({handleClose}) {
  // Know what the user wrote
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [ user,setUser] = useState(null);
  const [ rememberMe,setRememberMe] = useState(false);

  const {setAlert} = CryptoState();

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user) setUser(user);
      else setUser(null);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields ",
        type: "error",
      });
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login is Successful . Welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
}

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color:'white',
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: 'gold' }}
      >
        Login
      </Button>
      <FormControlLabel style={{color:'gray'}}
        control={
          <Checkbox
            value={rememberMe}
            onChange={(e) => handleCheck(e)}
            color="primary"
          />
        }
        label="Remember Me"
      />
    </Box>
  );
}

export default Login;