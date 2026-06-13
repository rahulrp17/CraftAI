import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../../components/common/Navbar";
import { useAuth } from "../../context/AuthContext";
import {toast} from "react-toastify";
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

const EditProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { backendUrl } = useAuth();

  const [loading, setLoading] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const fetchProduct = useCallback(async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/products/${id}`);

      setFormData(res.data.product || res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product");
    }
  }, [id, backendUrl]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  }, [fetchProduct]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("stock", formData.stock);

      if (newImage) {
        data.append("image", newImage);
      }

      await axios.put(`${backendUrl}/api/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product updated successfully");
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#F8F5EF] min-h-screen py-25 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-lg p-5"
          >
            <div className="mb-5">
              <p className="text-green-600 text-xs uppercase tracking-[3px]">
                CraftAI Admin
              </p>

              <h1 className="text-3xl font-bold text-green-900">
                Edit Product
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <textarea
                rows="3"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border border-green-300 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                  required
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="border border-green-300 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-green-300 px-4 py-2.5 rounded-xl bg-white outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Select Category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Images */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-2">
                    Current Image
                  </p>

                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Current"
                      className="w-28 h-28 object-cover rounded-2xl shadow-md"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-900 mb-2">
                    New Image
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewImage(e.target.files[0])}
                    className="w-full text-sm border border-green-300 rounded-xl p-2"
                  />

                  {newImage && (
                    <img
                      src={URL.createObjectURL(newImage)}
                      alt="Preview"
                      className="w-28 h-28 object-cover rounded-2xl shadow-md mt-3"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold shadow-md transition disabled:opacity-60"
              >
                {loading ? "Updating Product..." : "Update Product"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EditProducts;
