import {
  FaFlagCheckered,
  FaCode,
  FaShieldAlt,
  FaBug,
  FaRobot,
  FaTrophy,
} from "react-icons/fa";

const roadmap = [
  {
    icon: <FaFlagCheckered />,
    title: "Beginner",
    desc: "Computer Basics, Networking & Linux",
  },
  {
    icon: <FaCode />,
    title: "Programming",
    desc: "Python, JavaScript & Automation",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    desc: "Web Security, Network Security & OSINT",
  },
  {
    icon: <FaBug />,
    title: "Ethical Hacking",
    desc: "CTFs, Pentesting & Bug Hunting",
  },
  {
    icon: <FaRobot />,
    title: "AI + Security",
    desc: "AI Tools, Prompting & LLM Security",
  },
  {
    icon: <FaTrophy />,
    title: "Career Ready",
    desc: "Projects, Resume & Interview Prep",
  },
];

function LearningRoadmap() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Learning
          <span className="text-cyan-400"> Roadmap</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Follow our structured roadmap from beginner to cybersecurity expert.
        </p>

        <div className="mt-20 space-y-8">

          {roadmap.map((item, index) => (

            <div
              key={index}
              className="group flex items-center gap-6 bg-zinc-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:-translate-y-2 transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default LearningRoadmap;