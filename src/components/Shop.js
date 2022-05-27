import "../styles/shop.css";
import { useState, useEffect } from "react";

export default function Shop(props){
    const [currentlyDisplayedItems, setCurrentlyDisplayedItems ] = useState(props.stock)
    const [filteredItems, setFilteredItems] = useState([]);
    let items = [];
    function showFilterSideBar(){
        const sidebar = document.getElementById("filter-sidebar");
        sidebar.style.visibility = "visible";
    }

    function hideFilterSideBar(){
        const sidebar = document.getElementById("filter-sidebar");
        sidebar.style.visibility = "hidden"
    }

    function setFilter(e){
        const source = e.target;
        console.log(source);
        // if(source.localName === "span"){
        //     setFilteredItems(filteredItems.concat(e.target.id));
        // }else{
        //     setFilteredItems(filteredItems.concat(source.children[0].id));
        // }
       
        for(let i = 0; i < props.stock.length; i++){
            if(e.target.id === props.stock[i].tag){
                items.push(props.stock[i]);
            }
        }

        setCurrentlyDisplayedItems(items);
        
        console.log(filteredItems);
    }

    function clearFilter(){
        setCurrentlyDisplayedItems(props.stock);
    }

    function styleBackground(e){
        const source = e.target.localName;
        if( source === "span" || source === "p"){
            e.target.parentElement.style.backgroundColor = "rgb(213, 226, 213)";
        }
        e.target.style.backgroundColor = "rgb(213, 226, 213)";
    }
    //Add item amount tracker
    function displayFilterSideBar(){
        
    const sidebar = 
        <div id="filter-sidebar">
            <div id="filter-options-container">
                <div onClick={setFilter} id="filter-option">
                    <span  id="toeShoes" onClick={setFilter}>Toe shoes</span>
                    <p>x</p>
                </div>
                <div onClick={styleBackground} id="filter-option">
                    <span id="tent" onClick={setFilter}>Tents</span>
                    <p>x</p>
                </div>
                <div onClick={styleBackground} id="filter-option">
                    <span id="bottle" onClick={setFilter}>Bottles</span>
                    <p>x</p>
                </div>
                <div onClick={styleBackground} id="filter-option">
                    <span id="hikingBag" onClick={setFilter}>Hiking bags</span>
                    <p>x</p>
                </div>   
                <button onClick={clearFilter}>Clear</button>
            </div>
        </div>
    
        return sidebar;
    }

    return (
        <div>
            <div id="shop-content-container">
                {displayFilterSideBar()}
                {displayItems(currentlyDisplayedItems)}
            </div>
        </div>
    );
}

function displayItems(stock){
    return (
        <ul id="items-container">
            
            {stock.map((item, index) => {
                return (
                    <li  key={index} id="item">
                        <img src={item.imgReference} alt={item.name}/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </li>

                )
            })}
        </ul>
    )
}