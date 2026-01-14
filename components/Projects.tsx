import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Sistema de Gestión LIMS",
            description: "Arquitectura backend escalable en Azure para gestión de laboratorios, manejando miles de muestras diarias con alta disponibilidad.",
            tags: ["Django", "React", "PostgreSQL", "Azure"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Cooperativa de Agua API",
            description: "API RESTful para la gestión de consumo y facturación de agua potable rural. Integración con sistemas de pago.",
            tags: ["FastAPI", "Docker", "Redis", "Celery"],
            githubUrl: "#",
        },
        {
            title: "AI Chat Assistant",
            description: "Asistente virtual potenciado por LLMs para soporte técnico automatizado. Implementa RAG para contexto específico.",
            tags: ["Python", "LangChain", "OpenAI", "Next.js"],
            githubUrl: "#",
            demoUrl: "#"
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4">
                    Ingeniería Aplicada & <br /> <span className="text-zinc-500">Proyectos Destacados</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
