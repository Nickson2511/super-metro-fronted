import { Star, Heart } from "lucide-react";

export default function HappyTravelers() {
    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
                    Our Happy Travelers
                </h2>

                {/* Testimonials Row */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 relative">
                        {/* Testimonial text */}
                        <p className="text-gray-700 mb-4">
                            "I've used SuperMetro Classic for the last 4 years, 34/38 times in each of those years... efficiency, reliability and most importantly safety has been your mantra all along, keep it up."
                        </p>

                        {/* User info */}
                        <div className="flex flex-col mb-3">
                            <span className="font-semibold text-gray-800">Nickson Okwemba</span>
                            <span className="text-gray-500 text-sm">Kenya</span>
                        </div>

                        {/* Star ratings */}
                        <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 h-5 w-5" />
                            ))}
                            {/* 5th star 3/4 filled */}
                            <div className="relative h-5 w-5">
                                <Star className="text-gray-300 h-5 w-5 absolute top-0 left-0" />
                                <div className="overflow-hidden w-[75%] absolute top-0 left-0">
                                    <Star className="text-yellow-400 h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 relative">
                        {/* Testimonial header with like icon */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-semibold">Great job</span>
                            <Heart className="text-red-600 h-5 w-5" />
                        </div>

                        {/* Testimonial text */}
                        <p className="text-gray-700 mb-4">
                            "SuperMetro Classic exceeded my expectations. Comfort, reliability, and friendly staff made my journey truly enjoyable. Highly recommend!"
                        </p>

                        {/* User info */}
                        <div className="flex flex-col mb-3">
                            <span className="font-semibold text-gray-800">Mercy Wambua</span>
                            <span className="text-gray-500 text-sm">Kenya</span>
                        </div>

                        {/* Star ratings */}
                        <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 h-5 w-5" />
                            ))}
                            {/* 5th star 3/4 filled */}
                            <div className="relative h-5 w-5">
                                <Star className="text-gray-300 h-5 w-5 absolute top-0 left-0" />
                                <div className="overflow-hidden w-[75%] absolute top-0 left-0">
                                    <Star className="text-yellow-400 h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
