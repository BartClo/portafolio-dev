"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl }: ProjectCardProps) => {
    return (
        <motion.div
            className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors flex flex-col h-full"
            whileHover={{ y: -5 }}
        >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-zinc-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                {imageUrl ? (
                    // <Image src={imageUrl} alt={title} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-500">Image: {title}</div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-600 bg-zinc-800/50">
                        <span className="text-4xl opacity-20">Preview</span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm mb-4 flex-grow">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                            <Github size={16} /> Código
                        </a>
                    )}
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ExternalLink size={16} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
