import React from 'react';
import './InfoCard.scss';
import Button from "../../components/Button";
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import youtube2 from '../../assets/img/youtube2.svg';


const InfoCard = (props) => {

    const background = {
        backgroundImage: `url(${props.backgroundImg})`
        // backgroundPosition: 
    }

    //old 

    // const container = {
    //     flexDirection: `${props.flexDirection}`
    // }
    // const contentStyle = {
    //     left: `${props.contentLeft}`,
    //     right: `${props.contentRight}`,
    //     clipPath: `polygon(${props.contentClipPath})`
    // }

    const headerStyle = {
        fontSize: `${props.headerFontSize}`
    }

    return (

        <div className={`infoCard infoCard--${props.className}`}>

            <div className={`infoCard__img infoCard__img--${props.imgClip}`} style={background}> </div>

            <div className={`infoCard__content infoCard__content--${props.contentPosition}`}>

                <h1 className="infoCard__header infoCard__header--1" style={headerStyle}>{props.infoCardTitle}</h1>
                <h1 className="infoCard__header infoCard__header--2 margin-bottom-xs" >{props.infoCardSubtitle}</h1>
                <p className="infoCard__paragraph infoCard__paragraph--1 margin-bottom-xs">{props.infoCardText}</p>
                <p className="infoCard__paragraph infoCard__paragraph--2 margin-bottom-xs">{props.infoCardText2}</p>

                <div className="infoCard__btn">
                    <Button
                        className={props.btnClassName} //dynamic classes 
                        link={props.btnLink}
                        title={props.btnTitle}
                    />
                </div>

                <h1 className="infoCard__header infoCard__header--3 margin-bottom-xs">Dont forget to catch us here</h1> {/**make dynamic? */}

                <div className="infoCard__icon-container">
                    <a href="https://www.instagram.com/ly_taekwondo"><img className="infoCard__icons infoCard__icons--instag_icon" src={instagram} alt="instagram icon" /></a>
                    <a href="https://www.facebook.com"> <img className="infoCard__icons infoCard__icons--facebook_icon" src={facebook} alt="sacebook icon" /></a>
                    <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"> <img className="infoCard__icons infoCard__icons--youtube_icon" src={youtube2} alt="youtube icon"></img></a>
                </div>
            </div >
        </div >
    )
}


export default InfoCard;