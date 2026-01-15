import { Play } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Super Metro Classic</h2>
                    <p className="text-gray-400">Our Sacco</p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-red-500 cursor-pointer transition">About Us</li>
                        <li className="hover:text-red-500 cursor-pointer transition">Contact Us</li>
                        <li className="hover:text-red-500 cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-red-500 cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-red-500 cursor-pointer transition">Delete My Account</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Our Contact</h3>
                    <ul className="space-y-2">
                        <li>📞 0712675045</li>
                        <li>Email: <span className="text-red-500">okwembanickson8@gmail.com</span></li>
                    </ul>
                </div>

                {/* Top Routes & App */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Top Routes</h3>
                    <ul className="space-y-2 mb-6">
                        <li>Nairobi - Ruiru</li>
                        <li>Nairobi - Rhyisombu</li>
                        <li>Nairobi - Thika</li>
                        <li>Nairobi - Kangemi</li>
                    </ul>

                    {/* Get the App */}
                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                        <Play className="h-6 w-6 text-red-500" />
                        <span className="font-semibold text-white">Download on Play Store</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10"></div>

            {/* Copyright */}
            <div className="mt-4 text-center text-gray-500 text-sm">
                Copyright © 2026 SuperMetro Classic. All rights reserved.
            </div>
        </footer>
    );
}
