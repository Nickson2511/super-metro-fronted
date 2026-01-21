import { DESTINATIONS } from "../data/destinations";

export default function TopDestinations() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            {/* Title */}
            <h2 className="text-xl font-bold mb-6">
                Top Destinations
            </h2>

            {/* Destination grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {DESTINATIONS.map((destination, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-gray-50"
                    >
                        <div className="h-[140px] w-full overflow-hidden">
                            <img
                                src={destination.image}
                                alt={destination.label}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-4 flex items-center justify-center">
                            <span className="text-gray-800 font-semibold text-center">
                                {destination.label}
                            </span>
                        </div>
                    </div>
                ))}



            </div>

        </div>
    );
}
