import { Link } from "react-router-dom";

// The navigation component
function Navigation() {
  return (
    <div className="navigation-container">
      <Link to="/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}

export default Navigation;
