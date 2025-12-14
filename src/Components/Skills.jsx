import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    subtitle: "Frontend Library",
    icon: <FaReact size={32} />,
    color: "from-green-500/20 to-green-700/20",
  },
  {
    name: "JavaScript",
    subtitle: "ES6+ Language",
    icon: <SiJavascript size={32} />,
    color: "from-yellow-400/20 to-yellow-600/20",
  },
  {
  name: "TypeScript",
  subtitle: "Typed JavaScript",
  icon: <SiTypescript size={32} />,
  color: "from-blue-500/20 to-blue-700/20",
},
  
  {
    name: "Redux",
    subtitle: "State Management",
    icon: <SiRedux size={32} />,
    color: "from-purple-500/20 to-purple-700/20",
  },
  {
    name: "Node.js",
    subtitle: "Backend Runtime",
    icon: <FaNodeJs size={32} />,
    color: "from-lime-500/20 to-lime-700/20",
  },
  {
    name: "Express.js",
    subtitle: "Backend Framework",
    icon: <SiExpress size={32} />,
    color: "from-gray-400/20 to-gray-600/20",
  },
  {
    name: "MongoDB",
    subtitle: "NoSQL Database",
    icon: <SiMongodb size={32} />,
    color: "from-green-400/20 to-green-600/20",
  },
  {
    name: "Mongoose",
    subtitle: "MongoDB ODM",
    icon: <FaDatabase size={32} />,
    color: "from-emerald-400/20 to-emerald-600/20",
  },
  {
    name: "Python",
    subtitle: "Backend Language",
    icon: <FaPython size={32} />,
    color: "from-yellow-500/20 to-green-600/20",
  },
  {
    name: "Django",
    subtitle: "Backend Framework",
    icon: <SiDjango size={32} />,
    color: "from-green-500/20 to-green-800/20",
  },
  {
    name: "MySQL",
    subtitle: "Relational Database",
    icon: <SiMysql size={32} />,
    color: "from-blue-400/20 to-blue-700/20",
  },
  {
    name: "PostgreSQL",
    subtitle: "Advanced SQL DB",
    icon: <SiPostgresql size={32} />,
    color: "from-indigo-500/20 to-indigo-700/20",
  },
  {
    name: "HTML5",
    subtitle: "Markup Language",
    icon: <FaHtml5 size={32} />,
    color: "from-red-400/20 to-red-600/20",
  },
  {
    name: "CSS3",
    subtitle: "Styling",
    icon: <FaCss3Alt size={32} />,
    color: "from-blue-400/20 to-blue-600/20",
  },
  {
    name: "Git",
    subtitle: "Version Control",
    icon: <FaGitAlt size={32} />,
    color: "from-orange-500/20 to-orange-700/20",
  },
];

const Skills = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Featured Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`
              p-6 rounded-2xl backdrop-blur-xl
              bg-gradient-to-br ${skill.color}
              border border-white/10 shadow-xl text-center
            `}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <p className="text-gray-300 text-sm">{skill.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
