import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsdInrStyles.css";

function UsdInr() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true';
    
    const [usdinr, setUsdInr] = useState({});
    
    useEffect(() => {
        const getUsdInrData = async () => {
            try {
                const response = await axios.get(url);
                const { data } = response;
                console.log(data);
                setUsdInr(data.bitcoin); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getUsdInrData();
    }, []); 

    return (
        <div>
            <div className="part-one">
                <div className="part-one-top">
                    <h1>${usdinr.usd?.toLocaleString('en-IN')}</h1>
                    <p className={`change-pricing ${usdinr.usd_24h_change > 0 ? 'green' : 'red'}`}>
                        <i className={`fa-solid ${usdinr.usd_24h_change > 0 ? 'fa-caret-up' : 'fa-caret-down'}`}></i> 
                        {usdinr.inr_24h_change?.toFixed(2)}%
                    </p>
                    <p className="round-a-clock">(24H)</p>
                </div>
                <div className="part-one-bottom">
                    <h2>₹ {usdinr.inr?.toLocaleString('en-IN')}</h2>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default UsdInr;


