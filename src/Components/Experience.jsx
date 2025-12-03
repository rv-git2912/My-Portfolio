import { motion } from "framer-motion";

const experiences = [
  {
    role: "Python Full-Stack Developer Intern",
    company: "Shanti Infosoft",
    duration: "Jan 2024 – June 2024",
    description:
      "Completed a full-stack development training program focusing on backend and frontend fundamentals.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Django", "RestApI"],
  },
  {
    role: "Frontend Developer",
    company: "Kuhada Technologies",
    duration: "July 2024 – Present",
    description:
      "Working as a frontend developer building modern UI, dashboards and scalable web apps.",
    tech: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Redux", "Sql" , "Git"],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 max-w-6xl mx-auto px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center">Experience</h2>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,120,0.3)" }}
            className="
              bg-white/5 backdrop-blur-xl border border-gray-800
              rounded-2xl p-6 shadow-xl transition
            "
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {exp.role} <span className="text-green-400">@ {exp.company}</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</p>
            </div>

            <p className="text-gray-300 mt-4">{exp.description}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-800/60 border border-gray-700 px-4 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
