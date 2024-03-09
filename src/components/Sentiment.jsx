import SentimentSlider from "./SentimentSlider";
import AnalystEstimates from "./AnalystEstimates";
import "./SentimentStyles.css"

function Sentiment(){
    return (
        <div className="sentiment">
            <h2>Sentiment</h2>
            <h3>Key Events <i className="fa-solid fa-circle-exclamation"></i></h3>
            <div className="slider-wala">
                <SentimentSlider/>
            </div>
            <h3>Analyst Estimates <i className="fa-solid fa-circle-exclamation"></i></h3>
            <div>
                <AnalystEstimates/>
            </div>
        </div>
    );
}

export default Sentiment;



