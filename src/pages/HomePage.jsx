import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [autoplay, setAutoplay] = useState(true); // New state for controlling autoplay
  const [selectedListing, setSelectedListing] = useState(null); // State for selected listing modal

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const listings = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "Gaborone",
      price: "P3,500/mo",
      image: "https://via.placeholder.com/400x250?text=Property+1",
      description: "2 Bed 1 Bath",
      details: "This is a modern 2-bedroom apartment located in Gaborone with excellent amenities."
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Francistown",
      price: "P6,800/mo",
      image: "https://via.placeholder.com/400x250?text=Property+2",
      description: "4 Bed 3 Bath",
      details: "A luxury villa in Francistown with a private pool and garden."
    },
    {
      id: 3,
      title: "Studio Flat",
      location: "Maun",
      price: "P2,200/mo",
      image: "https://via.placeholder.com/400x250?text=Property+3",
      description: "1 Bed 1 Bath",
      details: "A cozy studio flat perfect for a single person or couple."
    },
    {
      id: 4,
      title: "Townhouse",
      location: "Palapye",
      price: "P4,500/mo",
      image: "https://via.placeholder.com/400x250?text=Property+4",
      description: "3 Bed 2 Bath",
      details: "A spacious townhouse located in a quiet neighborhood in Palapye."
    },
    {
      id: 5,
      title: "Beach Cottage",
      location: "Kasane",
      price: "P5,000/mo",
      image: "https://via.placeholder.com/400x250?text=Property+5",
      description: "2 Bed 2 Bath",
      details: "A charming beach cottage in Kasane with breathtaking views of the water."
    },
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > listings.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listings.length - itemsPerPage : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay, itemsPerPage]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide(); // swipe left
    if (distance < -50) prevSlide(); // swipe right
  };

  const handleListingClick = (listing) => {
    setSelectedListing(listing); // Set the selected listing to show in the modal
  };

  const closeModal = () => {
    setSelectedListing(null); // Close the modal by setting the selected listing to null
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">NtloEKae Homes</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-600 text-2xl focus:outline-none"
          >
            ☰
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Home</a>
            <a href="/my-listings" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Browse Rentals</a>
            <a href="/register" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Register</a>
            <a href="/login" className="text-blue-600 border px-3 py-1 rounded border-blue-600 hover:bg-blue-50">Login</a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <a href="/" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Home</a>
            <a href="/my-listings" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Browse Rentals</a>
            <a href="/register" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Register</a>
            <a href="/login" className="block text-blue-600 border px-3 py-2 rounded border-blue-600 hover:bg-blue-50">Login</a>
          </div>
        )}
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
            <a href="/my-listings" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Browse Rentals</a>
            <a href="/register" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">Get Started</a>
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

        {/* Featured Listings Carousel */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Featured Listings
          </h2>

          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setAutoplay(false)}  // Pause autoplay on hover
            onMouseLeave={() => setAutoplay(true)}   // Resume autoplay when mouse leaves
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                width: `${(listings.length * 100) / itemsPerPage}%`,
              }}
            >
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="snap-start w-full sm:w-1/2 md:w-1/3 p-2 flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  onClick={() => handleListingClick(listing)}  // Open modal on click
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 h-full">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="rounded-xl mb-4 w-full h-48 object-cover"
                    />
                    <h3 className="text-lg font-bold text-gray-900">
                      {listing.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {listing.location} • {listing.price} • {listing.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 px-4">
              <button
                onClick={prevSlide}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                ⟨ Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Next ⟩
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for selected listing */}
      {selectedListing && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-gray-900">{selectedListing.title}</h3>
            <img
              src={selectedListing.image}
              alt={selectedListing.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <p className="text-sm text-gray-600">{selectedListing.location} • {selectedListing.price}</p>
            <p className="mt-4 text-gray-700">{selectedListing.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
