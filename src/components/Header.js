import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/cart.css";
import shoppingBag from "../images/shoppingbag.svg";

export default function Header(props) {
    const { cart } = props;
    return (
        <nav>
            <ul>
                <Link className="header-link" to="/">
                    <li  id="logo">Outside</li>
                </Link>
                <div id="nav-links">
                    <Link className="header-link" to="/about">
                        <li >About</li>
                    </Link>
                    <Link className="header-link" to="/shop">
                        <li >Shop</li>
                    </Link>
                    <li id="header-link" onClick={showCart}><img style={{height: "2.5rem"}}src={shoppingBag} alt="cart"/>{cart.getQuantity()}</li>
                </div>
            </ul>
        </nav>
    )
}

function showCart(){
    document.getElementById("cart-container").style.visibility = "visible";
}