import React from 'react';
import './InfoCard.scss';
import Button from "../../components/Button";
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import youtube2 from '../../assets/img/youtube2.svg';
// import Testimony from '../Testimony';

const InfoCard = (props) => {




    const background = {
        backgroundImage: `url(${props.backgroundImg})`
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

    // const headerStyle = {
    //     fontSize: `${props.headerSize}`
    // }



    return (

        <div className={`infoCard infoCard--${props.className}`}>
            <div className={`infoCard__img infoCard__img--${props.imgClip}`} style={background}> </div>

            <div className={`infoCard__content infoCard__content--${props.contentPosition}`}>

                <h1 className="infoCard__header infoCard__header--1">{props.infoCardTitle}</h1>
                <h1 className="infoCard__header infoCard__header--2">{props.infoCardSubtitle}</h1>
                <p className="infoCard__paragraph infoCard__paragraph--1">{props.infoCardText}</p>
                <p className="infoCard__paragraph infoCard__paragraph--2">{props.infoCardText2}</p>

                {/** we need another container for testimony to sit in and use its own grid system */}

                {/* <Testimony /> */}

                <div className="infoCard__btn">
                    <Button
                        className="btn btn--secondary"
                        link="https://www.youtube.com/watch?v=K41REhBIfAQ"
                        title="About Us"
                    />
                </div>

                <h1 className="infoCard__header infoCard__header--3">Dont forget to catch us here</h1> {/**make dynamic? */}

                <div className="infoCard__icon-container">
                    <a href="https://www.instagram.com/ly_taekwondo"><img className="infoCard__icons infoCard__icons--instag_icon" src={instagram} alt="instagram icon" /></a>
                    <a href="https://www.facebook.com"> <img className="infoCard__icons infoCard__icons--facebook_icon" src={facebook} alt="facebook icon" /></a>
                    <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"> <img className="infoCard__icons infoCard__icons--youtube_icon" src={youtube2} alt="youtube icon"></img></a>
                </div>

            </div >
        </div >
    )
}


export default InfoCard;