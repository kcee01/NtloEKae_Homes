import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TenantProfile from "./pages/TenantProfile";
import LandlordProfile from "./pages/LandlordProfile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6 text-center">
          <Link to="/login" className="text-blue-600 mx-3">Login</Link>
          <Link to="/register" className="text-blue-600 mx-3">Register</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tenant" element={<TenantProfile />} />
          <Route path="/landlord" element={<LandlordProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;