import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import FreeTrialPage from "./pages/FreeTrialPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import TawkChat from "./components/TawkChat.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
    
      <Navbar />
      
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/free-trial" element={<FreeTrialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    
      <Footer />
      <TawkChat />
    </>
  );
}

export default App;