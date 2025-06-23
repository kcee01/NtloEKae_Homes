import { useState } from "react";

export default function AuthForm({ onSubmit, type }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    role: "tenant",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "register" && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {type === "login" ? "Login" : "Register"}
      </h2>

      {type === "register" && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded"
            required
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
        </>
      )}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />

      {type === "register" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
