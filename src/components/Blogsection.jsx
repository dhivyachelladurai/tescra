import "../Css/BlogSection.css";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    category: "BLOGS",
    date: "February 20, 2025",
    title:
      "Unlocking Efficiency: The Power of Data-Driven Intelligent Automation in Modern Business",
    excerpt:
      "In today's fast-paced digital landscape, businesses are constantly seeking innovative ways to enhance efficiency and remain competitive. One of the most transformative solutions is data-driven intelligent automation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    category: "BLOGS",
    date: "February 20, 2025",
    title:
      "Custom Software Development & Application Management: Tailoring Solutions for Your Unique Business Needs",
    excerpt:
      "In today's fast-paced digital landscape, businesses must leverage technology to remain competitive. While off-the-shelf software solutions may offer convenience, they often lack the flexibility and scalability necessary.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    category: "BLOGS",
    date: "February 20, 2025",
    title:
      "The Future of Innovation: Exploring the Impact of AI and Generative AI Services",
    excerpt:
      "Artificial Intelligence has been a transformative force across industries, shaping the way businesses operate, individuals interact with technology, and societies evolve.",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="blog-heading">
          Latest News From <span>Tescra</span>
        </h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-image"
                />

                <div className="blog-badge">{blog.category}</div>
              </div>

              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>

                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>

              <div className="blog-footer">
                <span>{blog.date}</span>
                <span>•</span>
                <span>No Comments</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}