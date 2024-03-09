import React from "react";
import "./MainContentStyles.css"
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

function MainContent(){

    return (
        <div className="main-content">
            <h2 className="content-one">Cryptocurrencies &gt;&gt; <span className="content-part">Bitcoin</span></h2>
            <div className="content-two">
                <ContentLeft/>
                <ContentRight/>
            </div>
        </div>
    );
}

export default MainContent;