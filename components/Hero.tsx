"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const timeline = [
        {
            year: "2022",
            title: "Inicio Ingeniería Civil Informática",
            description: "Primeros pasos en el ecosistema tech. USS - Santiago, Chile",
            color: "from-zinc-500 to-zinc-600",
            isActive: false
        },
        {
            year: "2024",
            title: "Práctica en Salfa S.A.",
            description: "Experiencia real: Power BI, Python, ETL. Área de Soporte TI & Análisis de Datos",
            color: "from-cyan-500 to-blue-500",
            isActive: false
        },
        {
            year: "2025",
            title: "Especialización & Proyectos",
            description: "Data Engineering, IA Generativa & Analytics. Construcción de sistemas con LLMs y pipelines ETL",
            color: "from-cyan-400 to-green-500",
            isActive: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    useEffect(() => {
        if (!isContactOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsContactOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isContactOpen]);

    const scrollToProjects = () => {
        document.getElementById("proyectos-destacados")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-20 px-4 md:px-10 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-transparent">
            {/* Background Effect */}
            <div className="absolute inset-0 w-full h-full radial-gradient-bg pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start space-y-8"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-2xl ring-4 ring-cyan-400/10">
                        <Image
                            src="/images/formal_hap.jpg"
                            alt="Retrato de Marcelo Muñoz"
                            fill
                            priority
                            sizes="(max-width: 768px) 8rem, 10rem"
                            quality={85}
                            className="object-cover"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">[Marcelo Muñoz]</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
                        Ingeniero Civil Informático | Año 5° (Último) <br />
                        <span className="text-cyan-200/70">Analytics Engineering, Data Engineering & IA Generativa</span>
                    </h2>

                    <p className="max-w-lg text-slate-300 leading-relaxed">
                        Constructor de pipelines ETL escalables, dashboards BI corporativos y sistemas potenciados por IA Generativa. 
                        Apasionado por transformar datos crudos en activos estratégicos y explorar aplicaciones prácticas de LLMs.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={scrollToProjects}
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-300 text-slate-950 font-bold hover:from-cyan-200 hover:to-blue-200 transition-colors"
                        >
                            Ver Proyectos
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsContactOpen(true)}
                            className="px-6 py-3 rounded-lg border border-cyan-400/30 text-slate-200 hover:bg-cyan-500/10 hover:border-cyan-300/50 transition-colors"
                        >
                            Contactar
                        </button>
                    </div>
                </motion.div>

                {/* Right Side - Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative h-full flex flex-col justify-center"
                >
                    {/* Vertical connecting line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-sky-400 to-emerald-300" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-24"
                            >
                                {/* Dot */}
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className={`absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} border-2 border-zinc-800 flex items-center justify-center cursor-pointer`}
                                >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color}`} />
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white">{item.year}</h3>
                                        {item.isActive && (
                                            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full animate-pulse">
                                                En progreso
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="text-base font-semibold text-cyan-300 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {isContactOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsContactOpen(false)}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="contact-dialog-title"
                            initial={{ opacity: 0, y: 16, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            onClick={(event) => event.stopPropagation()}
                            className="w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-900/95 p-6 shadow-[0_30px_80px_-30px_rgba(2,8,23,0.95)]"
                        >
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                                        Contacto
                                    </p>
                                    <h3 id="contact-dialog-title" className="mt-2 text-2xl font-bold text-slate-50">
                                        Elegí un canal
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Te dirijo directo a LinkedIn, GitHub o correo para que no tengas que buscar nada.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsContactOpen(false)}
                                    className="rounded-full border border-slate-700/60 p-2 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                                    aria-label="Cerrar contacto"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="grid gap-3">
                                <a
                                    href="https://www.linkedin.com/in/marcelo-mu%C3%B1oz-pe%C3%B1a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-950/60 px-4 py-3 text-slate-200 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                                        <Linkedin size={20} />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="font-semibold">LinkedIn</span>
                                        <span className="text-xs text-slate-400">Perfil profesional</span>
                                    </span>
                                </a>

                                <a
                                    href="https://github.com/BartClo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-950/60 px-4 py-3 text-slate-200 transition-all hover:border-slate-500/50 hover:bg-slate-800/70 hover:text-white"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500/15 text-slate-200">
                                        <Github size={20} />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="font-semibold">GitHub</span>
                                        <span className="text-xs text-slate-400">Repos y proyectos</span>
                                    </span>
                                </a>

                                <a
                                    href="mailto:marcelomunozp09@gmail.com"
                                    className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-950/60 px-4 py-3 text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-200">
                                        <Mail size={20} />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="font-semibold">Correo</span>
                                        <span className="text-xs text-slate-400">Respuesta directa</span>
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
