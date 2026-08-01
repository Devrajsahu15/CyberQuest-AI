import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Cyber"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right */}

        <div>

          <h2 className="text-5xl font-bold leading-tight">
            Learn
            <span className="text-cyan-400">
              {" "}Cyber Security
            </span>
            <br />
            Like Never Before
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            CyberQuest AI combines AI-powered learning,
            practical labs, quizzes and gamification to help
            beginners become cybersecurity professionals.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-cyan-400 text-xl" />
              <p>AI Powered Mentor</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-cyan-400 text-xl" />
              <p>Interactive Labs</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-cyan-400 text-xl" />
              <p>Daily Challenges</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-cyan-400 text-xl" />
              <p>Certificates & Rewards</p>
            </div>

          </div>

          <button className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Start Learning
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;