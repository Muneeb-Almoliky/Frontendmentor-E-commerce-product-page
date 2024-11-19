import React from "react";
import '../index.css';
import {data} from '../data'
import { useState } from "react";
import prevIcon from '../images/icon-previous.svg';
import nextIcon from '../images/icon-next.svg';
import LightBox from "./LightBox";


function ImagesSection(props) {
    const [images] = useState(data);
    // const [value, setValue] = useState(0);
    const [imageClick, setImageClick] = useState(false);
    
    const mainImage = images[props.index];
    
    const thumbnailImage = images.map( (image, index) => {
        return(
            <img src={image.thumbnail} alt="" className={index === props.index && "active-thumbnail"} onClick={() => {props.handleImageIndex(index);}}/>
        )        
    })
    function handleImageClick(isClicked) {
        setImageClick(isClicked);
    }

    return(
        <div className="images-and-thumbnails">
            <div className="main-image">
            <img src={prevIcon} alt="" className="prev-icon" onClick={(e) => {props.index<=0? props.handleImageIndex(0):props.handleImageIndex(props.index-1)}}/>
                <img src={mainImage.image} alt="" onClick={() => {handleImageClick(true)}}/>
                {imageClick && <LightBox imageIndex={mainImage.id} handleImageClick={handleImageClick}/>}
                <img src={nextIcon} alt="" className="next-icon" onClick={(e) => {props.index>=images.length-1? props.handleImageIndex(images.length-1):props.handleImageIndex(props.index+1)}}/>                      
            </div>
            <div className="thumbnail-images" >
                {thumbnailImage}
            </div>
        </div>

    )
}

export default ImagesSection;