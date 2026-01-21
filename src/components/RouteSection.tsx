import { useState } from "react";
import {
    ArrowLeftRight,
    ChevronDown,
    Calendar,
    Armchair,
    MapPin,
    Wifi,
} from "lucide-react";

import { DESTINATIONS } from "../data/destinations";
import DepartureCalendar from "./DepartureCalendar";

/* ================= VEHICLES ================= */
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

/* ================= LOCATIONS ================= */
const LOCATIONS = Array.from(
    new Set(DESTINATIONS.flatMap((d) => [d.from, d.to]))
);

export default function RouteSection() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const [showFrom, setShowFrom] = useState(false);
    const [showTo, setShowTo] = useState(false);

    const [departureDate, setDepartureDate] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <section className="w-full bg-gray-100">
            <div className="w-full bg-white rounded-t-2xl shadow-lg py-10 px-4">
                <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-md p-6">

                    {/* ================= BOOKING FORM ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                        {/* FROM */}
                        <div className="md:col-span-3 relative">
                            <label className="text-xl text-gray-600 mb-1 block">
                                From
                            </label>

                            <div
                                className="relative"
                                onClick={() => {
                                    setShowFrom(!showFrom);
                                    setShowTo(false);
                                    setShowCalendar(false);
                                }}
                            >
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-8 h-8" />
                                <input
                                    readOnly
                                    value={from}
                                    placeholder="Select departure"
                                    className="w-full bg-gray-200 text-xl border rounded-xl pl-12 pr-10 py-3 cursor-pointer"
                                />
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {showFrom && (
                                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg">
                                    {LOCATIONS.map((location) => (
                                        <div
                                            key={location}
                                            onClick={() => {
                                                setFrom(location);
                                                setShowFrom(false);
                                            }}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <MapPin className="w-4 h-4 text-red-600" />
                                            <span>{location}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="md:col-span-1 flex justify-center mt-6 md:mt-0">
                            <ArrowLeftRight className="text-gray-500" />
                        </div>

                        {/* TO */}
                        <div className="md:col-span-3 relative">
                            <label className="text-xl text-gray-600 mb-1 block">
                                To
                            </label>

                            <div
                                className="relative"
                                onClick={() => {
                                    setShowTo(!showTo);
                                    setShowFrom(false);
                                    setShowCalendar(false);
                                }}
                            >
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-8 h-8gi" />
                                <input
                                    readOnly
                                    value={to}
                                    placeholder="Select destination"
                                    className="w-full bg-gray-200 text-xl border rounded-xl pl-12 pr-10 py-3 cursor-pointer"
                                />
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {showTo && (
                                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg">
                                    {LOCATIONS.map((location) => (
                                        <div
                                            key={location}
                                            onClick={() => {
                                                setTo(location);
                                                setShowTo(false);
                                            }}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <MapPin className="w-4 h-4 text-red-600" />
                                            <span>{location}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ================= DEPARTURE DATE ================= */}
                        <div className="md:col-span-3 relative">
                            <label className="text-gray-600 mb-1 block">
                                Departure
                            </label>

                            <div
                                className="relative"
                                onClick={() => {
                                    setShowCalendar(!showCalendar);
                                    setShowFrom(false);
                                    setShowTo(false);
                                }}
                            >
                                <input
                                    readOnly
                                    value={departureDate}
                                    placeholder="Select date"
                                    className="w-full border rounded-xl px-4 py-3 pr-10 cursor-pointer"
                                />
                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {showCalendar && (
                                <div className="absolute z-30 mt-2">
                                    <DepartureCalendar
                                        value={departureDate}
                                        onSelect={(date) => {
                                            setDepartureDate(date);
                                            setShowCalendar(false);
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="md:col-span-2 flex pt-6 items-end">
                            <button className="w-full bg-red-600 text-white font-semibold py-4 rounded-xl">
                                Search
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
                                    <img src={src} className="h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= FEATURES ================= */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <Armchair className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Comfort on board</h3>
                            <p className="text-gray-600 text-sm">
                                Spacious and comfortable seats for every journey.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <MapPin className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Largest bus network in Kenya
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Over 100 destinations across the country.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <Wifi className="mx-auto text-red-600 w-10 h-10 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Stay connected</h3>
                            <p className="text-gray-600 text-sm">
                                Enjoy onboard Wi-Fi during your trip.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}







