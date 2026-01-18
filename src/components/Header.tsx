import { Bell, Settings, Menu, X } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
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
    const [signupOpen, setSignupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);



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
                        <button
                            onClick={() => setSignupOpen(true)}
                            className="bg-white text-red-600 font-semibold px-10 py-3 rounded-full hover:bg-gray-100 transition"
                        >
                            Signup
                        </button>

                        <button
                            onClick={() => setLoginOpen(true)}
                            className="bg-white text-red-600 font-semibold px-10 py-3 rounded-full hover:bg-gray-100 transition"
                        >
                            Login
                        </button>

                    </div>
                </div>
            </header>

            {/* ================= Navigation ================= */}
            <nav className="sticky top-0 z-50 bg-white border-t border-gray-300 shadow-md">
                <div className="max-w-8xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-4 md:py-6">

                    {/* ================= Logo + Text ================= */}
                    <div className="flex flex-1 flex-col xs:flex-col sm:flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-3 md:gap-4">
                        {/* Bottle-cap logo */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex-shrink-0">
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

                        {/* Text always visible, shrinks on smaller screens */}
                        <div className="text-red-600 font-extrabold text-center text-lg sm:text-xl md:text-3xl break-words">
                            Super Metro Classic
                        </div>
                    </div>

                    {/* ================= Desktop Menu ================= */}
                    <ul className="hidden md:flex items-center gap-6 md:gap-8">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="text-gray-800 text-base md:text-lg font-medium hover:text-red-600 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                        <FaFacebook className="w-6 h-6 text-gray-800 hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="w-6 h-6 text-gray-800 hover:text-blue-400 cursor-pointer" />
                    </ul>

                    {/* ================= Mobile Button ================= */}
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* ================= Mobile Menu ================= */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                        <ul className="flex flex-col items-center gap-4 py-4">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium hover:text-red-600 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                            <div className="flex gap-4 pt-3">
                                <FaFacebook className="w-5 h-5 text-gray-800 hover:text-blue-600 cursor-pointer" />
                                <FaTwitter className="w-5 h-5 text-gray-800 hover:text-blue-400 cursor-pointer" />
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
            <SignupModal
                open={signupOpen}
                onClose={() => setSignupOpen(false)}
            />

            <LoginModal
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
            />


        </>

    );
}
