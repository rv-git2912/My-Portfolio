import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  const tech = [
    "React",
    "JavaScript",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "Git",
  ];

  return (
    <motion.section
      id="about"
      className="py-20 max-w-6xl mx-auto px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* LEFT — Profile Card */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
          <motion.div
            whileHover={{ boxShadow: "0 0 35px rgba(0,255,140,0.6)" }}
            className="
              w-72 h-80 rounded-3xl overflow-hidden 
              bg-white/10 backdrop-blur-xl 
              border border-gray-800 shadow-xl 
              flex flex-col items-center justify-center
            "
          >
            {/* <img
              src="/your-photo.jpg"
              alt="Reet Vishwakarma"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-400"
            /> */}
            <h3 className="text-xl font-bold mt-4">Reet Vishwakarma</h3>
            <p className="text-green-400 font-medium">
              Full Stack Developer (MERN)
            </p>
          </motion.div>
        </Tilt>

        {/* RIGHT — Bio */}
        <div className="flex-1">
          <p className="text-gray-300 leading-7 text-lg mb-6">
            Hi, I’m{" "}
            <span className="text-green-400 font-semibold">
              Reet Vishwakarma
            </span>
            , a Full Stack Developer (MERN) with 1+ year of hands-on experience
            building scalable, responsive web applications using React, Node.js,
            Express.js, and MongoDB.
          </p>

          <p className="text-gray-300 leading-7 text-lg mb-10">
            I specialize in building RESTful APIs, integrating frontend systems
            with backend services, managing application state using Redux, and
            optimizing performance for smooth user experiences. I also have
            backend exposure with Python and Django from previous professional
            experience.
          </p>

          {/* Tech Stack */}
          <h4 className="text-xl font-semibold mb-4">Tech Stack</h4>
          <div className="flex gap-3 flex-wrap">
            {tech.map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="
                  text-sm px-4 py-1 rounded-full 
                  bg-gray-800/60 border border-gray-700
                "
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
