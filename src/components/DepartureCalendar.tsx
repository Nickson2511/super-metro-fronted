import { useState } from "react";

interface DepartureCalendarProps {
    value: string;
    onSelect: (date: string) => void;
}

export default function DepartureCalendar({
    value,
    onSelect,
}: DepartureCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    function selectDay(day: number) {
        const selected = new Date(year, month, day);
        onSelect(selected.toISOString().split("T")[0]);
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 w-72">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <button
                    onClick={() =>
                        setCurrentDate(new Date(year, month - 1, 1))
                    }
                    className="text-gray-500 hover:text-black"
                >
                    ‹
                </button>

                <h3 className="font-semibold text-gray-700">
                    {currentDate.toLocaleString("default", {
                        month: "long",
                    })}{" "}
                    {year}
                </h3>

                <button
                    onClick={() =>
                        setCurrentDate(new Date(year, month + 1, 1))
                    }
                    className="text-gray-500 hover:text-black"
                >
                    ›
                </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 text-xs text-center text-gray-400 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <span key={d}>{d}</span>
                ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1 text-center">
                {days.map((day, index) =>
                    day ? (
                        <button
                            key={index}
                            onClick={() => selectDay(day)}
                            className={`py-2 rounded-lg text-sm hover:bg-red-100 ${value.endsWith(`-${String(day).padStart(2, "0")}`)
                                    ? "bg-red-600 text-white"
                                    : "text-gray-700"
                                }`}
                        >
                            {day}
                        </button>
                    ) : (
                        <span key={index} />
                    )
                )}
            </div>
        </div>
    );
}
