import "../App.css";
import React from "react";
import img from '../assets/2.webp'
import Scroll from "../components/scroll/Scroll";

function Home() {
  return(
    <div className="test">
      <h1>Hi All!</h1>
      <h3>I have compiled for you all the information you need in order to be the best developers, and to eat technical interviews for breakfast</h3>
      <img src={img} width="80%" alt="img"/>
      <Scroll/>
    </div>
  )
}

export default Home;
