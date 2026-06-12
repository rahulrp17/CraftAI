import { motion } from "framer-motion";
import {  FaShippingFast,  FaBoxOpen,  FaMapMarkedAlt,  FaHeadset,} from "react-icons/fa";

const shippingSteps = [
  {
    title: "Order Confirmation",
    description:
      "Once your order is placed, you'll receive an instant confirmation email.",
    icon: FaBoxOpen,
  },
  {
    title: "Crafting & Packaging",
    description:
      "Our artisans carefully prepare and package each handmade product.",
    icon: FaBoxOpen,
  },
  {
    title: "Dispatch",
    description: "Orders are usually dispatched within 1–2 business days.",
    icon: FaShippingFast,
  },
  {
    title: "Delivery",
    description: "Your products arrive safely within 3–7 business days.",
    icon: FaMapMarkedAlt,
  },
];

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EF] overflow-hidden relative">
      {/* Animated Background */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
      />

      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2 rounded-full shadow-lg"
        >
          <FaShippingFast className="text-green-700" />

          <span className="text-sm font-semibold text-green-800 tracking-wide">
            SHIPPING POLICY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-7xl font-black text-green-900"
        >
          Fast & Reliable
          <br />
          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Shipping
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
        >
          We ensure every CraftAI order reaches you safely, beautifully
          packaged, and right on time.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {shippingSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center text-white text-2xl shadow-lg">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-green-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="max-w-5xl mx-auto mb-24 bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 rounded-[36px] p-10 md:p-14 text-center text-white shadow-2xl"
      >
        <FaHeadset className="mx-auto text-5xl" />

        <h3 className="mt-6 text-4xl font-black">Need Shipping Assistance?</h3>

        <p className="mt-4 text-green-50 text-lg max-w-2xl mx-auto">
          Our support team is available to help you track orders, resolve
          shipping concerns, and answer delivery questions.
        </p>

        <a
          href="/contact"
          className="inline-flex mt-8 bg-white text-green-800 px-8 py-4 rounded-2xl font-bold shadow-xl"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default ShippingPolicy;