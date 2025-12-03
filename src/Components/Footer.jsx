import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        mt-20 py-10 px-6 
        bg-white/5 backdrop-blur-xl 
        border-t border-white/10 
        text-white
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT SIDE — NAME + TAGLINE */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-400">Reet Vishwakarma</h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer • React.js Specialist
          </p>
        </div>

        {/* MIDDLE — SOCIAL ICONS */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/reet-vishwakarma-5a941720a"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              className="w-7 h-7 hover:scale-110 transition"
            />
          </a>

          <a href="https://github.com" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              className="w-7 h-7 hover:scale-110 transition invert"
            />
          </a>

          <a href="mailto:rvvish112@gmail.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              className="w-7 h-7 hover:scale-110 transition invert"
            />
          </a>
        </div>

        {/* RIGHT SIDE — COPYRIGHT */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Reet. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
