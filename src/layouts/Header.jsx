import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex items-center justify-between">

            {/* SEARCH */}
            <div className="relative w-[430px]">

                <input
                    type="text"
                    placeholder="Search Here..."
                    className="
                        w-full
                        bg-white
                        py-4
                        pl-6
                        pr-14
                        rounded-xl
                        shadow-sm
                        outline-none
                        text-gray-500
                        placeholder:text-gray-400
                    "
                />

                <FaSearch
                    className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        text-gray-300
                        text-lg
                    "
                />

            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* NOTIFICATION */}
                <div className="relative bg-blue-100 p-4 rounded-2xl cursor-pointer">

                    <FaBell className="text-blue-500" />

                    <span
                        className="
                            absolute
                            -top-2
                            right-0
                            bg-blue-500
                            text-white
                            text-[10px]
                            w-5
                            h-5
                            rounded-full
                            flex
                            items-center
                            justify-center
                        "
                    >
                        50
                    </span>

                </div>

                {/* CHART */}
                <div className="bg-purple-100 p-4 rounded-2xl cursor-pointer">
                    <FcAreaChart />
                </div>

                {/* SETTINGS */}
                <div className="bg-red-100 p-4 rounded-2xl cursor-pointer">
                    <SlSettings className="text-red-400" />
                </div>

                {/* LINE */}
                <div className="w-[1px] h-10 bg-gray-300"></div>

                {/* PROFILE */}
                <div className="flex items-center gap-3">

                    <p className="text-sm text-gray-700">
                        Hello,{" "}
                        <span className="font-semibold text-black">
                            Elvina Fadhila Ramadani
                        </span>
                    </p>

                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        alt="profile"
                        className="
                            w-11
                            h-11
                            rounded-full
                            object-cover
                        "
                    />

                </div>

            </div>

        </div>
    );
}