import React, { useState } from 'react';
import './Testimony.scss';

const Testimony = (props) => {


    const testimonials = [ //state which will hold our data
        {
            client: "Ahren",
            quote: "After the session I felt revived, it had been a long time since i had a proper work out in class and this worked out both body and mind!"
        },

        {
            client: "Craig",
            quote: "Friendly, enthusiastic and knowledgeable and manged to keep the experience light hearted and informative. I look forward to the next session."
        },

        {
            client: "Avril",
            quote: "Feeling re-energised and calm after a long week. It was a great introduction to Taekwondo and some self-defence techniques. Very friendly and helpful, on hand to lead you through the process and aid you in grasping the techniques. Overall I felt I learnt a lot, whilst having fun, getting in a cardio workout and meeting new people. I would definitely recommend it to others!"
        }
    ]

    const [current, setCurrent] = useState(testimonials[0]); //telling react what part of the state(data from the state) we want to use

    const [active, setActive] = useState(0); //helps us keep track of span color

    const handleSetClick = (event) => {


        setCurrent(testimonials[event.target.getAttribute("data-quote")]) //setCurrent too
        setActive(event.target.getAttribute("data-quote"))





    }




    return (

        <div className="testimony">

            <h1 className="testimony__title">{current.quote}</h1>
            <h3 className="testimony__subtitle">{current.client}</h3>

            <div className="testimony__active">


                {Object.keys(testimonials).map(index => ( // map through Testimonals and for each position of the array we are going to create a span 
                    <span className="testimony__span"

                        // style={{ backgroundColor: "red" }}
                        onClick={event => handleSetClick(event)}
                        data-quote={index} //custom html attribute- use this to style the span depending on what the active state is 
                        key={index}

                    />

                ))}

            </div>
        </div>
    )
}


export default Testimony