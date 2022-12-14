/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core";

function Carousel() {
  const [listCoins, setListCoins] = useState([]);
  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color:'white'

    },
  }));
  const classes = useStyles();

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
  };
   function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const items = listCoins.map((coin) => {
    let profit = coin?.priceChange1d >= 0;

    return (
        <div className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.icon}
          alt={coin?.name}
          height="80"
          style={{ marginBottom: 10,fontWeight:'bold' }}
          
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 'bold',
            }}
          >
            {profit && "+"}
            {coin?.priceChange1d?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 'bold' }}>
        {numberWithCommas(coin?.price.toFixed(2))}$
        </span>
      </div>
    );
  });

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
}

export default Carousel;
