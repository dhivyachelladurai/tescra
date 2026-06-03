import { useState } from "react";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/Blogsection";
import CareersSection from "./components/Careerssection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/Contactsection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import WhyTescra from "./components/WhyTescra";
import AboutUs from "./Pages/AboutUs";
import PartnerGallery from "./Pages/PartnerGallery";
import ServiceDetail from "./Pages/ServiceDetail";
import IndustryDetail from "./Pages/IndustryDetail";
import "./index.css";
import CaseStudies from "./Pages/CaseStudies";
import NewsLetter from "./Pages/NewsLetter";
import CultureSection from "./Pages/CultureSection";
import ClientPortfolio from "./Pages/ClientPortfolio";


export default function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <Navbar onNavigate={setPage} onSelect={setSelectedService} onSelectIndustry={(key) => {
        // find industry index by key and set
        import("./data/industries").then(mod => {
          const idx = mod.default.findIndex(i => i.key === key);
          if (idx >= 0) setSelectedIndustry(idx);
        });
      }} />
      <main>
        {page === "about" ? (
          <AboutUs />
        ) : page === "partner" ? (
          <PartnerGallery />
        ) : page === "service" ? (
          <ServiceDetail index={selectedService} onNavigate={setPage} />
        ) : page === "industry" ? (
          <IndustryDetail index={selectedIndustry} onNavigate={setPage} />
        ) : page === "case-studies" ? (
          <CaseStudies />
        ) : page === "newsletter" ? (
          <NewsLetter />
        ) : page === "culture" ? (
          <CultureSection />
        ) : page === "portfolio" ?
        <ClientPortfolio /> :
        (
          <>
            <HeroSection onNavigate={setPage} />
            <ClientsSection />
            <AboutSection onNavigate={setPage} />
            <ServicesSection onNavigate={setPage} onSelect={setSelectedService} />
            <WhyTescra />
            <BlogSection />
            <CareersSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer onNavigate={setPage} onSelect={setSelectedService} onSelectIndustry={(key) => {
        import("./data/industries").then(mod => {
          const idx = mod.default.findIndex(i => i.key === key);
          if (idx >= 0) setSelectedIndustry(idx);
        });
        setPage("industry");
      }} />
    </>
  );
}