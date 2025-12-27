import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

const LandingPage = lazy(()=> import("./Pages/LandingPage.jsx"));
const Shop = lazy(() => import("./Pages/Shop.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Blog = lazy(() => import("./Pages/Blog.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const CartPage = lazy(() => import("./Pages/CartPage.jsx"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails.jsx"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
