import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex gap-8">
        <Link to="/" className="font-bold">Home</Link>
        <Link to="/art">Art</Link>
        <Link to="/company">Company</Link>
        <Link to="/news">News</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;