"use client";

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
        <nav className="space-x-4">
          <button
            onClick={() => handleClick("professional")}
            className="hover:text-white font-medium"
          >
            Profissional
          </button>
          <button
            onClick={() => handleClick("hobbies")}
            className="hover:text-white font-medium"
          >
            Hobbies
          </button>
        </nav>
      </div>
    </header>
  );
}