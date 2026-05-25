"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-slate-950/50 border-t border-slate-700/25">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-slate-50 mb-6"
                >
                    Más allá del Código
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 text-slate-300 text-lg leading-relaxed"
                >
                    <p>
                        Mi enfoque no es solo escribir líneas de código, sino entender requerimientos complejos,
                        diseñar arquitecturas robustas y liderar la implementación técnica de principio a fin.
                    </p>
                    <p>
                        Creo firmemente en el uso de{" "}
                        <motion.span
                            className="bg-gradient-to-r from-cyan-400/20 to-cyan-400/20 bg-no-repeat bg-bottom text-slate-50 px-1"
                            initial={{ backgroundSize: "0% 100%" }}
                            whileInView={{ backgroundSize: "100% 100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                            style={{ backgroundSize: "0% 30%" }} // Fallback/Initial for the highlight effect (underline style)
                        >
                            Design Thinking
                        </motion.span>
                        {" "}para encontrar la raíz de los problemas y metodologías{" "}
                        <motion.span
                            className="bg-gradient-to-r from-cyan-400/20 to-cyan-400/20 bg-no-repeat bg-bottom text-slate-50 px-1"
                            initial={{ backgroundSize: "0% 100%" }}
                            whileInView={{ backgroundSize: "100% 100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "circOut" }}
                            style={{ backgroundSize: "0% 30%" }}
                        >
                            Ágiles
                        </motion.span>
                        {" "}
                        para entregar valor de manera incremental y constante. Busco siempre cerrar la brecha entre la ingeniería
                        técnica y las necesidades reales del negocio.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

