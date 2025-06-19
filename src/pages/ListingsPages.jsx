import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/listings/")
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Available Rentals</h1>
      {listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}