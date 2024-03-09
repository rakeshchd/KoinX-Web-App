import DonutChart from "./DonutChart";
import "./TokenomicsStyles.css"

function Tokenomics(){
    return(
        <div className="tokenomics">
            <h2 className='tokenomics-heading'>Tokenomics</h2>
            <h3>Initial Distribution</h3>
            <div className="pie-chart">
                <div className="donut-chart">
                    <DonutChart/>
                </div>
                <div>
                    <p className="investors"><i class="fa-solid fa-circle"></i> Crowdsale investors: 80%</p>
                    <p className="found"><i class="fa-solid fa-circle"></i> Foundation: 20%</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum illum repudiandae corporis odit laboriosam at iusto minus aspernatur, unde omnis, nostrum velit sunt ipsa! Dolorum iure ratione repudiandae possimus! Nam, et sequi eos pariatur quis optio illo. Quos, ipsa ratione consequatur error obcaecati minima ipsum a rem dolorem inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, illo praesentium veritatis commodi perferendis? Assumenda labore doloribus atque eveniet?</p>
        </div>
    );
}

export default Tokenomics;