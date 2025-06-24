import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DatePicker from "react-datepicker";

export default function ListingDetailsPage() {
  const [reviewInput, setReviewInput] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [viewingDate, setViewingDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [rating, setRating] = useState(0);  // State for star rating

  const listing = {
    title: "Modern 2 Bedroom Apartment",
    location: "Gaborone, Block 6",
    price: "P3,500/month",
    bedrooms: 2,
    bathrooms: 1,
    description:
      "A beautiful and modern 2-bedroom apartment located in a quiet neighborhood. Close to shopping malls, schools, and public transport.",
    contact: {
      name: "Jane Doe",
      phone: "+267 71234567",
      email: "jane@example.com",
    },
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    reviews: [
      {
        user: "Kabelo",
        comment: "Great place to stay, very quiet and secure.",
        rating: 5,
      },
      {
        user: "Lorato",
        comment: "Loved the location—close to everything I needed.",
        rating: 4,
      },
    ],
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewInput.trim()) {
      setSubmittedReviews([
        ...submittedReviews,
        { user: "You", comment: reviewInput, rating: rating },
      ]);
      setReviewInput("");
      setRating(0); // Reset the rating after submission
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleRating = (index) => {
    setRating(index + 1); // Set the rating based on clicked star
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        {/* Title & Location */}
        <h2 className="text-3xl font-bold text-blue-700 mb-1">{listing.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
        <p className="text-lg font-semibold text-blue-600 mb-4">{listing.price}</p>

        {/* Image Carousel */}
        <Slider {...settings} className="mb-6 rounded-lg overflow-hidden">
          {listing.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Listing Image ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          ))}
        </Slider>

        {/* Features */}
        <ul className="mb-4 text-gray-700 space-y-1">
          <li>🛏 {listing.bedrooms} Bedrooms</li>
          <li>🛁 {listing.bathrooms} Bathroom</li>
        </ul>

        {/* Description */}
        <p className="text-gray-700 mb-6">{listing.description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Link
            to="/apply"
            className="bg-blue-600 text-white text-center px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
          >
            Apply Now
          </Link>
          <Link
            to="/chat"
            className="bg-gray-100 text-blue-600 text-center px-6 py-2 rounded border border-blue-600 hover:bg-blue-50 w-full sm:w-auto"
          >
            Chat Here
          </Link>
          <button
            onClick={() => setShowCalendar(true)}
            className="bg-green-600 text-white text-center px-6 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
          >
            Book a Viewing
          </button>
        </div>

        {/* Book a Viewing Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-xl relative">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Select a Date</h3>
              <DatePicker
                selected={viewingDate}
                onChange={(date) => setViewingDate(date)}
                minDate={new Date()}
                className="w-full border rounded px-4 py-2 mb-4"
                placeholderText="Pick a date"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowCalendar(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`Viewing booked for ${viewingDate?.toLocaleDateString()}`);
                    setShowCalendar(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="bg-gray-50 p-4 rounded border mb-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Contact Info</h3>
          <p><strong>Agent:</strong> {listing.contact.name}</p>
          <p><strong>Phone:</strong> {listing.contact.phone}</p>
          <p><strong>Email:</strong> {listing.contact.email}</p>
        </div>

        {/* Map Embed */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Location Map</h3>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=block%206%20Gaborone&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            className="rounded border"
            loading="lazy"
          />
        </div>

        {/* Reviews Section */}
        <div className="bg-gray-50 p-4 rounded border mb-4">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Reviews</h3>
          {[...listing.reviews, ...submittedReviews].map((review, idx) => (
            <div key={idx} className="mb-2">
              <p className="text-sm text-gray-800"><strong>{review.user}:</strong> {review.comment}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < review.rating ? "gold" : "gray"}
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="star"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}

          {/* Review Form */}
          <form onSubmit={handleReviewSubmit} className="mt-4">
            <textarea
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              placeholder="Write your review..."
              className="w-full border rounded p-2 mb-2"
              rows={3}
              required
            />
            {/* Star Rating */}
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < rating ? "gold" : "gray"}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  onClick={() => handleRating(i)}
                  className="cursor-pointer"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
