import React from 'react'
import Typewritter from 'typewriter-effect';

function Type() {
    return (
        <Typewritter 
            options={{
                strings: [
                    "Web Developer",
                    "Passionate About Coding",
                    "Fast Learner",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
