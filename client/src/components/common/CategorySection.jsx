import { motion } from "framer-motion";

const CategorySection = () => {
  const categories = [
    { name: "Wood Craft", icon: "🪵" },
    { name: "Clay Art", icon: "🏺" },
    { name: "Home Decor", icon: "🏠" },
    { name: "Painting", icon: "🎨" },
  ];

  return (
    <div className="px-4 mt-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer"
          >
            <div className="text-3xl">{cat.icon}</div>
            <p className="mt-2 font-semibold text-green-800">
              {cat.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;