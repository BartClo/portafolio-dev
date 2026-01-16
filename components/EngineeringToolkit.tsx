"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
    text: string;
    icon?: string;
}

const Badge = ({ text, icon }: BadgeProps) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-cyan-500/50 hover:text-white transition-colors cursor-default"
    >
        {icon && <span className="text-cyan-400">{icon}</span>}
        {text}
    </motion.div>
);

export const EngineeringToolkit = () => {
    return (
        <section className="py-16 px-4 md:px-10 bg-neutral-950/80 backdrop-blur-sm border-t border-b border-neutral-800/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
                        Toolkit de Ingeniería <span className="text-zinc-500">& Procesos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Column 1: Agile & Design */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold mb-6 flex items-center gap-2">
                            Metodologías Ágiles & Diseño
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge text="Scrum" icon="🔄" />
                            <Badge text="Kanban" icon="📋" />
                            <Badge text="Design Thinking" icon="💡" />
                            <Badge text="User Stories" icon="📝" />
                            <Badge text="Jira / Confluence" icon="📎" />
                        </div>
                    </div>

                    {/* Column 2: Quality & Standards */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold mb-6 flex items-center gap-2">
                            Calidad & Estándares
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge text="Clean Architecture" icon="🏗️" />
                            <Badge text="SOLID Principles" icon="🧱" />
                            <Badge text="CI/CD Pipelines" icon="🚀" />
                            <Badge text="OWASP Security Awareness" icon="🛡️" />
                            <Badge text="ISO Standards Awareness" icon="📜" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
