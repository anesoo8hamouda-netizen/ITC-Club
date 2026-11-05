
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="tag">UNIVERSITY OF BLIDA 1</div>

          <h1>
            THINK.<br />
            CREATE.<br />
            <span>INNOVATE.</span>
          </h1>

          <p>
            Welcome to ITC Club, a community where technology
            meets creativity. We bring together curious minds
            to learn, collaborate, share knowledge and build
            the future together.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="join-btn">Discover ITC</a>
            <a href="#join" className="outline-btn">
              Become a Member ↗
            </a>
          </div>
        </div>

        <div className="hero-decoration">ITC</div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-visual"></div>

        <div className="about-text">
          <div className="section-label">WHO WE ARE</div>

          <h2 className="section-title">
            More Than A Club.<br />
            A <span className="red">Community.</span>
          </h2>

          <p>
            ITC Club is a student community at the University
            of Blida 1, bringing together technology enthusiasts
            who share a passion for innovation, creativity
            and continuous learning.
          </p>

          <p>
            Whether you are a beginner or already experienced,
            ITC gives you the opportunity to explore new fields,
            exchange ideas, develop your skills and work
            alongside motivated students.
          </p>

          <p>
            Our philosophy is simple:
            <strong>Sharing Is Caring.</strong>
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="features" id="activities">
        <div className="section-label">WHAT WE DO</div>

        <h2 className="section-title">Explore. Learn. Build.</h2>

        <p className="section-description">
          Discover different technological fields, develop
          your abilities and turn your curiosity into knowledge.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Programming</h3>
            <p>
              Explore coding, web development and software
              engineering through learning and collaboration.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>
              Discover AI, machine learning and the
              technologies shaping tomorrow.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🔐</div>
            <h3>Cybersecurity</h3>
            <p>
              Understand digital security and discover
              how to protect information and systems.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🎤</div>
            <h3>ITC Talks</h3>
            <p>
              Attend conferences and meet professionals
              to exchange ideas and discover new perspectives.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🧑‍💻</div>
            <h3>Workshops</h3>
            <p>
              Learn through practical experiences,
              collaborative projects and technical workshops.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🎙️</div>
            <h3>ITCast</h3>
            <p>
              Explore technology and ideas through
              conversations and podcast-style content.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values" id="values">
        <div className="section-label">OUR IDENTITY</div>

        <h2 className="section-title">What Makes Us Different?</h2>

        <p className="section-description">
          We believe that growth happens when people
          learn together and share what they know.
        </p>

        <div className="values-grid">
          <div className="value">
            <h3>01. Collaboration</h3>
            <p>Working together to create meaningful ideas.</p>
          </div>

          <div className="value">
            <h3>02. Innovation</h3>
            <p>Exploring new technologies and creative solutions.</p>
          </div>

          <div className="value">
            <h3>03. Knowledge</h3>
            <p>Sharing experiences and learning from each other.</p>
          </div>

          <div className="value">
            <h3>04. Growth</h3>
            <p>Building technical and personal skills together.</p>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="join" id="join">
        <div className="section-label">YOUR JOURNEY STARTS HERE</div>

        <h2 className="section-title">
          Ready to Be Part of <span className="red">ITC?</span>
        </h2>

        <p className="section-description">
          You don't need to know everything to get started.
          All you need is curiosity, motivation and the
          willingness to learn and share.
          Join a community that grows together.
        </p>

        <a href="mailto:itcsupport@gmail.com" className="join-btn">
          Join Our Community ↗
        </a>
      </section>

    </>
  );
}

export default Home;
