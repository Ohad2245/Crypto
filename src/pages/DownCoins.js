/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useEffect, } from "react";
import Axios from "axios";
import "../App.css";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { setDownCoins } from "../redux/coins/coinsSlice";

function DownCoins() {
  // const [listCoins, setListCoins] = useState([]);

  const coins = useSelector((state) => state.coins.value);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        dispatch(setDownCoins(response.data.coins))
        // setListCoins(response.data.coins);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="down">
    <h3 className="title">The coins have gone down in the last hour RealTime</h3>
      <div className="displayDown">
      {coins.map(coin =>  coin.priceChange1h < 0 ? (
          <div className="map" key ={coin.name}>
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
          {coins.map((coin) => 
            coin.priceChange1d < 0 ? (
              <div className="map" key ={coin.name}>
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

export default DownCoins;
