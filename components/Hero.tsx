"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-20 px-4 md:px-10">
            {/* Background Effect */}
            <div className="absolute inset-0 w-full h-full radial-gradient-bg pointer-events-none" />

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start space-y-8"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl ring-4 ring-cyan-500/10">
                        <Image src="/images/formal_hap.jpg" alt="Marcelo Muñoz" fill className="object-cover" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">[Marcelo Muñoz]</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
                        Ingeniero Civil Informático | Año 5° (Último) <br />
                        <span className="text-zinc-500">Analytics Engineering, Data Engineering & IA Generativa</span>
                    </h2>

                    <p className="max-w-lg text-zinc-400 leading-relaxed">
                        Constructor de pipelines ETL escalables, dashboards BI corporativos y sistemas potenciados por IA Generativa. 
                        Apasionado por transformar datos crudos en activos estratégicos y explorar aplicaciones prácticas de LLMs.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-bold hover:bg-white transition-colors">
                            Ver Proyectos
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-900 transition-colors">
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
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-500 via-cyan-500 to-green-500" />

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
                                    className="absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br border-2 border-zinc-800 flex items-center justify-center cursor-pointer"
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom right, var(--color-start), var(--color-end))`,
                                        '--color-start': item.color.split(' ')[1],
                                        '--color-end': item.color.split(' ')[3]
                                    } as any}
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
        </section>
    );
};
