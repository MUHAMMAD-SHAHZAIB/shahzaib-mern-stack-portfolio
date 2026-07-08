"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 px-4 py-6 sm:py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Muhammad Shahzaib.</p>
        </div>
      </footer>
    </div>
  );
}
