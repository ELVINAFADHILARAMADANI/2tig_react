import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchfilter() {

    const [search, setSearch] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    const allTags = [
        "All",
        ...new Set(frameworkData.flatMap((item) => item.tags || [])),
    ];

    const filteredData = frameworkData.filter((item) => {
        const matchSearch = item.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchTag =
            selectedTag === "All" ||
            item.tags?.includes(selectedTag);

        return matchSearch && matchTag;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 p-10">
            
            {/* 🔥 HEADER BARU */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">
                    Eksplorasi <span className="text-blue-500">Framework</span>
                </h1>
                <p className="text-gray-500 mt-2">
                    Temukan teknologi yang tepat untuk membangun aplikasi hebat Anda.
                </p>
            </div>

            {/* 🔍 SEARCH + DROPDOWN */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
                
                {/* SEARCH */}
                <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm border w-full max-w-xl">
                    <span className="text-gray-400 mr-2">🔍</span>
                    <input
                        type="text"
                        placeholder="Cari nama atau deskripsi framework..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none text-sm text-gray-600"
                    />
                </div>

                {/* DROPDOWN FILTER */}
                <div className="bg-white rounded-xl px-4 py-2 shadow-sm border flex items-center gap-2">
                    <span className="text-gray-400">⚙️</span>
                    <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="outline-none text-sm text-gray-600 bg-transparent"
                    >
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            {/* CARD */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((item) => (
                    <div
                        key={item.id}
                        className="relative group bg-white/80 backdrop-blur-lg rounded-3xl p-6 
                        border border-pink-100 shadow-md overflow-hidden
                        transform transition duration-300 hover:-translate-y-3 hover:shadow-pink-200 hover:shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-10 transition duration-300 rounded-3xl pointer-events-none"></div>

                        <span className="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full">
                            Framework
                        </span>

                        <h2 className="text-xl font-bold text-gray-800 mt-3 group-hover:text-pink-500 transition">
                            {item.name}
                        </h2>

                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            {item.description}
                        </p>

                        <p className="text-sm text-gray-600 mt-3">
                            Developed By :{" "}
                            <span className="font-bold text-gray-800">
                                {item.details?.developer}
                            </span>{" "}
                            ({item.details?.releaseYear})
                        </p>

                        <a
                            href={item.details?.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 text-sm bg-gradient-to-r from-pink-400 to-pink-500 
                            text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition"
                        >
                            🚀 Visit Website
                        </a>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full 
                                    hover:bg-pink-200 transition"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredData.length === 0 && (
                <p className="text-center text-gray-400 mt-10">
                    😢 Framework tidak ditemukan
                </p>
            )}
        </div>
    );
}
