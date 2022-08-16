import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/coin/Coin";
import "../App.css";

function CoinPage({priceChange}) {
  const [listCoins, setListCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
  }, []);


  const filteredCoins = listCoins.filter((coin) => {
    return coin.name.includes(searchCoin);
  });

  return (
    <div className="App">

      <div className="cryptoHeader">
        <div className="greenPercent">
        {priceChange > 0 ? (
          <h1 className="coin-percent green">{priceChange}%</h1>
        ) : (
          ""
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
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default CoinPage;
