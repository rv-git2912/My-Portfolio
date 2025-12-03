import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorParticles = () => {
  const [particles, setParticles] = useState([]);

  const createParticle = (x, y) => {
    const newParticle = {
      id: Math.random(),
      x,
      y,
      size: Math.random() * 8 + 4,
    };

    setParticles((prev) => [...prev, newParticle]);

    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 600);
  };

  useEffect(() => {
    const handleMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0.8,
            scale: 0,
            x: p.x,
            y: p.y,
          }}
          animate={{
            opacity: 0,
            scale: 1.8,
            x: p.x + (Math.random() * 40 - 20),
            y: p.y + (Math.random() * 40 - 20),
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: "rgba(34,197,94,1)", // neon green
            filter: "blur(4px)",
            borderRadius: "999px",
          }}
          className="absolute shadow-[0_0_20px_rgba(34,197,94,0.9)]"
        ></motion.div>
      ))}
    </div>
  );
};

export default CursorParticles;
