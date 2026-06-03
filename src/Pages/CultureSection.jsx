import "./CultureSection.css";
import {
  Users,
  Handshake,
  Lightbulb,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  MessageSquare,
  Target,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

const cultureItems = [
  {
    icon: <Users size={28} />,
    title: "A People-First Approach",
    description:
      "At the heart of Tescra's culture are our talented and respected professionals. We encourage collaboration, learning, and personal growth to create meaningful impact.",
  },
  {
    icon: <Handshake size={28} />,
    title: "Client-Centric Mindset",
    description:
      "We build lasting partnerships through transparency, accountability, and exceptional service. Our success is measured by client success.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Culture of Innovation",
    description:
      "Innovation drives everything we do. We embrace emerging technologies and creative problem-solving to deliver greater value.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Ethics and Integrity",
    description:
      "We operate with the highest standards of professionalism, honesty, and accountability in every engagement.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Continuous Learning",
    description:
      "Through ongoing learning programs and skill development initiatives, we empower our teams to grow and excel.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Diversity & Inclusion",
    description:
      "We celebrate diverse perspectives and create an inclusive environment where everyone feels valued.",
  },
];

const clientValues = [
  {
    icon: <MessageSquare size={26} />,
    text: "We're proactive in communication and problem solving.",
  },
  {
    icon: <Target size={26} />,
    text: "We take ownership of outcomes and deliver measurable results.",
  },
  {
    icon: <Briefcase size={26} />,
    text: "We collaborate closely and execute with excellence.",
  },
  {
    icon: <HeartHandshake size={26} />,
    text: "We uphold partnership, trust, and mutual success.",
  },
];

export default function CultureSection() {
  return (
    <section className="culture-section">
      <div className="container">
        <div className="culture-header">
          <span className="section-label">Tescra's Culture</span>

          <h2>
            Built on Trust,
            <span> Driven by Innovation</span>
          </h2>

          <p>
            At Tescra, our culture is the foundation of our success. As a
            global services and consulting company, we foster collaboration,
            innovation, integrity, and continuous growth.
          </p>

          <p>
            We are committed to creating an environment where people thrive,
            clients succeed, and ideas become impactful solutions.
          </p>
        </div>

        <div className="culture-grid">
          {cultureItems.map((item, index) => (
            <div className="culture-card" key={index}>
              <div className="card-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="client-section">
          <h2>Why Culture Matters to Our Clients</h2>

          <p className="client-subtitle">
            For our clients, our culture directly impacts the way we work.
          </p>

          <div className="client-grid">
            {clientValues.map((item, index) => (
              <div className="client-card" key={index}>
                <div className="card-icon">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}