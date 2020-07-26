///navbar 

import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = (props) => {
    return (



        <nav className="navbar">

            <a href="/" className="navbar__logo">Ly Taekwondo</a>

            <ul className="navbar__item">

                <li className="navbar__links"><Link to="/" className="navbar__links">Home</Link></li>
                <li className="navbar__links"><Link to="/gallery" className="navbar__links">Gallery</Link></li>
                <li className="navbar__links"><Link to="/about me" className="navbar__links">About Me</Link></li>
                <li className="navbar__links"><Link to="/more" className="navbar__links">More</Link></li>
            </ul>
        </nav >

    )
}

export default Navbar

