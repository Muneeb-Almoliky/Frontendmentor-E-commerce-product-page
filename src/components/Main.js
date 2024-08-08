import React from "react";
import '../index.css';
import ImagesSection from "./ImagesSection";
import ContentSection from "./ContentSection";


function Main(props) {
    
    function handleCartClick(amount) {
        props.handleCartClick(amount);
    }
    function handleImageIndex(index) {
        props.handleImageIndex(index);
    }
    return(
        <>
            <main>
                
                <ImagesSection index={props.index} handleImageIndex={handleImageIndex}/>
                <ContentSection amount={props.amount} handleCartClick={handleCartClick}/>
            </main>
        </>
    )
}

export default Main;