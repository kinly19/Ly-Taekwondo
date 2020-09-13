import React, { useState } from 'react';
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import sprite from "../../assets/icons/sprite.svg";
import "./Slider.scss";
import ImgComp from '../../components/ImgComp'


function Slider() {
    //create an array for componet to show inside the slider
    let sliderArr = [
        <ImgComp

            BackgroundImg={img3}
            className="slider__img slider__img--1"
            headerClass="landing__title landing__title--1" //maybe we can use a css variable for this.var(--header-main)
            subheaderClass="landing__subtitle landing__subtitle--1 "

            header="Ly Taekwondo"
            subHeader="TimeLess Life Skills"


            buttonClass="btn btn--main"
            buttonTitle="More"
            buttonLink="https://www.youtube.com/watch?v=zYvZVMyv9Z8"

        />

        ,

        <ImgComp

            BackgroundImg={img2}
            className="slider__img slider__img--2"
            headerClass="landing__title landing__title--2"
            subheaderClass="landing__subtitle landing__subtitle--2"

            header="What Is Taekwondo"
            subHeader="The Way Of The Hand And Foot"

            buttonClass=""
            buttonTitle=""
            buttonLink=""


        />

    ]
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
                        <div key={index} className="slider" style={{ transform: `translateX(${x}%)` }}> {/**slider block */}
                            {item}

                        </div>
                    )
                })
            }

            {/*Adding two buttons to navigate*/}

            <button className="slider-button slider-button__goLeft" onClick={goLeft}>
                <svg className="slider-button slider-button__icon">
                    <use xlinkHref={sprite + "#icon-chevron-thin-left"}></use>
                </svg>
            </button>
            <button className="slider-button slider-button__goRight" onClick={goRight}>
                <svg className="slider-button slider-button__icon">
                    <use xlinkHref={sprite + "#icon-chevron-thin-right"}></use>
                </svg>
            </button>
        </div >
    )

}

export default Slider
