"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface SkillCategory {
    title: string;
    description?: string;
    skills: string[];
}

interface TechLogo {
    name: string;
    url: string;
}

export const Skills = () => {
    // Tech logos desde CDN Devicon
    const techLogos: TechLogo[] = [
        { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Jupyter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "NumPy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Scikit-learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
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
        <section className="py-20 px-4 md:px-10 bg-neutral-950/80 backdrop-blur-sm border-t border-neutral-800/50 relative">
            {/* Carrusel Infinito de Logos - Fondo (solo en área de contenido) */}
            <div className="absolute left-0 right-0 bottom-0 h-96 overflow-hidden pointer-events-none opacity-20">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {duplicatedLogos.map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-2"
                        >
                            <img 
                                src={tech.url} 
                                alt={tech.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
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
                    className="text-3xl md:text-5xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4"
                >
                    Habilidades <span className="text-zinc-500">Técnicas</span>
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
                            className="group relative p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Accent bar on hover - dentro de la tarjeta */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" />

                            {/* Category Title */}
                            <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
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
                                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 cursor-default transition-all"
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
