import React from 'react';
import './PerformanceStyles.css';


const Performance = () => {
  return (
    <div className="performance">
      <h1>Performance</h1>
      <div>
        <div className="today-high-low">
            <div className="today-low">
                <h3>Today's Low</h3>
                <p>46,930.22</p>
            </div>
            <hr className="range-bar"/>
            <div className="today-high">
                <h3>Today's High</h3>
                <p>49,343.83</p>
            </div>
        </div>
        <div className='arrow-today'>
            <i className="fa-solid fa-caret-up"></i>
            <p>$48,637.83</p>
        </div>
      </div>
      <div className="today-high-low">
            <div className="today-low">
                <h3>52W Low</h3>
                <p>16,930.22</p>
            </div>
            <hr className="range-bar"/>
            <div className="today-high">
                <h3>52W High</h3>
                <p>49,743.83</p>
            </div>
        </div>
        <h2>Fundamentals <i className="fa-solid fa-circle-exclamation"></i></h2>
        <div className='fundamentals'>
            <div className='fundamentals-row'>
                <div className='fundamentals-subpart'>
                    <h4>Bitcoin Price</h4>
                    <p>$16,815.46</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>24h Low / 24h High</h4>
                    <p>$16,382.07 / $16,874.12</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>7d Low / 7d High</h4>
                    <p>$16,382.07 / $16,874.12</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>Trading Volume</h4>
                    <p>$23,249,202,782</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>Market Cap Rank</h4>
                    <p>#1</p>
                </div>
            </div>
            <div className='fundamentals-row'>
                <div className='fundamentals-subpart'>
                    <h4>Market Cap</h4>
                    <p>$323,507,290,047</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>Market Cap Dominance</h4>
                    <p>38.343%</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>Volume / Market Cap</h4>
                    <p>0.0718</p>
                </div>
                <div className='fundamentals-subpart'>
                    <h4>All-Time High</h4>
                    <div>
                        <p className="upper">$69,044.77 <span className="upper-red">-75.6%</span></p>
                        <p className="lower">Nov 10, 2021 (about 1 year)</p>
                    </div>
                </div>
                <div className='fundamentals-subpart'>
                <h4>All-Time Low</h4>
                    <div>
                        <p className="upper">$67.81 <span className="upper-green">24729.1%</span></p>
                        <p className="lower">Jul 06, 2013 (over 9 years)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Performance;
