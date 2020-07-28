import React from 'react';
import './Home.scss';

const Home = () => {
    return (

        //container to hold main layout css grid
        <div className="layout__container">

            <div className="header">
                <h1 className="header__title">Ly Taekwondo</h1>
                <h3 className="header__subtitle">Timeless Life Skills</h3>
                <button className="btn1">join</button>
            </div>

            <div className="section_welcome">
                <h1>Section 2</h1>
            </div>

            <div className="section_workshop">
                <h1>Section 3</h1>
            </div>

            <div className="section_testimony">
                <h1>Section 4</h1>
            </div>


            {/* //header for the top 

            //main 
            
                
                //section (welcome page)

                //section (trainning programms)

                //section (Testimonies)

                //section (Gallery)

            //main close

            //container close */}

        </div>



    )
}


export default Home