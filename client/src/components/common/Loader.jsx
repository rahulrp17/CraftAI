import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F5EF]">
      <div className="flex flex-col items-center">
        <motion.img
          src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781156682/ChatGPT_Image_Jun_11_2026_11_14_13_AM_oy9pvz.png"
          alt="CraftAI"
          className="w-24 md:w-28 object-contain"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <p className="mt-4 text-green-700 font-semibold tracking-[0.25em] uppercase text-sm">
          Loading CraftAI...
        </p>
      </div>
    </div>
  );
};

export default Loader;
