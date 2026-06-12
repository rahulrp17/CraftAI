import { motion } from "framer-motion";
import {Truck,ShieldCheck,Sparkles,Headset,} from "lucide-react";

const FeatureStrip = () => {
  const features = [
    {
      icon: <Truck size={18} />,
      title: "Free Delivery",
      desc: "Orders above ₹499",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure Payment",
      desc: "100% safe checkout",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Premium Quality",
      desc: "Handcrafted items",
    },
    {
      icon: <Headset size={18} />,
      title: "24/7 Support",
      desc: "Always here for you",
    },
  ];

  return (
    <div className="bg-gradient-to-r  from-green-50 to-emerald-50 overflow-hidden py-6 max-w-7xl mx-auto">

      {/* ANIMATED TRACK */}
      <motion.div
        className="flex gap-4 w-max mx-auto animate-track   "
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >

        {/* DUPLICATE FOR LOOP EFFECT */}
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white shadow-md rounded-full px-5 py-3 min-w-[220px]"
          >
            {/* ICON */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700">
              {item.icon}
            </div>

            {/* TEXT */}
            <div className="leading-tight">
              <h3 className="text-sm font-semibold text-green-900">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </motion.div>
    </div>
  );
};

export default FeatureStrip;