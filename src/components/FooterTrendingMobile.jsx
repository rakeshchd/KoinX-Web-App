import "./FooterTrendingStyles.css"
import MultipleItemsMobile from "./MultipleItemsMobile";

function FooterTrendingMobile(){
    return (
        <div className="footer-trending">
            <h2>You May Also Like</h2>
            <div>
                <MultipleItemsMobile/>
            </div>
            <h2>Trending Coins</h2>
            <div>
                <MultipleItemsMobile/>
            </div>
        </div>
    );
}

export default FooterTrendingMobile;