import React from 'react';
import './InfoCard.scss';
import Button from "../../../components/Button";
import instagram from '../../../assets/img/instagram.svg';
import facebook from '../../../assets/img/facebook.svg';
import youtube2 from '../../../assets/img/youtube2.svg';


const InfoCard = (props) => {

    const background = {
        backgroundImage: `url(${props.backgroundImg})`
    }

    const headerStyle = {
        fontSize: `${props.headerFontSize}`,
        color: `${props.headerColor}`
    }

    const subHeaderStyle = {
        color: `${props.subHeaderColor}`,
        marginBottom: `${props.subHeaderMarginB}`
    }

    const paragraphStyle = {
        textAlign: `${props.paragraphAlign}`,
        marginBottom: `${props.paragraphMarginB}`
    }

    const contentAlign = {
        alignItems: `${props.contentAlign}`
    }

    const iconStyle = {
        display: `${props.iconDisplay}`
    }

    return (

        <div className="infoCard">

            <div className="infoCard__img" style={background}> </div>

            <div className="infoCard__content" style={contentAlign}>

                <h1 className={`infoCard__header infoCard__header--${props.mainHeaderClass}`} style={headerStyle}>{props.infoCardTitle}</h1>
                <h2 className={`infoCard__header infoCard__header--${props.subHeaderClass} margin-bottom-xs`} style={subHeaderStyle}> {props.infoCardSubtitle}</h2>
                <p className="infoCard__paragraph infoCard__paragraph margin-bottom-xs" style={paragraphStyle}>{props.infoCardText}</p>
                <p className="infoCard__paragraph infoCard__paragraph margin-bottom-xs" style={paragraphStyle}>{props.infoCardText2}</p>
                <p className="infoCard__paragraph infoCard__paragraph margin-bottom-xs" style={paragraphStyle}>{props.infoCardText3}</p>

                <div className="infoCard__btn">
                    <Button
                        className={props.btnClassName}
                        link={props.btnLink}
                        title={props.btnTitle}
                    />
                </div>

                <h1 className={`infoCard__header infoCard__header--${props.headerSecondary} margin-bottom-xs`}> {props.infoCardHeader3}</h1> {/**make dynamic? */}

                <div className="infoCard__icon-container" style={iconStyle}>
                    <a href="https://www.instagram.com/ly_taekwondo"><img className="infoCard__icons infoCard__icons--instag_icon" src={instagram} alt="instagram icon" /></a>
                    <a href="https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"> <img className="infoCard__icons infoCard__icons--youtube_icon" src={youtube2} alt="youtube icon"></img></a>
                </div>
            </div >
        </div >
    )
}


export default InfoCard;