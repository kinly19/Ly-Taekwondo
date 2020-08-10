import React, { Component } from 'react';
import './Home.scss';
import Button from "../../components/Button"
import Card from "../../components/Card"
import '../../components/Button/Button.scss';
import img2 from '../../assets/img/img2.jpg';
// import img4 from '../../assets/img/img4.jpg';
import banner1 from '../../assets/img/banner1.jpg';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import youtube2 from '../../assets/img/youtube2.svg';



class Home extends Component {
    render() {
        return (

            //container to hold main layout css grid
            <div className="layout-container">

                <div className="header">
                    <h1 className="header__title">Ly Taekwondo</h1>
                    <h3 className="header__subtitle">Timeless Life Skills</h3>
                    {/* <a href="https://www.youtube.com/watch?v=K41REhBIfAQ" className="btn btn--main">Discover</a> */}
                    <Button //add some of that dynamic spice
                        className="btn"
                        title="Learn More"
                        link="https://www.youtube.com/watch?v=BLTbuvv1Lgs"
                    />

                </div>

                <div className="section-welcome">

                    <div className="section-welcome__left-container">
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


                    </div>

                </div>

                <div className="section-workshop">
                    <div className="workshop"> {/** We need a container for our banner header */}
                        <div className="workshop__picture">
                            <img className="workshop__picture" src={banner1} alt="img4" />
                        </div>
                        <h1 className="workshop__header">Trainning Programmes</h1>
                    </div>

                    <div className="card-container"> {/*this will be the container to hold our card components, so we can place them via grid or flexbox*/}


                        < Card
                            image={img2}
                            title="Welcome home"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        < Card
                            image={img2}
                            title="Welcome home"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        < Card
                            image={img2}
                            title="Welcome home"
                            details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                    </div>

                </div>

                {/* <div className="section_testimony">
                    <h1>Section 4</h1>
                </div> */}

            </div >

        )
    }
}




export default Home