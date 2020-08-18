import React from 'react';
import './ImgComp.scss'

function ImgComp({ Background, heading, subHeading, imgClass, src }) {

    let imgStyles = {
        // backgroundImage: `url(${Background})`,
        width: 100 + "%",
        height: "auto"

    }

    return (
        <div className="slider__img">
            <img className={imgClass} src={src} alt="slide-img" style={imgStyles}></img>
            <h1 className="slider__heading">{heading}</h1>
            <h3 className="slider__subHeading">{subHeading}</h3>
        </div>

    )
}

export default ImgComp