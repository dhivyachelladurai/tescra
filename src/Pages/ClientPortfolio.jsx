import "./ClientPortfolio.css";
import {
  Building2,
  Landmark,
  ShoppingBag,
  Cpu,
  Handshake,
  TrendingUp,
} from "lucide-react";


export default function ClientPortfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-tag">Our Client Portfolio</span>

          <h2>
            Empowering Global Enterprises
            <span> Through Trusted IT Partnerships</span>
          </h2>

          <p>
            At Tescra, we pride ourselves on being a trusted technology partner
            for organizations across industries. Over the years, we have built
            long-term relationships by consistently delivering innovation,
            reliability, and measurable business outcomes.
          </p>
        </div>

        <div className="trusted-section">
          <h3>Trusted by Industry Leaders</h3>

          <p>
            Our portfolio includes globally recognized enterprises spanning
            Automotive, Healthcare, Retail, Manufacturing, Finance, and
            Technology sectors.
          </p>
        </div>
        

        <div className="highlights-section">
          <h3>Highlights of Our Client Base</h3>

          <div className="highlight-grid">
            <div className="highlight-card">
              <Building2 size={32} />
              <h4>Automotive Giants</h4>
              <p>
                Supporting global automotive leaders with digital
                transformation, engineering solutions, and SAP integration.
              </p>
            </div>

            <div className="highlight-card">
              <Landmark size={32} />
              <h4>Financial Institutions</h4>
              <p>
                Delivering scalable IT services, analytics, automation, and
                enterprise modernization programs.
              </p>
            </div>

            <div className="highlight-card">
              <ShoppingBag size={32} />
              <h4>Retail Leaders</h4>
              <p>
                Enabling seamless customer experiences and digital commerce
                transformation initiatives.
              </p>
            </div>

            <div className="highlight-card">
              <Cpu size={32} />
              <h4>Technology Companies</h4>
              <p>
                Supporting product innovation, cloud adoption, and enterprise
                platform engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="partnership-section">
          <div className="info-card">
            <Handshake size={45} />

            <div>
              <h3>Strategic Collaborations</h3>

              <p>
                We are proud of our ongoing partnerships with industry leaders.
                Through innovation, enterprise integration, and consulting
                excellence, we help organizations scale confidently and deliver
                long-term value.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <TrendingUp size={45} />

          <h3>Delivering Value Through Every Engagement</h3>

          <p>
            Our commitment to quality, innovation, and customer success allows
            us to consistently exceed expectations and create measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}