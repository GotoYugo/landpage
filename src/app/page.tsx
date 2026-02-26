"use client"; // necessário para interatividade no Header e Framer Motion

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Hero
          title="Desenvolvedor Back-End"
          subtitle="Experiência sólida em desenvolvimento de sistemas, arquitetura organizada e foco em soluções escaláveis."
        />

        {/* Experiência Profissional */}
        <Experience />

        {/* Hobbies */}
        <Hobbies />

        {/* Contato */}
        <Contact />
      </main>
    </>
  );
}