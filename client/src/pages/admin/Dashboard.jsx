import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, /* useLocation */ } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useAuth } from "../../context/AuthContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
);

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Dashboard = () => {
  // const location = useLocation();
  const { backendUrl } = useAuth();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    categoryStats: [],
  });

  const [products, setProducts] = useState([]);

  const [animatedProducts, setAnimatedProducts] = useState(0);
  const [animatedStock, setAnimatedStock] = useState(0);

  const fetchStats = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${backendUrl}/api/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data.stats);
    } catch (error) {
      console.log(error);
    }
  }, [backendUrl]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/products`);

      setProducts(res.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  }, [backendUrl]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStats();
    fetchProducts();
  }, [fetchStats, fetchProducts]);

  useEffect(() => {
    let productInterval;
    let stockInterval;

    if (stats.totalProducts > 0) {
      productInterval = setInterval(() => {
        setAnimatedProducts((prev) => {
          if (prev >= stats.totalProducts) {
            clearInterval(productInterval);
            return stats.totalProducts;
          }

          return prev + 1;
        });
      }, 40);
    }

    if (stats.totalStock > 0) {
      stockInterval = setInterval(() => {
        setAnimatedStock((prev) => {
          if (prev >= stats.totalStock) {
            clearInterval(stockInterval);
            return stats.totalStock;
          }

          return prev + 1;
        });
      }, 20);
    }

    return () => {
      clearInterval(productInterval);
      clearInterval(stockInterval);
    };
  }, [stats]);

  const pieData = {
    labels: stats.categoryStats?.map((item) => item._id),

    datasets: [
      {
        data: stats.categoryStats?.map((item) => item.count),

        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#f97316",
          "#a855f7",
          "#ec4899",
          "#14b8a6",
          "#facc15",
        ],

        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 15,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom",

        labels: {
          color: "#374151",
          padding: 20,
        },
      },
    },

    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
    },
  };

  const barData = {
    labels: ["Stock"],

    datasets: [
      {
        label: "Total Stock",

        data: [stats.totalStock],

        backgroundColor: ["rgba(34,197,94,0.8)"],

        borderColor: "#15803d",

        borderWidth: 2,

        borderRadius: 14,
      },
    ],
  };

  const barOptions = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "#374151",
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: "#6b7280",
        },
      },

      x: {
        ticks: {
          color: "#6b7280",
        },
      },
    },

    animation: {
      duration: 1500,
    },
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F5EF] py-30 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Success Message
          {location.state?.message && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="  mb-8  bg-green-100  border border-green-200  text-green-800  px-6  py-4  rounded-2xl  shadow-sm"
            >
              {location.state.message}
            </motion.div>
          )} */}

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <p className="text-green-700 font-medium">Welcome Back 👋</p>

            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-2">
              Admin Dashboard
            </h1>

            <p className="text-gray-600 mt-3">
              Manage your products and monitor CraftAI.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
              }}
              className="  bg-white  rounded-3xl  p-8  border border-green-100  shadow-lg"
            >
              <p className="text-gray-500 text-lg">Total Products</p>

              <h2 className="text-5xl font-bold text-green-800 mt-4">
                {animatedProducts}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
              }}
              className="  bg-white  rounded-3xl  p-8  border border-green-100  shadow-lg"
            >
              <p className="text-gray-500 text-lg">Total Stock</p>

              <h2 className="text-5xl font-bold text-green-800 mt-4">
                {animatedStock}
              </h2>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/admin/add-product"
                  className="  bg-green-700  text-white  px-6  py-4  rounded-2xl  font-semibold  inline-block"
                >
                  + Add Product
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/admin/manage-products"
                  className="  bg-white  border-2  border-green-700  text-green-700  px-6  py-4  rounded-2xl  font-semibold  inline-block"
                >
                  Manage Products
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="  bg-green-100  text-green-800  px-6  py-4  rounded-2xl  font-semibold  inline-block"
                >
                  View Store
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Recent Products */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-14"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-900">
                Recent Products
              </h2>

              <Link
                to="/admin/manage-products"
                className="text-green-700 font-medium"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="  bg-white  rounded-3xl  overflow-hidden  shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="   w-full   h-48   object-cover "
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-xl text-green-800">
                      {product.title}
                    </h3>

                    <p className="text-green-700 font-semibold mt-2">
                      ₹{product.price}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      Stock: {product.stock}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                y: -6,
              }}
              className="  bg-white  rounded-3xl  shadow-lg  p-6"
            >
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Products by Category
              </h2>

              <Pie data={pieData} options={pieOptions} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                y: -6,
              }}
              className="  bg-white  rounded-3xl  shadow-lg  p-6"
            >
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Stock Distribution
              </h2>

              <Bar data={barData} options={barOptions} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
