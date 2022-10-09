import "./App.css";
import NavBar from "./components/navBar/NavBar";
import UpCoins from "./pages/UpCoins";
import About from "./pages/About";
import Home from "./pages/Home";
import {Route , Routes} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DownCoins from "./pages/DownCoins";
import {makeStyles} from '@material-ui/core';
import { red } from "@mui/material/colors";
import Header from "./components/header/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/upCoins" element= {<UpCoins/>} />
          <Route path="/downCoins" element= {<DownCoins/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/register" element= {<Register/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
