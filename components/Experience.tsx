"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const Experience = () => {
    const experiences = [
        {
            company: "Salfa S.A.",
            position: "Práctica Industrial — Área: Soporte TI & Análisis de Datos",
            period: "Enero – Febrero 2024",
            location: "Santiago, Chile",
            responsibilities: [
                "Desarrollé dashboards interactivos en Power BI con modelado estrella y medidas DAX para la visualización de KPIs operacionales, reduciendo tiempo de generación de reportes manuales del área TI.",
                "Analicé datasets de procesos internos con Python y Pandas para identificar cuellos de botella operacionales, generando informes accionables para jefaturas.",
                "Documenté y optimicé flujos de trabajo y reportes periódicos, mejorando trazabilidad de indicadores clave en procesos corporativos."
            ],
            highlights: ["Power BI", "DAX", "Python", "Pandas", "ETL", "Data Analysis"]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { 
                type: "spring" as const, 
                stiffness: 100, 
                damping: 15 
            }
        }
    };

    return (
        <section className="py-20 px-4 md:px-10 bg-slate-950/55 backdrop-blur-md border-t border-slate-700/30">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-slate-50 mb-12 border-l-4 border-cyan-400 pl-4"
                >
                    Experiencia <span className="text-cyan-200/60">Profesional</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-6 rounded-xl border border-slate-700/40 bg-slate-900/45 hover:bg-slate-900/70 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.9)]"
                        >
                            {/* Top bar accent on hover */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-300" />

                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-50">{exp.company}</h3>
                                            <p className="text-cyan-300 font-semibold">{exp.position}</p>
                                    </div>
                                        <div className="text-sm text-slate-400 mt-2 md:mt-0">
                                        <p>{exp.period}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-3 mb-6">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
                                        <span className="text-cyan-300 font-bold mt-1 flex-shrink-0">▸</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Highlights / Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {exp.highlights.map((highlight, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-200 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
