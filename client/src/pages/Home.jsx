// import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
// import Categories from "../components/common/Categories";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FeatureStrip from "../components/common/FeatureStrip";
// import CategorySection from "../components/common/CategorySection";
import BestSellers from "../components/common/BestSellers";
import WhyChooseUs from "../components/common/WhyChooseUs";
import Testimonials from "../components/common/Testimonials";
import Categories from "../components/common/Categories";
import { useAuth } from "../context/AuthContext";
import DemoCredentials from "../components/common/DemoCredentials";   
const Home = () => {
  const { backendUrl } = useAuth();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (backendUrl) {
      axios
        .get(`${backendUrl}/api/products`)
        .then((res) => setProducts(res.data));
    }
    console.log("page rendering");
    
  }, [backendUrl]);
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DemoCredentials />
      <FeatureStrip />

      <Categories />

      <BestSellers products={products} />

      <WhyChooseUs />

      <Testimonials />
    </>
  );
};

export default Home;
