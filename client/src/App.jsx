import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/common/Navbar";
import CartPage from "./components/common/CartPage";
import Checkout from "./components/common/Checkout";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import EditProducts from "./pages/admin/EditProducts";
import ManageProducts from "./pages/admin/ManageProducts";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import FAQs from "./components/common/FAQs";
import ShippingPolicy from "./components/common/ShippingPolicy";
import ReturnsRefunds from "./components/common/ReturnsRefunds";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import TermsConditions from "./components/common/TermsConditions";
import Wishlist from "./components/common/Wishlist";
import AIChat from "./components/ai/AIChat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import CookieConsent from "./components/common/CookieConsent";

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Restore localStorage data
        localStorage.getItem("token");
        localStorage.getItem("wishlist");
        localStorage.getItem("cart");

        // If you later add:
        // await checkAuth();
        // await fetchProfile();
        // await fetchSettings();
      } catch (error) {
        console.error(error);
      } finally {
        setAppReady(true);
      }
    };

    initializeApp();
  }, []);

  if (!appReady) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />

          <AIChat />

          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/faqs" element={<FAQs />} />

            <Route path="/shipping-policy" element={<ShippingPolicy />} />

            <Route path="/returns-refunds" element={<ReturnsRefunds />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/terms-conditions" element={<TermsConditions />} />

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/add-product"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/products"
              element={
                <ProtectedRoute>
                  <ManageProducts />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/manage-products"
              element={
                <ProtectedRoute>
                  <ManageProducts />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/edit/:id"
              element={
                <ProtectedRoute>
                  <EditProducts />
                </ProtectedRoute>
              }
            />

            {/* Cart */}
            <Route path="/cart" element={<CartPage />} />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <ToastContainer position="top-right" autoClose={3000} />

          <CookieConsent />

          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
