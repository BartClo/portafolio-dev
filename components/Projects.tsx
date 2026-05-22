"use client";

"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "PulseTrack — Pipeline ETL de Datos Clínicos",
            description: "Pipeline automatizado de extracción ETL sobre imágenes no estructuradas de tensiómetros. Transforma fotografías en registros clínicos estructurados (SYS, DIA, PUL) mediante reconocimiento óptico de caracteres con algoritmos de parseo multicapa y corrección de ruido.",
            tags: ["Python", "Google ML Kit", "OCR", "Regex", "ETL", "CSV/PDF"],
            githubUrl: "#",
        },
        {
            title: "Sistema RAG — Consultas Inteligentes sobre Documentos",
            description: "Sistema Retrieval-Augmented Generation (RAG) para consultas inteligentes sobre documentos. Integra modelos de lenguaje (LLMs) para respuestas contextualizadas, búsqueda semántica mediante embeddings sobre base de datos vectorial, y prompt engineering avanzado.",
            tags: ["Python", "LLM APIs", "Embeddings", "Vector DB", "Prompt Engineering", "Git/GitHub"],
            githubUrl: "https://github.com/BartClo",
        },
        {
            title: "Análisis Predictivo Fórmula 1 — Clasificación ML",
            description: "Pipeline reproducible de machine learning para predicción de rendimiento de pilotos. Incluye limpieza de datos, ingeniería de features, clasificación supervisada y evaluación con métricas F1-score, precision y recall. Visualizaciones analíticas para comunicación de resultados.",
            tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Google Colab", "ML"],
            githubUrl: "#",
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
