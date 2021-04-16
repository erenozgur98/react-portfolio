import React from 'react'
import Particles from 'react-particles-js';
import '../../styles/style.css'

function Particle() {
    return (
        <Particles
            className="particles"
            params={{
                particles: {
                    number: {
                        value: 300,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        speed: 0.3,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 3,
                            opacity_min: 0.5,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    )
}

export default Particle;
