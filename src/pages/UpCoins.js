/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useEffect } from "react";
import Axios from "axios";
import "../App.css";
import React from "react";
import {setUpCoins} from '../redux/coins/coinsSlice';
import { useSelector, useDispatch } from "react-redux";

function UpCoins() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  // const [listCoins, setListCoins] = useState([]);
  const coins = useSelector((state) => state.coins.value);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        dispatch(setUpCoins(response.data.coins));
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="up">
      <h3 className="title">The currencies that have risen in the last hour</h3>
      <div className="displayUp">
        {coins.map((coin) =>
          coin.priceChange1h > 0 ? (
            <div className="map " key ={coin.name}>
              <img className="image" src={coin.icon} width="20" height="20" />
              <p>{coin.symbol}</p>
              <p className="coin-percent green">{coin.priceChange1h}%</p>
            </div>
          ) : (
            " "
          )
        )}
      </div>
      <h3 className="title">Came up on the last day</h3>
      <div className="displayUp">
        <br></br>
          {coins.map((coin) =>
            coin.priceChange1d > 0 ? (
              <div className="map" key ={coin.name} >
                <img className="image" src={coin.icon} width="20" height="20"/>
                <p>{coin.symbol}</p>
                <p className="coin-percent green">{coin.priceChange1d}%</p>
              </div>
            ) : (
              " "
            )
          )}
        </div>
        {/* <div>
          {coins.map((coin)=>{
            coin.price > 0 ? (

            )
          })}
        </div> */}
    </div>
  );
}

export default UpCoins;
