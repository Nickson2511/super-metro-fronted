const awards = [
    { name: "Ministry", image: "/awards/ministry.jpeg" },
    { name: "KRA", image: "/awards/KRA.png" },
    { name: "Superbrands", image: "/awards/superbrands.jpeg" },
    { name: "KPMG", image: "/awards/kpmg.png" },
];

export default function AwardsSection() {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Awards
                </h2>

                {/* Awards Row - single row, evenly spaced */}
                <div className="flex justify-between items-center w-full space-x-6">
                    {awards.map((award, index) => (
                        <div key={index} className="flex-1 flex justify-center">
                            <img
                                src={award.image}
                                alt={award.name}
                                className="h-24 md:h-32 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
