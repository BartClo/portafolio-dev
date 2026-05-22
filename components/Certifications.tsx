"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Certification {
    title: string;
    issuer: string;
    year: string;
    initials: string;
    color: string;
}

export const Certifications = () => {
    const certifications: Certification[] = [
        {
            title: "AWS Foundations of Prompt Engineering",
            issuer: "Amazon Web Services",
            year: "2025",
            initials: "AWS",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Google Cloud Fundamentals: Core Infrastructure",
            issuer: "Google Cloud Skills Boost",
            year: "2025",
            initials: "GCP",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "AWS Cloud Fundamentals for Professionals",
            issuer: "Amazon Web Services",
            year: "2025",
            initials: "AWS",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Linux Essentials",
            issuer: "Cisco Networking Academy",
            year: "2024",
            initials: "LNX",
            color: "from-amber-500 to-amber-600"
        },
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            year: "2024",
            initials: "CCNA",
            color: "from-red-500 to-red-600"
        },
        {
            title: "CCNA: Switching, Routing & Wireless Essentials",
            issuer: "Cisco Networking Academy",
            year: "2024",
            initials: "CCNA",
            color: "from-red-500 to-red-600"
        },
        {
            title: "IT Essentials: PC Hardware and Software",
            issuer: "Cisco Networking Academy",
            year: "2024",
            initials: "IT",
            color: "from-green-500 to-green-600"
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

    const certVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="py-20 px-4 md:px-10 bg-neutral-950/80 backdrop-blur-sm border-t border-neutral-800/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4"
                >
                    Certificaciones <span className="text-zinc-500">& Credenciales</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={certVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.2)" }}
                            className="group relative p-5 rounded-lg border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Initials Badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <span className="text-xs font-bold text-white">
                                            {cert.initials}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                                        {cert.year}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-bold text-white mb-2 line-clamp-3 group-hover:text-cyan-300 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Issuer */}
                                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    {cert.issuer}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
};
