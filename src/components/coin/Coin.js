/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./coin.css";

function Coin({ name, icon, price, symbol, volume, priceChange , websiteUrl}) {
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
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
  
          <a className="btn2" href={websiteUrl} onClick={websiteUrl} target="_blank" >
          Trade</a>
        </div>
      </div>
    </div>
  
  );
}

export default Coin;
