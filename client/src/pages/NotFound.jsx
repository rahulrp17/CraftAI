import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F5EF] flex items-center justify-center px-4 sm:px-6  py-8">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="   absolute   top-20   left-10   w-40   h-40   sm:w-56   sm:h-56   md:w-72   md:h-72   rounded-full   bg-green-200/30   blur-3xl "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="    absolute    bottom-20    right-10    w-48    h-48    sm:w-64    sm:h-64    md:w-80    md:h-80    rounded-full    bg-amber-200/30    blur-3xl  "
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="  absolute  top-10  left-4  sm:top-16  sm:left-10  md:top-24  md:left-16  text-3xl  sm:text-4xl  md:text-5xl"
      >
        🏺
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="  absolute  bottom-10  right-4  sm:bottom-16  sm:right-10  md:bottom-24  md:right-16  text-3xl  sm:text-4xl  md:text-5xl"
      >
        🎨
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="  relative  z-10  max-w-2xl  w-full  bg-white/70  backdrop-blur-xl  rounded-[28px]  sm:rounded-[32px]  md:rounded-[40px]  shadow-2xl  border  border-white/50  p-6  sm:p-8  md:p-14  text-center"
      >
        {/* 404 */}
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="    text-6xl    sm:text-7xl    md:text-9xl    font-black    text-green-700  "
        >
          404
        </motion.h1>

        {/* Heading */}
        <h2 className="    mt-4    text-2xl    sm:text-3xl    md:text-4xl    font-bold    text-green-900  ">
          Oops! Lost in CraftAI
        </h2>

        {/* Description */}
        <p className="    mt-4    text-sm    sm:text-base    text-gray-600    leading-relaxed    max-w-lg    mx-auto  ">
          The handcrafted treasure you're looking for seems to have wandered
          away. Let's guide you back to beautiful creations.
        </p>

        {/* Buttons */}
        <div className="    mt-8    sm:mt-10    flex    flex-col    sm:flex-row    justify-center    gap-4  ">
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="  cursor-pointer  w-full    sm:w-auto    flex    items-center    justify-center    gap-2    bg-green-700    hover:bg-green-800    text-white    px-6    sm:px-8    py-3    sm:py-4    rounded-xl    sm:rounded-2xl    font-semibold    shadow-lg    transition  "
            >
              <Home size={20} />
              Back Home
            </motion.button>
          </Link>

          <Link to="/products" className="w-full sm:w-auto">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="  cursor-pointer  w-full    sm:w-auto    flex    items-center    justify-center    gap-2    border-2    border-green-700    text-green-700    hover:bg-green-50    px-6    sm:px-8    py-3    sm:py-4    rounded-xl    sm:rounded-2xl    font-semibold    transition  "
            >
              <ShoppingBag size={20} />
              Explore Products
            </motion.button>
          </Link>
        </div>

        {/* Go Back */}
        <motion.button
          whileHover={{
            x: -5,
          }}
          onClick={() => window.history.back()}
          className="  cursor-pointer  mt-6    sm:mt-8    inline-flex    items-center    gap-2    text-sm    sm:text-base    text-gray-500    hover:text-green-700    transition  "
        >
          <ArrowLeft size={18} />
          Go Back
        </motion.button>
      </motion.div>
    </section>
  );
};

export default NotFound;
