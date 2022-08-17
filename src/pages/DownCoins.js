/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import React from "react";

function UpCoins() {
  const [listCoins, setListCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <div className="down">
    <h1 className="title">The coins have gone down in the last hour RealTime</h1>
      <div className="displayDown">
      {listCoins.map(coin => coin.priceChange1h < 0 ? (
          <div className="map">
            <img className="image" src={coin.icon} width="20" height="20"/>
            <p>{coin.symbol}</p>
            <p className="coin-percent red">{coin.priceChange1h}%</p>
          </div>
        ) : (
          " "
        )
        )}
      </div>
      <h3 className="title">Came Down on the last day</h3>
      <div className="displayDown">
        <br></br>
          {listCoins.map((coin) =>
            coin.priceChange1d < 0 ? (
              <div className="map">
                <img className="image" src={coin.icon} width="20" height="20" />
                <p>{coin.symbol}</p>
                <p className="coin-percent red">{coin.priceChange1d}%</p>
              </div>
            ) : (
              " "
            )
          )}
        </div>
      </div> 
  );
}

export default UpCoins;
