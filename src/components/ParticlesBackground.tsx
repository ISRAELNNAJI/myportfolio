import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, Container } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: ['repulse', 'attract'],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            attract: {
              distance: 150,
              duration: 0.6,
              factor: 2,
            },
          },
        },
        particles: {
          color: {
            value: ['#9b59b6', '#3498db', '#e74c3c', '#000000'],
          },
          links: {
            color: '#9b59b6',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
            // Add swirl effect by enabling attract with rotate
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: ['circle', 'star', 'image'],
            image: [
              {
                src: '/blackhole.svg',
                width: 32,
                height: 32,
              },
              {
                src: '/galaxy.svg',
                width: 32,
                height: 32,
              },
            ],
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
