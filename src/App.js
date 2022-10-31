import "./App.css";
import UpCoins from "./pages/UpCoins";
import Home from "./pages/Home";
import {Route , Routes} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import DownCoins from "./pages/DownCoins";
import Header from "./components/header/Header";
import Alert from "./components/Alert";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/upCoins" element= {<UpCoins/>} />
          <Route path="/downCoins" element= {<DownCoins/>} />
        </Routes>
      </div>
      <Alert/>
      <Footer/>
    </div>
  );
}

export default App;
