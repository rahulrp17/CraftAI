import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { backendUrl } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const fetchProduct = useCallback(async () => {
    const res = await axios.get(`${backendUrl}/api/products/${id}`);
    setProduct(res.data.product);
    setLoading(false);
  }, [id, backendUrl]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  }, [fetchProduct]);

  const handleOrder = () => {
    if (!name || !phone || !address) {
      toast.error("Please fill all details");
      return;
    }

    const orderId = `CRAFTAI-${Date.now()}`;

    const subtotal = product.price * quantity;
    const delivery = 0;
    const total = subtotal + delivery;

    const date = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const message = `
🧾 *New Order*

━━━━━━━━━━━━━━━━━━━━━━
🏷 Order ID: ${orderId}
🗓️ Date: ${date}
━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*
Name: ${name}
Phone: ${phone}

📍 Address:
${address}

━━━━━━━━━━━━━━━━━━━━━━
🛍 *ITEM DETAILS*

1. ${product.title}
   Qty: ${quantity}
   Price: ₹${product.price}
   Subtotal: ₹${subtotal}

━━━━━━━━━━━━━━━━━━━━━━

💰 *PAYMENT SUMMARY*
Subtotal: ₹${subtotal}
Delivery: ${delivery === 0 ? "FREE" : `₹${delivery}`}
Total: ₹${total}

━━━━━━━━━━━━━━━━━━━━━━
🙏 Thank you for shopping with CraftAI!
✨ Handmade with love
`;

    const whatsappUrl = `https://wa.me/919342830199?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    

    navigate("/");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="h-[70vh] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-10 h-10 border-4 border-green-700 border-t-transparent rounded-full"
          />
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-10 text-gray-500">Product Not Found</div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F5EF] mt-20 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2  gap-8">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl lg:h-[550px] sm:h-[300px] shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full lg:h-[550px] sm:h[300px] object-fill hover:scale-105 transition duration-500"
              />
            </motion.div>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-md p-4"
            >
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-green-900 mt-2">
                {product.title}
              </h1>

              <p className="text-3xl font-bold text-green-700 mt-2">
                ₹{product.price}
              </p>

              <p className="text-gray-600 mt-3 leading-7">
                {product.description}
              </p>

              {/* TRUST BADGES */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-xl">🚚</p>
                  <p className="text-xs">Fast Delivery</p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-xl">🔒</p>
                  <p className="text-xs">Secure Order</p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-xl">⭐</p>
                  <p className="text-xs">Premium Craft</p>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex justify-between items-center mt-4 bg-gray-50 rounded-xl p-4">
                <span className="font-medium">Quantity</span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    className="w-8 h-8 bg-green-700 text-white rounded-lg"
                  >
                    -
                  </button>

                  <span className="font-semibold">{quantity}</span>

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 bg-green-700 text-white rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 mt-3">
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹{product.price}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>

                <div className="border-t mt-2 pt-2 flex justify-between font-bold text-green-800">
                  <span>Total</span>
                  <span>₹{product.price * quantity}</span>
                </div>
              </div>

              {/* CUSTOMER INFO */}
              <div className="space-y-3 mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-green-200 rounded-xl outline-none focus:border-green-600"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-green-200 rounded-xl outline-none focus:border-green-600"
                />

                <textarea
                  rows="3"
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-green-200 rounded-xl outline-none resize-none focus:border-green-600"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleOrder}
                className="  w-full  mt-6  py-2 cursor-pointer  rounded-xl  bg-green-700  hover:bg-green-800  text-white  font-semibold  transition"
              >
                Buy Now via WhatsApp
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
