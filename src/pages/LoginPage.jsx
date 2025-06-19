import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const response = await fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: data.username, password: data.password }),
    });

    const result = await response.json();

    if (response.ok) {
      localStorage.setItem("access", result.access);

      // Fetch profile to get role
      const profileRes = await fetch("http://localhost:8000/api/auth/profile/", {
        headers: { Authorization: `Bearer ${result.access}` },
      });
      const profileData = await profileRes.json();

      if (profileData.role === "landlord") {
        navigate("/landlord");
      } else {
        navigate("/tenant");
      }
    } else {
      alert("Login failed!");
    }
  };

  return <AuthForm onSubmit={handleLogin} type="login" />;
}