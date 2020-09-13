import React from 'react';
import Button from '../Button';
import './ImgComp.scss'

function ImgComp({ BackgroundImg, className, headerClass, subheaderClass, header, subHeader, activeStyle, buttonClass, buttonTitle, buttonLink }) {

    let background = {
        backgroundImage: `linear-gradient(to right bottom, #cc00185e, #c208024d),url(${BackgroundImg})`
    }

    //not needed
    // let activeClass = {
    //     display: "block"
    // }


    return (
        <div className={className} style={background} > {/**slide*/}
            <h1 className={headerClass}>{header}</h1>
            <h3 className={subheaderClass}>{subHeader}</h3>

            <div className={activeStyle}> {/**not needed? */}
                <Button
                    className={buttonClass}
                    title={buttonTitle}
                    link={buttonLink}
                />

            </div>

        </div >

    )
}

export default ImgComp