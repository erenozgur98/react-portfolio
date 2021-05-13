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
                    "JavaScript",
                    "React.js",
                    "MySQL",
                    "MongoDB",
                    "Open to learn new technologies",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
