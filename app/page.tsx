import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { EngineeringToolkit } from "@/components/EngineeringToolkit";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 selection:bg-cyan-500/30">
      <Hero />
      <Experience />
      <Projects />
      <EngineeringToolkit />
      <About />
      <Footer />
    </main>
  );
}
