import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ open, setOpen }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed right-0 top-0 h-full w-[380px] bg-white z-50 shadow-xl flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                  Your cart is empty
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-3 border rounded-xl p-2"
                  >
                    <img
                      src={item.image}
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold line-clamp-1">
                        {item.title}
                      </h3>

                      <p className="text-green-700 font-bold text-sm">
                        ₹{item.price}
                      </p>

                      {/* QUANTITY CONTROLS */}
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            addToCart({ ...item, quantity: -1 })
                          }
                          className="px-2 py-1 bg-gray-100 rounded"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => addToCart(item)}
                          className="px-2 py-1 bg-gray-100 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/checkout");
                }}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;