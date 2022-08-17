/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./coin.css";

function Coin({ name, icon, price, symbol, volume, priceChange , websiteUrl}) {

  var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
var abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']

function round(n, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec;
}

function format(n) {
    var base = floor(log(abs(n))/log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n/pow(1000,base),2)+suffix : ''+n;
}

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img className="image" src={icon} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price.toLocaleString()}$</p>
          <p className="coin-volume">${format(volume)}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
  
          <a className="btn2" href={websiteUrl} target="_blank" >
          Trade</a>
        </div>
      </div>
    </div>
  
  );
}

export default Coin;
