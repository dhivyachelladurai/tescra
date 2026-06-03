import "./PartnerGallery.css";

import salesforce from "../Assets/sales.png";
import mongodb from "../Assets/mongo.png";
import aws from "../Assets/aws.png";
import oracle from "../Assets/oracle.png";
import tableau from "../Assets/tableau.png";
import cloudera from "../Assets/cloudera.png";
import tibco from "../Assets/tibco.png";
import horton from "../Assets/horton.png";
import mapr from "../Assets/mapr.png";
import automation from "../Assets/automation.png";

const partners = [
  salesforce,
  mongodb,
  aws,
  oracle,
  tableau,
  cloudera,
  tibco,
  horton,
  mapr,
  automation
];

export default function PartnerGallery() {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-header">
          <span>Partner Galaxy</span>

          <h2>
            Trusted Technology Partners
            <br />
            Driving Innovation Together
          </h2>

          <p>
            Our dynamic partner ecosystem enables us to deliver
            innovative, scalable, and future-ready solutions across
            industries and technologies worldwide.
          </p>
        </div>

        <div className="partner-grid">
          {partners.map((logo, index) => (
            <div className="partner-card" key={index}>
              <img src={logo} alt="Partner" />
            </div>
          ))}
        </div>

        <div className="partner-stats">
          <div>
            <h3>50+</h3>
            <p>Technology Partners</p>
          </div>

          <div>
            <h3>15+</h3>
            <p>Domains Covered</p>
          </div>

          <div>
            <h3>200+</h3>
            <p>Solutions Delivered</p>
          </div>

          <div>
            <h3>Global</h3>
            <p>Delivery Network</p>
          </div>
        </div>

        <div className="partner-cta">
          <h3>Together We Build Better Digital Experiences</h3>
          <button>Become a Partner</button>
        </div>
      </div>
    </section>
  );
}