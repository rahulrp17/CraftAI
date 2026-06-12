import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F5EF] pt-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold text-green-900">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl text-center shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">
                Your cart is empty
              </h2>

              <button
                onClick={() => navigate("/products")}
                className="mt-4 cursor-pointer bg-green-700 text-white px-6 py-2 rounded-xl"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.01 }}
                className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800">{item.title}</h2>

                  <p className="text-green-700 font-bold mt-1">₹{item.price}</p>

                  {/* QUANTITY CONTROL */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="p-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="p-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                    >
                      <Plus size={16}  />
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </motion.div>
            ))
          )}
        </div>

        {/* ================= RIGHT SIDE (STICKY SUMMARY) ================= */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={() => navigate("/checkout")}
              className={`w-full mt-5 py-3 rounded-xl cursor-pointer font-medium text-white ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
