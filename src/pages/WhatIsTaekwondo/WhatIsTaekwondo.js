
import React, { Component } from 'react';
import KupRanks from '../../components/KupRanks/KupRanks';
import './WhatIsTaekwondo.scss';



class WhatIsTaekwondo extends Component {
    render() {
        return (

            <div className="Taekwondo-gridContainer">
                <div className="Taekwondo-centerContainer">

                    <div className="taekwondo">
                        <h1 className="taekwondo__header">What Is Taekwondo</h1>
                        <div className="taekwondo__main-content taekwondo__main-content--1">
                            <h2 className="taekwondo__subheader">"The way of the foot and fist" </h2>
                            <div className="taekwondo__text">
                                <p>
                                    The word Taekwondo translates as the way of the foot and the fist. 'Tae' means to break or attack with the foot,
                                    'kwon' means to break with the fist and 'do' translate as the art or way. Although the name has only officially been used since 1955,
                                    it has roots from a range of Korean martial arts that began more than 2,000 years ago.
                                </p>

                                <p>
                                    Taekwondo originates from South Korea. It has been an Olympic sport since the 2000 Sydney Olympics games.
                                    Taekwondo is a popular activity for both adults and children, and boasts circa 70 million practitioners across the world.
                                </p>

                                <p>
                                    The difference between Taekwondo as a sport, and Taekwondo as an art,
                                    it is that the art has no rules for combat unlike the sport which is highly regulated for the safety of its participants
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="taekwondo">
                        <h1 className="taekwondo__header">Belts And Promotions</h1>
                        <div className="taekwondo__main-content taekwondo__main-content--2">
                            <h2 className="taekwondo__subheader">Kup Ranks</h2>
                            <div className="taekwondo__text">
                                <p>
                                    Taekwondo has ranks called 'Kup'. The grading in Taekwondo consists mainly of patterns,
                                    'Poomsae' and demonstrating techniques that involve strikes, blocks, self-defence and sparring.
                                </p>

                                <p>
                                    New students begin at 10th Kup (White Belt) and advance down in numbers to 1st Kup (innocence of a beginner) to the maturity of the black belt.
                                    The coloured belt sequence from white to black is as follows.
                                </p>
                            </div>

                            <div className="kupRanks-container">
                                <KupRanks />

                            </div>
                        </div>
                    </div>

                    <div className="taekwondo">
                        <h1 className="taekwondo__header">Dan Ranks</h1>
                        <div className="taekwondo__main-content taekwondo__main-content--3">
                            <h2 className="taekwondo__subheader">Dan Ranking</h2>
                            <div className="taekwondo__text">
                                <p>
                                    When numbering the dan ranks, Sino-Korean numbers are used (rather than traditional Korean numbers).
                                    In other words, the ranks are like those that we use when talk about Forms/Poomsae: Il dan, ee dan, sam dan, etc.
                                </p>

                                <p>
                                    Different schools and styles use different names and meanings to different ranks. The list below is typical, but not universal.
                                </p>

                                {/** Taekwondo card components here */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default WhatIsTaekwondo