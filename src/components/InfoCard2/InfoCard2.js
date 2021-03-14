import React from 'react';

import './InfoCard2.scss';


const InfoCard2 = (props) => {


    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(35, 35, 35, 0.89), rgba(35, 35, 35, 0.81)),url(${props.BackgroundImg})`,
        backgroundPosition: `${props.backgroundPosX}`

    }

    return (

        <div className={`InfoCard2 InfoCard2--${props.ModClass}`}>
            <div className="InfoCard2__img" style={backgroundStyle}>
                <div className="InfoCard2__header-container">
                    <h1 className="InfoCard2__heading">{props.title1}</h1>
                    <h1 className="InfoCard2__heading">{props.title2}</h1>
                    <h1 className="InfoCard2__heading">{props.title3}</h1>
                    <h1 className="InfoCard2__heading">{props.title4}</h1>
                </div>
            </div>

            <div className="InfoCard2__content">
                <h1 className="InfoCard2__subheading">{props.contentTitle}</h1>
                <div className="InfoCard2__p-container">
                    <p className="InfoCard2__p-text">{props.contentText1}</p>
                    <p className="InfoCard2__p-text">{props.contentText2}</p>
                    <p className="InfoCard2__p-text">{props.contentText3}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard2;