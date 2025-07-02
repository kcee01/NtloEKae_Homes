    import { useState } from "react";
    // If you're using React Router, uncomment this line:
    import { Link } from "react-router-dom";

    export default function AdminPage() {
    const [showModal, setShowModal] = useState(false);
    const [viewMode, setViewMode] = useState("table");

    const listings = [
        { id: 1, title: "Sunny Apartment in LA", price: "$1,200", date: "2025-06-29" },
        { id: 2, title: "Modern Loft NYC", price: "$2,500", date: "2025-06-28" },
        { id: 3, title: "Cabin in Colorado", price: "$950", date: "2025-06-27" },
        { id: 4, title: "Beach House in Miami", price: "$3,100", date: "2025-06-25" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-1">Admin Dashboard</h1>
            <p className="text-lg text-gray-500">Monitor and manage listings, users, and reports.</p>
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div
            onClick={() => setShowModal(true)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
            <h3 className="text-gray-600 font-medium">Total Listings</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">245</p>
            <p className="text-sm text-blue-500 mt-1">View Details</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-gray-600 font-medium">Registered Users</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">1,432</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-gray-600 font-medium">Reports This Week</h3>
            <p className="text-4xl font-bold text-red-500 mt-2">12</p>
            </div>
        </section>

        {/* Activity Panels */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Listings */}
            <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Recent Listings</h2>
            <ul className="divide-y divide-gray-100">
                {listings.slice(0, 3).map((item, i) => (
                <li key={i} className="flex justify-between py-3 hover:bg-gray-50 px-2 rounded-lg transition">
                    <span className="text-gray-700">{item.title}</span>
                    <span className="text-sm text-gray-400">2h ago</span>
                </li>
                ))}
            </ul>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🚩 Recent Reports</h2>
            <ul className="divide-y divide-gray-100">
                {[
                { issue: "Spam listing reported", time: "10m ago" },
                { issue: "User misconduct", time: "3h ago" },
                { issue: "Inaccurate info", time: "7h ago" },
                ].map((item, i) => (
                <li key={i} className="flex justify-between py-3 hover:bg-gray-50 px-2 rounded-lg transition">
                    <span className="text-gray-700">{item.issue}</span>
                    <span className="text-sm text-gray-400">{item.time}</span>
                </li>
                ))}
            </ul>
            </div>
        </section>

        {/* Listings Modal */}
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 relative">
                <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                &times;
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">All Listings</h2>

                {/* View Mode Buttons */}
                <div className="mb-4">
                {["table", "bar", "pie"].map((mode) => (
                    <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-1 mr-2 rounded capitalize ${
                        viewMode === mode
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    >
                    {mode === "bar" ? "Bar Chart" : mode === "pie" ? "Pie Chart" : "Table View"}
                    </button>
                ))}
                </div>

                {/* View Modes */}
                {viewMode === "table" && (
                <>
                    <table className="w-full border text-sm mb-6">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="text-left py-2 px-3 border">Title</th>
                        <th className="text-left py-2 px-3 border">Price</th>
                        <th className="text-left py-2 px-3 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="py-2 px-3 border">{item.title}</td>
                            <td className="py-2 px-3 border">{item.price}</td>
                            <td className="py-2 px-3 border">{item.date}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <div className="text-right">
                    {/* Use <Link> if using React Router */}
                    <Link
                        to="/admin/TotalListings"
                        className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        See More
                    </Link>
                    </div>
                </>
                )}

                {viewMode === "bar" && (
                <div className="text-center py-10 text-gray-500 italic">
                    📊 Bar chart placeholder (implement with Chart.js or SVG later)
                </div>
                )}

                {viewMode === "pie" && (
                <div className="text-center py-10 text-gray-500 italic">
                    🥧 Pie chart placeholder (implement with Chart.js or SVG later)
                </div>
                )}
            </div>
            </div>
        )}
        </div>
    );
    }
