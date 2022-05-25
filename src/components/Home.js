import "../styles/home.css";

export default function Home(){
    return (
        <div className="main-page">
            <div id="main-image"></div>
            <div id="featured-categories">
                <h2>Featured categories</h2>
                <div id="category-container">
                    <div id="category">
                        <div id="category-image"></div>
                        <h3>Toe shoes</h3>
                    </div>
                    <div id="category">
                        <div id="category-image"></div>
                        <h3>Hiking bags</h3>
                    </div>  
                    <div id="category">
                        <div id="category-image"></div>
                        <h3>Tents</h3>
                    </div>
                </div>
            </div>
            <div id="mission-container">
                <h1>Why Outside</h1>
                <div id="reason-container">
                    <div className="reason">
                        <div id="reason-image"></div>
                        <p>Quality</p>
                    </div>
                    <div className="reason">
                        <div id="reason-image"></div>
                        <p>Sustainable</p>
                    </div>
                    <div className="reason">
                        <div id="reason-image"></div>
                        <p>Trust</p>
                    </div>
                </div>
            </div>
        </div>
    )
}