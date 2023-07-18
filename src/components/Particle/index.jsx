import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 350,
            density: {
              enable: true,
              value_area: 2500,
            },
          },
          move: {
            direction: "none",
            enable: true,
            speed: 0.5,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.5,
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
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
