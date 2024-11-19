import React from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import Cart from "./Cart";


function Header(props) {
   const [open, setOpen] = useState(false);
   const [showCart, setShowCart] = useState(false);

   function handleClick(e) {
        e.target.classList.toggle('active');
        setOpen(!open);
   }
    return(
        <>
            <header>
                
                <div className="nav-container">
                    <div className="logo-and-nav">
                        <div  className="nav-button"  onClick={handleClick}/>
                        <img src={logo} alt="" className="logo" />
                        <div className="nav-list-container" style={{display: open? "block":"none"}}>
                        <ul className="nav-list">
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                    </div>

                    <div className="cart-and-avatar">
                        <div className="cart">

                            {props.amount>0 && <div className="number-of-items">{props.amount}</div>}
                            <img src={cart} alt=""  onClick={() => setShowCart(!showCart)}/>
                        </div>
                        
                        <img src={avatar} alt="" className="avatar"/>

                    </div>
                </div>
                {showCart && <Cart amount={props.amount} handleCartClick={props.handleCartClick} index={props.index}/>}
            </header>
        </>
    )
}

export default Header;