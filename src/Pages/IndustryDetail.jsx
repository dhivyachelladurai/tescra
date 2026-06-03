import "./IndustryDetail.css";
import { industries } from "../data/industries";

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

export default function IndustryDetail({ index, onNavigate }) {
    const industry = typeof index === "number" ? industries[index] : null;

    
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

    if (!industry) {
        return (
            <section className="industry-detail empty">
                <div className="container">
                    <p>No industry selected.</p>
                    <button onClick={() => onNavigate?.("home")}>Back to Home</button>
                </div>
            </section>
        );
    }

    return (
        <section className="industry-detail">
            <div className="container">
                <div className="industry-header">
                    <h1>{industry.title}</h1>
                    <p className="lead">{industry.desc}</p>
                </div>

                <div className="industry-content">
                    <div className="industry-left">
                        <h2>About</h2>
                        <p>{industry.long}</p>

                        <h3>Key benefits</h3>
                        <ul>
                            {industry.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>

                        <h3>Topics</h3>
                        <ol>
                            {industry.topics.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ol>

                        <div className="why-section">
                            <h3>Why Choose Tescra?</h3>
                            <p className="why-intro">
                                People depend on your technology and your technology depends on engineering,
                                so you can’t afford to settle for anything less than excellent.
                            </p>

                            <div className="why-list">
                                {[
                                    "Deep expertise in insurance technology and digital transformation",
                                    "Strong partnership with TIBCO for seamless integrations",
                                    "AI, ML, and RPA-driven automation for improved efficiency",
                                    "Data security and regulatory compliance solutions",
                                    "Scalable, future-ready insurance solutions tailored for industry needs",
                                ].map((item, index) => (
                                    <div className="why-item" key={index}>
                                        <div className="why-number">
                                            {(index + 1).toString().padStart(2, "0")}
                                        </div>
                                        <div className="why-text">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3>Conclusion</h3>
                        <p className="why-intro">
                            Tescra is leading the digital revolution in the insurance industry, empowering insurers to enhance customer experiences, streamline operations, and stay ahead of market trends. Our innovative, technology-driven solutions ensure that insurance providers can adapt to an ever-changing landscape with agility and confidence.
                            Partner with Tescra today to revolutionize your insurance business!
                        </p>

                            <div className="partner-grid">
          {partners.map((logo, index) => (
            <div className="partner-card" key={index}>
              <img src={logo} alt="Partner" />
            </div>
          ))}
        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}
