import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CoinPage from "./pages/CoinPage";
import About from "./pages/About";
import Home from "./pages/Home";
import {Route , Routes} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/coinPage" element= {<CoinPage/>} />
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
