"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
    text: string;
    icon?: string;
    variants?: any;
}

const Badge = ({ text, icon, variants }: BadgeProps) => (
    <motion.div
        variants={variants}
        whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.5)", backgroundColor: "rgba(24, 24, 27, 0.8)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium transition-colors cursor-default select-none shadow-sm"
    >
        {icon && <span className="text-cyan-500/80">{icon}</span>}
        {text}
    </motion.div>
);

export const EngineeringToolkit = () => {
    // Semantic Differentiation: Methodologies (Organic/Agile)
    const agileContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const agileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    // Semantic Differentiation: Quality (Rigid/Structured)
    const qualityContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 } // Slight delay after Agile
        }
    };

    const qualityItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 10 } // "Rigid" snap
        }
    };

    return (
        <section className="py-16 px-4 md:px-10 bg-neutral-950/80 backdrop-blur-sm border-t border-b border-neutral-800/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0"
                    >
                        Toolkit de Ingeniería <span className="text-zinc-500">& Procesos</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Column 1: Agile & Design */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm uppercase tracking-wider text-cyan-500 font-semibold mb-6 flex items-center gap-2"
                        >
                            Metodologías Ágiles & Diseño
                        </motion.h3>
                        <motion.div
                            variants={agileContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-wrap gap-3"
                        >
                            <Badge text="Scrum" icon="🔄" variants={agileItemVariants} />
                            <Badge text="Kanban" icon="📋" variants={agileItemVariants} />
                            <Badge text="Design Thinking" icon="💡" variants={agileItemVariants} />
                            <Badge text="User Stories" icon="📝" variants={agileItemVariants} />
                            <Badge text="Jira / Confluence" icon="📎" variants={agileItemVariants} />
                        </motion.div>
                    </div>

                    {/* Column 2: Quality & Standards */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-sm uppercase tracking-wider text-cyan-500 font-semibold mb-6 flex items-center gap-2"
                        >
                            Calidad & Estándares
                        </motion.h3>
                        <motion.div
                            variants={qualityContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-wrap gap-3"
                        >
                            <Badge text="Clean Architecture" icon="🏗️" variants={qualityItemVariants} />
                            <Badge text="SOLID Principles" icon="🧱" variants={qualityItemVariants} />
                            <Badge text="CI/CD Pipelines" icon="🚀" variants={qualityItemVariants} />
                            <Badge text="OWASP Security Awareness" icon="🛡️" variants={qualityItemVariants} />
                            <Badge text="ISO Standards Awareness" icon="📜" variants={qualityItemVariants} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
