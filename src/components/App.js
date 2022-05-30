import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Shop from "./Shop";
import { useEffect, useState } from "react";
import itemStorage from "../items.json";
import ItemDetail from "./ItemDetail";
import shoppingCart from "../classes/cart";

export default function App(){
    const [ items] = 
    useState(itemStorage.items); 

    const [ cart, setCart ] = useState(new shoppingCart());

    const onCartUpdate = (newCart) => {
        setCart(newCart);
    }

    useEffect(() => {
        console.log("hey")
    }, [cart]);
    
    return (
        <div>
            <Cart cart={cart} onCartUpdate={onCartUpdate}/>
            <BrowserRouter>
                <Header cart={cart}/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/shop" element={<Shop stock={items}/>}></Route>
                        <Route path="/shop/:name" element={<ItemDetail stock={items} cart={cart} onCartUpdate={onCartUpdate}/>}></Route>
                    </Routes>
                    <Footer/>
            </BrowserRouter>
          
        </div>
    );
}