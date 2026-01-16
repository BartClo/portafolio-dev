"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TechItem {
    id: number;
    name: string;
    icon?: string; // Placeholder for emoji or SVG path
    description: string;
}

const techStackData: TechItem[] = [
    { id: 1, name: "Python", icon: "🐍", description: "Backend Logic & Scripting" },
    { id: 2, name: "FastAPI", icon: "⚡", description: "High Performance APIs" },
    { id: 3, name: "Next.js", icon: "▲", description: "Modern Web Frontend" },
    { id: 4, name: "PostgreSQL", icon: "🐘", description: "Relational Database" },
    { id: 5, name: "Docker", icon: "🐳", description: "Containerization" },
    { id: 6, name: "AI Integration", icon: "🤖", description: "LLMs & Smart Agents" },
];

export const FloatingTechStack = () => {
    return (
        <div className="relative h-96 w-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 md:gap-8 perspective-1000">
                {techStackData.map((item, index) => (
                    <FloatingCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const FloatingCard = ({ item, index }: { item: TechItem; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the tilt
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-32 h-32 md:w-40 md:h-40 bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-out",
                isHovered ? "shadow-2xl shadow-cyan-500/20 z-50 scale-105 border-cyan-500/50" : "shadow-lg hover:shadow-xl"
            )}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="flex flex-col items-center justify-center"
            >
                <div className="text-4xl mb-2 drop-shadow-lg">{item.icon}</div>
                <div className="text-sm font-bold text-zinc-100/90 tracking-wide">{item.name}</div>
            </div>

            {/* Glowing effect behind */}
            <div
                className={cn(
                    "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 to-blue-600/10",
                    isHovered && "opacity-100"
                )}
            />

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ transform: "translateZ(75px)" }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-black/90 text-xs p-3 rounded-lg text-center border border-zinc-800 shadow-xl pointer-events-none"
                >
                    <span className="text-cyan-400 font-semibold block mb-1">Info:</span>
                    {item.description}
                </motion.div>
            )}
        </motion.div>
    );
};
