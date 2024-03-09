import "./FooterTrendingStyles.css"
import MultipleItems from "./MultipleItems";

function FooterTrending(){
    return (
        <div className="footer-trending">
            <h2>You May Also Like</h2>
            <div>
                <MultipleItems/>
            </div>
            <h2>Trending Coins</h2>
            <div>
                <MultipleItems/>
            </div>
        </div>
    );
}

export default FooterTrending;