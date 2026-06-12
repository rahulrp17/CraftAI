import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How do I place an order on CraftAI?",
    answer:
      "Browse products, add your favorites to the cart, proceed to checkout, and complete your purchase securely.",
  },
  {
    question: "Are all products handmade?",
    answer:
      "Yes. Every product listed on CraftAI is crafted by skilled artisans and verified before publishing.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled before they are shipped. Once dispatched, our Returns Policy applies.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Most orders are delivered within 3–7 business days depending on your location.",
  },
  {
    question: "Is online payment secure?",
    answer:
      "Absolutely. We use trusted payment gateways with encrypted transactions for maximum security.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F5EF] overflow-hidden relative">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        viewport={{once:false}}
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        viewport={{once:false}}
        className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
      />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once:false}}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2 rounded-full shadow-lg"
        >
          <FaQuestionCircle className="text-green-700" />

          <span className="text-sm font-semibold text-green-800 tracking-wide">
            HELP CENTER
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once:false}}
          className="mt-8 text-5xl md:text-7xl font-black text-green-900 leading-tight"
        >
          Frequently Asked
          <br />
          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Everything you need to know about shopping, shipping, returns,
          payments, and the CraftAI experience. We've answered the questions our
          customers ask most.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{once:false}}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/60">
            <h3 className="text-3xl font-black text-green-700">24/7</h3>

            <p className="text-gray-600 mt-2 text-sm">Customer Support</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/60">
            <h3 className="text-3xl font-black text-green-700">100%</h3>

            <p className="text-gray-600 mt-2 text-sm">Handmade Verified</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/60">
            <h3 className="text-3xl font-black text-green-700">500+</h3>

            <p className="text-gray-600 mt-2 text-sm">Happy Customers</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/60">
            <h3 className="text-3xl font-black text-green-700">Fast</h3>

            <p className="text-gray-600 mt-2 text-sm">Nationwide Delivery</p>
          </div>
        </motion.div>
      </section>

      {/* ================= PREMIUM FAQ ACCORDION ================= */}
      <section className="relative max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-green-900">
            Need More Answers?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our most frequently asked questions designed to help you
            navigate the CraftAI experience effortlessly.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-5">
                  {/* Number */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Question */}
                  <h3 className="text-lg md:text-xl font-bold text-green-900 pr-4">
                    {faq.question}
                  </h3>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-green-700 text-xl shrink-0"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-7">
                      <div className="border-t border-green-100 pt-6">
                        <p className="text-gray-600 leading-8 text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 rounded-[36px] p-8 md:p-12 text-center shadow-2xl text-white"
        >
          <h3 className="text-3xl md:text-4xl font-black">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-green-50 text-lg max-w-2xl mx-auto">
            Our support team is always here to help you with anything related to
            orders, products, or your CraftAI experience.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="/contact"
            className="inline-flex items-center justify-center mt-8 bg-white text-green-800 px-8 py-4 rounded-2xl font-bold shadow-xl"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQs;
