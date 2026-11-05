const events = [
  {
    title: "ITC Talks",
    category: "Conference",
    description: "Discover technology topics and learn from speakers."
  },
  {
    title: "Web Development Workshop",
    category: "Workshop",
    description: "Explore the fundamentals of modern web development."
  },
  {
    title: "AI & Innovation",
    category: "Technology",
    description: "Discover artificial intelligence and its applications."
  },
  {
    title: "Cybersecurity Basics",
    category: "Workshop",
    description: "Learn about cybersecurity and digital safety."
  }
];

export default function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <p className="hero-label">WHAT'S HAPPENING AT ITC?</p>
        <h1>Our <span>Events</span></h1>
        <p>Discover our workshops, talks and activities.</p>
      </section>

      <section className="events-section">
        <div className="card-grid">
          {events.map((event, index) => (
            <article className="event-card" key={index}>
              <span className="event-category">{event.category}</span>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <span className="coming-soon">Coming Soon</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}