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
    <div className="up">
    <h1 className="title">The currencies that have risen in the last hour</h1>
      <div className="displayUp">
      {listCoins.map(coin => coin.priceChange1h > 0 ? (
          <div>
            <img className="image" src={coin.icon} width="20" height="20"/>
            <p>{coin.symbol}</p>
            <p className="coin-percent green">{coin.priceChange1h}%</p>
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
