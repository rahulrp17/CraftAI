import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Hero = () => {
  return (
    <section className="bg-[#F8F5EF] py-12 min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-green-100
              text-green-700
              px-5
              py-2
              rounded-full
              font-medium
            "
          >
            ✨ Handmade with Love
          </span>

          {/* Heading */}
          <h1
            className="
              mt-6
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-green-900
              leading-[1.1]
            "
          >
            Discover India's
            <span className="block text-green-700">
              Finest
            </span>
            Handicrafts
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Explore authentic handcrafted treasures made by skilled artisans.
            Bring culture, creativity, and craftsmanship into your home.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/products"
              className="
                bg-green-700
                hover:bg-green-800
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
              "
            >
              Explore Products
            </Link>

<button
  onClick={() =>
    toast.info(
      "🚀 Seller registrations are coming soon! Stay tuned for updates.",
      {
        position: "top-right",
        autoClose: 3000,
      }
    )
  }
  className="
    border-2
    border-green-700
    text-green-700
    px-8
    py-4
    rounded-2xl
    font-semibold
    hover:bg-green-700
    hover:text-white
    transition-all
    duration-300
    cursor-pointer
  "
>
  Become a Seller
</button>

          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">

            <div>
              <h3 className="text-4xl font-bold text-green-800">
                500+
              </h3>

              <p className="text-gray-500 mt-1">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-800">
                100+
              </h3>

              <p className="text-gray-500 mt-1">
                Unique Products
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >

          <div
            className="
              bg-white
              rounded-[40px]
              overflow-hidden
              shadow-2xl
              w-full
              max-w-[650px]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1000"
              alt="Handicrafts"
              className="
                w-full
                h-[400px]
                md:h-[500px]
                object-cover
              "
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              lg:left-10
              lg:translate-x-0
              bg-white
              shadow-xl
              px-6
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
              w-max
            "
          >
            <span className="text-2xl">🏺</span>

            <div>
              <p className="font-semibold text-green-900">
                Authentic Handmade Art
              </p>

              <p className="text-sm text-gray-500">
                Crafted by Indian artisans
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
