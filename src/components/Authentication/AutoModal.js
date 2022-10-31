/* eslint-disable no-undef */
import React ,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AppBar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "./Login";
import Register from "./Register";
import './autoModal.css';
import GoogleButton from "react-google-button";
import { auth } from "../../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { CryptoState } from '../../CryptoContext';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor:'white',
  border: "2px solid #000",
  boxShadow: 24, 
  color:'white',
  borderRadius:'10px'
};


function AuthModal() {
  const [value, setValue] = useState(0);
  const { setAlert } = CryptoState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign Up Successful , Welcome!`,
          type: "success",
        });        
        handleClose();
      })
      .catch((error) => {
        alert(error.message)
        return;
      });
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{backgroundColor:'#EEBC1D',color:'black'}}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
      <div className="paper">
        <Box sx={style} className="box">
          <AppBar
            position="static"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <Tabs className="tabs" style={{color:'white',borderRadius:10}}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab  label="Login"  />
              <Tab  label="Register"  />
            </Tabs>
          </AppBar>
          {value === 0 && <Login handleClose={handleClose}/>}
          {value === 1 && <Register handleClose={handleClose}/>}
          <Box className="google">
            <span style={{color:'black',textAlign:'center'}}>OR</span>
              <GoogleButton
                style={{width:'100%',outlined:'none'}}
                onClick={signInWithGoogle}
              />
          </Box>
        </Box>  
        </div>
      </Modal>
    </div>
  );
}
export default AuthModal;