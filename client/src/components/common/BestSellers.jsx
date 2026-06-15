import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BestSellers = ({ products, loading }) => {
  return (
    <section className="py-16 bg-[#F8F5EF] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold uppercase tracking-[3px] text-sm">
            Most Loved
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-green-900">
            Best Sellers
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Discover handcrafted products loved by our customers.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="h-64 bg-gray-200 animate-pulse" />

                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />

                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />

                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />

                  <div className="h-10 w-full bg-gray-200 rounded-xl animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.slice(0, 4).map((product) => (
              <motion.div
                key={product._id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-green-900 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <p className="mt-4 text-2xl font-bold text-green-700">
                    ₹{product.price}
                  </p>

                  <Link
                    to={`/products/${product._id}`}
                    className="mt-5 block text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-medium transition"
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
