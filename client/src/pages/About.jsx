import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { Heart, ShieldCheck, Truck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

// import wood from "../assets/images/wood.png";
// import clay from "../assets/images/clay.png";
// import fashion from "../assets/images/fashion.png";

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

const About = () => {
const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-[#F8F5EF] min-h-screen pt-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ About CraftAI
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-green-900 mt-6 leading-tight">
                Preserving
                <span className="text-green-600"> Indian Handicrafts</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                CraftAI connects talented artisans with people who appreciate
                authentic handmade creations. Our mission is to bring
                traditional craftsmanship into modern homes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt="Craft"
                className="rounded-[40px] shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <div className="max-w-7xl mx-auto mt-24 relative z-20 px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <motion.div
                whileHover={{ y: -10 }}
                className="  bg-white/70  backdrop-blur-xl  rounded-3xl  p-8  shadow-2xl  text-center"      >
                <h2 className="text-4xl font-black text-green-700">
                  {item.number}
                </h2>

                <p className="mt-2 text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STORY */}
        <section className="max-w-7xl mx-auto py-10 px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-green-700 font-semibold uppercase">
                Our Story
              </span>

              <h2 className="text-5xl font-black text-green-900 mt-4">
                Every Craft Tells A Story
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                CraftAI was founded to empower artisans and bring authentic
                handmade products to customers who value craftsmanship,
                tradition, and quality.
              </p>
            </div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </section>

        {/*Artisans*/}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-5xl font-black text-green-900 mb-16">
              Meet Our Artisans
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{
                  y: -15,
                  rotate: 1,
                }}
                className="  bg-[#F8F5EF]  rounded-[35px]  overflow-hidden  shadow-xl"
              >
                <img
                  src={
                    "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110249/clay_ue9na2.jpg"
                  }
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Master Artisan</h3>

                  <p className="text-gray-500 mt-2">
                    Specializing in handmade crafts and traditional art forms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -15,
                  rotate: 1,
                }}
                className="  bg-[#F8F5EF]  rounded-[35px]  overflow-hidden  shadow-xl"
              >
                <img
                  src={
                    "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110260/wood_xj1oby.jpg"
                  }
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Master Artisan</h3>

                  <p className="text-gray-500 mt-2">
                    Specializing in handmade crafts and traditional art forms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -15,
                  rotate: 1,
                }}
                className="  bg-[#F8F5EF]  rounded-[35px]  overflow-hidden  shadow-xl  flex flex-col items-center justify-center"
              >
                <img
                  src={
                    "https://res.cloudinary.com/dwqvdqtgu/image/upload/q_auto/f_auto/v1781110257/fasion_svywa5.jpg"
                  }
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Master Artisan</h3>

                  <p className="text-gray-500 mt-2">
                    Specializing in handmade crafts and traditional art forms.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/*Features*/}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-center text-4xl font-black text-green-900 mb-16">
            Why Choose CraftAI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white p-8  rounded-[30px] shadow-lg"
              >
                <feature.icon size={40} className="text-green-700 " />

                <h3 className="text-xl font-bold mt-5">{feature.title}</h3>

                <p className="text-gray-600 mt-3">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/*Timeline*/}
        {/* <section className="py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-5xl font-black text-green-900 mb-20">
              Our Journey
            </h2>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-full bg-green-700" />
                <div>
                  <h3 className="font-bold text-2xl">2024</h3>
                  <p className="text-gray-600">CraftAI was founded.</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-full bg-green-700" />
                <div>
                  <h3 className="font-bold text-2xl">2025</h3>
                  <p className="text-gray-600">Partnered with 50+ artisans.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-10">
          <div className="lg:max-w-6xl max-w-3xl  mx-auto px-4">
            <div className="  bg-gradient-to-r  from-green-800  via-green-700  to-emerald-600  rounded-[50px]  p-20  text-center  text-white">
              <h2 className="lg:text-6xl text-4xl font-black">
                Discover Handmade Luxury
              </h2>

              <p className="mt-6 text-xl text-white/80">
                Support artisans. Preserve heritage.
              </p>

              <button onClick={navigate("/products")} className="mt-10 bg-white text-green-700 px-10 py-4 rounded-2xl font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
