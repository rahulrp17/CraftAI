import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaArrowUp,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Link, /*useNavigate */} from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsStars } from "react-icons/bs";
const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // const navigate = useNavigate();
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Subscribed successfully!");

    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden mt-24 bg-[#07120F]  text-white">
      {/* Animated Glow Effects */}

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-500/20 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-400/20 blur-[120px]"
      />

      {/* Wave Separator */}

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F5EF"
            d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36">
        {/* Premium CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
            <BsStars size={18} className="text-green-400" />

            <span className="text-sm font-medium tracking-wide">
              Join the CraftAI Community
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Handmade Stories
            <br />
            Crafted For You
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
            Explore premium handcrafted collections, discover artisan stories,
            and receive exclusive offers directly in your inbox.
          </p>

          {/* Newsletter */}

          <form
            onSubmit={handleSubscribe}
            className="max-w-xl mx-auto mt-10 flex flex-col sm:flex-row gap-4"
          >
            <div className="relative flex-1">
              <MdEmail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-green-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane size={18} />
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* ================= FOOTER CONTENT ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 pb-16">
          {/* Brand Section */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-black font-serif text-[#a58660]">
              Craft
              <span className="text-green-800">AI</span>
            </h1>

            <p className="mt-5 text-gray-300 leading-relaxed">
              CraftAI connects passionate artisans with customers who appreciate
              authentic handmade creations. Every purchase supports local
              craftsmanship and preserves traditional art.
            </p>

            {/* Social Icons */}

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://www.instagram.com/_rahul._rp?igsh=MTFnZGo4YXJkN3V0cQ%3"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-red-500 transition"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-sky-500 transition"
              >
                <FaTwitter size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://www.linkedin.com/in/rahulrp4021"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                href="https://github.com/rahulrp17"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-black transition"
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl text-green-700 font-bold mb-6">Quick Links</h4>

            <div className="flex flex-col gap-3">
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Products
              </Link>
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/wishlist"
              >
                Wishlist
              </Link>
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/cart"
              >
                Cart
              </Link>
            </div>
          </motion.div>

          {/* Categories */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl text-green-700 font-bold mb-6">Categories</h4>

            <div className="flex flex-col gap-3">
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Wood Craft
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Pottery
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Art & Paintings
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Handmade Gifts
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Jewellery
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/products"
              >
                Fashion Design
              </Link>
            </div>
          </motion.div>

          {/* Customer Support */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl text-green-700 font-bold mb-6">Customer Support</h4>

            <div className="flex flex-col gap-3">
              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/faqs"
              >
                FAQs
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/shipping-policy"
              >
                Shipping Policy
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/returns-refunds"
              >
                Returns & Refunds
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>

              <Link
                className="hover:text-green-400 transition cursor-pointer"
                to="/terms-conditions"
              >
                Terms & Conditions
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= TRUST BADGES ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-t border-white/10">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <FaShieldAlt size={28} className="text-green-400" />
            </div>

            <div>
              <h5 className="font-bold text-lg">Secure Payments</h5>

              <p className="text-gray-300 text-sm">
                100% protected checkout experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <FaTruck size={28} className="text-green-400" />
            </div>

            <div>
              <h5 className="font-bold text-lg">Fast Delivery</h5>

              <p className="text-gray-300 text-sm">
                Safe and quick shipping nationwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <FaHeadset size={28} className="text-green-400" />
            </div>

            <div>
              <h5 className="font-bold text-lg">24/7 Support</h5>

              <p className="text-gray-300 text-sm">
                We're always here to help you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= PAYMENT METHODS ================= */}

        <div className="py-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-xl">Accepted Payments</h4>

              <p className="text-gray-400 mt-2">
                Shop with confidence using trusted payment options.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* <div className="bg-white text-black px-5 py-3 rounded-2xl font-bold">
                Visa
              </div> */}

              <div className="bg-white text-black px-5 py-3 rounded-2xl font-bold">
                Cash on Delivery
              </div>

              <div className="bg-white text-black px-5 py-3 rounded-2xl font-bold">
                UPI
              </div>

              <div className="bg-white text-black px-5 py-3 rounded-2xl font-bold">
                Paytm
              </div>

              <div className="bg-white text-black px-5 py-3 rounded-2xl font-bold">
                GPay
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} CraftAI. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Made with ❤️ in India • Empowering Local Artisans
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className=" relative w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 lg:right-140 flex items-center justify-center shadow-2xl"
          >
            <FaArrowUp size={22} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
