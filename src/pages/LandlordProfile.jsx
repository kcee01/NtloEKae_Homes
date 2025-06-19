import { Link } from "react-router-dom";

export default function LandlordProfile() {
  const listings = [
    {
      id: 1,
      title: "Modern 2 Bedroom Apartment",
      location: "Gaborone, Block 6",
      status: "Active",
    },
    {
      id: 2,
      title: "Studio Flat",
      location: "Mogoditshane",
      status: "Pending Approval",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-2">Landlord Profile</h1>
          <p className="text-gray-600">
            Welcome, Landlord! You can manage your listings and review tenant applications.
          </p>
        </div>

        {/* Listings Management Section */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">My Listings</h2>
            <Link
              to="/new-listing"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Add New Listing
            </Link>
          </div>

          {listings.length === 0 ? (
            <p className="text-gray-500">You have no listings yet.</p>
          ) : (
            <ul className="space-y-4">
              {listings.map((listing) => (
                <li
                  key={listing.id}
                  className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-lg">{listing.title}</p>
                    <p className="text-sm text-gray-500">{listing.location}</p>
                    <p className="text-sm text-green-600">Status: {listing.status}</p>
                  </div>
                  <div className="space-x-2">
                    <Link
                      to={`/listing/${listing.id}`}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-listing/${listing.id}`}
                      className="text-yellow-600 text-sm hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Applications Placeholder */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Tenant Applications</h2>
          <p className="text-gray-500">
            Here you’ll be able to view and manage applications submitted to your listings.
          </p>
          {/* Placeholder for future functionality */}
          <div className="mt-4 text-sm italic text-gray-400">Coming soon...</div>
        </div>
      </div>
    </div>
  );
}
