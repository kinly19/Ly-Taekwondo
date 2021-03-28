import React, { Component } from 'react';
import './AboutMe.scss';
import img6 from '../../assets/img/img6.jpg';
import Landing from '../../components/Landing/Landing';
import InfoCard from '../../components/Cards/InfoCard';

class AboutMe extends Component {
    render() {
        return (

            <div className="aboutMe-layout">

                <Landing
                    lBackgroundImg={img6}
                    lTitle={"About Me"}
                    lSubtitle={"Timeless Life Skill"}
                />

                <div className="aboutMe-main">

                    <InfoCard
                        backgroundImg={img6}

                        mainHeaderClass="main-grey"
                        subHeaderClass="sub-grey"
                        subHeaderMarginB="5rem"
                        paragraphAlign="left"
                        paragraphMarginB="3rem"

                        infoCardTitle="Julie Ly"
                        infoCardSubtitle="Founder And Owner Of Ly Taekwondo 2019"
                        infoCardText="I Have Been Training in wt style taekwondo since 2009 and teaching from 2017, with life experience in both the sport and traditional aspects of the 
                        martial art. during my rainning i have competed in a few, small uk competitions in sparring and poomsae in the past"
                        infoCardText2="i am a firm believer that it is never too late to start learning a new 
                        profound skill, no matter how big or small or what others have to say. to me a martial art is a lifelong journey. not only developing myself pysically but mentally too, inside and outside of training."
                        infoCardText3="no matter what age, background or physical fitness level, everyone is 
                        treated  equally in a safe environment with respect. classes are 
                        tailored to meet individual goals and abilities,.whether private or 
                        group sessions
                        (children and adults). visit the training programmes to find out more."

                        btnClassName="btn btn--secondary"
                        btnLink="/AboutMe"
                        btnTitle="Read More"
                        iconDisplay="none"
                    />

                </div>


            </div>

        )
    }
}
export default AboutMe