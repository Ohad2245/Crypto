import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listCoins, setListCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listCoins.filter((coin) =>{
    return coin.name.includes(searchCoin);
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
      <h1>Search Coins</h1>
        <input className="search" type="text" placeholder="BitCoin...." onChange={(event)=>{
          setSearchCoin(event.target.value);
        }}/>

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
              priceChange={coin.priceChange1d}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
