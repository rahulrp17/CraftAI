import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaShieldAlt,  FaCopy,  FaTimes,  FaChevronDown,} from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const DemoAdminPopup = () => {
  const [open, setOpen] = useState(false);

  const email = "admin@craftai.com";
  const password = "admin123";

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);

    toast.success(`${label} copied successfully`);
  };

  return (
    <>
      {/* Floating Button */}
      <div className=" relative bottom-6 left-1/2 -translate-x-1/2 z-40 flex mt-3 flex-col items-center">
        {/* Arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-2"
        >
          <FaChevronDown className="text-green-700 text-2xl" />
        </motion.div>

        {/* Label */}
        <p className="text-xs text-green-700 font-medium mb-2">
          HR / Recruiter Testing Access
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="bg-green-700 hover:bg-green-800 cursor-pointer text-white px-8 py-4 rounded-full shadow-2xl font-semibold text-lg"
        >
          View Demo Admin Access
        </motion.button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
              >
                <FaTimes size={18} />
              </button>

              {/* Header */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-green-700 text-4xl" />
                </div>

                <h2 className="text-2xl font-bold text-green-900">
                  Demo Admin Access
                </h2>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  <span className="text-red-500 font-semibold">
                    Note:
                  </span>{" "}
                  These credentials are provided only for HR and recruiters
                  to explore the admin dashboard features.
                </p>
              </div>

              {/* Email */}
              <div className="mt-8">
                <label className="text-sm text-gray-500">
                  Admin Email
                </label>

                <div className="mt-2 flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3">
                  <span className="font-medium text-gray-800">
                    {email}
                  </span>

                  <button
                    onClick={() => copyText(email, "Email")}
                    className="text-green-700 hover:scale-110 transition cursor-pointer"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="text-sm text-gray-500">
                  Password
                </label>

                <div className="mt-2 flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3">
                  <span className="font-medium text-gray-800">
                    {password}
                  </span>

                  <button
                    onClick={() => copyText(password, "Password")}
                    className="text-green-700 hover:scale-110 transition cursor-pointer"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Link
                to="admin/login"
                className="block mt-8 text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold transition"
              >
                Go to Admin Login
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoAdminPopup;
