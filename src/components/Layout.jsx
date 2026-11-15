import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Preloader from "./Preloader.jsx";
import ScrollTop from "./ScrollTop.jsx";
import FloatingLeadWidget from "./FloatingLeadWidget.jsx";
import RouteMetadata from "./RouteMetadata.jsx";
import SearchModal from "./SearchModal.jsx";
import TemplateScripts from "./TemplateScripts.jsx";

export default function Layout() {
  return (
    <>
      <RouteMetadata />
      <Preloader />
      <Header />
      <SearchModal />
      <Outlet />
      <Footer />
      <ScrollTop />
      <FloatingLeadWidget />
      <TemplateScripts />
    </>
  );
}
