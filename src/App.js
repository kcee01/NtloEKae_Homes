import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TenantProfile from "./pages/TenantProfile";
import LandlordProfile from "./pages/LandlordProfile";
import ListingsPage from "./pages/ListingsPages";
import MyListingsPage from "./pages/MyListingsPage";
import CreateListingPage from "./pages/CreateListingPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6 text-center">
          <Link to="/login" className="text-blue-600 mx-3">Login</Link>
          <Link to="/register" className="text-blue-600 mx-3">Register</Link>
          <Link to="/listings" className="text-blue-600">Browse Rentals</Link>
          <Link to="/my-listings" className="text-blue-600">My Listings</Link>
          <Link to="/create-listing" className="text-blue-600">New Listing</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tenant" element={<TenantProfile />} />
          <Route path="/landlord" element={<LandlordProfile />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/my-listings" element={<MyListingsPage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;