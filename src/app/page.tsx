import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          title="Desenvolvedor Back-End"
          subtitle="Experiência sólida em desenvolvimento de sistemas, arquitetura organizada e foco em soluções escaláveis."
        />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}