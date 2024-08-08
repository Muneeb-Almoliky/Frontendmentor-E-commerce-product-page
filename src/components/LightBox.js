import React from "react";
import { useState } from "react";
// import closeIcon from '../images/images.svg#icon-close'
import {data} from '../data';
import '../index.css';

function LightBox(props) {
    const [images] = useState(data);
    const [value, setValue] = useState(props.imageIndex-1);
    
    const mainImg = images[value];
    const thumbnailImage = images.map( (image, index) => {
        return(
            // <Image img={image} />
            
            <img src={image.thumbnail} alt="" className={index === value && "active-thumbnail"} onClick={(e) => {setValue(index);}} />
        )        
    })

    return(
        
        <div className="light-box" >
        <div className="images-and-thumbnails" >
            <div className="main-image">
                {/* <img src={closeIcon} style={{fill: "white"}} className="icon-close" onClick={() => props.handleImageClick(false)}/> */}
                <div style={{fill: "white"}} className="icon-close" onClick={() => props.handleImageClick(false)}></div>
                {/* <svg class="icon">
                    <use href={closeIcon} className="icon-close" onClick={() => props.handleImageClick(false)}></use>
                </svg> */}
                {/* <img src={prevIcon}  className="prev-icon" onClick={(e) => {value<=0? setValue(0):setValue(value-1)}}/> */}
                <div className="prev-icon" onClick={(e) => {value<=0? setValue(0):setValue(value-1)}}> </div>
                <img src={mainImg.image} alt="" />
                {/* <img src={nextIcon} className="next-icon" onClick={(e) => {value>=images.length-1? setValue(images.length-1):setValue(value+1)}}/>                       */}
                <div className="next-icon" onClick={(e) => {value>=images.length-1? setValue(images.length-1):setValue(value+1)}}></div>
            </div>
            <div className="thumbnail-images" >
                {thumbnailImage}
            </div>
        </div>
        </div>

    )

}

export default LightBox;