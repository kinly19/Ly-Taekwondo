import React from 'react';
import './Landing.scss';



const Landing = (props) => {

    let landingBackground = {
        backgroundImage: `linear-gradient(to right, #232323e3, #232323cf),url(${props.lBackgroundImg})`
    }

    return (

        <div className="Landing-page" style={landingBackground}>
            <h1 className="Landing-page__title">{props.lTitle}</h1>
            <h2 className="Landing-page__subtitle">{props.lSubtitle}</h2>
        </div>
    )

}










export default Landing 