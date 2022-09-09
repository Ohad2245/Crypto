/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/coin/Coin";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setCoins } from "../redux/coins/coinsSlice";

function Home() {
  // Wherever I have an setListCoins I deleted.
  /* I used redux instead of UseState() throughout the 
  application so that I could get the information of 
  the API call wherever I wanted in the application
  */

  // And instead of "listCoins" I replaced with "coins"

  // const [listCoins => coins, setListCoins => DELETE!] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  const coins = useSelector((state) => state.coins.value);
  const dispatch = useDispatch();

  // fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=20")
  //   .then(res => res.json())
  //   .then((res) =>{
  //     dispatch(setCoins(res.data.coins))
  //   })
  //   .catch(error => console.log('ERROR'))
  

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20").then(
      (response) => {
        // setListCoins(response.data.coins);
        dispatch(setCoins(response.data.coins))
        // dispatch - הדרך שבה נוכל לבצע את הפעולה הזאת
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 
  מפלטרים את האלמנטים שעומדים בתנאי,התנאי הוא לשמור את כל האלמנטים
  ברשימה ששם המטבע כולל את מה שכתבתו בשורת החיפוש
  , אז אנחנו עוקבים אחרי מה שכתבנו באמצעות הווז סטייט של חיפוש
  inCludes - בודקת האם המילה הזו כלולה או קיימת בתוך קוי נקודה ניים
  */
  const filteredCoins = coins.filter((coin) => {
    return coin.name.includes(searchCoin);
  });
  console.log(coins);

  // const filteredLevel = listCoins.filter((coin)=>{
  //   if(priceChange < 0)
  //       coin.name.includes(searchCoin)
  // });

  return (
    <div className="App">
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

      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.name}
            // Put a variable directly so we can access it
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
