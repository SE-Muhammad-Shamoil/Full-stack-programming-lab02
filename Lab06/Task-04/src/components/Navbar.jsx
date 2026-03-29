import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🌐 MyApp</div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
