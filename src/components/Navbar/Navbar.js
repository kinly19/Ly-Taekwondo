///navbar 

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = (props) => {


    //1.create a state set to false
    const [toggled, setToggled] = useState(false);

    //2.handle onclick 
    const onClickToggle = () => {
        setToggled(!toggled)
    }

    const untoggle = () => {
        setToggled(false);
    }

    const toggle = () => {
        setToggled(true);
    }

    const [navToggle, setNavToggle] = useState(true);

<<<<<<< HEAD

=======
>>>>>>> e4ee66cc497a56d9d8566e607d137607e09d2c58
    const navbarToggle = () => {
        setNavToggle(true);
    }

    const navbarUntoggle = () => {
        setNavToggle(false);
    }

<<<<<<< HEAD
=======





>>>>>>> e4ee66cc497a56d9d8566e607d137607e09d2c58
    const [onscroll, setOnScroll] = useState(0);

    //we want to use the position of window.scrollY, when scrolling up to show a class (making use of toggle function) when scrolling down to hide a class (untoggle function)
    const handleScroll = () => {


        if (window.scrollY > onscroll) {
            setOnScroll(window.scrollY);
<<<<<<< HEAD
            navbarUntoggle()

        } else if (window.scrollY < onscroll) {
            setOnScroll(window.scrollY);
=======
            // untoggle();
            navbarUntoggle()
        } else if (window.scrollY < onscroll) {
            setOnScroll(window.scrollY);
            // toggle();
>>>>>>> e4ee66cc497a56d9d8566e607d137607e09d2c58
            navbarToggle();

        }
    }
    //effect hook to untoggle our toggled state when react detects a resize on the page or scrollevent
    useEffect(() => {
<<<<<<< HEAD

=======
>>>>>>> e4ee66cc497a56d9d8566e607d137607e09d2c58
        window.addEventListener("resize", untoggle);
        window.addEventListener("scroll", untoggle);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("resize", untoggle, "scroll", untoggle, "scroll", handleScroll);
    })

<<<<<<< HEAD
=======

    // }
    // const scrolling = () => {
    //     console.log(window.scrollY);
    // }








>>>>>>> e4ee66cc497a56d9d8566e607d137607e09d2c58
    return (

        <nav className="navbar">

            <a href="/" className="navbar__logo">Ly Taekwondo</a>

            <ul className="navbar__item">
                <li className="navbar__links"><Link to="/" className="navbar__links">Home</Link></li>
                <li className="navbar__links"><Link to="/gallery" className="navbar__links">Gallery</Link></li>
                <li className="navbar__links"><Link to="/AboutMe" className="navbar__links">About Me</Link></li>
                <li className="navbar__links"><Link to="/WhatIsTaekwondo" className="navbar__links">Taekwondo</Link></li>
                <li className="navbar__links"><Link to="/more" className="navbar__links">More</Link></li>
            </ul>

            <nav className="navbar-toggle" style={navToggle ? { height: '5rem', transform: 'translateY(10rem)' } : { visibility: 'hidden', opacity: '0', transform: 'translateY(-5rem)' }} >

                <div className="navbar-toggle__button-container">
                    <button className="navbar-toggle__button-toggle" onClick={onClickToggle} style={toggled ? { color: 'white' } : {}}> Ly Taekwondo</button>
                </div>

                <ul className="navbar-toggle__toggled-item" style={toggled ? { visibility: 'visible', opacity: '1', height: '30rem' } : {}} >
                    <li className="navbar__links"><Link to="/" className="navbar__links navbar__links--toggled">Home</Link></li>
                    <li className="navbar__links"><Link to="/gallery" className="navbar__links">Gallery</Link></li>
                    <li className="navbar__links"><Link to="/AboutMe" className="navbar__links">About Me</Link></li>
                    <li className="navbar__links"><Link to="/WhatIsTaekwondo" className="navbar__links">Taekwondo</Link></li>
                    <li className="navbar__links"><Link to="/more" className="navbar__links">More</Link></li>
                </ul>

            </nav>
        </nav >
    )
}

export default Navbar

