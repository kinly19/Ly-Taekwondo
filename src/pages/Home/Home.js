import React, { Component, Route } from 'react';
import './Home.scss';
import Card from "../../components/Card";
import Testimony from '../../components/Testimony';
import Slider from '../../components/Slider';
import InfoCard from '../../components/InfoCard';
import Lightbox from '../../components/Lightbox';
import '../../components/Button/Button.scss';
import img2 from '../../assets/img/img2.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';
import img7 from '../../assets/img/img7.jpg';





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

                        className="right"
                        backgroundImg={img2}
                        imgClip="left" //clip path position 
                        contentPosition="left"
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
                        btnClassName="btn btn--secondary"
                        btnLink="/AboutMe"
                        btnTitle="Read More"
                    />

                </div>

                <div className="workshop-container">
                    <h1 className="workshop__header">Trainning Programmes</h1>
                    <div className="card-container">

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
                    < Testimony
                        backgroundImg={img5}
                    />
                </div>

                <div className="lightbox-container">
                    < Lightbox />
                </div>

                <div className="taekwondo-container">
                    <InfoCard
                        className="right"
                        backgroundImg={img7}
                        imgClip="left" //clip path position 
                        contentPosition="left"
                        headerFontSize="5.5rem"
                        infoCardTitle="What Is Taekwondo"
                        infoCardSubtitle="The way of the foot and fist"
                        infoCardText="The word Taekwondo translates as
                        the way of the foot and the fist. 'Tae' means to break or attack with the foot, 
                        'kwon' means to break with the fist and 'do' translate as the art or way"
                        infoCardText2="Although the name has only officially been used since 1955, 
                        it has roots from a range of Korean martial arts that began more than 2,000 years ago"
                        btnClassName="btn btn--secondary"
                        btnLink="https://www.youtube.com/watch?v=K41REhBIfAQ"
                        btnTitle="Read More"
                    />
                </div>
            </div >

        )
    }
}




export default Home