import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BestSellers = ({ products }) => {
return ( <section className="py-20 px-4 bg-[#F8F5EF]"> <div className="max-w-7xl mx-auto">

    {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="text-center mb-14"
    >
      <span className="text-green-700 uppercase tracking-[4px] font-semibold">
        Most Loved
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-3">
        Best Sellers
      </h2>

      <p className="text-gray-600 mt-4">
        Handpicked products loved by our customers
      </p>
    </motion.div>

    {/* Products */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {products?.slice(0, 4).map((product, index) => (
        <motion.div
          key={product._id}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -12,
          }}
          className="  bg-white  rounded-[30px]  overflow-hidden  shadow-lg  hover:shadow-2xl  transition-all  group"
        >
          {/* Image Section */}

          <div className="relative overflow-hidden">

            <motion.img
              src={product.image}
              alt={product.title}
              className="  h-72  w-full  object-cover"
              whileHover={{
                scale: 1.12,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {/* Bestseller Badge */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                absolute
                top-4
                left-4
                bg-green-700
                text-white
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Bestseller
            </motion.div>

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
              "
            />
          </div>

          {/* Content */}

          <div className="p-5">

            <h3 className="text-xl font-bold text-green-900 line-clamp-1">
              {product.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {product.description}
            </p>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                mt-4
                inline-block
                text-2xl
                font-bold
                text-green-700
              "
            >
              ₹{product.price}
            </motion.div>

            <Link
              to={`/products/${product._id}`}
              className="
                block
                mt-5
                text-center
                bg-green-700
                hover:bg-green-800
                text-white
                py-3
                rounded-2xl
                transition-all
                font-medium
              "
            >
              View Product
            </Link>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>


);
};

export default BestSellers;
