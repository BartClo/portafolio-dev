import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
