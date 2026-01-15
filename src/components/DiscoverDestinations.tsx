import { useEffect, useState } from "react";

export default function DiscoverDestinations() {
    // Optional: small up-down floating effect
    const [floatY, setFloatY] = useState(0);

    useEffect(() => {
        let direction = 1;
        const interval = setInterval(() => {
            setFloatY((prev) => {
                if (prev >= 10) direction = -1;
                if (prev <= -10) direction = 1;
                return prev + direction;
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full mt-16 px-4">
            {/* Card */}
            <div className="relative max-w-8xl mx-auto h-[560px] rounded-2xl overflow-hidden shadow-lg">
                {/* Floating bus image */}
                <img
                    src="/vehicles/vehicle12.jpeg"
                    alt="Floating bus"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                    style={{ transform: `translateY(${floatY}px)` }}
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                        Discover all destinations
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
                        Choose from over{" "}
                        <span className="font-semibold text-white">100+</span> travel
                        destinations
                    </p>
                </div>
            </div>
        </section>
    );
}
