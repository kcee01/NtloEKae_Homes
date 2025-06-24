// ListingDetailsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListingDetailsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const listing = {
    title: "Modern 2 Bedroom Apartment",
    location: "Gaborone, Block 6",
    price: "P3,500/month",
    bedrooms: 2,
    bathrooms: 1,
    description:
      "A beautiful and modern 2-bedroom apartment located in a quiet neighborhood. Close to shopping malls, schools, and public transport.",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
  };

  return (
    <>


      {/* Listing Details */}
      <div className="min-h-screen bg-gray-50 pl-4 pt-2">
        <h2 className="text-3xl font-bold mb-2">{listing.title}</h2>
        <p className="text-gray-600 mb-1">{listing.location}</p>
        <p className="text-lg text-blue-600 font-semibold mb-4">
          {listing.price}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {listing.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Listing Image ${i + 1}`}
              className="rounded-lg shadow-sm"
            />
          ))}
        </div>

        <ul className="mb-4 text-sm text-gray-700">
          <li>🛏 {listing.bedrooms} Bedrooms</li>
          <li>🛁 {listing.bathrooms} Bathroom</li>
        </ul>

        <p className="text-gray-700 mb-8">{listing.description}</p>

        <Link
          to="/apply"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </div>
    </>
  );
}
