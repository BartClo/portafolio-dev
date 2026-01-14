import { FloatingTechStack } from "@/components/ui/FloatingTechStack";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden pt-20 pb-20 px-4 md:px-10">

            {/* Backgroud Effect */}
            <div className="absolute inset-0 w-full h-full bg-zinc-950 radial-gradient-bg pointer-events-none" />

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Static Content */}
                <div className="flex flex-col items-start space-y-6">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-700 shadow-2xl mb-4">
                        {/* PLACEHOLDER: Replace src with your profile image */}
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                            <span className="text-xs text-center p-2">Foto de <br /> Perfil</span>
                        </div>
                        {/* <Image src="/profile.jpg" alt="Profile" fill className="object-cover" /> */}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">[Tu Nombre]</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
                        Ingeniero de Software en formación <br />
                        <span className="text-zinc-500">Especializado en Arquitectura Backend y Soluciones Reales</span>
                    </h2>

                    <p className="max-w-lg text-zinc-400 leading-relaxed">
                        Explorando los límites de la ingeniería moderna con código limpio, escalable y eficiente.
                        Actualmente enfocado en sistemas distribuidos y aplicaciones potenciadas por IA.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-bold hover:bg-white transition-colors">
                            Ver Proyectos
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-900 transition-colors">
                            Contactar
                        </button>
                    </div>
                </div>

                {/* Right Side: 3D/Interactive Element */}
                <div className="w-full h-full flex items-center justify-center">
                    <FloatingTechStack />
                </div>
            </div>
        </section>
    );
};
