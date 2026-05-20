import { useState } from "react";
import PageHeader from "../components/PageHeader";

const initialOrders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD${1000 + i}`,
  customerName: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  totalPrice: 50000 + i * 10000,
  orderDate: `2026-04-${String((i % 30) + 1).padStart(2, "0")}`,
}));

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const getStatusStyle = (status) => {
    if (status === "Pending")
      return "bg-green-100 text-green-700 border border-green-200";
    if (status === "Completed")
      return "bg-green-100 text-green-700 border border-green-200";
    if (status === "Cancelled")
      return "bg-green-100 text-green-700 border border-green-200";
  };

  const filteredOrders = orders;

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen">
      <PageHeader
        title="Orders"
        breadcrumb={["Dashboard", "Orders"]}
      />

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((o, i) => (
              <tr
                key={i}
                className="border-t border-gray-100 hover:bg-emerald-50 transition duration-200"
              >
                <td className="p-4 font-semibold text-gray-800">{o.id}</td>
                <td className="p-4 text-gray-700">{o.customerName}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1.5 text-xs font-medium rounded-full ${getStatusStyle(
                      o.status
                    )}`}
                  >
                    {o.status}
                  </span>
                </td>

                <td className="p-4 font-bold text-emerald-600">
                  Rp {Number(o.totalPrice).toLocaleString("id-ID")}
                </td>

                <td className="p-4 text-gray-500">{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
