
import React, { Component } from 'react';
// import KupRanks from '../../components/KupRanks/KupRanks';
import Landing from '../../components/Landing'
import InfoCard2 from '../../components/InfoCard2'
import DropBanner from '../../components/DropBanner'
import img7 from '../../assets/img/img7.jpg'
import img13 from '../../assets/img/img13.jpg'
import img14 from '../../assets/img/img14.jpg'
import img15 from '../../assets/img/img15.jpg'
import './WhatIsTaekwondo.scss';
import KupRanks from '../../components/KupRanks';



class WhatIsTaekwondo extends Component {
    render() {
        return (

            <div className="Taekwondo-layout">

                <Landing
                    lBackgroundImg={img7}
                    lTitle={"Taekwondo"}
                    lSubtitle={"The Way Of The Foot And Fist"}
                    titleFontSize="7rem"
                />

                <div className="Taekwondo-main">

                    <InfoCard2

                        ModClass="contentRight" //actual css class style
                        BackgroundImg={img14}
                        backgroundPosX="20%"
                        title1="What Is"
                        title2="Tae"
                        title3="Kwon"
                        title4="Do"
                        contentTitle="The Way Of The Foot And Fist"
                        contentText1="The word taekwondo translates as the way of the foot and the fist. 'tae' means to break or attack with the foot, 'kwon' means to break with the fist and 'do' translate as the art or way. 
                        although the name has only officially been used since 1955, it has roots from a range of korean martial arts that began more than 2,000 years ago."
                        contentText2="Taekwondo originates from South Korea. It has been an Olympic sport since the 2000 Sydney Olympics games. 
                        Taekwondo is a popular activity for both adults and children, and boasts circa 70 million practitioners across the world."
                        contentText3="The difference between Taekwondo as a sport, and Taekwondo as an art, it is that the art has no rules for combat unlike the sport which is highly regulated for the safety of its participants "
                    />

                    <DropBanner
                        bannerTitle="Benefits Of"
                        bannerSubTitle="Taekwondo"

                        contentHeight="100vh" //set the height of contents container
                        contentTitle="Benefits Of"
                        contentSubtitle="Taekwondo"
                        // contentText={<KupRanks />}
                        contentText="Taekwondo brings health improvements such as; balance, flexibility, stamina, strength and posture."
                        contentText2=""

                    />


                    <InfoCard2

                        ModClass="contentLeft" //actual css class style
                        BackgroundImg={img15}
                        title1="Belts and"
                        title2="promotions"
                        contentTitle="Kup Ranks"
                        contentText1="Taekwondo has ranks called 'Kup'.
                        the grading in Taekwondo consists mainly of patterns, 'poomsae' and demonstrating techniques that involve strikes, blocks, self-defence and sparring."
                        contentText2="New students begin at 10th kup (White belt) and advance down in numbers to 1st Kup (Inocence of a beginner) to the maturity of the black belt.
                        The coloured belt sequence from white to black is as follows."
                    />

                    <InfoCard2

                        ModClass="contentRight" //actual css class style
                        BackgroundImg={img13}
                        backgroundPosX="20%"
                        title1="Dan Ranks"
                        contentTitle="Black Beltss"
                        contentText1="Dan ranks increase from 1st Dan to the 10th Dan.
                        Taekwondo teaches more than just physical fighting skills and defensive techniques. 
                        it is a discipline that enhances our spirit and life through our mind and body."
                    />

                </div>
            </div>

        )
    }
}

export default WhatIsTaekwondo