import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return savedWishlist;
  });
  const { addToCart } = useCart();

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);

    setWishlist(updatedWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  const handleAdd = (product) => {
    addToCart(product);

    toast.success(`Added to cart successfully!🛒 ${product.title} `, {
      style: {
        borderRadius: "10px",

        color: "green",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#16a34a",
      },
    });
  };
  return (
    <>
      <div className="min-h-screen bg-[#F8F5EF] mt-20 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3">
              <Heart
                className="text-red-500 mb-6 font-bold text-6xl"
                fill="currentColor"
              />

              <div>
                <h1 className="text-4xl font-bold text-green-900">
                  My Wishlist
                </h1>

                <p className="text-gray-500 mt-1">
                  {wishlist.length} saved items
                </p>
              </div>
            </div>
          </motion.div>

          {/* Empty State */}
          {wishlist.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="  bg-white  rounded-3xl  shadow-lg  p-12  text-center"
            >
              <div className="text-6xl mb-4">❤️</div>

              <h2 className="text-2xl font-bold text-green-900">
                Your wishlist is empty
              </h2>

              <p className="text-gray-500 mt-3">
                Explore our handmade collections and save your favourite items.
              </p>

              <Link
                to="/products"
                className="    inline-block    mt-6    bg-green-700    hover:bg-green-800    text-white    px-6    py-3    rounded-xl    font-medium    transition  "
              >
                Browse Products
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Wishlist Grid */}
              <div className="    grid    grid-cols-1    sm:grid-cols-2    lg:grid-cols-3    gap-6  ">
                {wishlist.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="    bg-white    rounded-3xl    overflow-hidden    shadow-lg    border-2 border-green-200     hover:shadow-green-300    transition  "
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="    h-60    w-full    object-cover  "
                      />

                      <button
                        onClick={() => removeFromWishlist(product._id)}
                        className="    absolute    top-4    right-4    bg-white    p-3    rounded-full    shadow    hover:bg-red-50    transition    cursor-pointer  "
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="    text-lg    font-bold    text-green-900  ">
                        {product.title}
                      </h3>

                      <p className="    text-sm    text-gray-500    mt-2    line-clamp-2  ">
                        {product.description}
                      </p>

                      <div className="    flex    justify-between    items-center    mt-4  ">
                        <span className="    text-xl    font-bold    text-green-700  ">
                          ₹{product.price}
                        </span>

                        <span className="    text-xs    bg-green-50    text-green-700    px-3    py-1    rounded-full  ">
                          {product.category}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-5">
                        <Link
                          to={`/products/${product._id}`}
                          className="    flex-1    text-center    bg-green-700    hover:bg-green-800    text-white    py-3    rounded-xl    font-medium    transition  "
                        >
                          View Details
                        </Link>

                        <button
                          className="      px-4      bg-green-100      hover:bg-green-800      rounded-xl      transition      cursor-pointer    "
                          onClick={() => handleAdd(product)}
                        >
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
