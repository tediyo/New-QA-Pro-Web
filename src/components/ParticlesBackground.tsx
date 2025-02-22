// // src/components/ParticlesBackground.tsx

"use client";

import React from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#FFFF00",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 5,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#FFFF00",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
