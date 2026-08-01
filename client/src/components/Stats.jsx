import {
  FaUsers,
  FaShieldAlt,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-5xl text-cyan-400" />,
    number: "10K+",
    title: "Active Learners",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
    number: "500+",
    title: "Cyber Labs",
  },
  {
    icon: <FaCertificate className="text-5xl text-cyan-400" />,
    number: "150+",
    title: "Certificates",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-cyan-400" />,
    number: "24/7",
    title: "AI Mentor",
  },
];

function Stats() {
  return (
    <section className="relative bg-black py-24 px-6 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-20 w-80 h-80 bg-cyan-400/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center">
          CyberQuest AI
          <span className="text-cyan-400"> in Numbers</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Thousands of learners trust our platform to build cybersecurity
          skills and launch their careers.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900 rounded-2xl p-10 text-center border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:-translate-y-3 transition-all duration-500"
            >

              {/* Icon */}
              <div className="flex justify-center">
                <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>

              {/* Number */}
              <h3 className="text-5xl font-extrabold mt-6 text-cyan-400">
                {item.number}
              </h3>

              {/* Title */}
              <p className="text-gray-400 mt-3 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;