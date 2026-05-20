import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}
      <PageHeader />

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h1 className="text-7xl font-bold text-green-500 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-gray-500 mb-6 max-w-md">
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Kembali ke Dashboard
        </Link>

      </div>
    </div>
  );
}
