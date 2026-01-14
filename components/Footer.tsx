import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-20 bg-zinc-950 px-4 md:px-10 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-2">¿Listo para construir?</h2>
                    <p className="text-zinc-500">Estoy disponible para prácticas profesionales y colaboraciones.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="mailto:tuemail@ejemplo.com" className="px-8 py-4 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all hover:scale-105 shadow-lg shadow-cyan-900/20 flex items-center gap-2">
                        <Mail size={20} />
                        Enviar Correo
                    </a>
                </div>

            </div>

            <div className="mt-20 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
                © {new Date().getFullYear()} Portafolio de Ingeniería. Construido con Next.js & Tailwind.
            </div>
        </footer>
    );
};
