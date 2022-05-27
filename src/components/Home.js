import "../styles/home.css";

export default function Home(){
    return (
        <div className="main-page">
            <div id="h1">
                <p>The best place to supply your exploration</p>
                <button>Shop</button>
            </div>

            <img src="https://static.bold.org/outdoor-wilderness.jpeg" id="main-image" alt="People hiking"/>
            <div id="featured-categories">
                <h2>Featured categories</h2>
                <div id="category-container">
                    <div id="category">
                        <img src="https://spy.com/wp-content/uploads/2020/06/toe-running-shoes-featured-image.jpg?w=958&h=599&crop=1" id="category-image" alt="Toe shoes"/>
                        <h3>Toe shoes</h3>
                    </div>
                    <div id="category">
                        <img src="https://camotrek.com/wp-content/uploads/2019/12/hiking-backpack-packed-main.jpg" id="category-image" alt="Bag"/>
                        <h3>Hiking bags</h3>
                    </div>  
                    <div id="category">
                        <img src="https://images.unsplash.com/photo-1550957886-ac45931e5779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" id="category-image" alt="Tent"/>
                        <h3>Tents</h3>
                    </div>
                </div>
            </div>
            <div id="mission-container">
                <h2>Why Outside</h2>
                <div id="reason-container">
                    <div className="reason">
                        <img src="https://i.ytimg.com/vi/yRxqF2GW5D4/maxresdefault.jpg" id="reason-image" alt="lake"/>
                        <p>Quality</p>
                        <p id="reason-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="reason">
                        <img src="https://blogs.microsoft.com/wp-content/uploads/prod/2021/04/RE_Earth-day-blog-header-image.jpg" id="reason-image" alt="trees"/>
                        <p>Sustainable</p>
                        <p id="reason-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="reason">
                        <img src="https://www.worldatlas.com/r/w1200/upload/7d/df/7e/loch-fleet-scottish-wildlife-trust-nature-reserve-scotland.jpg" id="reason-image" alt="rainbow"/>
                        <p>Trust</p>
                        <p id="reason-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}