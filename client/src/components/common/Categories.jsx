import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Wood Craft",
    image:
      "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1780885779/craftai/i34bmqmfdmlqyd7lqik7.webp",
  },
  {
    title: "Clay Art",
    image:
      "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1780885592/craftai/tyfjpeph3lilwy0bijsi.webp",
  },
  {
    title: "Home Decor",
    image:
      "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1780884870/craftai/xk8lrapybocnwreque8t.webp",
  },
  {
    title: "Paintings",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
  },
  {
    title: "Fashion Design",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
  },
];

const Categories = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F8F5EF] via-[#FAF8F3] to-[#F3F0E8] py-32 px-5 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-700 font-bold tracking-[5px] uppercase text-sm bg-emerald-50/80 px-6 py-2 rounded-full border border-emerald-200/50 backdrop-blur-sm">
              ✨ Premium Collections
            </span>
          </motion.div>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
            Explore Our Premium Categories
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Handpicked artisan collections showcasing exceptional craftsmanship and timeless elegance.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link
                to={`/products?category=${encodeURIComponent(category.title)}`}
              >
                <motion.div
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="  relative  overflow-hidden  rounded-[40px]  h-[480px]  group  cursor-pointer  shadow-2xl  ring-1  ring-white/10"  >
                  {/* Image */}

                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="  w-full  h-full  object-cover"
                    whileHover={{
                      scale: 1.2,
                    }}
                    transition={{
                      duration: 0.9,
                    }}
                  />

                  {/* Premium Overlay Gradient */}

                  <div
                    className="  absolute  inset-0  bg-gradient-to-t  from-black/95  via-black/40  via-30%  to-transparent"  />

                  {/* Enhanced Glow Effect */}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="  absolute  inset-0  opacity-0  bg-gradient-to-br  from-emerald-400/30  via-transparent  to-amber-400/10  pointer-events-none"  />

                  {/* Premium Shine Effect */}
                  
                  <motion.div
                    className="   absolute   top-0   left-0   right-0   h-1   bg-gradient-to-r   from-transparent   via-white/40   to-transparent   group-hover:via-white/60   transition-all   duration-700 " />

                  {/* Ultra Premium Badge */}

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                    }}
                    className="  absolute  top-6  right-6  bg-gradient-to-r  from-white/25  to-white/10  backdrop-blur-xl  border  border-white/40  text-white  px-5  py-2.5  rounded-full  text-xs  font-bold  tracking-wider  shadow-lg  ring-1  ring-white/20"
                  >
                    ⭐ Premium
                  </motion.div>

                  {/* Content */}

                  <div
                    className="   absolute   bottom-0   left-0   right-0   p-8   text-white "   >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.12 }}
                    >
                      <motion.h3
                        whileHover={{ x: 8 }}
                        className="   text-4xl   font-bold   tracking-tight "   >
                        {category.title}
                      </motion.h3>

                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: 60 }}
                        className="  mt-3  h-1  bg-gradient-to-r  from-emerald-400  to-amber-300  rounded-full"  />
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.25 + index * 0.12 }}
                      className=" mt-3 text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 "   >
                      Handcrafted with precision by master artisans
                    </motion.p>

                    <motion.div
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                      }}
                      className="  mt-6  inline-flex  items-center  gap-3  bg-white/12  backdrop-blur-md  px-6  py-3  rounded-full  border  border-white/30  hover:border-white/50  transition-all  duration-300  font-semibold  text-white"  >
                      <span>Explore</span>

                      <motion.span
                        animate={{
                          x: [0, 8, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                        }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
