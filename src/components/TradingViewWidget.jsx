import { Link } from "react-router-dom";
import "./TradingViewWidgetStyles.css"
import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const [widgetHeight, setWidgetHeight] = useState(window.innerWidth > 850 ? 400 : 270);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": ${widgetHeight},
          "symbol": "COINBASE:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(0, 0, 0, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "5D",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

      const handleResize = () => {
        setWidgetHeight(window.innerWidth > 850 ? 650 : 400);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [widgetHeight]
  );

  return (
    <>
      <div className='chart-header'>
        <h1>Bitcoin Price Chart (USD)</h1>
        <div>
              <Link className="intervals-btn">1H</Link>
              <Link className="intervals-btn">24H</Link>
              <Link className="intervals-btn interval-active">5D</Link>
              <Link className="intervals-btn">1M</Link>
              <Link className="intervals-btn">3M</Link>
              <Link className="intervals-btn">6M</Link>
              <Link className="intervals-btn">1Y</Link>
              <Link className="intervals-btn">ALL</Link>
        </div>
      </div>
      <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
    </>
  );
}

export default memo(TradingViewWidget);
