import { motion } from "framer-motion";
import {  FaLock,  FaUserShield,  FaCookieBite,  FaDatabase,  FaHeadset,  FaUserCheck,} from "react-icons/fa";

const privacyCards = [
  {
    title: "Information We Collect",
    description:
      "We collect only the information necessary to process orders, improve your experience, and provide customer support.",
    icon: FaDatabase,
  },
  {
    title: "How We Use Data",
    description:
      "Your information is used to fulfill orders, communicate updates, and enhance our services.",
    icon: FaUserShield,
  },
  {
    title: "Your Privacy Rights",
    description:
      "You have the right to access, update, or request deletion of your personal information.",
    icon: FaUserCheck,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] overflow-hidden relative">

      {/* Floating Background Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"
      />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 px-5 py-2 rounded-full shadow-lg"
        >
          <FaLock className="text-green-700" />

          <span className="text-sm font-semibold text-green-800 tracking-wide">
            PRIVACY POLICY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-7xl font-black text-green-900"
        >
          Your Privacy
          <br />

          <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Matters
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
        >
          At CraftAI, we respect your trust and are committed to protecting
          your personal information with transparency and integrity.
        </motion.p>

      </section>

            {/* Privacy Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {privacyCards.map((card, index) => {
            const Icon = card.icon;

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
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {card.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* Security Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[36px] p-10 shadow-2xl"
        >
          <h2 className="text-4xl font-black text-green-900">
            Security Commitment
          </h2>

          <ul className="mt-8 space-y-5 text-gray-600 leading-8 text-lg">
            <li>• Industry-standard safeguards protect your information.</li>
            <li>• Secure payment gateways process transactions safely.</li>
            <li>• We never sell your personal data to third parties.</li>
            <li>• Access to customer information is strictly controlled.</li>
          </ul>

        </motion.div>

      </section>

            {/* Cookies */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-amber-50 border border-amber-100 rounded-[36px] p-10 shadow-xl"
        >
          <div className="flex items-center gap-4">

            <FaCookieBite className="text-amber-500 text-4xl" />

            <h2 className="text-3xl font-black text-amber-700">
              Cookies Policy
            </h2>

          </div>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            CraftAI uses cookies to improve website performance,
            personalize experiences, and understand visitor interactions.
            You may disable cookies through your browser settings at any time.
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
          Questions About Privacy?
        </h3>

        <p className="mt-4 text-green-50 text-lg max-w-2xl mx-auto">
          If you have concerns regarding your personal information,
          our support team is happy to assist you.
        </p>

        <a
          href="/contact"
          className="inline-flex mt-8 bg-white text-green-800 px-8 py-4 rounded-2xl font-bold shadow-xl"
        >
          Contact Us
        </a>

      </motion.div>

    </div>
  );
}

