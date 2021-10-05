import React from 'react'
import Typewritter from 'typewriter-effect';

function Type() {
    return (
        <Typewritter 
            options={{
                strings: [
                    "Software Engineer"
                ],
                autoStart: true,
                pauseFor: 9999999,
                // loop: true,
                // deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
