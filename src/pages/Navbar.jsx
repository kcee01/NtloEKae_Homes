// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Use this if using React Router

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            NtloEKae Homes
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600 text-2xl focus:outline-none"
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Home</Link>
          <Link to="/my-listings" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Browse Rentals</Link>
          <Link to="/register" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Register</Link>
          <Link to="/login" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Login</Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link to="/" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Home</Link>
          <Link to="/my-listings" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Browse Rentals</Link>
          <Link to="/register" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Register</Link>
          <Link to="/login" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Login</Link>
        </div>
      )}
  </nav>

  );
};

export default Navbar;
