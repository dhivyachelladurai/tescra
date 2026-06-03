import "./ServiceDetail.css";
import { services } from "../data/services";

export default function ServiceDetail({ index, onNavigate }) {
  const service = typeof index === "number" ? services[index] : null;

  if (!service) {
    return (
      <section className="service-detail empty">
        <div className="container">
          <p>No service selected.</p>
          <button onClick={() => onNavigate?.("home")}>Back to Home</button>
        </div>
      </section>
    );
  }

  return (
    <section className="service-detail">
      <div className="container detail-wrapper">
        <div className="detail-media">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="detail-content">
          <h1>{service.title}</h1>
          <p className="short-desc">{service.desc}</p>
          <p className="long-desc">{service.long}</p>

          {service.features && (
            <div className="service-features">
              <h3>Key features</h3>
              <ul>
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {service.benefits && (
            <div className="service-benefits">
              <h3>Business benefits</h3>
              <ul>
                {service.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {service.useCases && (
            <div className="service-usecases">
              <h3>Use cases</h3>
              <ul>
                {service.useCases.map((u, i) => (
                  <li key={i}>{u}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
