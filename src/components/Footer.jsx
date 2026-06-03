import "../Css/Footer.css";
import logo from "../Assets/cropped-logo.png";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { services } from "../data/services";

export default function Footer({ onNavigate, onSelect, onSelectIndustry }) {
  const handleNavigate = (event, pageKey) => {
    event.preventDefault();
    onNavigate?.(pageKey);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleService = (event, serviceKey) => {
    event.preventDefault();
    const idx = services.findIndex((s) => s.key === serviceKey);
    if (idx >= 0) onSelect?.(idx);
    onNavigate?.("service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top */}
        <div className="footer-top">
          <div>
            <h4>Quick Links</h4>
            <a href="#about" onClick={(event) => handleNavigate(event, "about")}>
              About us
            </a>
            <a href="#partner" onClick={(event) => handleNavigate(event, "partner")}>
              Partner Galaxy
            </a>
            <a href="#awards" onClick={(event) => handleNavigate(event, "awards")}>
              Awards & Recognition
            </a>
          </div>

          <div>
            <h4>Industries</h4>
            <a href="#banking" onClick={(event) => onSelectIndustry?.("banking") || handleNavigate(event, "industry")}>
              Banking and Financial Services
            </a>
            <a href="#insurance" onClick={(event) => onSelectIndustry?.("insurance") || handleNavigate(event, "industry")}>
              Insurance
            </a>
            <a href="#aerospace" onClick={(event) => onSelectIndustry?.("aerospace") || handleNavigate(event, "industry")}>
              Aerospace
            </a>
            <a href="#automobile" onClick={(event) => onSelectIndustry?.("automobile") || handleNavigate(event, "industry")}>
              Automobile
            </a>
            <a href="#logistics" onClick={(event) => onSelectIndustry?.("logistics") || handleNavigate(event, "industry")}>
              Logistics
            </a>
            <a href="#retail" onClick={(event) => onSelectIndustry?.("retail") || handleNavigate(event, "industry")}>
              Retail & E-commerce
            </a>
            <a href="#manufacturing" onClick={(event) => onSelectIndustry?.("manufacturing") || handleNavigate(event, "industry")}>
              Manufacturing
            </a>
          </div>

          <div>
            <h4>Insights</h4>
            <a href="#blog" onClick={(event) => {
              event.preventDefault();
              document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Blogs
            </a>
            <a href="#case-studies" onClick={(event) => handleNavigate(event, "case-studies")}>
              Case Studies
            </a>
            <a href="#newsletter" onClick={(event) => handleNavigate(event, "newsletter")}>
              Newsletter
            </a>
            <a href="#culture" onClick={(event) => handleNavigate(event, "culture")}>
              Our Culture
            </a>
            <a href="#portfolio" onClick={(event) => handleNavigate(event, "portfolio")}>
              Our Prestige Portfolio
            </a>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#ai-services" onClick={(event) => handleService(event, "ai-services")}>
              AI and Generative AI Services
            </a>
            <a href="#software-development" onClick={(event) => handleService(event, "software-development")}>
              Custom Software Development
            </a>
            <a href="#application-management" onClick={(event) => handleService(event, "application-management")}>
              Application Management
            </a>
            <a href="#data-automation" onClick={(event) => handleService(event, "data-automation")}>
              Data Driven Intelligent Automation
            </a>
            <a href="#cloud-engineering" onClick={(event) => handleService(event, "cloud-engineering")}>
              Cloud Engineering
            </a>
            <a href="#global-capability-centres" onClick={(event) => handleService(event, "global-capability-centres")}>
              Global Capability Centres
            </a>
          </div>

          <div>
            <h4>Reach us</h4>

            <a href="mailto:dm@tescra.com">
              ✉ dm@tescra.com
            </a>

            <a href="mailto:info@tescra.com">
              ✉ info@tescra.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-left">
            <img src={logo} alt="Tescra" />

            <span>
              © 2025 – All Rights Reserved | Tescra
            </span>
          </div>


<div className="footer-social">
  <a
    href="https://www.instagram.com/tescrasoftware/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/company/tescra"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://x.com/tescrasoftware"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    <FaXTwitter />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}