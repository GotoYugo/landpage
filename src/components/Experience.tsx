"use client"; // precisa ser Client Component para animar
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Desenvolvedor Back-End",
    company: "Empresa XYZ",
    period: "2010 - 2016",
    description: "Trabalhei com sistemas monolíticos, bancos de dados e processos internos.",
  },
  {
    role: "Líder Técnico / Scrum Master",
    company: "Empresa ABC",
    period: "2016 - 2022",
    description: "Coordenei times, gerenciei projetos e implementei metodologias ágeis.",
  },
  {
    role: "Retorno à área de desenvolvimento",
    company: "Atualmente",
    period: "2026 - Presente",
    description: "Foco em backend moderno, arquitetura limpa e boas práticas.",
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-[#131619]" id="professional">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-4xl font-semibold mb-10">Experiência Profissional</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1B1D22] p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-2px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-medium">{exp.role}</h3>
              <span className="text-gray-400">{exp.company} | {exp.period}</span>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}