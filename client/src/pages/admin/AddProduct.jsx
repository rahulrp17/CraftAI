import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../../components/common/Navbar";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
const categories = [
  "Handmade Gifts",
  "Home Decor",
  "Art & Paintings",
  "Jewellery",
  "Pottery",
  "Wood Craft",
  "Fashion Design",
  "Festive Collection",
];

const AddProduct = () => {
  // const navigate = useNavigate();
  const { backendUrl } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      setUploading(true);

      const data = new FormData();
      data.append("image", file);

      const token = localStorage.getItem("token");

      const res = await axios.post(`${backendUrl}/api/products/upload`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setImageUrl(res.data.imageUrl);
      showCraftAISuccessToast("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const showCraftAISuccessToast = (message) => {
    toast(
      ({ closeToast }) => (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="  bg-white  rounded-3xl  shadow-2xl  border border-green-100  p-4  flex items-center gap-4  min-w-[320px]"
        >
          <button
            className="absolute top-2 right-2 w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-600 transition duration-300"
            onClick={closeToast}
          >
            X
          </button>

          {/* CraftAI Logo */}
          <motion.img
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            src="https://res.cloudinary.com/dwqvdqtgu/image/upload/v1781193627/ChatGPT_Image_Jun_11_2026_09_29_57_PM_jirhiy.png"
            alt="CraftAI"
            className="w-14 h-14 rounded-2xl object-cover shadow-md"
          />

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-green-900">CraftAI Success</h3>

            <p className="text-sm text-gray-600 mt-1">{message}</p>
          </div>

          {/* Checkmark */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="  w-10 h-10  rounded-full  bg-green-100  flex items-center justify-center  text-green-700  font-bold  text-lg"
          >
            ✓
          </motion.div>
        </motion.div>
      ),
      {
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: true,
        className: "!bg-transparent !shadow-none !p-0",
      },
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error("Please upload an image first");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        `${backendUrl}/api/products`,
        {
          ...formData,
          image: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      showCraftAISuccessToast(
        `${formData.title} product added successfully!`,
      );
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        
      })
      setImageUrl("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-24 bg-[#F8F5EF] py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl"
          >
            {/* Header */}
            <div className="mb-8">
              <p className="uppercase tracking-[4px] text-green-600 text-sm">
                CraftAI Admin
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-800 to-amber-900">
                Add New Product
              </h1>

              <p className="text-gray-500 mt-2">
                Showcase a handcrafted creation to your marketplace.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              {/* Description */}
              <textarea
                rows="3"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-1 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              {/* Price & Stock */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-green-300 px-4 py-1 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                  required
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border border-green-300 px-4 py-1 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              {/* Category */}
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-1 rounded-xl bg-white outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Select Category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Upload */}
              <div>
                <label className="block mb-2 font-medium text-green-900">
                  Product Image
                </label>

                <label className="  flex  flex-col  items-center  justify-center  border-2  border-dashed  border-green-300  rounded-2xl  p-6  cursor-pointer  hover:bg-green-50  transition">
                  <span className="text-3xl">📷</span>

                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload image
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {uploading && (
                <p className="text-sm text-green-700">Uploading image...</p>
              )}

              {/* Preview */}
              {imageUrl && (
                <div>
                  <p className="font-medium text-green-900 mb-2">Preview</p>

                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="  w-40  h-40  object-cover  rounded-2xl  shadow-md"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || uploading}
                className="  w-full  bg-green-700 cursor-pointer  hover:bg-green-800  text-white  py-3  rounded-2xl  font-semibold  shadow-lg  transition  disabled:opacity-60  disabled:cursor-not-allowed"
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
