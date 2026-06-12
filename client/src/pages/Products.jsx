import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { Heart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
const categories = [
  "All",
  "Handmade Gifts",
  "Home Decor",
  "Art & Paintings",
  "Jewellery",
  "Pottery",
  "Wood Craft",
  "Fashion Design",
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [price, setPrice] = useState(10000);
  const { backendUrl } = useAuth();

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (backendUrl) {
      axios
        .get(`${backendUrl}/api/products`)
        .then((res) => setProducts(res.data));
    }
  }, [backendUrl]);

  const toggleWishlist = (p) => {
    const exists = wishlist.find((w) => w._id === p._id);
    const updated = exists
      ? wishlist.filter((w) => w._id !== p._id)
      : [...wishlist, p];

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
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

  let filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    const matchPrice = p.price <= price;

    return matchSearch && matchCategory && matchPrice;
  });

  if (sort === "low")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <>
      <Navbar />

      <div className="bg-[#F8F5EF] min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">
            Discover Handmade Crafts
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Premium curated collection from skilled artisans across India
          </p>

          {/* OPTIONAL BADGE ROW */}
          <div className="flex justify-center gap-3 mt-5 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              ✨ 100% Handmade
            </span>

            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              🚚 Fast Delivery
            </span>

            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              🔒 Secure Checkout
            </span>
          </div>
        </div>
        {/* ================= AMAZON TOP BAR ================= */}
        <div className="sticky top-20 z-40 bg-white ">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">
            {/* SEARCH */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 min-w-[180px] px-3 py-2 placeholder:text-gray-500 border-green-400 border rounded-md text-sm outline-green-600"
            />

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm outline-green-600 border-green-400 cursor-pointer bg-white"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm cursor-pointer outline-green-600 border-green-400  bg-white"
            >
              <option value="default" className="text-green-600 font-semibold ">
                Sort By
              </option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
            </select>

            {/* PRICE SLIDER */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span>₹0</span>

              <input
                type="range"
                min="100"
                max="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-28 cursor-pointer"
              />

              <span>₹{price}</span>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 px-4 gap-4 mt-5 lg:gap-5 lg:grid-cols-4">
          {filtered.map((p) => (
            <motion.div
              key={p._id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
                rotateX: 3,
              }}
              className=" bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-green-100 "
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  onClick={() => setSelected(p)}
                  className=" h-56 md:h-62 sm:h-64  w-full object-cover cursor-pointer "
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

                <div className="  absolute  inset-0  bg-gradient-to-t  from-black/40  to-transparent  opacity-0  group-hover:opacity-100  transition " />

                <span className=" absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-green-700 ">
                  {p.category}
                </span>

                <button
                  onClick={() => toggleWishlist(p)}
                  className=" absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg "
                >
                  <Heart
                    size={18}
                    color={
                      wishlist.some((w) => w._id === p._id) ? "red" : "gray"
                    }
                    fill={
                      wishlist.some((w) => w._id === p._id) ? "red" : "none"
                    }
                  />
                </button>
              </div>

              <div className="p-5">
                <h3 className=" text-lg font-bold text-green-900 line-clamp-1 ">
                  {p.title}
                </h3>

                <p className=" text-gray-500 text-sm mt-2 line-clamp-2 ">
                  {p.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className=" text-2xl font-bold text-green-700  ">
                    ₹{p.price}
                  </span>

                  <span className=" text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 ">
                    Stock {p.stock}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-5">
                  <button
                    onClick={() => setSelected(p)}
                    className=" flex-1 bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-xl transition font-medium text-sm "
                  >
                    Quick View
                  </button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAdd(p)}
                    className=" flex-1 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl transition font-medium text-sm "
                  >
                    Add Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= QUICK VIEW MODAL ================= */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white w-[90%] max-w-md rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.image}
                  className="w-full h-60 object-cover"
                />

                <div className="p-5 space-y-2">
                  <h2 className="text-lg font-bold">{selected.title}</h2>

                  <p className="text-gray-500 text-sm">
                    {selected.description}
                  </p>

                  <p className="text-green-700 font-bold text-xl">
                    ₹{selected.price}
                  </p>

                  <button
                    onClick={() => navigate(`/products/${selected._id}`)}
                    className="w-full bg-green-700 text-white py-2 cursor-pointer rounded-xl mt-3"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3"
                  >
                    <X />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
