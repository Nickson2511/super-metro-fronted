import { Bell, Settings, Menu, X } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";

interface HeaderProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Header({
    title = "The Official Super-Metro Classic Website",
    children,
}: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ["Home", "Bus Hire", "Parcels", "Contact Us", "About Us"];

    return (
        <>
            {/* ================= Announcement ================= */}
            <header className="w-full">
                <div className="bg-gray-900 w-full">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 p-4 text-center">
                        <Bell className="w-7 h-7 text-white" />
                        <span className="text-white font-semibold text-lg md:text-2xl">
                            {title}
                        </span>
                        <Settings className="w-7 h-7 text-white" />
                        {children && <div>{children}</div>}
                    </div>
                </div>

                {/* ================= Auth Buttons ================= */}
                <div className="bg-red-600 w-full">
                    <div className="max-w-8xl mx-auto flex justify-center md:justify-end gap-4 p-4">
                        <button className="bg-white text-red-600 font-semibold px-10 py-3 rounded-full hover:bg-gray-100 transition">
                            Signup
                        </button>
                        <button className="bg-white text-red-600 font-semibold px-10 py-3 rounded-full hover:bg-gray-100 transition">
                            Login
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= Navigation ================= */}
            <nav className="sticky top-0 z-50 bg-white border-t border-gray-300 shadow-md">
                <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-6">

                    {/* ================= Logo + Text ================= */}
                    <div className="flex items-center gap-6">
                        {/* Bottle-cap logo (2× bigger) */}
                        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                            <svg
                                viewBox="0 0 200 200"
                                className="w-full h-full"
                                aria-label="Super Metro Classic Logo"
                            >
                                <defs>
                                    <clipPath id="capShape">
                                        <path
                                            d="
                      M100 10
                      L110 20 L130 15 L135 30 L155 35
                      L150 55 L170 70 L155 85
                      L165 105 L145 115 L150 135
                      L130 140 L120 160 L100 150
                      L80 160 L70 140 L50 135
                      L55 115 L35 105 L45 85
                      L30 70 L50 55 L45 35
                      L65 30 L70 15 L90 20 Z"
                                        />
                                    </clipPath>
                                </defs>

                                {/* Background */}
                                <path
                                    d="
                  M100 10
                  L110 20 L130 15 L135 30 L155 35
                  L150 55 L170 70 L155 85
                  L165 105 L145 115 L150 135
                  L130 140 L120 160 L100 150
                  L80 160 L70 140 L50 135
                  L55 115 L35 105 L45 85
                  L30 70 L50 55 L45 35
                  L65 30 L70 15 L90 20 Z"
                                    fill="#dc2626"
                                />

                                {/* Image inside */}
                                <image
                                    href="/myLogo.jpeg"
                                    x="40"
                                    y="35"
                                    width="120"
                                    height="120"
                                    clipPath="url(#capShape)"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                        </div>

                        {/* Permanent text */}
                        <div className="hidden sm:block text-3xl md:text-4xl font-extrabold text-red-600">
                            Super Metro Classic
                        </div>
                    </div>

                    {/* ================= Desktop Menu ================= */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="text-gray-800 text-lg font-medium hover:text-red-600 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                        <FaFacebook className="w-7 h-7 text-gray-800 hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="w-7 h-7 text-gray-800 hover:text-blue-400 cursor-pointer" />
                    </ul>

                    {/* ================= Mobile Button ================= */}
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* ================= Mobile Menu ================= */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                        <ul className="flex flex-col items-center gap-5 py-6">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium hover:text-red-600 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                            <div className="flex gap-6 pt-4">
                                <FaFacebook className="w-6 h-6 text-gray-800 hover:text-blue-600 cursor-pointer" />
                                <FaTwitter className="w-6 h-6 text-gray-800 hover:text-blue-400 cursor-pointer" />
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
