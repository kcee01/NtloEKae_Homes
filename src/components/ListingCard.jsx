export default function ListingCard({ listing }) {
  return (
    <div className="border rounded-xl p-4 shadow bg-white">
      <h3 className="text-xl font-bold">{listing.title}</h3>
      <p className="text-gray-600">{listing.description}</p>
      <p className="mt-2 font-semibold">${listing.price} / month</p>
    </div>
  );
}