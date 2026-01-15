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
    // Animate only the text visibility
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextVisible((prev) => !prev); // toggle every 13s
        }, 13000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ================= Fixed Header Container ================= */}
            <header className="w-full fixed top-0 left-0 z-50">
                {/* Top section: dark background */}
                <div className="bg-gray-900 w-full">
                    <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4 p-6 border border-gray-700 rounded-md">
                        <Bell className="w-12 h-12 text-white" />
                        <span className="text-white font-semibold text-4xl">{title}</span>
                        <Settings className="w-12 h-12 text-white" />
                        {children && (
                            <div className="ml-4 flex items-center space-x-2">{children}</div>
                        )}
                    </div>
                </div>

                {/* Middle section: red background with signup/login */}
                <div className="bg-red-600 w-full">
                    <div className="max-w-8xl mx-auto flex justify-end items-center p-4 space-x-28">
                        <button className="bg-white text-red-600 font-semibold px-16 py-4 rounded-full hover:bg-gray-100 transition">
                            Signup
                        </button>
                        <button className="bg-white text-red-600 font-semibold px-16 py-4 rounded-full hover:bg-gray-100 transition">
                            Login
                        </button>
                    </div>
                </div>

                {/* Bottom section: white background with logo + menu */}
                <div className="bg-white w-full border-t border-gray-300 shadow-md">
                    <div className="max-w-8xl mx-auto flex items-center justify-between p-4">
                        {/* Left side: Logo + animated text */}
                        <div className="flex flex-col items-start space-y-2 ml-4">
                            <img
                                src="/myLogo.jpeg"
                                alt="Logo"
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <span
                                className={`text-red-600 font-bold text-xl transition-opacity duration-1000 ${textVisible ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                Super Metro Classic
                            </span>
                        </div>

                        {/* Right side: Navigation menu */}
                        <ul className="flex items-center space-x-28 mr-4">
                            <li className="text-gray-800 text-2xl font-medium hover:text-red-600 cursor-pointer">
                                Home
                            </li>
                            <li className="text-gray-800 text-2xl font-medium hover:text-red-600 cursor-pointer">
                                Bus Hire
                            </li>
                            <li className="text-gray-800 text-2xl font-medium hover:text-red-600 cursor-pointer">
                                Parcels
                            </li>
                            <li className="text-gray-800 text-2xl font-medium hover:text-red-600 cursor-pointer">
                                Contact Us
                            </li>
                            <li className="text-gray-800 text-2xl font-medium hover:text-red-600 cursor-pointer">
                                About Us
                            </li>
                            <li>
                                <FaFacebook className="w-9 h-9 text-gray-800 hover:text-blue-600 cursor-pointer" />
                            </li>
                            <li>
                                <FaTwitter className="w-9 h-9 text-gray-800 hover:text-blue-400 cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Spacer to prevent content hiding behind fixed header */}
            <div className="pt-[240px]"></div>
            {/* Adjust 240px to match total height of header (top + middle + bottom) */}
        </>
    );
}
