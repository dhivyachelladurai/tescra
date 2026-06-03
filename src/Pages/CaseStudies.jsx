import "./AboutUs.css";

import lg from "../Assets/LG.png";
import at from "../Assets/AT&T.png";
import adidas from "../Assets/adidas.png";
import constellation from "../Assets/constellation.png";
import pepsico from "../Assets/pepsico.png";
import forvia from "../Assets/forvia.png";
import iron from "../Assets/iron.png";
import adobe from "../Assets/adobe.png";
import amdocs from "../Assets/amdocs.png";
import lowes from "../Assets/lowes.png";

const stats = [
  { number: "18+", label: "Years Experience" },
  { number: "600+", label: "Employees" },
  { number: "500+", label: "Projects" },
  { number: "15+", label: "Global Offices" },
];

const clients = [
  { name: "LG", logo: lg },
  { name: "AT&T", logo: at },
  { name: "Adidas", logo: adidas },
  { name: "Constellation", logo: constellation },
  { name: "PepsiCo", logo: pepsico },
  { name: "Forvia", logo: forvia },
  { name: "Iron", logo: iron },
  { name: "Adobe", logo: adobe },
  { name: "Amdocs", logo: amdocs },
  { name: "Lowes", logo: lowes },
];

export default function CaseStudies() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>Case Studies</h1>

          <h2>
            Driving Innovation, Delivering Results
          </h2>

          <p>
            At Tescra, we believe in turning complex business challenges into opportunities for growth through innovation, technology, and strategic execution. Our case studies showcase the real-world impact of our solutions across a diverse range of industries—from enterprise application integration and digital transformation to AI/ML, Big Data analytics, and IT staffing services.
            Each case study highlights how we partner with clients to understand their unique needs, tailor our approach, and deliver measurable outcomes. Whether it’s optimizing operations, accelerating time-to-market, or enhancing workforce efficiency, Tescra’s solutions are built to scale and succeed.
            Explore our case studies to discover how we empower organizations to thrive in today’s dynamic business landscape
          </p>

          <div className="trusted">
            Trusted by Fortune Companies Worldwide
          </div>
        </div>
        <div className="clients-slider">
          <div className="clients-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-item">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="about-cta">
          <h2>Know More About Us</h2>

          <p>
         Ready to transform your business with AI? Contact us today to explore customized AI solutions that drive innovation and efficiency.
          </p>

          <button>Get In Touch</button>
        </div>

      </div>
    </section>
  );
}