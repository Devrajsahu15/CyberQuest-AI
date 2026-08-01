import {
  FaShieldAlt,
  FaBug,
  FaNetworkWired,
  FaRobot,
  FaLock,
  FaLinux,
} from "react-icons/fa";

const labs = [
  {
    icon: <FaShieldAlt />,
    title: "Web Security",
    desc: "Learn XSS, SQL Injection, CSRF and modern web vulnerabilities.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Security",
    desc: "Master networking concepts, packet analysis and defense.",
  },
  {
    icon: <FaLinux />,
    title: "Linux Lab",
    desc: "Practice Linux commands and server administration skills.",
  },
  {
    icon: <FaBug />,
    title: "CTF Challenges",
    desc: "Solve real Capture The Flag challenges and improve hacking skills.",
  },
  {
    icon: <FaRobot />,
    title: "AI Security",
    desc: "Explore AI security, prompt injection and LLM protection.",
  },
  {
    icon: <FaLock />,
    title: "Cryptography",
    desc: "Understand encryption, hashing and secure communication.",
  },
];

function CyberLabs() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Explore Our
          <span className="text-cyan-400"> Cyber Labs</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Practice real-world cybersecurity skills through interactive labs,
          challenges and AI-powered learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {labs.map((lab, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl group-hover:scale-110 transition">
                {lab.icon}
              </div>

              <h3 className="text-white text-2xl font-bold mt-6">
                {lab.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {lab.desc}
              </p>

              <button className="mt-6 px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
                Start Lab →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CyberLabs;