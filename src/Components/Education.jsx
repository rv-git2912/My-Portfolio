import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      duration: "2025 – 2027",
      institute: "Sikkim Manipal University",
      mode: "Distance / Online Learning",
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-20 max-w-6xl mx-auto px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationList.map((edu, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <motion.div
              whileHover={{
                boxShadow: "0 0 30px rgba(0,255,140,0.5)",
              }}
              className="
                p-8 rounded-2xl
                bg-white/5 backdrop-blur-lg
                border border-gray-800
                shadow-xl
              "
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-400 mb-1 text-lg">{edu.institute}</p>
              <p className="text-gray-500 mb-4">{edu.duration}</p>
              <p className="text-gray-300">{edu.mode}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
