import "../Css/ServicesSection.css";
import { services } from "../data/services";

export default function ServicesSection({ onNavigate, onSelect }) {
  return (
    <section className="services-section" id="services">
      <div className="container">

        <div className="services-header">
          <div className="title-row">
            <span className="orange-line"></span>
            <h2>Our Services</h2>
          </div>

          <p>
            At Tescra, we empower organizations with AI-driven innovation,
            automation, and digital transformation. Our expert solutions are
            designed to enhance efficiency, accelerate growth, and future-proof
            businesses in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.key || index}
              className={`service-card ${index < 3 ? "small-card" : "large-card"}`}>
              <img src={service.image} alt={service.title} />

              <div className="service-overlay">
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <button
                    className="know-more"
                    onClick={() => {
                      onSelect?.(index);
                      onNavigate?.("service");
                        window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
                    }}
                  >
                    Know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}