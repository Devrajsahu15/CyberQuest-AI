import { FaShieldAlt } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-cyan-500 p-2 rounded-xl">
        <FaShieldAlt className="text-black text-xl" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          CyberQuest
        </h1>

        <p className="text-xs text-cyan-400">
          AI Learning Platform
        </p>
      </div>
    </div>
  );
}

export default Logo;