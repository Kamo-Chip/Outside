import "../styles/footer.css";

export default function Footer(){
    return (
        <div id="footer">
            <div id="subscription-container">
                <p>Become an<br/>Outsider</p>
                <div id="input-container">
                    <input type="email" id="email-input" placeholder="Enter your email address"></input>
                    <button id="subscribe-button">Subscribe</button>
                </div>
            </div>
            <div id="footer-links-container">
                <div>
                    <h4>Links</h4>
                    <p>About us</p>
                    <p>Shop</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>github profile</p>
                </div>
            </div>
        </div>
    )
}