import "./AwardsRecognition.css"
import {
  Award,
  Trophy,
  ShieldCheck,
  Building2,
  Star,
  Medal,
} from "lucide-react";

const awards = [
  {
    icon: <Building2 />,
    title: "#49 100 Largest Employee-Owned Companies",
    desc: "Recognized among the largest employee-owned organizations.",
  },
  {
    icon: <Award />,
    title: "#51 Engineering News Record Top 400 Contractors",
    desc: "Ranked among the nation's leading contractors.",
  },
  {
    icon: <Trophy />,
    title: "Nation's Safest Contractor",
    desc: "Awarded for outstanding safety performance and culture.",
  },
];

const honors = [
  "Ranked #41 in Fastest-Growing Private Companies",
  "Ranked #74 in Software Companies",
  "Ranked #1072 Fastest-Growing Companies",
  "Top 2008 Businesses",
  "Top Businesses Diversity Owned",
  "Top 500 Diversity Owned Businesses",
];

export default function AwardsRecognition() {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Achievements</span>
          <h2>Awards & Recognition</h2>
          <p>
            Discover our latest honors, certifications, and industry
            achievements earned through innovation, safety, and excellence.
          </p>
        </div>

        <div className="award-grid">
          {awards.map((item, index) => (
            <div className="award-card" key={index}>
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="safety-highlight">
          <div className="safety-icon">
            <ShieldCheck size={70} />
          </div>

          <div className="safety-content">
            <span className="label">Safety Excellence</span>
            <h3>Safety First</h3>

            <p>
              Safety is embedded in everything we do. Our commitment to
              protecting employees, partners, and communities has earned us
              recognition as one of the industry's safest organizations.
            </p>

            <button>Learn More</button>
          </div>
        </div>

        <div className="honors-section">
          <h3>Additional Honors</h3>

          <div className="honors-grid">
            {honors.map((honor, index) => (
              <div className="honor-card" key={index}>
                <Star size={20} />
                <span>{honor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <Medal size={42} />
          <h3>Want to Know More About Us?</h3>
          <p>
            Explore our journey, achievements, and commitment to innovation and
            excellence.
          </p>

          <button className="cta-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
}