import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../styles/itemdetail.css";
export default function ItemDetail(props){
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}