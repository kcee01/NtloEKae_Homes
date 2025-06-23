import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">NtloEKae Homes</h1>
          <div className="space-x-4">
            <a href="/" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">
              Home
            </a>

            <a href="/my-listings" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">
              Browse Rentals
            </a>

            <a href="/register" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">
              Register
            </a>

            <a href="/login" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Next <span className="text-blue-600">Home</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your trusted platform to find and manage rental properties in Botswana.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/my-listings"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Browse Rentals
            </a>
            <a
              href="/register"
              className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Search Filter */}
        <section className="mb-10">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Search by city, neighborhood or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 w-full p-2 border border-gray-300 rounded-md"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Search
            </button>
          </div>
        </section>

        {/* Featured Listings */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
              >
                <div className="bg-gray-200 h-40 rounded mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Sample Property</h3>
                <p className="text-sm text-gray-500">Location • P3,500/mo • 2 Bed 1 Bath</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
