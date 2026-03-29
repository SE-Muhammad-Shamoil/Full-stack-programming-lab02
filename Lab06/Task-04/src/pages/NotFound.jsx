import { Link } from 'react-router-dom';
import './pages.css';

function NotFound() {
  return (
    <div className="page notfound-page">
      <div className="notfound-content">
        <div className="notfound-code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        <Link to="/" className="cta-btn">← Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
