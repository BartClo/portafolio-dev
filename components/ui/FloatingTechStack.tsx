"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
        <div className="relative h-96 w-full flex items-center justify-center perspective-1000">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
                {techStackData.map((item, index) => (
                    <FloatingCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const FloatingCard = ({ item, index }: { item: TechItem; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
                rotateX: [0, 5, 0],
                rotateY: [0, 5, 0]
            }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
            }}
            whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.2 } }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={cn(
                "relative w-32 h-32 md:w-40 md:h-40 bg-zinc-900/50 backdrop-blur-md border border-zinc-700/50 rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer shadow-lg group hover:shadow-cyan-500/20 transition-all duration-300",
                isHovered && "border-cyan-500/50"
            )}
        >
            <div className="text-4xl mb-2">{item.icon}</div>
            <div className="text-sm font-bold text-zinc-100">{item.name}</div>

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 bg-black/90 text-xs p-2 rounded text-center border border-zinc-800 z-50 pointer-events-none"
                >
                    {item.description}
                </motion.div>
            )}
        </motion.div>
    );
};
