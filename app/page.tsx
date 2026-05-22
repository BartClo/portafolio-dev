import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { EngineeringToolkit } from "@/components/EngineeringToolkit";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 selection:bg-cyan-500/30">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <EngineeringToolkit />
      <About />
      <Footer />
    </main>
  );
}
