"use client";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaCameraRetro } from "react-icons/fa";

export default function Hobbies() {
  const hobbiesLinks = [
    { name: "YouTube", icon: <FaYoutube className="text-2xl" />, url: "https://www.youtube.com/c/seucanal" },
    { name: "Instagram", icon: <FaInstagram className="text-2xl" />, url: "https://www.instagram.com/seuperfil" },
    { name: "Fotos", icon: <FaCameraRetro className="text-2xl" />, url: "#" },
  ];

  return (
    <motion.section
      className="py-16 bg-[#1B1D22]" id="hobbies"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-4xl font-semibold mb-10">Meus Hobbies</h2>
        <p className="text-gray-300 text-lg mb-10">
          Jogos, vídeos e conteúdo gamer, mostrando lado divertido e criativo.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          {hobbiesLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              className="flex items-center gap-3 bg-[#27292F] hover:bg-[#3A3C41] transition-colors px-6 py-4 rounded-lg shadow-md text-gray-200 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {item.icon} {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}