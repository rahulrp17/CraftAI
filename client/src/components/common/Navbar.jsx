import { useState } from "react";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4  h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ rotate: -5, scale: 1.05 }}
            src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781193627/ChatGPT_Image_Jun_11_2026_09_29_57_PM_jirhiy.png"
            alt="CraftAI"
            className="  h-16  w-16  rounded-2xl  object-cover    border border-green-100  bg-black  p-1"
          />

          <div className="leading-none">
            <h1 className="text-2xl font-black font-serif text-[#a58660]">
              Craft<span className="text-green-800">AI</span>
            </h1>

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Handmade Marketplace
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP / MD / LG ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {/* TEXT LINKS (always visible on md+) */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ICONS ONLY (md + lg) */}
          <div className="flex items-center justify-center gap-4 ">
            {/* CART ICON */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 rounded-full cursor-pointer hover:bg-white/60 transition"
            >
              <ShoppingCart />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            {/* WISHLIST ICON */}
            <button
              onClick={() => navigate("/wishlist")}
              className="relative p-2 cursor-pointer  hover:bg-white/60 transition"
            >
              <Heart color="red" fill="red" />
            </button>
          </div>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium hover:text-green-700"
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE EXTRA LINKS (TEXT) */}
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-green-700"
              >
                Cart ({cart.length})
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-green-700"
              >
                Wishlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
