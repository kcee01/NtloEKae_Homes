
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const handleLogin = async (data) => {
    const response = await fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: data.username, password: data.password }),
    });

    const result = await response.json();
    if (response.ok) {
      localStorage.setItem("access", result.access);
      alert("Login successful!");
    } else {
      alert("Login failed!");
    }
  };

  return <AuthForm onSubmit={handleLogin} type="login" />;
}
