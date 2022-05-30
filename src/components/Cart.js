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
      {props.cart.getQuantity() === 0 && 
          <p id="empty-cart">Cart is empty. Stock up on your gear</p>
        }
        {cartItems.map((element, index) => {
          return (
            <div id="cart-item" key={`${index}cart`}>
              <img id="cart-image" src={element.imgReference} alt="product" />
              <div id="item-wrapper">
                <div id="item-header">
                  <p>{element.name}</p>
                  <p id="subtotal">${(element.price * element.quantity).toFixed(2)}</p>
                </div>
                <div id="quantity">
                  <span id={element.name} onClick={decrement}>-</span>
                  <p>{element.quantity}</p>
                  <span id={element.name} onClick={increment}>+</span>
                </div>
              </div>
            </div>
          );
        })}
        <p id="total">Total: $ {props.cart.getTotal()}</p>
        <button id="buy">Checkout</button>
      </div>
    </div>
  );
}
