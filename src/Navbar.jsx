import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav>
      <h1>Component Showcase</h1>
      <ul>
        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
}