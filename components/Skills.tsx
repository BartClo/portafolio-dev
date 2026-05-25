"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    siAngular,
    siDocker,
    siDjango,
    siGit,
    siGooglecloud,
    siJupyter,
    siLinux,
    siNumpy,
    siPandas,
    siPostgresql,
    siOpenjdk,
    siPython,
    siReact,
    siScikitlearn,
    siVscodium,
} from "simple-icons";

interface SkillCategory {
    title: string;
    description?: string;
    skills: string[];
}

interface TechLogo {
    name: string;
    icon: {
        title: string;
        slug: string;
        svg: string;
        hex: string;
    };
}

export const Skills = () => {
    const techLogos: TechLogo[] = [
        { name: "Python", icon: siPython },
        { name: "PostgreSQL", icon: siPostgresql },
        { name: "Docker", icon: siDocker },
        { name: "Git", icon: siGit },
        { name: "React", icon: siReact },
        { name: "Angular", icon: siAngular },
        { name: "Django", icon: siDjango },
        { name: "Java", icon: siOpenjdk },
        { name: "Linux", icon: siLinux },
        { name: "Pandas", icon: siPandas },
        { name: "Google Cloud", icon: siGooglecloud },
        { name: "VS Code", icon: siVscodium },
        { name: "Jupyter", icon: siJupyter },
        { name: "NumPy", icon: siNumpy },
        { name: "Scikit-learn", icon: siScikitlearn },
    ];

    // Duplicar logos para efecto infinito suave
    const duplicatedLogos = [...techLogos, ...techLogos];
    const skillCategories: SkillCategory[] = [
        {
            title: "Lenguajes de Programación",
            skills: ["Python (Avanzado)", "SQL (Intermedio)", "Java (B-I)", "HTML/CSS (Intermedio)"]
        },
        {
            title: "Datos & ETL",
            skills: ["Pandas (Avanzado)", "NumPy (Intermedio)", "Matplotlib (Intermedio)", "Power BI", "DAX", "PostgreSQL", "ETL Pipelines", "Modelado Relacional 3FN"]
        },
        {
            title: "Machine Learning & IA Generativa",
            skills: ["Scikit-learn", "Clasificación Supervisada", "LLM APIs (OpenAI)", "Embeddings & Búsqueda Semántica", "RAG", "Prompt Engineering", "Google ML Kit (OCR)", "Bases de Datos Vectoriales"]
        },
        {
            title: "Frameworks & ORM",
            skills: ["Django", "SQLAlchemy", "Angular", "LangChain"]
        },
        {
            title: "Cloud & Herramientas",
            skills: ["AWS Fundamentals", "Google Cloud", "Git/GitHub", "Docker", "Linux", "Jupyter Notebook", "Google Colab", "VS Code", "Postman"]
        },
        {
            title: "Metodologías & Procesos",
            skills: ["Scrum", "Kanban", "Design Thinking", "Clean Architecture", "SOLID Principles", "CI/CD", "OWASP Security"]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const categoryVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 }
        }
    };

    const skillVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 150, damping: 10 }
        }
    };

    return (
        <section className="py-20 px-4 md:px-10 bg-slate-950/58 backdrop-blur-md border-t border-slate-700/30 relative">
            {/* Carrusel Infinito de Logos - Fondo (solo en área de contenido) */}
            <div className="absolute left-0 right-0 bottom-0 h-96 overflow-hidden pointer-events-none opacity-20">
                <motion.div
                    className="flex gap-6 whitespace-nowrap will-change-transform"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 48,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {duplicatedLogos.map((tech, idx) => (
                        <div
                            key={idx}
                            aria-label={tech.name}
                            className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-zinc-900/55 border border-zinc-700/60 p-2 shadow-[0_0_24px_-12px_rgba(6,182,212,0.35)]"
                        >
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg"
                                style={{ color: `#${tech.icon.hex}` }}
                                aria-hidden="true"
                            >
                                <span
                                    className="h-11 w-11"
                                    dangerouslySetInnerHTML={{ __html: tech.icon.svg }}
                                />
                            </div>
                            <span className="mt-2 text-[10px] font-medium text-zinc-300 text-center leading-tight">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient overlay para fade effect - solo en bordes laterales */}
            <div className="absolute left-0 bottom-0 w-32 h-96 bg-gradient-to-r from-neutral-950/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-32 h-96 bg-gradient-to-l from-neutral-950/80 to-transparent pointer-events-none" />

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-slate-50 mb-12 border-l-4 border-cyan-400 pl-4"
                >
                    Habilidades <span className="text-cyan-200/60">Técnicas</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={categoryVariants}
                            className="group relative p-6 rounded-xl border border-slate-700/40 bg-slate-900/45 hover:bg-slate-900/70 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden shadow-[0_8px_30px_-18px_rgba(15,23,42,0.9)]"
                        >
                            {/* Accent bar on hover - dentro de la tarjeta */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" />

                            {/* Category Title */}
                            <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                                {category.title}
                            </h3>

                            {/* Skills */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        variants={skillVariants}
                                        whileHover={{ scale: 1.08, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-100 cursor-default transition-all"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
