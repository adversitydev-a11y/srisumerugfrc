import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FrpProducts from "./pages/FrpProducts.jsx";
import GfrcProducts from "./pages/GfrcProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About SRI SUMERU GFRC & FRP */}
        <Route path="/about-us" element={<About />} />
        <Route path="/about" element={<About />} />

        {/* Architectural Products */}
        <Route path="/frp-products" element={<FrpProducts />} />
        <Route path="/products" element={<FrpProducts />} />
        <Route path="/services" element={<FrpProducts />} />
        <Route path="/gfrc-products" element={<GfrcProducts />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/service-details" element={<ProductDetails />} />

        {/* Architectural Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/portfolio-details" element={<ProjectDetails />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* Resources & Insights */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details/:slug" element={<BlogDetails />} />

        {/* Contact & Bangalore Plant */}
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
