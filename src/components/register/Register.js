import React, { useState } from "react";
import "./register.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from '../../firebase-config';

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [user, setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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
    <div className="container">
      <input
        className="email"
        type="email"
        placeholder="Email"
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <br></br>
      <input
        className="password"
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />
      <h4>{user?.email}</h4>
      <button className="register" onClick={register}>Register</button>
      <br></br>
      <br></br>
      <button className="logout" onClick={logout}>Sign Out</button>
    </div>
  );
}

export default Register;
