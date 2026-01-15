const destinations = [
    { name: "Nairobi → Kikuyu", image: "/destinations/nai.jpeg" },
    { name: "Nairobi → Kinoo", image: "/destinations/nai2.jpeg" },
    { name: "Nairobi → Kabiria", image: "/destinations/nai3.webp" },
    { name: "Nairobi → Ngong", image: "/destinations/nai4.webp" },

    { name: "Nairobi → Ruiru", image: "/destinations/nai5.webp" },
    { name: "Nairobi → Juja", image: "/destinations/nai5.jpg" },
    { name: "Nairobi → Kahawa West", image: "/destinations/nai6.jpeg" },
    { name: "Nairobi → Roysambu", image: "/destinations/nai7.jpeg" },
    { name: "Nairobi → Thika", image: "/destinations/nai8.jpeg" },
    { name: "Nairobi → Makongeni", image: "/destinations/nai9.jpeg" },

    { name: "Nairobi → Kitengela", image: "/destinations/nai10.jpeg" },
    { name: "Nairobi → Mlolongo", image: "/destinations/nai11.jpg" },
    { name: "Nairobi → Syokimau", image: "/destinations/nai12.jpeg" },
    { name: "Nairobi → JKIA", image: "/destinations/nai13.jpg" },
];

export default function TopDestinations() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            
            {/* Title */}
            <h2 className="text-xl font-bold mb-6">
                Top Destinations
            </h2>

            {/* Destination grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-gray-50"
                    >
                        {/* Image section */}
                        <div className="h-[140px] w-full overflow-hidden">
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Text section */}
                        <div className="p-4 flex items-center justify-center">
                            <span className="text-gray-800 font-semibold text-center">
                                {destination.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
