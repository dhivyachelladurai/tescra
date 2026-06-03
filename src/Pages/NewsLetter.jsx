import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h4 className="small-title">Our Newsletter</h4>

        <h1 className="main-title">
          Stay informed with our latest
          <br />
          insights, news, and updates.
        </h1>

        <h2 className="newsletter-title">
          Tescra Insights Newsletter
        </h2>

        <p className="newsletter-text">
          Stay ahead of the curve with Tescra Insights — our official
          newsletter that brings you the latest trends, tech updates,
          client success stories, and industry perspectives, all in one
          place.
        </p>

        <div className="content-block">
          <h3>Why Subscribe?</h3>

          <p>
            In today's fast-paced digital world, staying informed is key
            to staying competitive. Our monthly newsletter is designed
            to keep our clients, partners, and tech enthusiasts updated on:
          </p>

          <ul className="newsletter-list">
            <li>Emerging technologies in AI/ML, RPA, Cloud, and Big Data</li>
            <li>Strategic IT trends shaping the future of industries</li>
            <li>Insights from our experts and leadership team</li>
            <li>Key updates on our projects, partnerships, and events</li>
            <li>Tips for driving innovation and business transformation</li>
          </ul>
        </div>

        <div className="content-block">
          <h3>What You'll Get:</h3>

          <ul className="newsletter-list">
            <li>Expert Articles & Opinion Pieces</li>
            <li>Case Studies & Client Spotlights</li>
            <li>Tech Tips & Best Practices</li>
            <li>Event Highlights & Webinars</li>
            <li>Job Opportunities & Talent Spotlights</li>
          </ul>
        </div>

        <div className="content-block">
          <h3>Join Our Growing Community</h3>

          <p>
            Whether you're a business leader, IT professional, or just
            curious about digital innovation — there's something in
            Tescra Insights for you. Stay informed. Stay inspired.
          </p>
        </div>
      </div>
    </section>
  );
}