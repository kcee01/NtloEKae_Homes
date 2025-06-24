import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [isLogin, setIsLogin] = useState(false);  // Initially set to false for Register
  const [showMessage, setShowMessage] = useState(false);
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blink effect for the switch button
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Popping message and return button every 4 seconds (similar to LoginPage)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setShowHomeButton(false);
      setTimeout(() => {
        setShowMessage(false);
        setShowHomeButton(true);
      }, 2000);  // Show the message for 2 seconds before showing the button
    }, 4000);  // Display every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (data) => {
    alert(`${isLogin ? "Login" : "Register"} submitted!`);
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      {/* Toggle Login/Register with blinking button */}
      <div className="flex gap-4 mb-6">
        {isLogin ? (
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded border font-semibold ${
              blink ? "bg-blue-600 text-white" : "bg-white text-blue-600"
            } transition`}
          >
            Register Here
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded border font-semibold ${
              blink ? "bg-blue-600 text-white" : "bg-white text-blue-600"
            } transition`}
          >
            Login Here
          </button>
        )}
      </div>

      {/* Auth Form */}
      <AuthForm onSubmit={handleSubmit} type={isLogin ? "login" : "register"} />

      {/* Popping Message */}
      {showMessage && (
        <p className="text-center mt-8 text-lg text-blue-600 font-semibold animate-pulse">
          IF YOU WANT TO RETURN HOME PRESS THE BELOW BUTTON..... THANK YOU!!!
        </p>
      )}

      {/* Return Button with Arrow */}
      {showHomeButton && (
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Return
        </button>
      )}
    </div>
  );
}
