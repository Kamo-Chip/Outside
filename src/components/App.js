import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Shop from "./Shop";
import { useState } from "react";
import itemStorage from "../items.json";
import ItemDetail from "./ItemDetail";

export default function App(){
    const [ items] = 
    useState(itemStorage.items); 

    const [ cart ] = useState(new Cart());
    
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/shop" element={<Shop stock={items}/>}></Route>
                    <Route path="/shop/:name" element={<ItemDetail stock={items}/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                </Routes>
                <Footer/>
        </BrowserRouter>
    );
}