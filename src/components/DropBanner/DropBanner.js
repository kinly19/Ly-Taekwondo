import React, { useState } from 'react';
import './DropBanner.scss';
import sprite from "../../assets/icons/sprite.svg";

const DropBanner = (props) => {


    const [active, setActive] = useState(false);

    const handleOnclick = () => {
        setActive(!active);
    }

    return (
        <div className="banner">
            <div className="banner__header" onClick={handleOnclick}>
                <h1 className="banner__heading">{props.bannerTitle}</h1>
                <h2 className="banner__subHeading">{props.bannerSubTitle}</h2>
            </div>

            <div className="banner__drop-content" style={active ? { maxHeight: "9999px" } : { visibility: "hidden", opacity: "0", transition: "all ease-out .7s" }}>
                <div className={`banner__drop-info banner__drop-info--${props.textAlign}`}>
                    <h1 className="banner__drop-heading">{props.contentTitle}</h1>
                    <p className="banner__drop-text margin-bottom-sm">{props.contentText}</p>
                    <p className="banner__drop-text margin-bottom-sm">{props.contentText2}</p>
                </div>
                <div className="banner__drop-infoSecondary">{props.children}</div>
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