import React from 'react'
import './Card.scss';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h1 className="card__heading">{props.title}</h1>
            <p className="card__text"> {props.details}</p>
            <button className="card__button">{props.buttonTitle}</button>
        </div>

    )
}


export default Card

