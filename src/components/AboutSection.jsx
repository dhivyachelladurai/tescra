import "../Css/AboutSection.css";
import aboutImg from "../Assets/about.jpg";

export default function AboutSection({ onNavigate }) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-wrapper">

          <div className="about-image">
            <img src={aboutImg} alt="About Tescra" />
          </div>

          <div className="about-content">
            <p>
              From AI-driven automation to cloud solutions, enterprise
              consulting, and IT services, we bring expertise and innovation
              together to accelerate growth and efficiency. Our team of skilled
              professionals works closely with clients to craft tailored
              solutions that align with their goals and industry demands.
            </p>

            <a  className="about-btn" onClick={(event) => onNavigate?.("about")}>
              → About us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}