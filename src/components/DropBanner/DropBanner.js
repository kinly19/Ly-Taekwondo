import React, { useState } from 'react';
import './DropBanner.scss';
import sprite from "../../assets/icons/sprite.svg";

const DropBanner = (props) => {

    const [active, setActive] = useState(false);


    //const handleClick = () => {
    //setActive(!active)
    // on the active state we want banner__content height to be set to min-content visability: visaible 
    //on non-active state we want height: 0 and visability:hidden svisibility: hidden;


    const handleOnclick = () => {
        setActive(!active);
    }


    return (
        <div className="banner">
            <div className="banner__header" onClick={handleOnclick}>
                <h1 className="banner__heading">{props.bannerTitle}</h1>
                <h1 className="banner__subHeading">{props.bannerSubTitle}</h1>
            </div>

            <div className="banner__drop-content" style={active ? { height: `${props.contentHeight}` } : { visibility: "hidden", opacity: "0" }}>
                <h1 className="banner__drop-heading">{props.contentTitle}</h1>
                <h1 className="banner__drop-subHeading">{props.contentSubtitle}</h1>

                <div className="banner__drop-info">
                    <p className="banner__drop-text">{props.contentText}</p>
                    <p className="banner__drop-text">{props.contentText2}</p>
                </div>

            </div>

            <div className="banner__footer">
                <button className="banner__dropBtn" onClick={handleOnclick}>
                    <svg className="banner__dropDownIcon" style={active ? { transform: "rotate(180deg)" } : {}}>
                        <use xlinkHref={sprite + "#icon-drop-down-arrow"}></use>
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default DropBanner;