import { motion } from "framer-motion";
import {  FaFileContract,  FaShoppingBag,  FaUserShield,  FaBan,  FaCopyright,  FaHeadset,} from "react-icons/fa";

const termsSections = [
  {
    title: "Use of Our Services",
    description:
      "By accessing CraftAI, you agree to use our platform responsibly and comply with all applicable laws.",
    icon: FaUserShield,
  },
  {
    title: "Orders & Payments",
    description:
      "All purchases are subject to product availability and successful payment verification.",
    icon: FaShoppingBag,
  },
  {
    title: "Prohibited Activities",
    description:
      "You may not misuse the platform, attempt unauthorized access, or engage in fraudulent activities.",
    icon: FaBan,
  },
];

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] overflow-hidden relative">

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 70, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 17, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
      />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2 rounded-full shadow-lg"
        >
          <FaFileContract className="text-green-700" />

          <span className="text-sm font-semibold text-green-800 tracking-wide">
            TERMS & CONDITIONS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-7xl font-black text-green-900"
        >
          Terms of
          <br />

          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Service
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
        >
          Please read these terms carefully before using CraftAI.
          By accessing our services, you agree to these conditions.
        </motion.p>

      </section>

            {/* Terms Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {termsSections.map((section, index) => {
            const Icon = section.icon;

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
                  {section.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {section.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* Intellectual Property */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[36px] p-10 shadow-2xl"
        >
          <div className="flex items-center gap-4">

            <FaCopyright className="text-green-700 text-4xl" />

            <h2 className="text-4xl font-black text-green-900">
              Intellectual Property
            </h2>

          </div>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 text-lg">
            <li>• All CraftAI content, designs, and branding are protected by intellectual property laws.</li>
            <li>• You may not reproduce or distribute our materials without written permission.</li>
            <li>• Product images and website assets remain the property of CraftAI.</li>
            <li>• Unauthorized use may result in legal action.</li>
          </ul>

        </motion.div>

      </section>

            {/* Disclaimer */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-amber-50 border border-amber-100 rounded-[36px] p-10 shadow-xl"
        >
          <h2 className="text-3xl font-black text-amber-700">
            Limitation of Liability
          </h2>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            CraftAI shall not be liable for indirect, incidental,
            or consequential damages arising from the use of our services.
            We strive to provide accurate information but do not guarantee
            uninterrupted availability of the platform.
          </p>

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
          Questions About Our Terms?
        </h3>

        <p className="mt-4 text-green-50 text-lg max-w-2xl mx-auto">
          If you need clarification regarding these Terms & Conditions,
          our team is happy to assist you.
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