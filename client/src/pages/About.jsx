import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { Heart, ShieldCheck, Truck, Users, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    number: "500+",
    label: "Happy Customers",
  },
  {
    number: "100+",
    label: "Unique Products",
  },
  {
    number: "50+",
    label: "Skilled Artisans",
  },
  {
    number: "20+",
    label: "Cities Served",
  },
];

const features = [
  {
    icon: Heart,
    title: "Handmade With Love",
    desc: "Every product is crafted with passion and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "We ensure quality checks before every product reaches you.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Safe and reliable shipping across India.",
  },
  {
    icon: Users,
    title: "Support Artisans",
    desc: "Empowering local craftsmen and preserving traditional art.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen overflow-hidden bg-[#F8F5EF] pt-10">
        {/* Floating Background Blobs */}

        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-10 -left-24 w-80 h-80 rounded-full bg-green-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-96 -right-20 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full bg-lime-200/30 blur-3xl"
        />

        {/* HERO SECTION */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}

            <motion.div variants={fadeLeft}>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold shadow-md"
              >
                ✨ About CraftAI
              </motion.span>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
                Preserving
                <br />
                <span className="">Indian Handicrafts</span>
              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl">
                CraftAI connects talented artisans with people who appreciate
                authentic handmade creations. We bring timeless craftsmanship
                into modern homes while empowering local artists and preserving
                India's rich cultural heritage.
              </p>

              <div className="mt-10  flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/products")}
                  className="bg-green-700 w-65 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold shadow-xl cursor-pointer transition-all"
                >
                  Explore Collection
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(true)}
                  className="bg-white w-65 hover:bg-green-700 hover:text-white text-green-700 border border-green-300 px-8 py-4 rounded-2xl font-bold shadow-lg cursor-pointer transition-all"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Mini Stats */}

              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-3xl font-black text-green-700">500+</h3>

                  <p className="text-gray-600">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-green-700">50+</h3>

                  <p className="text-gray-600">Skilled Artisans</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-green-700">20+</h3>

                  <p className="text-gray-600">Cities Served</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}

            <motion.div variants={fadeRight} className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[40px] shadow-2xl"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781450330/photo-1517048676732-d65bc937f952_s1mxq1.jpg"
                  alt="CraftAI Hero"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>

              {/* Floating Card */}

              {/* <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-4 bg-white rounded-3xl shadow-2xl px-6 py-5"
              >
                <h3 className="text-4xl font-black text-green-700">
                  10+
                </h3>

                <p className="text-gray-600">
                  Years of Excellence
                </p>
              </motion.div> */}

              {/* Floating Badge */}

              {/* <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4"
              >
                <span className="text-2xl">
                  🏺
                </span>

                <p className="font-semibold text-green-700 mt-1">
                  Authentic
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.section>

        {/* LEARN MORE MODAL */}

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-3xl w-full rounded-[40px] bg-white p-8 lg:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}

                <button
                  onClick={() => setShowModal(false)}
                  className=" fixed top-15 right-8 hover:scale-110 lg:top3 lg:right-90 p-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition-all"
                >
                  <X size={24} />
                </button>

                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🌿 Our Mission
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
                  Crafting Stories,
                  <br />
                  Empowering Artisans
                </h2>

                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  CraftAI was founded with a vision to bridge the gap between
                  talented artisans and people who value authenticity.
                </p>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Every handcrafted piece reflects generations of tradition,
                  creativity, and dedication. By supporting CraftAI, you're
                  helping preserve India's artistic heritage while empowering
                  local communities.
                </p>

                {/* Modal Stats */}

                <div className="grid md:grid-cols-3 gap-5 mt-10">
                  <div className="bg-[#F8F5EF] rounded-2xl p-6 text-center shadow-md">
                    <h3 className="text-4xl font-black text-green-700">500+</h3>

                    <p className="text-gray-600 mt-2">Happy Customers</p>
                  </div>

                  <div className="bg-[#F8F5EF] rounded-2xl p-6 text-center shadow-md">
                    <h3 className="text-4xl font-black text-green-700">50+</h3>

                    <p className="text-gray-600 mt-2">Skilled Artisans</p>
                  </div>

                  <div className="bg-[#F8F5EF] rounded-2xl p-6 text-center shadow-md">
                    <h3 className="text-4xl font-black text-green-700">20+</h3>

                    <p className="text-gray-600 mt-2">Cities Served</p>
                  </div>
                </div>

                {/* Core Values */}

                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-green-900">
                    Our Core Values
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 rounded-2xl p-5">
                      <h4 className="font-bold text-green-800">
                        🎨 Authenticity
                      </h4>

                      <p className="text-gray-600 mt-2">
                        Celebrating genuine handmade artistry and preserving
                        traditional techniques.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-5">
                      <h4 className="font-bold text-green-800">
                        🤝 Empowerment
                      </h4>

                      <p className="text-gray-600 mt-2">
                        Supporting artisans through fair opportunities and
                        sustainable growth.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-5">
                      <h4 className="font-bold text-green-800">
                        🌱 Sustainability
                      </h4>

                      <p className="text-gray-600 mt-2">
                        Promoting conscious shopping and eco-friendly
                        craftsmanship.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-5">
                      <h4 className="font-bold text-green-800">❤️ Community</h4>

                      <p className="text-gray-600 mt-2">
                        Building meaningful connections between creators and
                        customers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}

                <div className="flex flex-wrap gap-4 mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowModal(false);
                      navigate("/products");
                    }}
                    className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl cursor-pointer"
                  >
                    Explore Collection
                  </motion.button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold cursor-pointer hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATS SECTION */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl text-center border border-white/60"
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl font-black text-green-700"
                >
                  {item.number}
                </motion.h2>

                <p className="mt-3 text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* STORY SECTION */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-7xl mx-auto py-12 px-4"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}

            <motion.div variants={fadeLeft}>
              <span className="text-green-700 font-semibold uppercase tracking-widest">
                Our Story
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
                Every Craft
                
                Tells A Story
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                CraftAI was founded to empower artisans and bring authentic
                handmade products to customers who value craftsmanship,
                tradition, and quality.
              </p>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                We believe every handcrafted piece carries the soul of its
                creator and deserves a place in modern lifestyles.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <h3 className="text-3xl font-black text-green-700">100+</h3>

                  <p className="mt-2 text-gray-600">
                    Authentic Handmade Products
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <h3 className="text-3xl font-black text-green-700">50+</h3>

                  <p className="mt-2 text-gray-600">Partnered Artisans</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}

            <motion.div
              variants={fadeRight}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
                alt="Our Story"
                className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
              />

              {/* <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 right-6 bg-white rounded-3xl px-6 py-5 shadow-xl"
              >
                <h3 className="text-3xl font-black text-green-700">
                  Since
                </h3>

                <p className="text-gray-600 mt-1">
                  Crafting Memories
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.section>

        {/* ARTISANS SECTION */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
                👨‍🎨 The Faces Behind CraftAI
              </span>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
                Meet Our Artisans
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Every masterpiece is brought to life by skilled artisans who
                dedicate years to preserving India's rich artistic heritage
                through their passion and craftsmanship.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artisan 1 */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -15, rotate: 1 }}
                className="group bg-[#F8F5EF] rounded-[35px] overflow-hidden shadow-xl relative"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110249/clay_ue9na2.jpg"
                    alt="Clay Artisan"
                    className="h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-green-900">
                    Clay Craft Specialist
                  </h3>

                  <p className="text-gray-500 mt-3 leading-relaxed">
                    Bringing centuries-old pottery traditions to modern homes
                    with exceptional attention to detail.
                  </p>
                </div>
              </motion.div>

              {/* Artisan 2 */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -15, rotate: -1 }}
                className="group bg-[#F8F5EF] rounded-[35px] overflow-hidden shadow-xl relative"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110260/wood_xj1oby.jpg"
                    alt="Wood Artisan"
                    className="h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-green-900">
                    Woodwork Master
                  </h3>

                  <p className="text-gray-500 mt-3 leading-relaxed">
                    Transforming natural wood into timeless decorative and
                    functional handcrafted pieces.
                  </p>
                </div>
              </motion.div>

              {/* Artisan 3 */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -15, rotate: 1 }}
                className="group bg-[#F8F5EF] rounded-[35px] overflow-hidden shadow-xl relative"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110257/fasion_svywa5.jpg"
                    alt="Fashion Artisan"
                    className="h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-green-900">
                    Textile Designer
                  </h3>

                  <p className="text-gray-500 mt-3 leading-relaxed">
                    Preserving traditional textile artistry through elegant
                    handmade fashion creations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FEATURES SECTION */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
              💎 Why CraftAI
            </span>

            <h2 className="mt-6 text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
              Why Choose CraftAI
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We combine authentic craftsmanship with modern convenience to
              deliver an unforgettable shopping experience while supporting
              talented local artisans.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/60 p-8 shadow-2xl group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-100/40 via-transparent to-emerald-100/40" />

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center"
                >
                  <feature.icon size={34} className="text-green-700" />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mt-6 text-green-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* QUOTE SECTION */}

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[40px] shadow-2xl p-10 lg:p-16 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                ✨
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-black text-green-900 leading-relaxed">
                "Craft is not just a product; it is the story of heritage,
                dedication, and human creativity."
              </h3>

              <p className="mt-6 text-gray-600 text-lg">
                — The CraftAI Philosophy
              </p>
            </div>
          </div>
        </motion.section>

        {/* PREMIUM CTA SECTION */}

        <motion.section
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 p-12 lg:p-20 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            >
              {/* Animated Glow */}

              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-white/10 blur-3xl"
              />

              {/* Floating Circle 1 */}

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white/10"
              />

              {/* Floating Circle 2 */}

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-white/10"
              />

              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
                >
                  🌿 Support Indian Artisans
                </motion.span>

                <h2 className="mt-8 text-4xl lg:text-6xl font-black leading-tight">
                  Discover Handmade Luxury
                </h2>

                <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Explore unique handcrafted treasures, celebrate India's
                  artistic heritage, and bring timeless craftsmanship into your
                  home.
                </p>

                <motion.button
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/products")}
                  className="mt-10 bg-white text-green-700 px-10 py-4 rounded-2xl font-bold shadow-2xl cursor-pointer transition-all"
                >
                  Shop Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default About;
