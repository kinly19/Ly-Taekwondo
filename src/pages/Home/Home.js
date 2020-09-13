import React, { Component } from 'react';
import './Home.scss';
// import Button from "../../components/Button";
import Card from "../../components/Card";
import Testimony from '../../components/Testimony';
import Slider from '../../components/Slider';
import InfoCard from '../../components/InfoCard';
import '../../components/Button/Button.scss';
import img2 from '../../assets/img/img2.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';

// import instagram from '../../assets/img/instagram.svg';
// import facebook from '../../assets/img/facebook.svg';
// import youtube2 from '../../assets/img/youtube2.svg';




class Home extends Component {
    render() {
        return (

            //container to hold main layout css grid
            <div className="main-container">

                <div className="landing">

                    <Slider />

                </div>

                <div className="section-welcome">

                    <InfoCard

                        className="left"
                        backgroundImg={img2}
                        imgClip="right" //clip path position 
                        //contentClass-- will switch between testimonal and normal contents
                        contentPosition="right"

                        // clipPath="0 0, 100% 0%, 100% 100%, 20% 100%"
                        // contentLeft="0"
                        // contentRight=""
                        // contentClipPath="0 0, 80% 0%, 100% 100%, 0% 100%"

                        infoCardTitle="Welcome To"
                        infoCardSubtitle="Ly Taekwondo"
                        infoCardText="360 Kick provides Taekwondo and mindfulness classes,
                        that helps busy professionals and business owners to
                        release stress, and develop both physical and mental resilience,
                        so that they can be more focused and efficient at work, also gives
                        the mental toughness and agility to deal with day to day challenges
                        with ease and power"
                        infoCardText2="Blending martial arts and mindfulness helps
                        individuals deepen the connections with their body
                        and mind, so that cultivate a healthier relationship
                        with themselves which plays an important part of ones
                        physical, mental and financial well-being."



                    />




                    {/* <div className="section-welcome__left-container">
                        <img className="section-welcome__img" src={img2} alt="img2"></img>
                    </div>

                    <div className="section-welcome__right-container">
                        <h1 className="section-welcome__header section-welcome__header--1">Welcome To</h1>
                        <h1 className="section-welcome__header section-welcome__header--2">Ly Taekwondo</h1>
                        <p className="section-welcome__paragraph section-welcome__paragraph--1">
                            360 Kick provides Taekwondo and mindfulness classes,
                            that helps busy professionals and business owners to
                            release stress, and develop both physical and mental resilience,
                            so that they can be more focused and efficient at work, also gives
                            the mental toughness and agility to deal with day to day challenges
                            with ease and power
                        </p>

                        <p className="section-welcome__paragraph section-welcome__paragraph--2">
                            Blending martial arts and mindfulness helps
                            individuals deepen the connections with their body
                            and mind, so that cultivate a healthier relationship
                            with themselves which plays an important part of ones
                            physical, mental and financial well-being.
                        </p>

                        <h1 className="section-welcome__header section-welcome__header--3">Dont forget to catch us here</h1>

                        <div className="section-welcome__btn2">
                            <Button
                                className="btn btn--secondary"
                                link="https://www.youtube.com/watch?v=K41REhBIfAQ"
                                title="About Us"
                            />
                        </div>

                        <div className="section-welcome__icon_container">
                            <a href="https://www.instagram.com/ly_taekwondo"><img className="section-welcome__icons section-welcome__icons--instag_icon" src={instagram} alt="instagram icon" /></a>
                            <a href="https://www.facebook.com"> <img className="section-welcome__icons section-welcome__icons--facebook_icon" src={facebook} alt="facebook icon" /></a>
                            <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"> <img className="section-welcome__icons section-welcome__icons--youtube_icon" src={youtube2} alt="youtube icon"></img></a>
                        </div>
                    </div> */}
                </div>

                <div className="workshop-container">
                    <h1 className="workshop__header">Trainning Programmes</h1>
                    <div className="card-container"> {/*this will be the container to hold our card components, so we can place them via grid or flexbox*/}

                        < Card
                            className="card"
                            imgClass="card__background-img"
                            image={img2}
                            title="Group or private classes"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            buttonTitle="Learn more"
                        />

                        < Card
                            className="card"
                            imgClass="card__background-img"
                            image={img6}
                            title="Fitness based taekwondo"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            buttonTitle="Learn more"
                        />

                        < Card
                            className="card"
                            imgClass="card__background-img"
                            image={img4}
                            title="fitness/self defence"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            buttonTitle="Learn more"
                        />

                        < Card
                            className="card"
                            imgClass="card__background-img card__background-img--4"
                            image={img5}
                            title="traditional taekwondo"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            buttonTitle="Learn more"
                        />
                    </div>
                </div>

                <div className="testimony-container">
                    < Testimony />


                </div>

                <InfoCard

                    className="right"
                    backgroundImg={img2}
                    imgClip="left" //clip path position 
                    //contentClass-- will switch between testimonal and normal contents
                    contentPosition="left"




                />

            </div >

        )
    }
}




export default Home