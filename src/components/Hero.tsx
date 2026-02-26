"use client"; // necessário para Framer Motion
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <motion.section
      className="min-h-[60vh] flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="max-w-3xl">
          {/* Título */}
          <motion.h1
            className="text-5xl font-semibold tracking-tight mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          {/* Subtítulo animado */}
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}