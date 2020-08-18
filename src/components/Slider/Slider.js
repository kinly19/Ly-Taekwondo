import React, { useState } from 'react';
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import "./Slider.scss";
import ImgComp from '../../components/ImgComp'


function Slider() {
    //create an array for componet to show inside the slider
    let sliderArr = [
        <ImgComp
            src={img3}
            imgClass=""
            heading="Ly Taekwondo"
            subHeading="TimeLess Life Skills"
        />,
        <ImgComp className="slider__img" src={img2} />

    ] //numbers for now
    const [x, setX] = useState(0) //set x to usestate of 0 and to have setX to set x

    //function for left and right buttons
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        console.log(x);

    }

    const goRight = () => {
        console.log(x);
        //sliderArry.length is used to make input dynamic, so when adding or removing from array
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }


    return (
        <div className="slider-container">


            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slider" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })

            }

            {/*Adding two buttons to navigate*/}
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
        </div>
    )

}

export default Slider
