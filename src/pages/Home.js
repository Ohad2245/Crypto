/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/coin/Coin";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setCoins } from "../redux/coins/coinsSlice";
import Header from "../components/header/Header";
import { BsCheckCircleFill } from "react-icons/bs";
import Phone2 from "../assets/Phone2.png";
import Picture from "../components/pucture/Picture";
const Home = () => {

  const [visible,setVisible] = useState(10);

  const showMoreItems = () =>{
    setVisible((prevValue) => prevValue + 3);
  }

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    // const reveals = this.myRef.current;

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

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
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        // setListCoins(response.data.coins);
        dispatch(setCoins(response.data.coins));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });
  console.log(coins);

  // const filteredLevel = listCoins.filter((coin)=>{
  //   if(priceChange < 0)
  //       coin.name.includes(searchCoin)
  // });

  return (
    <div className="App">
      <Header />
      <p className="p reveal">
        The World’s Fastest Growing <br />
        Crypto App
      </p>
      <div className="blockP reveal">
        <span >
          <BsCheckCircleFill className="icons" /> <span className="blue">Join 50m+</span> users buying and
          selling <span className="blue">250+ cryptocurrencies at true cost</span>
        </span>
        <br></br>
        <span>
          <BsCheckCircleFill className="icons" /> Spend with the Crypto.com Visa
          Card and get up to 5% back
        </span>
        <br></br>
        <span>
          <BsCheckCircleFill className="icons" /> Grow your portfolio by
          receiving rewards up to 14.5% on your crypto assets
        </span>
      </div>
      <img
        className="phone reveal"
        src={Phone2}
        alt="phone"
        width="250"
        height="500"
      />
      <div className="cryptoHeader reveal">
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

      <div className="cryptoDisplay reveal">
        {filteredCoins.slice(0, visible).map((coin) => {
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
        <br />
        <button className="bt reveal" onClick={showMoreItems}>
          All Coins
        </button>
      </div>
      <Picture/>
    </div>
  );
};

export default Home;
