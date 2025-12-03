import { motion } from "framer-motion";

const FloatingBlobs = () => {
  const blobs = [
    {
      size: 300,
      color: "rgba(34,197,94,0.25)", // green glow
      x: -200,
      y: 100,
      delay: 0,
    },
    {
      size: 250,
      color: "rgba(34,197,94,0.18)",
      x: 300,
      y: -100,
      delay: 1.5,
    },
    {
      size: 200,
      color: "rgba(34,197,94,0.12)",
      x: 0,
      y: 300,
      delay: 2.5,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [blob.x, blob.x + 40, blob.x - 40, blob.x],
            y: [blob.y, blob.y - 40, blob.y + 40, blob.y],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: "blur(80px)",
          }}
          className="absolute rounded-full"
        ></motion.div>
      ))}
    </div>
  );
};

export default FloatingBlobs;
