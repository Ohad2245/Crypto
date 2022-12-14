/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./coin.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

function Coin({ name, icon, price, symbol, volume, priceChange, websiteUrl }) {

  // The function
  let 
      pow   = Math.pow,
      floor = Math.floor,
      abs   = Math.abs,
      log   = Math.log;
      const abbrev = ["K","M","B"]; // could be an array of strings: [' m', ' Mo', ' Md']

  function round(n, volume) {
    let prec = Math.pow(10, volume);
    return Math.round(n * prec) / prec;
  }

  function format(volume) {
    let base = floor(log(abs(volume)) / log(1000));
    let suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(volume / pow(1000, base), 2) + suffix : "" + volume;
  }

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

  return (
    <div className="container reveal">
      <div className="coin-row" >
        <div className="coin">
          <img className="image" src={icon} alt="crypto" />
          <h1 className="nameCoin">{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price.toLocaleString()}$</p>
          <p className="coin-volume">{format(volume)}$</p>

          {priceChange < 0 ? (
            <p className="coin-percent red"><AiFillCaretDown/>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green"><AiFillCaretUp/>{priceChange.toFixed(2)}%</p>
          )}

          <a className="btn2 " href={websiteUrl} target="_blank">
            Trade
          </a>
        </div>
      </div>
    </div>
  );
}

export default Coin;
