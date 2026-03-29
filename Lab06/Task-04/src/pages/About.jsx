import './pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>About <span className="highlight">Us</span></h1>
        <p className="page-subtitle">Learn more about what we do</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">🚀</div>
          <h3>Our Mission</h3>
          <p>We aim to build cutting-edge web applications using modern React tooling and best practices.</p>
        </div>
        <div className="about-card">
          <div className="about-icon">⚛️</div>
          <h3>Our Stack</h3>
          <p>Built with React, Vite, and React Router DOM — a fast, modern, and production-ready combo.</p>
        </div>
        <div className="about-card">
          <div className="about-icon">🎓</div>
          <h3>Our Goal</h3>
          <p>This application was built as part of a Full Stack Development lab to demonstrate React routing concepts.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
