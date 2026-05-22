"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-20 px-4 md:px-10 bg-neutral-950 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-2">¿Listo para construir?</h2>
                    <p className="text-zinc-500">Estoy disponible para prácticas profesionales y colaboraciones.</p>
                </div>

                <div className="flex gap-6">
                    <motion.a
                        href="https://www.linkedin.com/in/marcelo-mu%C3%B1oz-pe%C3%B1a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: "#fff", borderColor: "#52525b" }}
                        className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:text-blue-400"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                        href="https://github.com/BartClo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: "#fff", borderColor: "#52525b" }}
                        className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:text-white"
                    >
                        <Github size={24} />
                    </motion.a>
                    <motion.a
                        href="mailto:marcelomunozp09@gmail.com"
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
                        className="px-8 py-4 rounded-full bg-cyan-600 text-white font-bold flex items-center gap-2"
                    >
                        <Mail size={20} />
                        Enviar Correo
                    </motion.a>
                </div>

            </div>

            <div className="mt-20 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
                © {new Date().getFullYear()} Portafolio de Ingeniería. Construido con Next.js & Tailwind.
            </div>
        </footer>
    );
};
