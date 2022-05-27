import "../styles/footer.css";
import ghLogo from "../images/github-logo.png";
import { Link } from "react-router-dom";

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
                    <Link to="/about"><p id="footer-link">About us</p></Link>
                    <Link to="/shop"><p id="footer-link">Shop</p></Link>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="https://github.com/Kamo-Chip"><img style={{height: "2rem"}}src={ghLogo} alt="github logo"/></a>
                </div>
            </div>
        </div>
    )
}