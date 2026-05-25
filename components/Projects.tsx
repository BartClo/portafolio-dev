"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectSet = "main" | "locals";

interface ProjectItem {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    imageUrl?: string;
    videoUrl?: string;
}

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeSet, setActiveSet] = useState<ProjectSet>("main");

    const mainProjects: ProjectItem[] = [
        {
            title: "PulseTrack — Pipeline ETL de Datos Clínicos",
            description: "Pipeline automatizado de extracción ETL sobre imágenes no estructuradas de tensiómetros. Transforma fotografías en registros clínicos estructurados (SYS, DIA, PUL) mediante reconocimiento óptico de caracteres con algoritmos de parseo multicapa y corrección de ruido.",
            tags: ["Python", "Google ML Kit", "OCR", "Regex", "ETL", "CSV/PDF"],
            githubUrl: "https://github.com/BartClo/pulse_track",
        },
        {
            title: "Sistema RAG — Consultas Inteligentes sobre Documentos",
            description: "Sistema Retrieval-Augmented Generation (RAG) para consultas inteligentes sobre documentos. Integra modelos de lenguaje (LLMs) para respuestas contextualizadas, búsqueda semántica mediante embeddings sobre base de datos vectorial, y prompt engineering avanzado.",
            tags: ["Python", "LLM APIs", "Embeddings", "Vector DB", "Prompt Engineering", "Git/GitHub"],
            githubUrl: "https://github.com/BartClo/ProyectoIngSoftware",
            imageUrl: "/images/ia-rag-login.jpg",
        },
        {
            title: "Análisis Predictivo Fórmula 1 — Clasificación ML",
            description: "Pipeline reproducible de machine learning para predicción de rendimiento de pilotos. Incluye limpieza de datos, ingeniería de features, clasificación supervisada y evaluación con métricas F1-score, precision y recall. Visualizaciones analíticas para comunicación de resultados.",
            tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Google Colab", "ML"],
            githubUrl: "#",
        }
    ];

    const localProjects: ProjectItem[] = [
        {
            title: "The Rice",
            description: "Sitio web hecho desde cero para abrir un canal de ventas directo vía WhatsApp. Diseñado para que los clientes pidan al instante desde cualquier dispositivo.",
            tags: ["Next.js", "WhatsApp", "Landing Page", "Ventas", "UI/UX"],
            githubUrl: "https://github.com/BartClo/The-Rice",
            demoUrl: "https://the-rice.vercel.app/",
            imageUrl: "https://image.thum.io/get/width/1200/https://the-rice.vercel.app/",
        },
        {
            title: "Victoria Cake Shop",
            description: "Página creada para impulsar ventas y pedidos por WhatsApp en una pastelería local. Pensada para mostrar productos y convertir visitas en pedidos.",
            tags: ["Next.js", "WhatsApp", "Pedidos", "Negocio Local", "Responsive"],
            githubUrl: "https://github.com/BartClo/VictoriaCakeShop",
            demoUrl: "https://victoria-cake-shop.vercel.app/",
            imageUrl: "/images/victoria-cake-shop-preview.png",
        },
        {
            title: "Amor de Mis Amores",
            description: "Web desarrollada desde cero para otro punto de venta con pedidos directos por WhatsApp. Enfoque visual limpio para acelerar el contacto y la conversión.",
            tags: ["Next.js", "WhatsApp", "Restaurante", "Pedidos Rápidos", "Landing"],
            githubUrl: "https://github.com/BartClo/AmordeMisAmores",
            demoUrl: "https://amor-de-mis-amores.vercel.app/",
            imageUrl: "https://image.thum.io/get/width/1200/https://amor-de-mis-amores.vercel.app/",
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

    const nextSet = activeSet === "main" ? "locals" : "main";
    const previousSet = activeSet === "main" ? "locals" : "main";

    const goToSet = (set: ProjectSet) => {
        setActiveSet(set);
        setHoveredIndex(null);
    };

    return (
        <section id="proyectos-destacados" className="py-24 px-4 md:px-10 bg-slate-950/62 backdrop-blur-md border-t border-slate-700/30 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-slate-50 border-l-4 border-cyan-400 pl-4"
                    >
                        Ingeniería Aplicada & <br /> <span className="text-cyan-200/60">Proyectos Destacados</span>
                    </motion.h2>

                    <div className="flex items-center gap-2 self-start md:self-auto">
                        <button
                            type="button"
                            onClick={() => goToSet(previousSet)}
                            aria-label="Mostrar proyectos anteriores"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/70 text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => goToSet(nextSet)}
                            aria-label="Mostrar siguientes proyectos"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/70 text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: activeSet === "main" ? "0%" : "-100%" }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    >
                        <div className="w-full flex-shrink-0">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {mainProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.title}
                                        {...project}
                                        isHovered={hoveredIndex === index}
                                        isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        <div className="w-full flex-shrink-0">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {localProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.title}
                                        {...project}
                                        isHovered={hoveredIndex === index}
                                        isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
