import React from 'react';
import './ImgComp.scss'

function ImgComp({ BackgroundImg, headerClass, subheaderClass, className, header, subHeader }) {

    // let imgStyles = {
    //     width: 100 + "vw",
    //     height: 100 + "vh",
    //     objectFit: "cover",
    // }

    let background = {
        backgroundImage: `linear-gradient(to right bottom, #cc00185e, #c208024d),url(${BackgroundImg})`
    }

    return (
        <div className={className} style={background} > {/**slide*/}
            {/* <img className={imgClass} src={src} alt="slide-img" style={imgStyles}></img> */}
            <h1 className={headerClass}>{header}</h1>
            <h3 className={subheaderClass}>{subHeader}</h3>
        </div >

    )
}

export default ImgComp