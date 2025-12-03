import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [...Array(30)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 6,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [p.y, p.y - 60, p.y + 60, p.y],
            x: [p.x, p.x + 40, p.x - 40, p.x],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            backgroundColor: "rgba(34,197,94,0.8)",
            filter: "blur(2px)",
          }}
          className="absolute rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"
        ></motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
