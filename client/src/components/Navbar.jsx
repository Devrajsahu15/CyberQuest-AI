import Logo from "./Logo";
function Navbar() {
  return (
    <nav className="w-full bg-zinc-950 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Logo />

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">Courses</li>
          <li className="hover:text-cyan-400 cursor-pointer">Leaderboard</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
        </ul>

        <button className="bg-cyan-500 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;