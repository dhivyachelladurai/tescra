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

export default function AboutUs() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Us</h1>

          <h1>
            We are a leading digital
            transformation powerhouse
          </h1>

          <p>
            Seamlessly integrating expertise and innovation to drive
            business growth and maximize efficiency.
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
        <div className="about-content">
          <p>
            Tescra is a global technology services company delivering
            AI, cloud, digital engineering, and enterprise solutions.
          </p>

          <p>
            We help enterprises accelerate innovation, optimize
            operations, and build scalable digital experiences.
          </p>

          <p>
            Through strategic partnerships and industry expertise,
            we empower organizations worldwide.
          </p>
        </div>
        <div className="facts-section">
          <h2>Tescra Facts</h2>

          <div className="facts-grid">
            {stats.map((item) => (
              <div className="fact-card" key={item.label}>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="two-column">
          <div>
            <h2>Our Mission</h2>

            <ul>
              <li>Deliver exceptional digital solutions.</li>
              <li>Accelerate customer transformation.</li>
              <li>Enable innovation through technology.</li>
              <li>Create measurable business outcomes.</li>
            </ul>
          </div>

          <div>
            <h2>Our DNA</h2>

            <ul>
              <li>Customer-centric mindset.</li>
              <li>Continuous innovation.</li>
              <li>Collaborative culture.</li>
              <li>Operational excellence.</li>
            </ul>
          </div>
        </div>
        <div className="values-section">
          <h2>Our Values</h2>

          <ul>
            <li>Integrity in every engagement.</li>
            <li>Innovation with purpose.</li>
            <li>Commitment to customer success.</li>
            <li>Diversity and inclusion.</li>
            <li>Accountability and ownership.</li>
          </ul>
        </div>
        <div className="about-cta">
          <h2>Know More About Us</h2>

          <p>
            Ready to transform your business with digital solutions?
          </p>

          <button>Get In Touch</button>
        </div>

      </div>
    </section>
  );
}