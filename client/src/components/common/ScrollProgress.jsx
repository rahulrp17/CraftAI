import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="
          fixed
          top-0
          left-0
          right-0
          h-[5px]
          origin-left
          z-[9999]
          rounded-r-full
          bg-gradient-to-r
          from-[#14532D]
          via-[#16A34A]
          to-[#D97706]
          shadow-[0_0_25px_rgba(22,163,74,0.55)]
        "
      />

      {/* Glow Layer */}
      <motion.div
        style={{ scaleX: progress }}
        className="
          fixed
          top-0
          left-0
          right-0
          h-[10px]
          origin-left
          z-[9998]
          rounded-r-full
          bg-gradient-to-r
          from-green-400/30
          via-emerald-400/40
          to-amber-400/30
          blur-md
        "
      />
    </>
  );
};

export default ScrollProgress;