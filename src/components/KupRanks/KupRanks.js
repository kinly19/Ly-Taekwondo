import React, { useState } from 'react';

import './KupRanks.scss';




const KupRanks = (props) => {

    const Ranks = [
        {
            kupRank: "10TH",
            beltColor: "white",
            beltStrip: "none"

        },

        {
            kupRank: "9TH",
            beltColor: "white",
            beltStrip: "yellow"

        },

        {
            kupRank: "8TH",
            beltColor: "yellow",
            beltStrip: "none"

        },

        {
            kupRank: "7TH",
            beltColor: "yellow",
            beltStrip: "green"

        },

        {
            kupRank: "6TH",
            beltColor: "green",
            beltStrip: "none"

        },

        {
            kupRank: "5TH",
            beltColor: "green",
            beltStrip: "blue"

        },

        {
            kupRank: "4TH",
            beltColor: "blue",
            beltStrip: "none"

        },

        {
            kupRank: "3RD",
            beltColor: "blue",
            beltStrip: "red"

        },

        {
            kupRank: "2ND",
            beltColor: "red",
            beltStrip: "none"

        },

        {
            kupRank: "1ST",
            beltColor: "red",
            beltStrip: "black"

        },


    ]
    return (

        Ranks.map((item, index) => (
            <div className={`kup-rank kup-rank--${item.beltColor}`}>
                <h1 className="kup-rank__header"> {item.kupRank}</h1>
                <h2 className="kup-rank__subheader">KUP</h2>
                <div className={`kup-rank__strip kup-rank__strip--${item.beltStrip}`}></div>
            </div>
        ))


    )
}


export default KupRanks