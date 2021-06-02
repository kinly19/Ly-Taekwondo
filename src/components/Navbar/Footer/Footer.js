import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.scss';
import sprite from '../../../assets/icons/sprite.svg'


const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer__items">
                <li className="footer__link"><NavLink exact to="/">Home</NavLink></li>
                <li className="footer__link"><NavLink exact to="Gallery">Gallery</NavLink></li>
                <li className="footer__link"><NavLink exact to="About">About</NavLink></li>
                <li className="footer__link"><NavLink exact to="Contact">Contact</NavLink></li>
            </ul>

            <div className="footer__icons">

                <a href="https://www.instagram.com/ly_taekwondo">
                    <svg className="footer__icon-link footer__icon-link--istag" >
                        <use xlinkHref={sprite + "#icon-instagram"}></use>
                    </svg>
                </a>

                <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?">
                    <svg className="footer__icon-link footer__icon-link--ytube" >
                        <use xlinkHref={sprite + "#icon-youtube2"}></use>
                    </svg>
                </a>

            </div>

            <div className="footer__copyright">
                <p className="footer__text">&copy; Ly Taekwondo 2020 All Rights Reserved</p>
                <p className="footer__text"> Made with &hearts; K.Ly code </p>
            </div>
        </div >
    )
}

export default Footer;