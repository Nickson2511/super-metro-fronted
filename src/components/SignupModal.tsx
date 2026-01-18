import { X, User, Phone, Mail, Lock } from "lucide-react";
import React from "react";

interface SignupModalProps {
    open: boolean;
    onClose: () => void;
}

export default function SignupModal({ open, onClose }: SignupModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            {/* Modal Card */}
            <div className="
                bg-white 
                w-full 
                max-w-2xl 
                sm:max-w-xl 
                lg:max-w-2xl 
                min-h-[760px] 
                max-h-[90vh] 
                overflow-y-auto 
                rounded-3xl 
                p-10 
                relative 
                shadow-2xl
            ">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition"
                    aria-label="Close signup modal"
                >
                    <X size={28} />
                </button>

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center text-red-600 mb-3">
                    Create Account
                </h2>

                <p className="text-center text-gray-500 mb-10 text-lg">
                    Fill in your details to get started
                </p>

                {/* Form */}
                <form className="space-y-7">

                    <InputWithIcon
                        icon={<User size={24} />}
                        placeholder="Type your first name"
                    />

                    <InputWithIcon
                        icon={<User size={24} />}
                        placeholder="Type your last name"
                    />

                    <InputWithIcon
                        icon={<User size={24} />}
                        placeholder="Type your ID / Passport"
                    />

                    <InputWithIcon
                        icon={<Phone size={24} />}
                        placeholder="Type your phone number"
                    />

                    <InputWithIcon
                        icon={<Mail size={24} />}
                        placeholder="Type your email"
                        type="email"
                    />

                    <InputWithIcon
                        icon={<Lock size={24} />}
                        placeholder="Type your password"
                        type="password"
                    />

                    {/* Consent Text */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        By submitting my personal data, I consent to{" "}
                        <span className="font-medium text-gray-700">
                            Super-Metro Classic Limited
                        </span>{" "}
                        collecting, processing, and storing my information in accordance
                        with the{" "}
                        <a
                            href="/privacy-policy"
                            className="text-red-600 underline hover:text-red-700 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Super-Metro Classic Privacy Policy
                        </a>.
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="
                            w-full 
                            mt-6 
                            bg-red-600 
                            text-white 
                            py-5 
                            rounded-full 
                            text-xl 
                            font-semibold 
                            hover:bg-red-700 
                            active:scale-[0.98] 
                            transition
                        "
                    >
                        Register Account
                    </button>
                </form>
            </div>
        </div>
    );
}

/* --------------------------------------------------
    Reusable Input With Icon
-------------------------------------------------- */

interface InputWithIconProps {
    icon: React.ReactNode;
    placeholder: string;
    type?: string;
}

function InputWithIcon({
    icon,
    placeholder,
    type = "text",
}: InputWithIconProps) {
    return (
        <div className="
            flex 
            items-center 
            gap-4 
            border 
            border-gray-300 
            rounded-full 
            px-7 
            py-5 
            focus-within:ring-2 
            focus-within:ring-red-500 
            transition
        ">
            <span className="text-gray-400">{icon}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none text-lg placeholder-gray-400"
            />
        </div>
    );
}
