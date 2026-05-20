import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 p-10">
            
            <h1 className="text-3xl font-bold text-center text-pink-400 mb-10">
                🌸 Daftar Framework
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworkData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl p-6 shadow-md border border-pink-100 
                        hover:shadow-xl hover:-translate-y-2 transition duration-300"
                    >
                        {/* Nama */}
                        <h2 className="text-xl font-bold text-gray-800">
                            {item.name}
                        </h2>

                        {/* Deskripsi */}
                        <p className="text-gray-500 text-sm mt-2">
                            {item.description}
                        </p>

                        {/* Developer */}
                        <p className="text-sm text-gray-600 mt-3">
                            Developed By :{" "}
                            <span className="font-bold text-gray-800">
                                {item.details?.developer}
                            </span>{" "}
                            ({item.details?.releaseYear})
                        </p>

                        {/* Button Website */}
                        <a
                            href={item.details?.officialWebsite}
                            target="_blank"
                            className="inline-block mt-3 px-4 py-1 text-sm bg-pink-400 text-white rounded-full 
                            hover:bg-pink-500 transition"
                        >
                            Visit Website
                        </a>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
