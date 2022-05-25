import "../styles/shop.css";
import { useState, useEffect } from "react";

export default function Shop(props){
    const [currentlyDisplayedItems, setCurrentlyDisplayedItems ] = useState(props.stock);
    const filteredItems = currentlyDisplayedItems;

    function hideFilterSideBar(){
        const sidebar = document.getElementById("filter-sidebar");
        sidebar.style.visibility = "hidden"
    }

    function showFilterSideBar(){
        const sidebar = document.getElementById("filter-sidebar");
        sidebar.style.visibility = "visible";
    }


    function setFilter(e){
        for(let i = 0; i < currentlyDisplayedItems.length; i++){
            console.log(currentlyDisplayedItems[i]);
            if(e.target.id !== currentlyDisplayedItems[i].tag)continue;
            // filteredItems.push(currentlyDisplayedItems[i]);
            console.log(currentlyDisplayedItems.length)
        }
        //console.log(currentlyDisplayedItems.length)

        //console.log(filteredItems);
    }
    //Add item amount tracker
    function displayFilterSideBar(){
        
    const sidebar = 
        <div id="filter-sidebar">
            <div id="filter-option">
                <span id="toeShoes" onClick={setFilter}>Toe shoes</span>
                <p id="tent">Tents</p>
                <p id="bottle">Bottles</p>
                <p id="hikingBag">Hiking bags</p>
                <button onClick={hideFilterSideBar}>Filter</button>
            </div>
        </div>
    
        return sidebar;
    }

    return (
        <div>
            <div id="shop-content-container">
                {displayFilterSideBar()}
                <div id="shop-header">
                    <div id="filter-icon" onClick={showFilterSideBar}><p>Filter</p></div>
                    <p>Showing All</p>
                </div>
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