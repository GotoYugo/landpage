export default function Header() {
  return (
    <header className="w-full bg-[#131619] p-4 fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center text-gray-200">
        <span className="font-semibold text-lg">LandPage</span>
        <nav className="space-x-4">
          <a href="#professional" className="hover:text-white">Profissional</a>
          <a href="#hobbies" className="hover:text-white">Hobbies</a>
        </nav>
      </div>
    </header>
  );
}