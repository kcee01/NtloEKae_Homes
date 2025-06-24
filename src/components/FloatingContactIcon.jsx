import { useState } from "react";
import ContactPage from "../pages/ContactPage";

export default function FloatingContactIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50 animate-pulse hover:scale-110 duration-200"
        aria-label="Contact Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M9 14h6M9 10h6"
          />
        </svg>
      </button>

      {isOpen && <ContactPage onClose={() => setIsOpen(false)} />}
    </>
  );
}
