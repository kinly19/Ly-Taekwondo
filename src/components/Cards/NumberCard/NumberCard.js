import React from 'react';
import './NumberCard.scss';



const NumberCard = (props) => {

    return (

        <div className="NumberCard">
            <div className="NumberCard__heading">
                <h1 className="NumberCard__title">{props.title}</h1>
            </div>

            <div className="NumberCard__content">
                <p className="NumberCard__text">{props.info}</p>
            </div>
        </div>
    )
}

export default NumberCard;
