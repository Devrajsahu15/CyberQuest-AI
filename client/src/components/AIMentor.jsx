import { FaRobot, FaArrowRight } from "react-icons/fa";

function AIMentor() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Side */}
        <div>
          <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            🤖 AI Powered Learning
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Meet Your
            <span className="text-cyan-400"> AI Mentor</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Learn Cybersecurity with your own intelligent AI mentor.
            Ask coding questions, solve hacking challenges, understand
            networking concepts, and get instant guidance anytime.
          </p>

          <button className="mt-8 flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
            Try AI Mentor
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-zinc-900 border border-cyan-500/20 rounded-3xl p-6 shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:shadow-[0_0_55px_rgba(34,211,238,0.45)] transition-all duration-500">

          <div className="flex items-center gap-4">
            <div className="bg-cyan-500 p-4 rounded-full">
              <FaRobot className="text-3xl text-black" />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Cyber AI Mentor
              </h3>

              <p className="text-green-400 text-sm">
                ● Online
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-gray-300">
                👨‍💻 How do I prevent SQL Injection?
              </p>
            </div>

            <div className="bg-cyan-500/20 border border-cyan-500 rounded-xl p-4">
              <p className="text-cyan-300">
                Use prepared statements, parameterized queries,
                validate inputs, and never concatenate SQL strings.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-gray-300">
                🛡️ Explain XSS Attack in simple words.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AIMentor;