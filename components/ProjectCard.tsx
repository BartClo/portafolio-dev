"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    isHovered?: boolean;
    isDimmed?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const ProjectCard = ({
    title,
    description,
    tags,
    imageUrl,
    githubUrl,
    demoUrl,
    isHovered,
    isDimmed,
    onMouseEnter,
    onMouseLeave
}: ProjectCardProps) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className={cn(
                "group relative bg-slate-900/65 border border-slate-700/40 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.9)]",
                isHovered ? "border-cyan-400/30 shadow-[0_0_30px_-5px_rgba(56,189,248,0.18)] z-10" : "hover:border-slate-500/50",
                isDimmed && "opacity-50 blur-[1px] scale-95 grayscale-[30%]"
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            animate={{
                scale: isHovered ? 1.03 : isDimmed ? 0.98 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image Preview Container */}
            <div className="w-full h-48 bg-slate-900 relative overflow-hidden">
                {imageUrl ? (
                    <motion.div
                        className="w-full h-full relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            quality={82}
                            className="object-cover transition-opacity duration-500"
                        />
                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/45 group-hover:bg-slate-800/25 transition-colors duration-500">
                        <span className="text-4xl opacity-10 font-mono tracking-widest text-cyan-100 group-hover:opacity-20 transition-opacity duration-500">
                            PREVIEW
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 
                                     group-hover:border-cyan-400/20 group-hover:text-cyan-100/80 group-hover:bg-cyan-500/5 transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-slate-700/40">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
                        >
                            <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                            <span className="font-medium">Code</span>
                        </a>
                    )}
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-cyan-300/80 hover:text-cyan-200 transition-colors group/link"
                        >
                            <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                            <span className="font-medium">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
