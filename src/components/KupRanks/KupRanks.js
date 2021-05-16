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
            title: "The Yellow Stripe",
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
            title: "The Green Stripe",
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
            title: "The Blue Stripe",
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
            title: "The Red Stripe",
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
            title: "The Black Stripe",
            details: "Each stripe represents an intermediate step towards the next rank."

        },

    ]

    return (

        <div className="kupContainer"> {/* kuprank card container*/}
            {Ranks.map((item, index) => (

                <div className={`kup-rank kup-rank--${item.beltColor}`} key={index}>

                    <div className="kup-rank__front">
                        <h1 className="kup-rank__header"> {item.kupRank}</h1>
                        <h2 className="kup-rank__subheader">Kup</h2>
                    </div>

                    <div className="kup-rank__back">
                        <h1 className="kup-rank__header kup-rank__header--backside">AKA</h1>
                        <h2 className="kup-rank__subheader kup-rank__subheader--backside">{item.title}</h2>
                        <p className="kup-rank__text">{item.details}</p>
                    </div>

                    <div className={`kup-rank__stripe kup-rank__stripe--${item.beltStripe}`}></div>
                </div>
            ))}

        </div>
    )
}

export default KupRanks