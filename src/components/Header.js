import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Outside</li>
                </Link>
                <div id="nav-links">
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}