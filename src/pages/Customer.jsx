import { useState } from "react";
import PageHeader from "../components/PageHeader";

const initialCustomers = Array.from({ length: 30 }, (_, i) => ({
  id: `CUST${100 + i}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@gmail.com`,
  phone: `08123${Math.floor(100000 + Math.random() * 900000)}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3],
}));

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.id || !form.name) {
      alert("ID dan Nama wajib diisi!");
      return;
    }

    setCustomers([form, ...customers]);

    setForm({
      id: "",
      name: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });

    setShowForm(false);
  };

  const getLoyaltyStyle = (loyalty) => {
    if (loyalty === "Bronze") return "bg-amber-100 text-amber-700 border border-amber-200";
    if (loyalty === "Silver") return "bg-slate-100 text-slate-700 border border-slate-200";
    if (loyalty === "Gold") return "bg-emerald-100 text-emerald-700 border border-emerald-200";
  };

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers"]}
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-emerald-100 grid md:grid-cols-2 gap-4"
        >
          <input
            value={form.id}
            placeholder="Customer ID"
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none"
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            value={form.name}
            placeholder="Name"
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            value={form.email}
            placeholder="Email"
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            value={form.phone}
            placeholder="Phone"
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <select
            value={form.loyalty}
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
            onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-slate-200 text-slate-700 px-5 py-2 rounded-xl hover:bg-slate-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4 text-left">Customer ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((c, i) => (
              <tr
                key={i}
                className="border-t border-gray-100 hover:bg-emerald-50 transition-colors duration-200"
              >
                <td className="p-4 font-semibold text-gray-800">{c.id}</td>
                <td className="p-4 text-gray-700">{c.name}</td>
                <td className="p-4 text-gray-500">{c.email}</td>
                <td className="p-4 text-gray-700">{c.phone}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getLoyaltyStyle(
                      c.loyalty
                    )}`}
                  >
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
