import React from 'react'
import Typewriter from 'typewriter-effect';

function Hero() {
    return (
        <div className="banner">
            <h1>
                <Typewriter
                    onInit={(typewritter) => {
                        typewritter.typeString("Welcome To Our Events App").pauseFor(2000).deleteAll().typeString("Welcome To Our Events App").start();
                    }}
                />
            </h1>
            
        </div>
    )
}

export default Hero;
