// src/pages/RegisterPage.jsx
import AuthForm from "../components/AuthForm";

export default function RegisterPage() {
  const handleRegister = async (data) => {
    const response = await fetch("http://localhost:8000/api/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Registration successful!");
    } else {
      alert("Registration failed!");
    }
  };

  return <AuthForm onSubmit={handleRegister} type="register" />;
}
