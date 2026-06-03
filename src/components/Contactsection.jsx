import "../Css/ContactSection.css";

const offices = [
  {
    country: "United States Of America",
    title: "Headquarters",
    address:
      "3130 Crow Canyon Pl, Suite #205, San Ramon, CA 94583",
  },
  {
    country: "Canada",
    address:
      "3601 Highway #7 East Suite 400, Markham, Ontario L3R 0M3 Canada",
  },
  {
    country: "United Kingdom",
    address:
      "1 Bell Street Maidenhead, Berkshire SL6 1BU, United Kingdom",
  },
  {
    country: "India",
    address:
      "The Atlantic Center, #2007 3rd Floor, 100 Feet Rd, HAL 2nd Stage, Bengaluru, Karnataka 560008",
  },
];

export default function ContactSection() {




  return (
  <section className="contact-section" id="contact">
  <div className="container">
    <div className="contact-header">
      <span>Contact us</span>
      <h2>Leave us your info</h2>
      <p>and we will get back to you.</p>
    </div>

    {/* Address Row */}
    <div className="address-row">
      {offices.map((office, index) => (
        <div className="address-item" key={index}>
          <h3>{office.country}</h3>

          {office.title && (
            <h4>{office.title}</h4>
          )}

          <p>{office.address}</p>
        </div>
      ))}
    </div>

    {/* Form */}
    <div className="contact-form-wrapper">
      <form>
        <div className="form-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Company Name" />
        </div>

        <textarea
          rows="6"
          placeholder="Tell us about your project..."
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
  );
}