
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

export default function HeroSection() {
    return (
        <section className="relative w-full h-[600px] bg-gradient-to-r from-red-600 via-red-100 to-red-50 overflow-hidden">
            {/* Moving vehicles */}
            {vehicles.map((src, index) => {
                const duration = 12 + (index % 6); // different speeds
                const delay = index * 0.8; // stagger start times
                const width = 300 + (index % 3) * 50; // 300, 350, 400px
                const height = 150 + (index % 3) * 30; // 150, 180, 210px

                return (
                    <img
                        key={index}
                        src={src}
                        alt={`vehicle-${index}`}
                        className="absolute bottom-10 object-contain"
                        style={{
                            width: `${width}px`,
                            height: `${height}px`,
                            animation: `moveLinear ${duration}s linear ${delay}s infinite`,
                        }}
                    />
                );
            })}

            {/* Hero content moved toward top */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 z-10">
                <h1 className="text-6xl md:text-8xl font-extrabold text-pink-600 mb-4 text-center">
                    Welcome to Super Metro Classic
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 text-center italic max-w-4xl line-clamp-3 mt-2">
                    Explore our services, hire buses, send parcels, and enjoy the best Super
                    Metro experience.
                </p>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        </section>
    );
}
