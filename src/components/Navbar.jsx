import logo from "../Assets/cropped-logo.png";
import "../Css/Navbar.css";
import { services } from "../data/services";

export default function Navbar({ onNavigate, onSelect, onSelectIndustry }) {
  const handleNavigate = (event, pageKey) => {
    event.preventDefault();
    onNavigate?.(pageKey);
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceClick = (event, serviceKey) => {
    event.preventDefault();
    const idx = services.findIndex((s) => s.key === serviceKey);
    if (idx >= 0) onSelect?.(idx);
    onNavigate?.("service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIndustryClick = (event, industryKey) => {
    event.preventDefault();
    // lazy load industries data here by key -> let App set selectedIndustry via onSelectIndustry
    onSelectIndustry?.(industryKey);
    onNavigate?.("industry");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" onClick={(event) => handleNavigate(event, "home")}> 
          <img src={logo} alt="Tescra" className="navbar-logo" />
        </a>

        <ul className="navbar-menu">
          <li className="dropdown">
            <a href="#about">
              Who We Are <span className="arrow">▼</span>
            </a>

            <ul className="dropdown-menu">
              <li><a href="/about" onClick={(event) => handleNavigate(event, "about")}>About Us</a></li>
              <li><a href="/partner" onClick={(event) => handleNavigate(event, "partner")}>Partner Galaxy</a></li>
              <li><a href="/awards" onClick={(event) => handleNavigate(event, "awards")}>Awards & Recognitions</a></li>
            </ul>
          </li>

          <li className="divider">|</li>

          {/* SERVICES */}
          <li className="dropdown">
            <a href="#services">
              Services <span className="arrow">▼</span>
            </a>

            <ul className="dropdown-menu services-menu">
              <li><a href="/services/ai-services" onClick={(e) => handleServiceClick(e, "ai-services")}>AI & Generative AI Services</a></li>
              <li><a href="/services/software-development" onClick={(e) => handleServiceClick(e, "software-development")}>Custom Software Development & Application Management</a></li>
              <li><a href="/services/data-automation" onClick={(e) => handleServiceClick(e, "data-automation")}>Data Driven Intelligent Automation</a></li>
              <li><a href="/services/cloud-engineering" onClick={(e) => handleServiceClick(e, "cloud-engineering")}>Cloud Engineering</a></li>
              <li><a href="/services/global-capability-centres" onClick={(e) => handleServiceClick(e, "global-capability-centres")}>Global Capability Centres</a></li>
            </ul>
          </li>

          <li className="divider">|</li>

          {/* INDUSTRIES */}
          <li className="dropdown">
            <a href="#industries">
              Industries <span className="arrow">▼</span>
            </a>

            <ul className="dropdown-menu">
              <li><a href="/industry/banking" onClick={(e) => handleIndustryClick(e, "banking")}>Banking & Financial</a></li>
              <li><a href="/industry/insurance" onClick={(e) => handleIndustryClick(e, "insurance")}>Insurance</a></li>
              <li><a href="/industry/aerospace" onClick={(e) => handleIndustryClick(e, "aerospace")}>Aerospace</a></li>
              <li><a href="/industry/automobile" onClick={(e) => handleIndustryClick(e, "automobile")}>Automobile</a></li>
              <li><a href="/industry/logistics" onClick={(e) => handleIndustryClick(e, "logistics")}>Logistics</a></li>
              <li><a href="/industry/retail" onClick={(e) => handleIndustryClick(e, "retail")}>Retail & E-Commerce</a></li>
              <li><a href="/industry/manufacturing" onClick={(e) => handleIndustryClick(e, "manufacturing")}>Manufacturing</a></li>
            </ul>
          </li>

          <li className="divider">|</li>

          {/* INSIGHTS */}
          <li className="dropdown">
            <a href="#insights">
              Insights <span className="arrow">▼</span>
            </a>

            <ul className="dropdown-menu">
              <li><a href="#blog">Blogs</a></li>
              <li><a href="/case-studies" onClick={(event) => handleNavigate(event, "case-studies")}>Case Studies</a></li>
              <li><a href="/newsletter" onClick={(event) => handleNavigate(event, "newsletter")}>Newsletter</a></li>
              <li><a href="/culture" onClick={(event) => handleNavigate(event, "culture")}>Our Culture</a></li>
              <li><a href="/portfolio" onClick={(event) => handleNavigate(event, "portfolio")}>Our Prestige Portfolio</a></li>
            </ul>
          </li>

          <li className="divider">|</li>

          <li>
            <a href="#careers">Careers</a>
          </li>

          <li className="divider">|</li>

          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <a href="#contact" className="expert-btn">
          Talk to our Expert
        </a>
      </div>
    </nav>
  );
}