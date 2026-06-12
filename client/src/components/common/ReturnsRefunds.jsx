import { motion } from "framer-motion";
import {  FaUndoAlt,  FaBoxOpen,  FaClipboardCheck,  FaMoneyCheckAlt,  FaExclamationTriangle,  FaHeadset,} from "react-icons/fa";

const returnSteps = [
  {
    title: "Request Return",
    description:
      "Contact our support team within 7 days of receiving your order.",
    icon: FaUndoAlt,
  },
  {
    title: "Product Inspection",
    description:
      "Ensure the item is unused, undamaged, and in its original packaging.",
    icon: FaClipboardCheck,
  },
  {
    title: "Return Shipment",
    description:
      "Ship the approved return using the instructions provided by CraftAI.",
    icon: FaBoxOpen,
  },
  {
    title: "Refund Processed",
    description:
      "Once approved, refunds are issued to your original payment method.",
    icon: FaMoneyCheckAlt,
  },
];

export default function ReturnsRefunds() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] overflow-hidden relative">

      {/* Background Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
      />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2 rounded-full shadow-lg"
        >
          <FaUndoAlt className="text-green-700" />

          <span className="text-sm font-semibold text-green-800 tracking-wide">
            RETURNS & REFUNDS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-7xl font-black text-green-900"
        >
          Hassle-Free
          <br />

          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Returns
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
        >
          We want you to love every CraftAI purchase.
          If something isn't right, our return process is simple and transparent.
        </motion.p>

      </section>

      {/* Return Steps */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          {returnSteps.map((step, index) => {
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

      {/* Refund Policy */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[36px] p-10 shadow-2xl"
        >
          <h2 className="text-4xl font-black text-green-900">
            Refund Information
          </h2>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 text-lg">
            <li>• Refunds are processed within 5–10 business days after approval.</li>
            <li>• Original shipping fees are non-refundable unless the item is defective.</li>
            <li>• Refunds are credited to the original payment method.</li>
            <li>• You'll receive an email confirmation once your refund is issued.</li>
          </ul>

        </motion.div>

      </section>

      {/* Non Returnable */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-red-50 border border-red-100 rounded-[36px] p-10 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <FaExclamationTriangle className="text-red-500 text-4xl" />

            <h2 className="text-3xl font-black text-red-700">
              Non-Returnable Items
            </h2>
          </div>

          <ul className="mt-8 space-y-4 text-gray-700 leading-8">
            <li>• Personalized or custom-made products.</li>
            <li>• Used or damaged products caused by customers.</li>
            <li>• Items without original packaging.</li>
            <li>• Products returned after the eligible return period.</li>
          </ul>

        </motion.div>

      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="max-w-5xl mx-auto mb-24 bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 rounded-[36px] p-10 md:p-14 text-center text-white shadow-2xl"
      >
        <FaHeadset className="mx-auto text-5xl" />

        <h3 className="mt-6 text-4xl font-black">
          Need Help With a Return?
        </h3>

        <p className="mt-4 text-green-50 text-lg max-w-2xl mx-auto">
          Our support team is ready to guide you through the return
          and refund process.
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
}