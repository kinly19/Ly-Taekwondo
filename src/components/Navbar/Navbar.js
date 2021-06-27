///navbar 

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {


    //1.create a state set to false
    const [toggled, setToggled] = useState(false);

    //2.handle onclick 
    const onClickToggle = () => {
        setToggled(!toggled)
    }

    const untoggle = () => {
        setToggled(false);
    }

    // const toggle = () => {
    //     setToggled(true);
    // }

    // const [navToggle, setNavToggle] = useState(true);

    // const navbarToggle = () => {
    //     setNavToggle(true);
    // }

    // const navbarUntoggle = () => {
    //     setNavToggle(false);
    // }

    // const [onscroll, setOnScroll] = useState(0);

    //we want to use the position of window.scrollY, when scrolling up to show a class (making use of toggle function) when scrolling down to hide a class (untoggle function)
    // const handleScroll = () => {


    //     if (window.scrollY > onscroll) {
    //         setOnScroll(window.scrollY);
    //         navbarUntoggle()



    //     } else if (window.scrollY < onscroll) {
    //         setOnScroll(window.scrollY);
    //         navbarToggle();

    //     }
    // }

    useEffect(() => {

        window.addEventListener("resize", untoggle);
        window.addEventListener("scroll", untoggle);
        // window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("resize", untoggle, "scroll", untoggle);
    })

    return (

        // <nav className="navbar">

        //     <a href="/" className="navbar__logo">Ly Taekwondo</a>

        //     <ul className="navbar__items">
        //         <li className="navbar__links"><NavLink exact to="/" className="navbar__links" activeClassName="navbar__links-active">Home</NavLink></li>
        //         <li className="navbar__links"><NavLink exact to="/gallery" className="navbar__links" activeClassName="navbar__links-active">Gallery</NavLink></li>
        //         <li className="navbar__links"><NavLink exact to="/AboutMe" className="navbar__links" activeClassName="navbar__links-active">About Me</NavLink></li>
        //         <li className="navbar__links"><NavLink exact to="/WhatIsTaekwondo" className="navbar__links" activeClassName="navbar__links-active">Taekwondo</NavLink></li>
        //         <li className="navbar__links"><NavLink exact to="/more" className="navbar__links" activeClassName="navbar__links-active">More</NavLink></li>
        //     </ul>

        //     {/*toggled navbar for mobile sizes*/}
        //     <nav className="navbar-toggle" style={navToggle ? { height: '5rem', transform: 'translateY(10rem)' } : { visibility: 'hidden', opacity: '0', transform: 'translateY(-5rem)' }} >

        //         <div className="navbar-toggle__button-container">
        //             <button className="navbar-toggle__button-toggle" onClick={onClickToggle} style={toggled ? { color: 'white' } : {}}> Ly Taekwondo</button>
        //         </div>

        //         <ul className="navbar-toggle__toggled-items" style={toggled ? { visibility: 'visible', opacity: '1', height: '30rem' } : {}} >
        //             <li className="navbar__links"><NavLink exact to="/" className="navbar__links" activeClassName="navbar__links-active">Home</NavLink></li>
        //             <li className="navbar__links"><NavLink exact to="/gallery" className="navbar__links" activeClassName="navbar__links-active">Gallery</NavLink></li>
        //             <li className="navbar__links"><NavLink exact to="/AboutMe" className="navbar__links" activeClassName="navbar__links-active">About Me</NavLink></li>
        //             <li className="navbar__links"><NavLink exact to="/WhatIsTaekwondo" className="navbar__links" activeClassName="navbar__links-active">Taekwondo</NavLink></li>
        //             <li className="navbar__links"><NavLink exact to="/more" className="navbar__links" activeClassName="navbar__links-active">More</NavLink></li>
        //         </ul>

        //     </nav>
        // </nav >

        //new nav markup

        <nav className="navbar">

            <div className="navbar__logo">
                <a href="/" className="navbar__logo-link">Ly Taekwondo</a>
                <button className="navbar__hamburger" onClick={onClickToggle}>Ham</button>
            </div>

            <ul className="navbar__items" style={toggled ? { visibility: 'visible', opacity: '1', height: '50rem' } : {}} >
                <li className="navbar__links"><NavLink exact to="/" className="navbar__links" activeClassName="navbar__links-active">Home</NavLink></li>
                <li className="navbar__links"><NavLink exact to="/gallery" className="navbar__links" activeClassName="navbar__links-active">Gallery</NavLink></li>
                <li className="navbar__links"><NavLink exact to="/AboutMe" className="navbar__links" activeClassName="navbar__links-active">About Me</NavLink></li>
                <li className="navbar__links"><NavLink exact to="/WhatIsTaekwondo" className="navbar__links" activeClassName="navbar__links-active">Taekwondo</NavLink></li>
                <li className="navbar__links"><NavLink exact to="/more" className="navbar__links" activeClassName="navbar__links-active">More</NavLink></li>
            </ul>

        </nav >
    )
}

export default Navbar

