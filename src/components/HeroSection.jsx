import "../Css/HeroSection.css";
import heroVideo from "../Assets/home-video.mp4";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Software Advisory Services</h1>

        <p>
          At Tescra, we drive digital transformation through cutting-edge
          technology and innovative solutions. With a passion for excellence
          and a commitment to delivering value, we empower businesses to stay
          ahead in the ever-evolving digital landscape.
        </p>

        <a  className="hero-btn" onClick={(event) => onNavigate?.("about")}>
          → About us
        </a>
      </div>
    </section>
  );
}