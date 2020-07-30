import React from 'react';
import './Home.scss';
import img2 from '../../assets/img/img2.jpg';

const Home = () => {
    return (

        //container to hold main layout css grid
        <div className="layout__container">

            <div className="header">
                <h1 className="header__title">Ly Taekwondo</h1>
                <h3 className="header__subtitle">Timeless Life Skills</h3>
                <button className="btn1">join</button>
            </div>

            <div className="section_welcome">

                <div className="section_welcome__clip">
                    <img className="section_welcome__img" src={img2} alt="img2"></img>
                </div>

                <div className="section_welcome__right">
                    <h1 className="section_welcome__header">Ly Taekwondo</h1>
                    <p className="section_welcome__paragraph section_welcome__paragraph--1">
                        360 Kick provides Taekwondo and mindfulness classes,
                        that helps busy professionals and business owners to
                        release stress, and develop both physical and mental resilience,
                        so that they can be more focused and efficient at work, also gives
                        the mental toughness and agility to deal with day to day challenges
                        with ease and power
                    </p>

                    <p className="section_welcome__paragraph section_welcome__paragraph--2">
                        Blending martial arts and mindfulness helps
                        individuals deepen the connections with their body
                        and mind, so that cultivate a healthier relationship
                        with themselves which plays an important part of ones
                        physical, mental and financial well-being.
                    </p>


                </div>

            </div>

            <div className="section_workshop">
                <h1>Section 3</h1>
            </div>

            <div className="section_testimony">
                <h1>Section 4</h1>
            </div>

        </div>

    )
}


export default Home