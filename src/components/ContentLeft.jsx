import React, { useState, useEffect } from "react";
import "./ContentLeftStyles.css";
import UsdInr from "./UsdInr";
import TradingViewWidget from "./TradingViewWidget";
import ScrollingFeatures from "./ScrollingFeatures";
import Performance from './Performance';
import Sentiment from "./Sentiment";
import AboutSection from "./AboutSection";
import Tokenomics from "./Tokenomics";
import Team from "./Team";

function ContentLeft() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="content-left">
            <div className="main-graph-box">
                <div className="graph-heading">
                    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="bitcoin-logo" className="bitcoin-logo" />
                    <h1 className="bitcoin-heading">Bitcoin</h1>
                    <p className="btc">BTC</p>
                    <p className="rank">Rank #1</p>
                </div>
                <div className="graph-bottom">
                    <div className="usd-inr">
                        <UsdInr />
                        <div className="bitcoin-chart">
                            <TradingViewWidget />
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <ScrollingFeatures />
                    <Performance />
                    <Sentiment />
                    <AboutSection />
                    {screenWidth > 850 && ( <Tokenomics /> )}
                    <Team/>
                </div>
        </div>
    );
}

export default ContentLeft;
