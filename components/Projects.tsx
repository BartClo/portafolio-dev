"use client";

"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Sistema de Gestión LIMS",
            description: "Arquitectura backend escalable en Azure para gestión de laboratorios, manejando miles de muestras diarias con alta disponibilidad.",
            tags: ["Django", "React", "PostgreSQL", "Azure"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Cooperativa de Agua API",
            description: "API RESTful para la gestión de consumo y facturación de agua potable rural. Integración con sistemas de pago.",
            tags: ["FastAPI", "Docker", "Redis", "Celery"],
            githubUrl: "#",
        },
        {
            title: "AI Chat Assistant",
            description: "Asistente virtual potenciado por LLMs para soporte técnico automatizado. Implementa RAG para contexto específico.",
            tags: ["Python", "LangChain", "OpenAI", "Next.js"],
            githubUrl: "https://github.com/BartClo/ProyectoIngSoftware",
            demoUrl: "https://chatbot-rag-uss.vercel.app/",
            imageUrl: "/images/ia-rag-login.jpg"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-24 px-4 md:px-10 bg-neutral-950/80 backdrop-blur-sm border-t border-neutral-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4"
                >
                    Ingeniería Aplicada & <br /> <span className="text-zinc-500">Proyectos Destacados</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            isHovered={hoveredIndex === index}
                            isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
