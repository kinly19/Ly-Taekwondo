// import { render } from "@testing-library/react";
import React, { useState } from 'react';
import './Lightbox.scss';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';
import img7 from '../../assets/img/img7.jpg';
import img8 from '../../assets/img/img8.jpg';
import sprite from "../../assets/icons/sprite.svg";




const Lightbox = (props) => {

    const photos = [

        {
            src: img1,

        },

        {
            src: img2
        },

        {
            src: img3
        },

        {
            src: img4
        },

        {
            src: img7
        },

        {
            src: img8
        }

    ]


    const [active, setActive] = useState(false); //active class 

    const [count, setCount] = useState([1]);

    const handleNextClick = () => {

        setCount(count + 1)
        if (count === photos.length - 1) {
            setCount(0);
        }
        console.log(count)
    }

    const handlePrevClick = () => {
        setCount(count - 1)
        if (count === 0) {
            setCount(photos.length - 1);
        }
        console.log(count)
    }

    const handleClassToggle = (index) => {
        setCount(index);
        setActive(true);
    }

    const handleClassToggleOff = () => {
        setActive(false);
    }



    return (

        <div className="lightbox">
            <h1 className="lightbox__header">Gallery</h1>

            <div className="lightbox__image-container">
                {photos.map((item, index) => (

                    <div className={`lightbox__images lightbox__images--${index + 1}`} style={{ backgroundImage: `url(${item.src})` }} key={index} onClick={() => handleClassToggle(index)}></div>

                ))}
            </div>

            <div className="lightbox-active" style={active ? { visibility: 'visible', opacity: '1' } : {}} >

                <button className="lightbox-active__btn-close" onClick={() => handleClassToggleOff()}>
                    <svg className="lightbox-active__icon lightbox-active__icon--btnclose">
                        <use xlinkHref={sprite + "#icon-close"}></use>
                    </svg>
                </button>

                <div className="lightbox-active__image-container">
                    <img className="lightbox-active__images" src={photos[count].src} onClick={() => handleClassToggleOff()}></img>
                </div>

                <button className="lightbox-active__button lightbox-active__button--next" onClick={() => handleNextClick()}>
                    <svg className="lightbox-active__icon">
                        <use xlinkHref={sprite + "#icon-chevron-thin-right"}></use>
                    </svg>
                </button>

                <button className="lightbox-active__button lightbox-active__button--prev" onClick={() => handlePrevClick()}>
                    <svg className="lightbox-active__icon">
                        <use xlinkHref={sprite + "#icon-chevron-thin-left"}></use>
                    </svg>
                </button>

            </div>

        </div>
    )
}

export default Lightbox