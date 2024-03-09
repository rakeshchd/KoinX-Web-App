import React, { useState } from 'react';
import './ScrollingFeaturesStyles.css';

const ScrollingFeatures = () => {
  const [selected, setSelected] = useState(0);
  const features_elements = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics',
  ];

  return (
    <div className="scrollingbar">
      {features_elements.map((element, index) => (
        <div
          key={element}
          className={`scrollingbar-item ${selected === index ? 'scrolling-selected' : ''}`}
          onClick={() => setSelected(index)}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default ScrollingFeatures;