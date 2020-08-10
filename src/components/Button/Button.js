import React from 'react';
// import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
    return (
        // <a href="https://www.youtube.com/watch?v=K41REhBIfAQ" className="btn btn--main">{props.title}</a>
        // <Link to={props.link} className="btn btn--main"></Link>
        <a href={props.link} className={props.className}> {props.title}</ a>
    )
}

export default Button;

// we dont need this here delete this or use it somewhere else, this is pointless we just need the styles e