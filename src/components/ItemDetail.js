import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../styles/itemdetail.css";
import Item from "../classes/item";
import Cart from "../classes/cart";

export default function ItemDetail(props){
    const { cart } = props;
    
    const { onCartUpdate } = props;
   
    const [ item, setItem ] = useState({}); 

    const { name } = useParams();
    
    useEffect(() => {
        setItem(getItem());
    }, []);

    function getItem(){
        for(let i = 0; i < props.stock.length; i++){
            if(props.stock[i].name === name){
                return props.stock[i];
            }
        }
    }

    function addToCart(){
        const cartItem = getItem();
        cart.addItem(new Item(cartItem.name, cartItem.price, cartItem.tag, cartItem.imgReference));
        onCartUpdate(new Cart(cart.items));
    }

    return (
        <div id="product-container">
            <img src={item.imgReference} alt={item.name}/>
            <div id="product-details">
                <div id="product-header">
                    <h1>{item.name}</h1>
                    <p id="price">$ {item.price}</p>
                </div>
                <div id="description">
                    <p>{item.description}</p>
                    <div id="reviews">Reviews</div>
                    <button onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}