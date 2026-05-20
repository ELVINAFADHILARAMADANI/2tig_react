import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div className="p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Orders */}
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition duration-300">
                    <div className="bg-green-100 text-green-600 p-4 rounded-full text-xl">
                        <FaShoppingCart />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">75</h1>
                        <p className="text-gray-500 text-sm">Total Orders</p>
                    </div>
                </div>

                {/* Delivered */}
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition duration-300">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-full text-xl">
                        <FaTruck />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">175</h1>
                        <p className="text-gray-500 text-sm">Total Delivered</p>
                    </div>
                </div>

                {/* Canceled */}
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition duration-300">
                    <div className="bg-red-100 text-red-600 p-4 rounded-full text-xl">
                        <FaBan />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">40</h1>
                        <p className="text-gray-500 text-sm">Total Canceled</p>
                    </div>
                </div>

                {/* Revenue */}
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition duration-300">
                    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full text-xl">
                        <FaDollarSign />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Rp 128K</h1>
                        <p className="text-gray-500 text-sm">Total Revenue</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
