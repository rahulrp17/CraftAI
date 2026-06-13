import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    const orderId = "CRAFTAI-" + Date.now();

    const date = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const itemsText = cart
      .map((item, index) => {
        return `
${index + 1}. ${item.title}
   Qty: ${item.quantity}
   Price: ₹${item.price}
   Subtotal: ₹${item.price * item.quantity}
`;
      })
      .join("\n");

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const message = `
🧾 *New Order*

━━━━━━━━━━━━━━━━━━━━━━
🏷 Order ID: ${orderId}
📅 Date: ${date}
━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*
Name: ${name}
Phone: ${phone}

📍 Address:
${address}

━━━━━━━━━━━━━━━━━━━━━━
🛍 *ITEM DETAILS*
${itemsText}
━━━━━━━━━━━━━━━━━━━━━━

💰 *PAYMENT SUMMARY*
Subtotal: ₹${subtotal}
Delivery: FREE
Total: ₹${subtotal}

━━━━━━━━━━━━━━━━━━━━━━
🙏 Thank you for shopping with CraftAI!
✨ Handmade with love
`;

    const whatsappUrl = `https://wa.me/919342830199?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-green-900">Checkout</h1>

        {/* ADDRESS FORM */}
        <div className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* ORDER SUMMARY */}
        <div className="mt-6 border-t pt-4">
          <p className="font-semibold">Total Amount: ₹{total}</p>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={handleOrder}
          className="w-full mt-5 bg-green-700 hover:bg-green-800 cursor-pointer text-white py-3 rounded-xl"
        >
          Place Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Checkout;
