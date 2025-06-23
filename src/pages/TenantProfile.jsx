//import { useState } from "react";

export default function ProfilePage() {
  // Example user profile and applications data
  const user = {
    name: "CJ Raven Louw",
    email: "CjRavenLouw@gmail.com",
    username: "CR",
  };

  const applications = [
    {
      id: 1,
      listingTitle: "2 Bedroom Apartment - Gaborone",
      status: "Pending",
    },
    {
      id: 2,
      listingTitle: "Studio in Phakalane",
      status: "Approved",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-3xl font-bold mb-1">My Profile</h2>
          <p className="text-gray-600 mb-4">View and manage your profile and applications.</p>
          <div className="space-y-2">
            <p><span className="font-semibold">Add Profile</span> {user.name}</p>
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Username:</span> {user.username}</p>
              <a
                href="/my-listings"
                className="bg-blue-500  flex items-center justify-center text-white font-bold py-2 px-4 rounded"
              >
                Personal Details
              </a>
          </div>
        </div>

        {/* Tenant Features */}
        
          <div className="bg-white p-6 rounded-2xl shadow mb-8">
            <h3 className="text-2xl font-semibold mb-2">Tenant Dashboard</h3>
            <p className="text-gray-600 mb-4">Welcome, Tenant! You can browse listings and track your applications.</p>
            <a
              href="/my-listings"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Browse Listings
            </a>
          </div>
        

        {/* Applications List */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-4">My Applications</h3>
          {applications.length === 0 ? (
            <p className="text-gray-500">You haven't applied for any listings yet.</p>
          ) : (
            <ul className="space-y-4">
              {applications.map((app) => (
                <li
                  key={app.id}
                  className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{app.listingTitle}</p>
                    <p className="text-sm text-gray-500">Status: {app.status}</p>
                  </div>
                  <a
                    href={`/my-listings`}//${app.id}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Listing
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
