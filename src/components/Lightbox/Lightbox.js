// import { render } from "@testing-library/react";
import React, { useState } from 'react';
import './Lightbox.scss';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
// import img5 from '../../assets/img/img5.jpg';
// import img6 from '../../assets/img/img6.jpg';
import img7 from '../../assets/img/img7.jpg';




const Lightbox = (props, index) => {

    const photos = [

        {
            src: img1
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
            src: img4
        }

    ]

    // const [currentImage, setCurrentImage] = useState(photos[0]);  
    // const handleClick = (index) => {
    //     setCurrentImage(photos[index]);
    //     console.log("Clicked me"); 
    //setCurrentImage(currentImage + 1)

    // }


    const [count, setCount] = useState(0);

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
            setCount(5);
        }
        console.log(count)

    }

    const displayActive = { //use this to toggle our class on and off
        display: "none"
    }



    return (

        <div className="lightbox">

            {photos.map((item, index) => (

                <img className={`lightbox__images lightbox__images--${index + 1}`} src={item.src} key={index}></img>

                // {/* <div>

                //     <img src={currentImage.src} height="100px" ></img>

                //     <button height="100px" onClick={() => handleSetClick(index)}>change me</button>

                // </div> */}

            ))}

            <div className="lightbox-active" style={displayActive} > {/* use a multiply condition  active ? "activeClass" : "non-activeClass"*/}
                {/* <img src={photos[count].src} height="100px" ></img> */}
                <div className="lightbox-active__image-container">
                    <img className="lightbox-active__images" src={photos[count].src}></img> {/* using a count value on each click to change the photos array index position  */}

                </div>

                <button className="lightbox-active__button lightbox-active__button--next" height="100px" onClick={() => handleNextClick()}>next</button>
                <button className="lightbox-active__button lightbox-active__button--prev" height="100px" onClick={() => handlePrevClick()}>prev</button>

            </div>

        </div >


    )
}

export default Lightbox