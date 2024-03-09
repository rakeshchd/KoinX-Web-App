import "./AnalystEstimatesStyles.css"

function AnalystEstimates(){
    return (
        <div className="analyst-estimates">
            <div className="circle-wala">
                <p>76%</p>
            </div>
            <div className="percent-wala">
                <div className="buy">
                    <p>Buy</p>
                    <hr />
                    <p>76%</p>
                </div>
                <div className="hold">
                    <p>Hold</p>
                    <hr />
                    <p>8%</p>
                </div>
                <div className="sell">
                    <p>Sell</p>
                    <hr />
                    <p>16%</p>
                </div>
            </div>
        </div>
    );
}

export default AnalystEstimates;