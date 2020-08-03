import React from 'react';
import './Home.scss';
import img2 from '../../assets/img/img2.jpg';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import youtube2 from '../../assets/img/youtube2.svg';




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
                    <h1 className="section_welcome__header section_welcome__header--1">Welcome To</h1>
                    <h1 className="section_welcome__header section_welcome__header--2">Ly Taekwondo</h1>
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

                    <h1 className="section_welcome__header section_welcome__header--3">Dont forget to catch us here</h1>

                    <button className="section_welcome__btn2">Learn more</button>

                    <div className="section_welcome__icon_items">
                        <a href="https://www.instagram.com/ly_taekwondo"><img className="section_welcome__icons section_welcome__icons--instag_icon" src={instagram} alt="instagram icon" /></a>
                        <a href="http://www.facebook.com"> <img className="section_welcome__icons section_welcome__icons--facebook_icon" src={facebook} alt="facebook icon" /></a>
                        <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"> <img className="section_welcome__icons section_welcome__icons--youtube_icon" src={youtube2} alt="youtube icon"></img></a>
                    </div>


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