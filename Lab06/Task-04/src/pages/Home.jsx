import './pages.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <span className="hero-badge">Welcome!</span>
        <h1>Build Something <span className="highlight">Amazing</span></h1>
        <p>This is your multi-page React application powered by React Router DOM. Navigate using the links above to explore all pages.</p>
        <div className="home-stats">
          <div className="stat-card"><h3>5</h3><p>Pages</p></div>
          <div className="stat-card"><h3>React</h3><p>Framework</p></div>
          <div className="stat-card"><h3>Router</h3><p>Navigation</p></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
