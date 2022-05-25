import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Shop from "./Shop";
import { useState } from "react";
import toeShoes1 from "../images/toeShoes1.jpg"
import toeShoes2 from "../images/toeShoes2.jpg";
import toeShoes3 from "../images/toeShoes3.jpg";
import toeShoes4 from "../images/toeShoes4.jpg";
import toeShoes5 from "../images/toeShoes5.jpg";
import bag1 from "../images/bag1.jpeg";
import bag2 from "../images/bag2.jpeg";
import bag3 from "../images/bag3.jpeg";
import tent1 from "../images/tent1.jpeg";
import tent2 from "../images/tent2.jpeg";
import tent3 from "../images/tent3.jpeg";
import bottle1 from "../images/bottle1.jpeg";
import bottle2 from "../images/bottle2.jpeg";
import bottle3 from "../images/bottle3.jpeg";
import bottle4 from "../images/bottle4.jpeg";

export default function App(){
    const [ items] = 
    useState([
        {
            name: "Vibram Fivefingers Khaki",
            price: 46.05,
            tag: "toeShoes",
            imgReference: toeShoes1,
        },
        {
            name: "Vibram Fivefingers Leather",
            price: 47.00,
            tag: "toeShoes",
            imgReference: toeShoes2,
        },
        {
            name: "Vibram Fivefingers EVO",
            price: 47.50,
            tag: "toeShoes",
            imgReference: toeShoes3,
        },
        {
            name: "Vibram Fivefingers KSO",
            price: 45.50,
            tag: "toeShoes",
            imgReference: toeShoes4,
        },
        {
            name: "Vibram Fivefingers V-Run",
            price: 44.65,
            tag: "toeShoes",
            imgReference: toeShoes5,
        },
        {
            name: "Deuter Futura Hiking 32L",
            price: 203.25,
            tag: "hikingBag",
            imgReference: bag1,
        },
        {
            name: "K-Way Huron 40L",
            price: 101.50,
            tag: "hikingBag",
            imgReference: bag2,
        },
        {
            name: "K-Way Adventure 70L",
            price: 120.60,
            tag: "hikingBag",
            imgReference: bag3,
        },
        {
            name: "Coleman Fast-pitch Instant Cabin",
            price: 381.10,
            tag: "tent",
            imgReference: tent1,
        }, 
        {
            name: "K-Way Horizon",
            price: 225.00,
            tag: "tent",
            imgReference: tent2,
        },
        {
            name: "Oztail Privacy Ensuite",
            price: 63.50,
            tag: "tent",
            imgReference: tent3,
        },
        {
            name: "EcoVessel Boulder 750ml",
            price: 47.60,
            tag: "bottle",
            imgReference: bottle1,
        },
        {
            name: "EcoVessel Aspen 450ml",
            price: 38.10,
            tag: "bottle",
            imgReference: bottle2,
        },
        {
            name: "Bobble Bottle 550ml",
            price: 9.50,
            tag: "bottle",
            imgReference: bottle3,
        },
        {
            name: "Laken Kilimanjaro 1L",
            price: 15.90,
            tag: "bottle",
            imgReference: bottle4,
        },
    ]); 

    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop" element={<Shop stock={items}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                <Footer/>
        </BrowserRouter>
    );
}