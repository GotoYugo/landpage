"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  onSelectTab?: (tab: "professional" | "hobbies") => void;
}

export default function Header({ onSelectTab }: HeaderProps) {
  const handleClick = (tab: "professional" | "hobbies") => {
    if (onSelectTab) {
      onSelectTab(tab);
    } else {
      const el = document.getElementById(tab);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-[#131619] p-4 fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center text-gray-200">
        <span className="font-semibold text-lg">LandPage</span>
        <nav className="space-x-4 flex">
          {["professional", "hobbies"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleClick(tab as "professional" | "hobbies")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-white font-medium transition-colors"
            >
              {tab === "professional" ? "Profissional" : "Hobbies"}
            </motion.button>
          ))}
        </nav>
      </div>
    </header>
  );
}