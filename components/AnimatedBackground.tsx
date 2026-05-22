"use client";

import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-neutral-950 pointer-events-none -z-50">
            {/* Gradiente animado */}
            <motion.div
                animate={{
                    background: [
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(30, 41, 59, 1) 50%, rgba(59, 130, 246, 0.15) 100%)",
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 41, 59, 1) 50%, rgba(139, 92, 246, 0.15) 100%)",
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(30, 41, 59, 1) 50%, rgba(6, 182, 212, 0.15) 100%)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full"
            />

            {/* Capa de overlay sutil para más control */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950/80" />
        </div>
    );
};

