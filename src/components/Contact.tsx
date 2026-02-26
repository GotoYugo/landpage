"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-[#0F1115]" id="contact">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-4xl font-semibold mb-10">Entre em Contato</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank"
            className="flex items-center gap-3 bg-[#1B1D22] hover:bg-[#27292F] transition-transform hover:translate-y-[-2px] text-gray-200 px-6 py-4 rounded-lg shadow-md font-medium"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            className="flex items-center gap-3 bg-[#1B1D22] hover:bg-[#27292F] transition-transform hover:translate-y-[-2px] text-gray-200 px-6 py-4 rounded-lg shadow-md font-medium"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="mailto:seuemail@dominio.com"
            className="flex items-center gap-3 bg-[#1B1D22] hover:bg-[#27292F] transition-transform hover:translate-y-[-2px] text-gray-200 px-6 py-4 rounded-lg shadow-md font-medium"
          >
            <FaEnvelope className="text-xl" />
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
}