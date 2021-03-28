import React from 'react';

import './KupRanks.scss';




const KupRanks = (props) => {

    const Ranks = [
        {
            kupRank: "10TH",
            beltColor: "white",
            beltStripe: "none",
            title: "The White Belt",
            details: "White signifies the innocence of the beginner and their ignorance of Taekwondo."

        },

        {
            kupRank: "9TH",
            beltColor: "white",
            beltStripe: "yellow",
            title: "White Belt Yellow Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },

        {
            kupRank: "8TH",
            beltColor: "yellow",
            beltStripe: "none",
            title: "The Yellow Belt",
            details: "Yellow represents the earth, from where a plant takes root and sprouts as the foundations of Taekwondo are laid."

        },

        {
            kupRank: "7TH",
            beltColor: "yellow",
            beltStripe: "green",
            title: "Yellow Belt Green Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },

        {
            kupRank: "6TH",
            beltColor: "green",
            beltStripe: "none",
            title: "The Green Belt",
            details: "Green signifies the plant itself as, like a plant, the student's Taekwondo skills continue to grow."

        },

        {
            kupRank: "5TH",
            beltColor: "green",
            beltStripe: "blue",
            title: "Green Belt Blue Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },

        {
            kupRank: "4TH",
            beltColor: "blue",
            beltStripe: "none",
            title: "The Blue Belt",
            details: "Blue represents the heavens above, the divine direction in which the plant is growing."

        },

        {
            kupRank: "3RD",
            beltColor: "blue",
            beltStripe: "red",
            title: "Blue Belt Red Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },

        {
            kupRank: "2ND",
            beltColor: "red",
            beltStripe: "none",
            title: "The Red Belt",
            details: "Red signifies danger, warning the student of his own capability for damage and other students of his skill."

        },

        {
            kupRank: "1ST",
            beltColor: "red",
            beltStripe: "black",
            title: "Red Belt Black Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },


    ]
    return (

        <div className="kupContainer">
            {Ranks.map((item, index) => (
                <div className={`kup-rank kup-rank--${item.beltColor}`}>
                    <h1 className="kup-rank__header"> {item.kupRank}</h1>
                    <h2 className="kup-rank__subheader">Kup</h2>
                    <div className={`kup-rank__strip kup-rank__strip--${item.beltStripe}`}></div>

                    <div className="kup-rank__back">
                        <div className="back-content">
                            <h1 className="back-content__header">AKA</h1>
                            <h2 className="back-content__subheader">{item.title}</h2>
                            <p className="back-content__text">{item.details}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>


    )
}


export default KupRanks