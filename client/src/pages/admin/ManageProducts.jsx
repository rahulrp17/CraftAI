import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/common/Navbar";

import { useAuth } from "../../context/AuthContext";

const categories = [
  "All",
  "Handmade Gifts",
  "Home Decor",
  "Art & Paintings",
  "Jewellery",
  "Pottery",
  "Wood Craft",
  "Fashion Design",
  "Festive Collection",
];

const ManageProducts = () => {
  const location = useLocation();
  const { backendUrl } = useAuth();

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(true);

  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${backendUrl}/api/products`);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, [fetchProducts]);

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setSelectedProduct(null);
  };

  const deleteProduct = async () => {
    if (!selectedProduct) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${backendUrl}/api/products/${selectedProduct._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((prev) =>
        prev.filter((product) => product._id !== selectedProduct._id),
      );

      closeDeleteModal();
    } catch (error) {
      console.log(error);
      alert("Failed to delete product");
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F5EF] px-5 py-25">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <p className="uppercase tracking-[3px] font-bold  text-green-600 text-xl">
              CraftAI Admin
            </p>

            <h1 className="text-4xl font-bold text-green-900 mt-1">
              Manage Products
            </h1>
          </motion.div>

          {/* Success Message */}
          {location.state?.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="  mb-6  bg-green-100  text-green-700  px-4  py-3  rounded-2xl"
            >
              {location.state.message}
            </motion.div>
          )}

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-3xl shadow">
              <p className="text-gray-500 text-md">Total Products</p>

              <h2 className="text-3xl font-bold text-green-700">
                {products.length}
              </h2>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow">
              <p className="text-gray-500 text-md">Filtered Results</p>

              <h2 className="text-3xl font-bold text-green-700">
                {filteredProducts.length}
              </h2>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="  bg-white  border  px-5  py-4  border-green-300  rounded-2xl  shadow-sm  outline-none  focus:ring-2  focus:ring-green-600"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="  bg-white  border  px-5  py-4  border-green-300  rounded-2xl  shadow-sm  outline-none  focus:ring-2  focus:ring-green-600"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="text-center py-20">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div
              className="  bg-white  rounded-3xl  shadow  p-12  text-center"
            >
              <h3 className="text-2xl font-bold">No Products Found</h3>

              <p className="text-gray-500 mt-2">
                Try changing your search or category.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-3xl shadow">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-4 text-left">Image</th>

                    <th className="p-4 text-left">Product</th>

                    <th className="p-4 text-left">Category</th>

                    <th className="p-4 text-left">Price</th>

                    <th className="p-4 text-left">Stock</th>

                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product, index) => (
                    <motion.tr
                      key={product._id}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.03,
                      }}
                      className="border-b"
                    >
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="
                              w-16
                              h-16
                              object-cover
                              rounded-xl
                            "
                        />
                      </td>

                      <td className="p-4 font-medium">{product.title}</td>

                      <td className="p-4">{product.category}</td>

                      <td className="p-4">₹{product.price}</td>

                      <td className="p-4">{product.stock}</td>

                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            to={`/admin/edit/${product._id}`}
                            className="    bg-blue-600    hover:bg-blue-700    text-white    px-4    py-2    rounded-xl    transition  "
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => openDeleteModal(product)}
                            className="    bg-red-600    hover:bg-red-700    text-white    px-4    py-2    rounded-xl    transition  "
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Delete Modal */}
      <AnimatePresence>
        {deleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="  fixed  inset-0  z-50  flex  items-center  justify-center"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeDeleteModal}
            />

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="  relative  bg-white  w-[90%]  max-w-md  p-6  rounded-3xl  shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-3">Delete Product?</h2>

              <p className="text-gray-600 mb-6">
                This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={closeDeleteModal}
                  className="  px-5  py-2  border  rounded-xl"
                >
                  Cancel
                </button>

                <button
                  onClick={deleteProduct}
                  className="  px-5  py-2  bg-red-600  text-white  rounded-xl"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ManageProducts;
