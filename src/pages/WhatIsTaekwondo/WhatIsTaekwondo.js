
import React from 'react';
import Landing from '../../components/Landing'
import InfoCard2 from '../../components/Cards/InfoCard2'
import DropBanner from '../../components/DropBanner'
import img7 from '../../assets/img/img7.jpg'
import img13 from '../../assets/img/img13.jpg'
import img14 from '../../assets/img/img14.jpg'
import img15 from '../../assets/img/img15.jpg'
import './WhatIsTaekwondo.scss';
import '../../components/DropBanner/DropBanner.scss';
import KupRanks from '../../components/KupRanks';
import NumberCard from '../../components/Cards/NumberCard';



const WhatIsTaekwondo = () => {

    const Benefits = [

        {
            title: "Improved Muscle Tone"
        },

        {
            title: "Increased strength and stamina"
        },

        {
            title: "Improved agility and reflexes"
        },

        {
            title: "Improved flexibility"
        },

        {
            title: "Confidence and self-esteem"
        },

        {
            title: "Improved concentration "
        },

        {
            title: "Improved leadership skills"
        },

        {
            title: "Greater self-discipline"
        }

    ]


    return (

        <div className="Taekwondo-layout">

            <Landing

                lBackgroundImg={img7}
                lTitle={"Taekwondo"}
                lSubtitle={"The Way Of The Foot And Fist"}
            />

            <div className="Taekwondo-main">

                {/*What is Taekwondo*/}
                <InfoCard2

                    ModClass="contentRight" //actual css class style
                    BackgroundImg={img14}
                    imgPos="left" //css class style
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
                    textAlign="left" //css class style (drop-info)
                    contentTitle="Improves balance, flexibility, stamina, strength and posture."
                    contentText="In addition to the physical health improvements, Taekwondo is also known to benefit mental health through building confidence, improved self-esteem, concentration levels and self-discipline. it is a great way to also release stress in a safe environment. Taekwondo is a fun alternative way to exercise from the standard gym. 
                        you can meet new people and work together and connect through progressing on the life journey"
                >

                    {/*child component of DropBanner */}
                    {Benefits.map((item, index) => (

                        <NumberCard
                            title={index + 1}
                            info={item.title}
                        />
                    ))}

                </DropBanner>

                {/*Belts and Promotions*/}
                <InfoCard2

                    ModClass="contentLeft" //actual css class style
                    BackgroundImg={img15}
                    imgPos="center" //css class style
                    title1="Belts and"
                    title2="promotions"
                    contentTitle="Kup Ranks"
                    contentText1="Taekwondo has ranks called 'Kup'.
                        the grading in Taekwondo consists mainly of patterns, 'poomsae' and demonstrating techniques that involve strikes, blocks, self-defence and sparring."
                    contentText2="New students begin at 10th kup (White belt) and advance down in numbers to 1st Kup (Inocence of a beginner) to the maturity of the black belt.
                        The coloured belt sequence from white to black is as follows."
                />

                <DropBanner

                    bannerTitle="Kup Rank"
                    bannerSubTitle="Grading"
                    textAlign="left" //css class style (drop-info)
                    contentTitle="New students begin at 10th kup and advance down in numbers seen below."
                >
                    <KupRanks /> {/*child component of DropBanner */}

                </DropBanner>

                {/*Dan Ranks*/}
                <InfoCard2

                    ModClass="contentRight" //actual css class style
                    BackgroundImg={img13}
                    imgPos="bottom" //css class style
                    title1="Dan Ranks"
                    contentTitle="Black Belts"
                    contentText1="Dan ranks increase from 1st Dan to the 10th Dan.
                        Taekwondo teaches more than just physical fighting skills and defensive techniques. 
                        it is a discipline that enhances our spirit and life through our mind and body."
                />

                {/* <DropBanner

                    bannerTitle="Dan Ranks"
                    bannerSubTitle="Grading"
                    textAlign="center" //css class style (drop-info)
                    contentTitle="Rank Sequence"


                // list={ ============== this is a hot mess xD
                //     <ul>
                //         <li>1st - 3rd dan are considered to be national instructors.</li>
                //         <li>4th - 6th dan are considered to be international instructors.</li>
                //         <li>7th dan are considered to be junior master instructors.</li>
                //         <li>9th dan are considered to be grand masters.</li>
                //     </ul>
                // }
                >
                    <ul className="banner__drop-info">
                        <li>1st - 3rd dan are considered to be national instructors.</li>
                        <li>4th - 6th dan are considered to be international instructors.</li>
                        <li>7th dan are considered to be junior master instructors.</li>
                        <li>9th dan are considered to be grand masters.</li>
                    </ul>
                </DropBanner> */}
            </div>

        </div >

    )
}


export default WhatIsTaekwondo