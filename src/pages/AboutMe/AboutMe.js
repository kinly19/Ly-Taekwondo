import React, { Component } from 'react';
import './AboutMe.scss'
import img10 from '../../assets/img/img10.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe-gridContainer">

                <div className="bgImg-container"></div>

                <div className="AboutMe-container">
                    <h1 className="AboutMe-container__header">About Me</h1>

                    <div className="content-right">

                        <div className="aboutMe">
                            <h1 className="aboutMe__header">Julie Ly</h1>

                            <h2 className="aboutMe__subheader">Founder and owner of Ly Taekwondo 2019</h2>

                            <p className="aboutMe__text">Training in WT style Taekwondo since 2009 and teaching from 2017, Julie has
                            experience in both the sport and traditional aspects of the martial art. She has
                            competed in a few, small UK competitions in sparring and poomsae in the past
                            </p>

                            <p className="aboutMe__text">
                                Julie is a firm believer that it is never too late to start learning a new profound skill, no matter how big or small. A martial art is a lifelong journey. Not only developing pysically but mentally too, inside and outside of training.
                            </p>

                            <h3 className="aboutMe__subheader">"A Timeless Life Skills"</h3>

                            <p className="aboutMe__text">
                                No matter what age, background or physical fitneses level, everyone is treated  equally in a safe environment with respect. Classes are tailored to meet individual goals and abilities.whether private or group sessions
                                (children and adults). Visit the "Training programmes" to find
                                out more.
                            </p>

                        </div>

                        <div className="skillSet">

                            <h1 className="aboutMe__header aboutMe__header--secondary">Qualifications and Certificates</h1>

                            <div className="skillSet__list-container">

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">3rd Dan Taekwondo black belt</li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Registered And Insured Taekwondo Instructor  </li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Level 2 Certificate In Coaching And Taekwondo </li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Emergency First Aid At Work </li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Safeguarding And Protecting Children</li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header"> Enhanced DBS Check</li>
                                    <p className="skillSet__list-details"> <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Covid Safe Martial Arts Certificate</li>
                                    <p className="skillSet__list-details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                                <ul className="skillSet__list">
                                    <li className="skillSet__list-header">Safeguarding In Sport</li>
                                    <p className="skillSet__list-details"> <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="content-left">
                    <img src={img10} alt="" />
                </div>

            </div>
        )
    }
}
export default AboutMe