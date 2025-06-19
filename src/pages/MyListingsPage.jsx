import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";

export default function MyListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");

    fetch("http://localhost:8000/api/listings/mine/", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">My Listings</h1>
      {listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}