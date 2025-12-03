import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="p-8 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/reet-vishwakarma-5a941720a"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
          <span className="font-semibold">Message on LinkedIn</span>
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:rvvish112@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-green-600 hover:bg-green-500 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.634l5.803-3.482L0 5.383zM6.761 9.674l-6.761 4.057A2 2 0 0 0 2 14h12a2 2 0 0 0 1.999-1.27l-6.761-4.056-1.239.744-1.239-.744zM16 5.383l-5.803 3.152L16 12.017V5.383z" />
          </svg>
          <span className="font-semibold">Send Email</span>
        </motion.a>

      </div>
    </motion.section>
  );
};

export default Contact;
