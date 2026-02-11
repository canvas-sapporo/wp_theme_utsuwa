import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full min-w-0 bg-light h-20 z-20">
      <nav className="container mx-auto my-5 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Utsuwa Logo" className="h-10" />
          <span className="text-logo font-bold">Utsuwa</span>
        </Link>
        <div className="flex gap-8 text-cta">
          <Link to="/" className={isActive("/") ? "underline" : ""}>
            Home
          </Link>
          <Link to="/art" className={isActive("/art") ? "underline" : ""}>
            Art
          </Link>
          <Link
            to="/company"
            className={isActive("/company") ? "underline" : ""}
          >
            Company
          </Link>
          <Link to="/news" className={isActive("/news") ? "underline" : ""}>
            News
          </Link>
          <Link
            to="/pricing"
            className={isActive("/pricing") ? "underline" : ""}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact") ? "underline" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
