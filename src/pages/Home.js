/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/coin/Coin";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/coins/coinsSlice";

function Home() {
  const [listCoins, setListCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  const coins = useSelector((state) => state.coins.value);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listCoins.filter((coin) => {
    return coin.name.includes(searchCoin);
  });

  // const filteredLevel = listCoins.filter((coin)=>{
  //   if(priceChange < 0)
  //       coin.name.includes(searchCoin)
  // });

  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{coins}</span>
      </div>

      <div></div>

      <h1>Crypto Hunter</h1>
      <small className="p">
        Get All The Info Regarding Your Favorite crypto Currency{" "}
      </small>
      <div className="cryptoHeader">
        <h1>Search Coins</h1>
        <input
          className="search"
          type="text"
          placeholder="BitCoin...."
          onChange={(event) => {
            setSearchCoin(event.target.value);
          }}
        />
      </div>

      <div className="displayUp">
      {listCoins.map(coin => coin.priceChange > 0 ? (
          <div>
            <p className="coin-percent red">{listCoins.priceChange}%</p>
          </div>
        ) : (
          ""
        )
        )}
      </div>
    

      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              volume={coin.marketCap}
              priceChange={coin.priceChange1h}
              websiteUrl={coin.websiteUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
