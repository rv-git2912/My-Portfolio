import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const projectList = [
    {
      title: "AIsure",
      desc: "Insurance website built with React + Tailwind",
      image: "aisure.png",   // Put your screenshot in public folder
      tech: ["React", "Tailwind", "Firebase"],
      link: "https://surewithai.com/",
      github: "https://github.com/rv-git2912/krishna"
    },

    {
      title: "xBeat Music App",
      desc: "A modern music streaming web app with playlists, player controls, and a clean UI.",
      image: "x-beat.png",   // correct key used here
      tech: ["React", "CSS", "Music API"],
      link: "https://x-beat-seven.vercel.app/",  // FIXED — added https://
      github: "https://github.com/rv-git2912/X-Beat"
    },

    {
      title: "Admin Dashboard",
      desc: "Modern Admin Dashboard built with React and Tailwind",
      image: "dashboard.png", // Add screenshot
      tech: ["React", "Framer Motion", "Tailwind"],
      link: "https://admin-dashboard-six-eta-44.vercel.app/",
      github: "https://github.com/rv-git2912/Admin_Dashboard"
    },
  ];

  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {projectList.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.05}>
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 35px rgba(0, 255, 140, 0.6)",
              }}
              className="
                relative rounded-2xl overflow-hidden 
                bg-white/5 backdrop-blur-xl 
                border border-gray-800 
                shadow-xl cursor-pointer
                transition
              "
            >

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-green-400/30 via-transparent to-green-700/30 opacity-60"></div>

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 flex-wrap mb-5">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-gray-800/60 border border-gray-700
                      "
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* View Project + GitHub */}
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    whileHover={{ scale: 1.07 }}
                    className="text-green-400 hover:text-green-300 font-medium"
                  >
                    Live Demo →
                  </motion.a>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Soft glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
            </motion.div>
          </Tilt>
        ))}

      </div>
    </motion.section>
  );
};

export default Projects;
