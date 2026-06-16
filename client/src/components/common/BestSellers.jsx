import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BestSellers = ({ products = [], loading = false }) => {
  return (
    <section className="py-16 px-4 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-emerald-700 font-bold tracking-[5px] uppercase text-sm bg-emerald-50/80 px-6 py-2 rounded-full border border-emerald-200/50 backdrop-blur-sm">
            Most Loved ❤️
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
            Best Sellers
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Handpicked products loved by our customers.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-100"
              >
                {/* Image Skeleton */}
                <div className="relative h-72 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gray-200" />
                </div>

                <div className="p-5 space-y-4">
                  {/* Badge */}
                  <div className="h-6 w-24 rounded-full bg-gray-200 animate-pulse" />

                  {/* Title */}
                  <div className="h-5 w-3/4 rounded-full bg-gray-200 animate-pulse" />

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="h-3 rounded-full bg-gray-200 animate-pulse" />

                    <div className="h-3 w-5/6 rounded-full bg-gray-200 animate-pulse" />
                  </div>

                  {/* Price */}
                  <div className="h-7 w-20 rounded-full bg-gray-200 animate-pulse" />

                  {/* Button */}
                  <div className="h-12 rounded-2xl bg-gray-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Products */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.slice(0, 4).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-72 w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-green-700 text-white px-4 py-2 rounded-full text-xs font-semibold">
                    Bestseller
                  </span>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-green-900 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-4 text-2xl font-bold text-green-700">
                    ₹{product.price}
                  </div>

                  <Link
                    to={`/products/${product._id}`}
                    className="block mt-5 text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl transition font-medium"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;