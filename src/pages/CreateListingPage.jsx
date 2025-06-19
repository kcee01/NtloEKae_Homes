import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateListingPage() {
  const [form, setForm] = useState({ title: "", description: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");

    const response = await fetch("http://localhost:8000/api/listings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert("Listing created!");
      navigate("/landlord");
    } else {
      alert("Failed to create listing.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h1 className="text-2xl font-bold mb-4">Create a Listing</h1>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Monthly Rent"
        value={form.price}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Create Listing
      </button>
    </form>
  );
}