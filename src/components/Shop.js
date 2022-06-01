import "../styles/shop.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Shop(props){
    const [currentlyDisplayedItems, setCurrentlyDisplayedItems ] = useState(props.stock);

    function setFilter(e){
        let items = [];
        let source;

        if(e.target.localName === "span"){
            source = e.target.id;
        }else{
            source = e.target.children[0].id;
        }

        for(let i = 0; i < props.stock.length; i++){
            if(source === props.stock[i].tag){
                items.push(props.stock[i]);
            }
        }

        setCurrentlyDisplayedItems(items);
    }

    function clearFilter(){
        styleFocusLost();
        setCurrentlyDisplayedItems(props.stock);
    }

    function styleBackground(e){
        styleFocusLost(e);
        if(e.target.localName === "div"){
            e.target.setAttribute("id", "styled-option");
        }else{
            e.target.parentElement.setAttribute("id", "styled-option");
        }

       
    }

    function styleFocusLost(){
        const filters = document.getElementById("filter-options-container");
        for(let i = 0; i < filters.children.length; i++){
            if(filters.children[i].id === "styled-option"){
                filters.children[i].removeAttribute("id");
            }
        }
    }
    
    function displayFilterSideBar(){
        
    const sidebar = 
        <div id="filter-sidebar">
            <h1 style={{marginLeft: ".5em", textDecoration: "underline"}}>Filter</h1>
            <div id="filter-options-container">
                <div onClick={setFilter}className="filter-option">
                    <span id="toeShoes" onClick={styleBackground}>Toe shoes</span>
                </div>
                <div onClick={setFilter} className="filter-option">
                    <span id="tent" onClick={styleBackground}>Tents</span>
                </div>
                <div onClick={setFilter} className="filter-option">
                    <span id="bottle" onClick={styleBackground}>Bottles</span>
                </div>
                <div onClick={setFilter} className="filter-option">
                    <span id="hikingBag" onClick={styleBackground}>Hiking bags</span>
                </div>   
                <button onClick={clearFilter}>Clear Filter</button>
            </div>
        </div>
    
        return sidebar;
    }

    return (
        <div id="shop">
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
                    <Link  className = "shop-link" to={`/shop/${item.name}`} key={index}>
                        <li id="item">
                            <img src={item.imgReference} alt={item.name}/>
                            <p>{item.name}</p>
                            <p>$ {(Number)(item.price).toFixed(2)}</p>
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}