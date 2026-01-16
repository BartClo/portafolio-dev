"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            // Load the slim version for smaller bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false, // Disable click to avoid blocking interaction significantly
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab", // Nice effect on hover
                },
                resize: {
                    enable: true
                }
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                },
            },
        },
        particles: {
            color: {
                value: "#3fd9fb",
            },
            links: {
                color: "#3fd9fb",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "right", // Flow like a wave
                enable: true,
                outModes: {
                    default: "out", // Seamless flow
                },
                random: false,
                speed: 1, // Constant smooth speed
                straight: false, // Slight organic deviation
                warp: true,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 120, // Higher density for wave feel
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
        fullScreen: {
            enable: false, // We will handle positioning with CSS
            zIndex: -1
        },
    };

    if (!init) {
        return null;
    }

    return (
        <div className="fixed inset-0 -z-50">
            {/* Render particles in a container that sits behind everything */}
            <Particles
                id="tsparticles"
                className="w-full h-full"
                options={options}
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
            />
        </div>
    );
}
