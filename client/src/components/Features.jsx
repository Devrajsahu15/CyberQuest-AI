import {
  FaShieldAlt,
  FaRobot,
  FaTrophy,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
    title: "Cyber Security",
    desc: "Learn ethical hacking, networking and security from beginner to advanced.",
  },
  {
    icon: <FaRobot className="text-5xl text-cyan-400" />,
    title: "AI Mentor",
    desc: "Get instant AI-powered guidance while solving quizzes and labs.",
  },
  {
    icon: <FaTrophy className="text-5xl text-cyan-400" />,
    title: "XP & Rewards",
    desc: "Earn XP, badges and climb the global leaderboard.",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-cyan-400" />,
    title: "Hands-on Labs",
    desc: "Practice with real-world cybersecurity challenges and projects.",
  },
];

function Features() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-cyan-400"> CyberQuest AI?</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Learn faster with AI, gamification and practical cybersecurity labs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div>{feature.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;