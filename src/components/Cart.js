import { useEffect, useState} from "react";
import "../styles/cart.css";
import shoppingCart from "../classes/cart";

export default function Cart(props) {
  const cartItems = props.cart.items;

  const { onCartUpdate } = props;
  
  function hideCart() {
    document.getElementById("cart-container").style.visibility = "hidden";
    ///console.log(cartItems);
  }

  function increment(e){
    props.cart.incrQuantity(e.target.id);
    onCartUpdate(new shoppingCart(props.cart.items));
  }

  function decrement(e){
    props.cart.decrQuantity(e.target.id);
    onCartUpdate(new shoppingCart(props.cart.items));
  }

  return (
    <div id="cart-container">
      <div id="cart-header">
        <div id="title-container">
          <h1>Cart</h1>
          <span>({props.cart.getQuantity()}) items</span>
        </div>
        <span onClick={hideCart} id="close">
          x
        </span>
      </div>
      <div id="cart-contents-container">
        {cartItems.map((element, index) => {
          console.log(element);
          return (
            <div id="cart-item" key={`${index}cart`}>
              <img id="cart-image" src={element.imgReference} alt="product" />
              <div id="item-wrapper">
                <p>{element.name}</p>
                <div id="quantity">
                  <span id={element.name} onClick={decrement}>-</span>
                  <p>{element.quantity}</p>
                  <span id={element.name} onClick={increment}>+</span>
                </div>
              </div>
              <p>${element.price * element.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
