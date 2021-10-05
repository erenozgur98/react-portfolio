import React from 'react'
import Typewritter from 'typewriter-effect';

function Type() {
    return (
        <Typewritter 
            options={{
                strings: [
                    "Software Engineer at Newfold Digital"
                ],
                autoStart: true,
                pauseFor: 99999,
                // loop: true,
                // deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
