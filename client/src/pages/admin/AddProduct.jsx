import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../../components/common/Navbar";
import { useAuth } from "../../context/AuthContext";
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
  const navigate = useNavigate();
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

      const res = await axios.post(
        `${backendUrl}/api/products/upload`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setImageUrl(res.data.imageUrl);

      alert("✅ Image Uploaded Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Image Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image first");
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

      navigate("/admin/dashboard", {
        state: {
          message: "✅ Product Added Successfully",
        },
      });
    } catch (error) {
      console.error(error);
      alert("Failed to Add Product");
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

              <h1 className="text-4xl font-bold text-green-900 mt-2">
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

                <label
                  className="  flex  flex-col  items-center  justify-center  border-2  border-dashed  border-green-300  rounded-2xl  p-6  cursor-pointer  hover:bg-green-50  transition"
                >
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
                    className="
                      w-40
                      h-40
                      object-cover
                      rounded-2xl
                      shadow-md
                    "
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || uploading}
                className="
                  w-full
                  bg-green-700
                  hover:bg-green-800
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
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
