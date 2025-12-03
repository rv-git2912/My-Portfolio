import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    // { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    // { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <nav className="
        fixed top-0 left-0 w-full z-50
        bg-black/60 backdrop-blur-xl
        border-b border-white/10
        px-6 py-4 flex justify-between items-center
      ">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-green-400">Reet.</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg">
          {navLinks.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="
                text-gray-300 hover:text-green-400 
                transition font-medium
              ">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-[3px] w-7 bg-white rounded-full transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-[3px] w-7 bg-white rounded-full transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-[3px] w-7 bg-white rounded-full transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.4 }}
        className="
          fixed top-0 left-0 w-full h-screen 
          bg-black/80 backdrop-blur-lg
          flex flex-col items-center justify-center gap-10
          md:hidden z-40
        "
      >
        {navLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            onClick={() => setOpen(false)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-white text-3xl font-semibold hover:text-green-400 transition"
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
