import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const TotalListings = () => {
  const listings = [
    { id: 1, title: "Sunny Apartment in LA", price: "$1,200", date: "2025-06-29" },
    { id: 2, title: "Modern Loft NYC", price: "$2,500", date: "2025-06-28" },
    { id: 3, title: "Cabin in Colorado", price: "$950", date: "2025-06-27" },
    { id: 4, title: "Beach House in Miami", price: "$3,100", date: "2025-06-25" },
    // Add more listings here
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-1">Total Listings</h1>
        <p className="text-lg text-gray-500">View and manage all the listings on the platform.</p>
      </header>

      {/* Listings Table */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Listings</h2>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-3 border">Title</th>
              <th className="text-left py-2 px-3 border">Price</th>
              <th className="text-left py-2 px-3 border">Date</th>
              <th className="text-left py-2 px-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-2 px-3 border">{item.title}</td>
                <td className="py-2 px-3 border">{item.price}</td>
                <td className="py-2 px-3 border">{item.date}</td>
                <td className="py-2 px-3 border">
                  {/* Edit and Delete Buttons */}
                  <Link
                    to={`/admin/edit-listing/${item.id}`}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => alert("Delete listing")}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to Dashboard Button */}
      <div className="text-right">
        <Link
          to="/admin"
          className="inline-block bg-gray-800 text-white text-sm px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default TotalListings;
