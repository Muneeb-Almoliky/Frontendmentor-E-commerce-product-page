import React, { useState } from "react";
import '../index.css'
import iconDelete from '../images/icon-delete.svg'
import { data } from "../data";

function Cart(props) {
    const [images] = useState(data);
    const image = images[props.index];

    return(
        <div className="show-cart">
            
            <p>Cart</p>
            {props.amount>0 && 
            <>
                <div className="cart-content">
                <img src={image.image}  alt=""/>
                <p>
                    Fall Limited Edition Sneakers 
                    $125.00 x {props.amount} <span>${125*props.amount}</span>
                </p>
                <img src={iconDelete} alt="" className="icon-delete" onClick={() => props.handleCartClick(0)}/>
            </div>
            <button className="checkout-btn">Checkout</button>
            </>}
            {props.amount===0 && 
            <div className="empty-cart">
                Your cart is empty.
            </div>}
        </div>
    )
}

export default Cart;