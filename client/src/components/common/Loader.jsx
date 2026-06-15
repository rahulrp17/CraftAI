import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#F8F5EF] px-4">
      {/* Background Blob 1 */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-[-60px] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-green-200/40 blur-3xl"
      />

      {/* Background Blob 2 */}
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-[-60px] w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-emerald-200/40 blur-3xl"
      />

      {/* Glass Card */}
      <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-6 py-8 sm:px-8 sm:py-10">
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-green-300"
        />

        {/* Logo */}
        <motion.img
          src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781193627/ChatGPT_Image_Jun_11_2026_09_29_57_PM_jirhiy.png"
          alt="CraftAI"
          className="relative z-10  w-24 md:w-28 mt-3 object-contain rounded-full border border-green-300"
          animate={{
            scale: [1, 1.08, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Brand Name */}
        <motion.h2
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 text-2xl sm:text-3xl font-black text-green-800 tracking-wide text-center"
        >
          CraftAI
        </motion.h2>

        {/* Tagline */}
        <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-green-700 text-center">
          Handmade • Heritage • Luxury
        </p>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-600"
            />
          ))}
        </div>

        {/* Loading Text */}
        <p className="mt-5 text-center text-xs sm:text-sm font-medium text-gray-600 px-2">
          Preparing your handcrafted experience...
        </p>
      </div>
    </div>
  );
};

export default Loader;
