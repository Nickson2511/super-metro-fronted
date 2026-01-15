import {
    ArrowLeftRight,
    ChevronDown,
    Calendar,
    Armchair,
    MapPin,
    Wifi,
} from "lucide-react";

const vehicles = [
    "/vehicles/vehicle1.jpg",
    "/vehicles/vehicle2.jpeg",
    "/vehicles/vehicle3.jpeg",
    "/vehicles/vehicle4.jpeg",
    "/vehicles/vehicle5.jpeg",
    "/vehicles/vehicle6.jpeg",
    "/vehicles/vehicle7.jpeg",
    "/vehicles/vehicle9.jpeg",
    "/vehicles/vehicle10.jpg",
    "/vehicles/vehicle11.jpeg",
    "/vehicles/vehicle12.jpeg",
    "/vehicles/vehicle13.jpeg",
];

export default function RouteSection() {
    return (
        <section className="w-full bg-gray-100">
            {/* Big white card */}
            <div className="w-full bg-white rounded-t-2xl shadow-lg py-10 px-4">
                <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-md p-6">

                    {/* ================= BOOKING FORM ================= */}
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="radio"
                            checked
                            readOnly
                            className="w-4 h-4 accent-red-600"
                        />
                        <span className="font-semibold text-gray-700">
                            One way
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-3">
                            <label className="text-sm text-gray-600 mb-1 block">
                                From
                            </label>
                            <input
                                type="text"
                                placeholder="Select..."
                                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
                            />
                        </div>

                        <div className="md:col-span-1 flex justify-center mt-6 md:mt-0">
                            <ArrowLeftRight className="text-gray-500" />
                        </div>

                        <div className="md:col-span-3">
                            <label className="text-sm text-gray-600 mb-1 block">
                                To
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Select..."
                                    className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-red-500 outline-none"
                                />
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <label className="text-sm text-gray-600 mb-1 block">
                                Departure
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Select date"
                                    className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-red-500 outline-none"
                                />
                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="md:col-span-2 flex items-end">
                            <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* ================= VEHICLE MARQUEE ================= */}
                    <div className="mt-12 overflow-hidden">
                        <div className="flex gap-6 animate-marquee">
                            {[...vehicles, ...vehicles].map((src, index) => (
                                <div
                                    key={index}
                                    className="min-w-[260px] h-[150px] bg-white rounded-xl shadow-md flex items-center justify-center"
                                >
                                    <img
                                        src={src}
                                        alt={`vehicle-${index}`}
                                        className="h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= FEATURES SECTION ================= */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                        {/* Comfort */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <Armchair className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Comfort on board
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our buses are equipped with large, spacious and
                                comfortable seats to make every journey relaxing.
                            </p>
                        </div>

                        {/* Locations */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <MapPin className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Largest bus network in Kenya
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Choose from over 100 travel destinations across
                                Kenya with reliable daily departures.
                            </p>
                        </div>

                        {/* WiFi */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <Wifi className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Travel while connected online
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Enjoy onboard Wi-Fi so you can browse, chat,
                                work or stream while on the move.
                            </p>
                        </div>
                    </div>
                    {/* =================================================== */}

                </div>
            </div>
        </section>
    );
}
