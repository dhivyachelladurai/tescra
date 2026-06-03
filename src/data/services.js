import aiImg from "../Assets/ai.jpg";
import softwareImg from "../Assets/sd.jpg";
import automationImg from "../Assets/dataDriven.jpg";
import cloudImg from "../Assets/cloud.jpg";
import gccImg from "../Assets/global.jpg";

export const services = [
  {
    key: "ai-services",
    title: "AI and Generative AI Services",
    image: aiImg,
    desc: "Transforming businesses through intelligent automation, machine learning, predictive analytics, and generative AI solutions.",
    long: `We design and deliver AI and Generative AI solutions tailored to your business. Our offerings include proof-of-concept to production, model governance, MLOps, and domain-adapted generative systems. We focus on measurable outcomes: cost reduction, improved throughput, and better customer experiences.`,
    features: [
      "Generative AI prototypes and production models",
      "MLOps, monitoring and model governance",
      "Custom NLP, vision and multimodal solutions",
      "Explainability and bias mitigation"
    ],
    benefits: [
      "Faster time-to-market for AI features",
      "Improved decision accuracy",
      "Lower operational costs through automation"
    ],
    useCases: [
      "Customer support automation with chatbots",
      "Document understanding for claims processing",
      "Personalized content generation and recommendations"
    ],
  },
  {
    key: "software-development",
    title: "Custom Software Development & Application Management",
    image: softwareImg,
    desc: "Building scalable and secure applications tailored to your business needs using modern technologies.",
    long: `End-to-end software services: product engineering, cloud-native development, secure devops pipelines, and long-term application management. We create resilient systems with observability, testing, and iterative delivery to align with business KPIs.`,
    features: [
      "Cloud-native, microservices and API-first architectures",
      "Automated CI/CD and secure delivery pipelines",
      "Observability, testing and performance tuning",
      "SLA-driven application management"
    ],
    benefits: [
      "Robust, scalable applications",
      "Reduced downtime and faster releases",
      "Clear ownership and SLA alignment"
    ],
    useCases: [
      "Customer-facing SaaS platforms",
      "Legacy platform modernization",
      "Managed application support"
    ],
  },
  {
    key: "data-automation",
    title: "Data Driven Intelligent Automation",
    image: automationImg,
    desc: "Automating workflows and improving decision-making through AI-powered automation and analytics.",
    long: `We combine RPA, intelligent document processing, and AI decision services to streamline operations. Our approach emphasizes low-friction automation and measurable ROI with careful change management.`,
    features: [
      "Intelligent document processing and OCR",
      "End-to-end RPA with human-in-the-loop",
      "Process mining and optimisation",
      "Real-time analytics and dashboards"
    ],
    benefits: [
      "Significant manual-effort reduction",
      "Faster process cycle times",
      "Improved compliance and traceability"
    ],
    useCases: [
      "Invoice and AP automation",
      "Claims intake and triage",
      "Order-to-cash process automation"
    ],
  },
  {
    key: "cloud-engineering",
    title: "Cloud Engineering",
    image: cloudImg,
    desc: "Secure, scalable cloud solutions that accelerate digital transformation and business growth.",
    long: `Cloud engineering services including migrations, platform engineering, cost optimization, security, and SRE practices. We build platforms that enable product teams to move fast while staying secure.`,
    features: [
      "Cloud migration and platform modernization",
      "Infrastructure as code and automation",
      "Cost optimisation and governance",
      "SRE, security and compliance"
    ],
    benefits: [
      "Lower infrastructure costs",
      "Better reliability and scalability",
      "Faster developer onboarding"
    ],
    useCases: [
      "Lift-and-shift migrations",
      "Platform engineering for product teams",
      "Cloud-native container platforms"
    ],
  },
  {
    key: "global-capability-centres",
    title: "Global Capability Centres",
    image: gccImg,
    desc: "Establishing high-performing global teams that drive innovation, efficiency, and operational excellence.",
    long: `We help set up and scale Global Capability Centres (GCCs) with governance, staffing, and delivery models tuned for long-term success. Our focus is on knowledge transfer, process maturity, and continuous improvement.`,
    features: [
      "GCC setup, staffing and governance",
      "Knowledge transfer and training",
      "Process standardisation and metrics",
      "Scaled delivery and continuous improvement"
    ],
    benefits: [
      "Access to specialized talent",
      "Cost-effective delivery at scale",
      "Improved time-to-value for programs"
    ],
    useCases: [
      "Setting up delivery centers for digital engineering",
      "Scaling support and managed services",
      "Building long-term product engineering teams"
    ],
  },
];

export default services;
