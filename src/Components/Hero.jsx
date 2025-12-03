import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import mine from './Assets/mine.png'
const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* LEFT — Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-green-400">Reet Vishwakarma</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React.js Specialist",
                "Animation Lover",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I build clean, modern and interactive user interfaces using
          React, Tailwind CSS & Framer Motion.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="
              px-6 py-3 rounded-xl font-semibold
              bg-green-600 hover:bg-green-500
              transition shadow-lg shadow-green-600/20
            "
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="
              px-6 py-3 rounded-xl font-semibold
              bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 transition
            "
          >
            Contact Me
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-8 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/reet-vishwakarma-5a941720a" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              className="w-8 h-8 hover:scale-110 transition invert" />
          </a>
        </div>
      </div>

      {/* RIGHT — 3D Profile Card */}
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
        <motion.div
          whileHover={{ boxShadow: "0 0 35px rgba(0,255,140,0.6)" }}
          className="
            w-72 h-72 rounded-3xl overflow-hidden relative
            bg-white/10 backdrop-blur-xl border border-gray-800 
            shadow-2xl
          "
        >

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br
            from-green-400/20 via-transparent to-green-700/30"></div>

          {/* Your Image */}
          <img
            src={mine}   // <<REPLACE THIS WITH YOUR IMAGE
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

export default Hero;
