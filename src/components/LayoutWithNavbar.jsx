// components/LayoutWithNavbar.jsx
import Navbar from "../pages/Navbar";

const LayoutWithNavbar = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default LayoutWithNavbar;
