import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          title="Desenvolvedor Back-End"
          subtitle="Experiência sólida em desenvolvimento de sistemas, arquitetura organizada e foco em soluções escaláveis."
        />
      </main>
    </>
  );
}