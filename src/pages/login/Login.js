import React, { useState } from "react";
import "./login.css";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from '../../firebase-config';

function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [user, setUser] = useState({});

  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login">

      <input
        className="loginEmail"
        type="email"
        placeholder="Email"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <br></br>
      <input
        className="loginPassword"
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <br></br>
      <button className="btnLogin" onClick={login}>Login</button>
      <br></br>
      <br></br>
      <button className= "signOut" onClick={logout}>Sign Out</button>
      <h5>{user?.email }</h5>
    </div>

  );
}

export default Login;


