import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TenantProfile from "./pages/TenantProfile";
import LandlordProfile from "./pages/LandlordProfile";
import ListingsPage from "./pages/ListingsPages";
import MyListingsPage from "./pages/MyListingsPage";
import CreateListingPage from "./pages/CreateListingPage";
import ApplyPage from "./pages/ApplyPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tenant" element={<TenantProfile />} />
          <Route path="/landlord" element={<LandlordProfile />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/my-listings" element={<MyListingsPage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;