import { Bell, Settings } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import React, { useEffect, useState } from "react";

interface HeaderProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Header({
    title = "The Official Super-Metro Classic Website",
    children,
}: HeaderProps) {
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextVisible((prev) => !prev);
        }, 13000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ================= Scrollable Header Content ================= */}
            <header className="w-full">
                {/* Top announcement section */}
                <div className="bg-gray-900 w-full">
                    <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4 p-6 border border-gray-700 rounded-md">
                        <Bell className="w-10 h-10 text-white" />
                        <span className="text-white font-semibold text-3xl">
                            {title}
                        </span>
                        <Settings className="w-10 h-10 text-white" />
                        {children && (
                            <div className="ml-4 flex items-center space-x-2">
                                {children}
                            </div>
                        )}
                    </div>
                </div>

                {/* Auth buttons section */}
                <div className="bg-red-600 w-full">
                    <div className="max-w-8xl mx-auto flex justify-end items-center p-4 space-x-10">
                        <button className="bg-white text-red-600 font-semibold px-12 py-3 rounded-full hover:bg-gray-100 transition">
                            Signup
                        </button>
                        <button className="bg-white text-red-600 font-semibold px-12 py-3 rounded-full hover:bg-gray-100 transition">
                            Login
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= Sticky Navigation Bar ================= */}
            <nav className="sticky top-0 z-50 bg-white border-t border-gray-300 shadow-md">
                <div className="max-w-8xl mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="flex flex-col items-start space-y-1 ml-4">
                        <img
                            src="/myLogo.jpeg"
                            alt="Logo"
                            className="w-16 h-16 object-cover rounded-md"
                        />
                        <span
                            className={`text-red-600 font-bold text-lg transition-opacity duration-1000 ${textVisible ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            Super Metro Classic
                        </span>
                    </div>

                    {/* Navigation */}
                    <ul className="flex items-center space-x-16 mr-4">
                        {["Home", "Bus Hire", "Parcels", "Contact Us", "About Us"].map(
                            (item) => (
                                <li
                                    key={item}
                                    className="text-gray-800 text-lg font-medium hover:text-red-600 cursor-pointer"
                                >
                                    {item}
                                </li>
                            )
                        )}

                        <li>
                            <FaFacebook className="w-7 h-7 text-gray-800 hover:text-blue-600 cursor-pointer" />
                        </li>
                        <li>
                            <FaTwitter className="w-7 h-7 text-gray-800 hover:text-blue-400 cursor-pointer" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}





