import { FaSearch } from "react-icons/fa";

export default function PageHeader({
  title,
  breadcrumb,
  children,
  onSearch,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-white rounded-xl shadow">

      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
          {Array.isArray(breadcrumb)
            ? breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center space-x-1">
                  <span>{item}</span>
                  {index < breadcrumb.length - 1 && <span>/</span>}
                </span>
              ))
            : breadcrumb}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 w-full md:w-auto">

        {/* SEARCH (OPTIONAL) */}
        {onSearch && (
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-gray-100 rounded-lg py-2 pl-4 pr-10 outline-none focus:ring-2 focus:ring-green-400"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        )}

        {/* ACTION */}
        {children}
      </div>
    </div>
  );
}
