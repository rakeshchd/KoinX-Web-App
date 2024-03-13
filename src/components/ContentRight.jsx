import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./ContentRightStyles.css"

function ContentRight(){

    const [contentRight, setContentRight] = useState([]);

    useEffect(() => {
        const fetchContentRight = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            // Extract top 3 trending coins from the response
            const top3ContentRight = response.data.coins.slice(0, 3);
            setContentRight(top3ContentRight);
        } catch (error) {
            console.error('Error fetching trending coins:', error);
        }
        };

        fetchContentRight();
    }, []);

    return (
        <div className='content-right'>
        <div className='content-right-one'>
            <div className='right-part'>
                <div className='right-part-one'>
                    <h2>Get Started with KoinX for FREE</h2>
                    <p className='part-one-data'>With our range of features that you can equip for free, KoinX you to be more educated and aware of your tax reports.</p>
                </div>
                <div className='right-part-two'>
                    <img src="https://png.pngtree.com/png-clipart/20220102/original/pngtree-blue-business-technology-office-boys-png-material-png-image_6992851.png" alt="" />
                </div>                
            </div>
            <button>Get Started for Free <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='content-right-two'>
            <h2>Trending Coins (24h)</h2>
            <div>
                {contentRight.map((coin) => (
                <div key={coin.item.id} className='trending-coins-list'>
                    <div className='list-part-one'>
                        <img src={coin.item.small} alt="coin-image" />
                        <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
                    </div>
                    <div className='list-part-two'>
                        <p className={`${coin.item.data.price_change_percentage_24h?.usd > 0 ? 'green' : 'red'}`}>
                        {coin.item.data.price_change_percentage_24h?.usd > 0 ? '+' : ''}
                        {coin.item.data.price_change_percentage_24h.usd?.toFixed(2)}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default ContentRight;