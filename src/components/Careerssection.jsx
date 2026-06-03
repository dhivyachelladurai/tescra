import "../Css/CarrerSection.css";

const jobs = [
  {
    title: "Software Engineer_Full Stack",
    skills:
      "C#, ASP.NET framework, .NET CORE, HTML, ANGULAR, JAVA SCRIPT, MICROSERVICES, MONGODB, DevOps CI/CD",
  },
  {
    title: "Software Engineer",
    skills:
      "C#, SQL, ASP.NET MVC, Entity Framework, .NET Core, AWS, MongoDB",
  },
  {
    title: "Software Engineer_Backend",
    skills:
      "ASP.NET, C#, .NET Framework, AZURE, OOP, SQL, Design Patterns",
  },
  {
    title: "QA Automation Engineer",
    skills:
      "SELENIUM, AUTOMATION, JAVASCRIPT, NODE, BDD",
  },
];

export default function CareersSection() {
  return (
    <section className="careers-section" id="careers">
      <div className="container">
        <div className="career-header">
          <span>Careers</span>

          <h2>
            Discover exciting career
            <br />
            opportunities and grow with us.
          </h2>

          <h3>
            Join our world-class team
            <br />
            of creators & dreamers
          </h3>

          <p>
            Our philosophy is simple – hire a team of diverse, passionate
            people and foster a culture that empowers you to do your best work.
          </p>
        </div>

        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-content">
                <h4>{job.title}</h4>

                <p>
                  <strong>Must Have :</strong> {job.skills}
                </p>
              </div>

              <button className="apply-btn">
                Easy Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}