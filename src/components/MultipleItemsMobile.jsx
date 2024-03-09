import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultipleItemsStyles.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(193, 193, 193, 1)",
        borderRadius: "50%", 
        width: "22px", 
        height: "22px", 
        lineHeight: "40px", 
        textAlign: "center",
        justifyContent: "center",
        left: "98%"
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(193, 193, 193, 1)",
        borderRadius: "50%", 
        width: "22px", 
        height: "22px", 
        lineHeight: "40px", 
        textAlign: "center", 
        justifyContent: "center",
        left: "0%",
        zIndex: "1",
        }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

const MultipleItemsMobile = () => {
  const settings = {
    // infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const url = "https://api.coingecko.com/api/v3/search/trending";

  const [multipleItemsMobile, setMultipleItemsMobile] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getMultipleItemsMobile = async () => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        console.log(data.coins);
        setMultipleItemsMobile(data.coins); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };
    getMultipleItemsMobile();
  }, []);

  return (
    <div className="slider-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {multipleItemsMobile.map((coin) => (
            <div key={coin.item.coin_id} className="slider-box">
              <div className="border-slider">
                <div className="coins-part-one">
                  <img src={coin.item.small} alt="coin-image" />
                  <h3>{coin.item.symbol}</h3>
                  <p className={`${coin.item.data.price_change_percentage_24h?.usd > 0 ? 'green' : 'red'}`}>
                    {coin.item.data.price_change_percentage_24h?.usd > 0 ? '+' : ''}
                    {coin.item.data.price_change_percentage_24h.usd?.toFixed(2)}
                  </p>
                </div>
                <h4>{coin.item?.data?.price}</h4>
                <div className="coins-graph">
                  <img src={coin.item.data.sparkline} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default MultipleItemsMobile;