import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import FooterTrending from './components/FooterTrending'

function App() {

  const [count, setCount] = useState(0)
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
    <>
      <Navbar/>
      <div className='content-bar'>
          <MainContent/>
      </div>
      {screenWidth > 850 && ( <FooterTrending /> )}
    </>
  )
}

export default App
