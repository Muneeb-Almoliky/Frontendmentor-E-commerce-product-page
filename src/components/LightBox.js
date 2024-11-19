import React from "react";
import { useState } from "react";
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
                <div style={{fill: "white"}} className="icon-close" onClick={() => props.handleImageClick(false)}></div>
                
                <div className="prev-icon" onClick={(e) => {value<=0? setValue(0):setValue(value-1)}}> </div>
                <img src={mainImg.image} alt="" />
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