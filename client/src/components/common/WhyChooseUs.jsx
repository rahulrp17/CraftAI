import { motion } from "framer-motion";
import {  Sparkles,  ShieldCheck,  Truck,  Users,  BadgeCheck,  Leaf,} from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    { label: "Happy Customers", value: "5K+" },
    { label: "Products Sold", value: "12K+" },
    { label: "Artisans", value: "200+" },
    { label: "Rating", value: "4.8★" },
  ];

  const features = [
    {
      icon: <Sparkles />,
      title: "Premium Handmade Quality",
      desc: "Every product is carefully crafted by skilled artisans.",
    },
    {
      icon: <ShieldCheck />,
      title: "Safe & Secure Orders",
      desc: "Trusted checkout and verified product quality.",
    },
    {
      icon: <Truck />,
      title: "Fast Delivery",
      desc: "Quick shipping with real-time updates.",
    },
    {
      icon: <Users />,
      title: "Loved by Customers",
      desc: "Thousands of happy buyers trust us.",
    },
    {
      icon: <BadgeCheck />,
      title: "Quality Assured",
      desc: "Every item passes strict quality checks.",
    },
    {
      icon: <Leaf />,
      title: "Eco Friendly",
      desc: "Made using sustainable materials.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-green-50 to-white">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-12">
        <h2 className="mt-6 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
          Why People Choose Us
        </h2>
        <p className="text-gray-500 mt-2">
          Trust built through quality, care, and craftsmanship
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-5xl overflow-hidden mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: false }}
            className="bg-white shadow-md rounded-2xl p-6 text-center border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-700">
              {s.value}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {s.label}
            </p>
          </motion.div>
        ))}

      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: false }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative bg-white rounded-2xl p-6 shadow-md border border-green-100 overflow-hidden"
          >

            {/* GLOW EFFECT */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 blur-3xl opacity-40"></div>

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-green-900 text-lg">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-500 mt-2 leading-6">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseUs;
