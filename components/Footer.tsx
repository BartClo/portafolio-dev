"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-20 px-4 md:px-10 bg-gradient-to-b from-slate-950/55 to-slate-950 border-t border-slate-700/30">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-slate-50 mb-2">¿Listo para construir?</h2>
                    <p className="text-slate-300">Estoy disponible para prácticas profesionales y colaboraciones.</p>
                </div>

                <div className="flex gap-6">
                    <motion.a
                        href="https://www.linkedin.com/in/marcelo-mu%C3%B1oz-pe%C3%B1a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir perfil de LinkedIn de Marcelo Muñoz"
                        whileHover={{ y: -5, color: "#fff", borderColor: "#52525b" }}
                        className="p-4 rounded-full bg-slate-900/80 border border-slate-700/40 text-slate-300 transition-colors hover:text-blue-300"
                    >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                        href="https://github.com/BartClo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir perfil de GitHub de Marcelo Muñoz"
                        whileHover={{ y: -5, color: "#fff", borderColor: "#52525b" }}
                        className="p-4 rounded-full bg-slate-900/80 border border-slate-700/40 text-slate-300 transition-colors hover:text-white"
                    >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </motion.a>
                    <motion.a
                        href="mailto:marcelomunozp09@gmail.com"
                        aria-label="Enviar un correo a Marcelo Muñoz"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: ["0px 0px 0px rgba(8,145,178,0)", "0px 0px 20px rgba(8,145,178,0.5)", "0px 0px 0px rgba(8,145,178,0)"]
                        }}
                        transition={{
                            boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold flex items-center gap-2 shadow-[0_0_24px_-10px_rgba(56,189,248,0.6)]"
                    >
                        <Mail size={20} />
                        Enviar Correo
                    </motion.a>
                </div>

            </div>

            <div className="mt-20 pt-8 border-t border-slate-700/25 text-center text-slate-400 text-sm">
                © {new Date().getFullYear()} Portafolio de Ingeniería. Construido con Next.js & Tailwind.
            </div>
        </footer>
    );
};
