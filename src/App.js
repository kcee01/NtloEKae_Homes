import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TenantProfile from "./pages/TenantProfile";
import LandlordProfile from "./pages/LandlordProfile";
import ListingsPage from "./pages/ListingsPages";
import MyListingsPage from "./pages/BrowsingPage";
import CreateListingPage from "./pages/CreateListingPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import LayoutWithNavbar from "./components/LayoutWithNavbar";
import FloatingContactIcon from "./components/FloatingContactIcon";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6 relative">
        {/* Global Floating Icon */}
        <FloatingContactIcon />

        <Routes>
          {/* With Navbar */}
          <Route
            path="/"
            element={
              <LayoutWithNavbar>
                <HomePage />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/tenant"
            element={
              <LayoutWithNavbar>
                <TenantProfile />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/landlord"
            element={
              <LayoutWithNavbar>
                <LandlordProfile />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/listings"
            element={
              <LayoutWithNavbar>
                <ListingsPage />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/create-listing"
            element={
              <LayoutWithNavbar>
                <CreateListingPage />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/apply"
            element={
              <LayoutWithNavbar>
                <ApplyPage />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/my-listings"
            element={
              <LayoutWithNavbar>
                <MyListingsPage />
              </LayoutWithNavbar>
            }
          />
          <Route
            path="/contact"
            element={<ContactPage />} // Note lowercase path
          />

          {/* Without Navbar */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
