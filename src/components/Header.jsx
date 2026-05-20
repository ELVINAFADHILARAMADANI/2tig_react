import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">

            {/* Search */}
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full bg-gray-100 rounded-lg py-2 pl-4 pr-10 outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-4">

                {/* Notification */}
                <div className="relative p-3 bg-blue-100 text-blue-600 rounded-xl cursor-pointer hover:scale-105 transition">
                    <FaBell />
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 rounded-full">
                        50
                    </span>
                </div>

                {/* Chart */}
                <div className="p-3 bg-purple-100 rounded-xl cursor-pointer hover:scale-105 transition">
                    <FcAreaChart />
                </div>

                {/* Settings */}
                <div className="p-3 bg-red-100 text-red-500 rounded-xl cursor-pointer hover:scale-105 transition">
                    <SlSettings />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 border-l pl-4">
                    <div className="text-sm">
                        Hello, <span className="font-semibold">Elvina Fadhila Ramadani</span>
                    </div>
                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        className="w-10 h-10 rounded-full border-2 border-green-400"
                        alt="profile"
                    />
                </div>

            </div>
        </div>
    );
}
