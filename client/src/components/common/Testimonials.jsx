import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, UserRound, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ravi Kumar",
      text: "Amazing handmade quality. The product feels premium and worth every rupee.",
      rating: 5,
      role: "Verified Buyer",
    },
    {
      name: "Priya Sharma",
      text: "Super fast delivery and beautiful craftsmanship. Totally loved it!",
      rating: 5,
      role: "Happy Customer",
    },
    {
      name: "Arjun Mehta",
      text: "Products look even better than images. Very satisfied with quality.",
      rating: 4,
      role: "Regular Buyer",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const current = reviews[index];

  const getInitials = (name) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <section className="py-20 overflow-hidden px-4 bg-gradient-to-b from-green-50 to-white">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="mt-6 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real feedback from happy buyers
        </p>
      </div>

      {/* SLIDER CONTAINER */}
      <div className="max-w-3xl mx-auto relative">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 pl-12"
          >

            {/* USER */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                {getInitials(current.name)}
              </div>

              <div>
                <h3 className="font-semibold text-green-900">
                  {current.name}
                </h3>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <UserRound size={14} className="text-green-600" />
                  <span>{current.role}</span>
                </div>
              </div>

            </div>

            {/* STARS */}
            <div className="flex gap-1 mb-4 text-yellow-400">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm leading-7">
              “{current.text}”
            </p>

          </motion.div>
        </AnimatePresence>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-green-700 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;