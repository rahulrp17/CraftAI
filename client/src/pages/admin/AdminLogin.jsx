import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {  Mail,  Lock,  Eye,  EyeOff,  ShieldCheck,} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { backendUrl } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${backendUrl}/api/admin/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4" style={{ backgroundColor: "#f8f6f3" }}>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-40 right-40 h-72 w-72 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(20, 83, 45, 0.08)" }}
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-32 left-32 h-72 w-72 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(34, 197, 94, 0.08)" }}
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md rounded-2xl border shadow-lg p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(34, 197, 94, 0.2)",
          boxShadow: "0 10px 40px rgba(20, 83, 45, 0.08)"
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
          }}
          className="flex justify-center mb-6"
        >
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: "#14532D" }}
          >
            <ShieldCheck className="text-white" size={38} />
          </div>
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold" style={{ color: "#14532D" }}>
            Admin Portal
          </h1>

          <p className="mt-3" style={{ color: "#6B7280" }}>
            Secure access to your dashboard
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2"
              size={20}
              style={{ color: "#9CA3AF" }}
            />

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-2 py-3 pl-12 pr-4 outline-none transition-all"
              style={{
                borderColor: "rgba(34, 197, 94, 0.3)",
                backgroundColor: "#FFFFFF",
                color: "#1F2937"
              }}
              onFocus={(e) => e.target.style.borderColor = "#22C55E"}
              onBlur={(e) => e.target.style.borderColor = "rgba(34, 197, 94, 0.3)"}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2"
              size={20}
              style={{ color: "#9CA3AF" }}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border-2 py-3 pl-12 pr-14 outline-none transition-all"
              style={{
                borderColor: "rgba(34, 197, 94, 0.3)",
                backgroundColor: "#FFFFFF",
                color: "#1F2937"
              }}
              onFocus={(e) => e.target.style.borderColor = "#22C55E"}
              onBlur={(e) => e.target.style.borderColor = "rgba(34, 197, 94, 0.3)"}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
              style={{ color: "#9CA3AF" }}
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            disabled={loading}
            type="submit"
            className="w-full rounded-xl cursor-pointer py-3 font-semibold text-white shadow-md transition-all disabled:opacity-60"
            style={{
              backgroundColor: "#14532D",
              boxShadow: "0 4px 12px rgba(20, 83, 45, 0.2)"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#1a6b3a"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#14532D"}
          >
            {loading ? (
              <div className="flex justify-center cursor-not-allowed items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Signing In...
              </div>
            ) : (
              "Login to Dashboard"
            )}
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Protected by enterprise-grade security
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;