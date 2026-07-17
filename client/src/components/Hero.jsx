import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 overflow-hidden">

      <BackgroundGlow />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="text-cyan-400 font-semibold tracking-widest uppercase">
            Learn • Play • Secure
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Become a
            <span className="text-cyan-400"> Cyber Security </span>
            Expert
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
            Learn Cyber Security with AI, quizzes, XP, badges,
            leaderboards and real-world labs.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-400 px-7 py-3 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30">
              Start Learning
            </button>

            <button className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500/10 transition">
              Explore Courses
            </button>

          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">

            <div className="bg-zinc-900 border border-cyan-500/20 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">120+</h2>
              <p className="text-gray-400 mt-2">Courses</p>
            </div>

            <div className="bg-zinc-900 border border-cyan-500/20 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">15K+</h2>
              <p className="text-gray-400 mt-2">Students</p>
            </div>

            <div className="bg-zinc-900 border border-cyan-500/20 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
              <p className="text-gray-400 mt-2">Challenges</p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >

          <div className="w-80 h-80 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.4)]">

            <span className="text-8xl">
              🤖
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;