import React from "react";
import { useState } from "react";
import '../index.css';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import cart from '../images/icon-cart.svg';


function ContentSection(props) {
    const [amount, setAmount] = useState(0);

    

    return(
        <section className="content-section">
            <p className="sneaker-company">SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className="description">These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price-container">
                <div className="price-and-discount">
                    <p className="price">$125.00</p>
                    <p className="discount">50%</p>
                </div>
                <del className="old-price">$250.00</del>
            </div>
            <div className="quantity-and-cart">
                <div className="quantity">
                    <img src={minus} alt="" className="minus" onClick={() => {amount<=0? setAmount(0):setAmount(amount-1);}}/>
                    <p>{amount}</p>
                    <img src={plus} alt="" className="plus"onClick={() => {setAmount(amount+1)}}/>
                </div>
                <button className="add-to-cart" onClick={() => {props.handleCartClick(amount);}}>
                    <img src={cart} alt=""></img>
                    <p>Add to cart</p>
                </button>
            </div>
        </section>
    )
}

export default ContentSection;