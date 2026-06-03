import "../Css/ClientsSection.css";

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

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-heading">
          <div className="line"></div>

          <h2>
            Trusted by Fortune Companies <span>Worldwide</span>
          </h2>

          <div className="line"></div>
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
      </div>
    </section>
  );
}