
import React, { useState } from 'react';
import './Testimony.scss';


const Testimony = (props) => {


    const testimonials = [ //state which will hold our data
        {
            client: "Ahren - Participant of Ly Taekwondo Workshop",
            quote: "After the session I felt revived, it had been a long time since i had a proper work out in class and this worked out both body and mind!"
        },

        {
            client: "Craig - Participant of Ly Taekwondo Workshop",
            quote: "Friendly, enthusiastic and knowledgeable and manged to keep the experience light hearted and informative. I look forward to the next session."
        },

        {
            client: "Avril - Participant of Ly Taekwondo Workshop",
            quote: "Feeling re-energised and calm after a long week. It was a great introduction to Taekwondo and some self-defence techniques. Very friendly and helpful, on hand to lead you through the process and aid you in grasping the techniques. Overall I felt I learnt a lot, whilst having fun, getting in a cardio workout and meeting new people. I would definitely recommend it to others!"
        }
    ]

    const [current, setCurrent] = useState(testimonials[2]); //telling react what part of the state(data from the state) we want to use

    const [active, setActive] = useState(2); //helps us keep track of span color





    const handleSetClick = (index) => {

        setCurrent(testimonials[index]) //setCurrent too
        setActive(index)

    }


    const background = {
        backgroundImage: `url(${props.backgroundImg})`
    }




    return (

        <div className="testimony">
            <div className="testimony__img" style={background}></div>

            <div className="testimony__content">

                <div className="testimony__content-container">
                    <h1 className="testimony__header">What Others Had To Say</h1>
                    <p className="testimony__text">{current.quote}</p> {/* this comes from testimonals state object property quote */}
                    <h3 className="testimony__subtitle">{current.client}</h3>
                </div>


                <div className="testimony__span-container">


                    {testimonials.map((content, index) => ( // map through Testimonals and for each position of the array we are going to create a span 

                        <div className="testimony__span" key={index} onClick={() => handleSetClick(index)} style={index === active ? { backgroundColor: ' #394154', transform: 'scale(1.3)' } : {}} />

                    ))}

                </div>

            </div>
        </div>


    )
}


export default Testimony