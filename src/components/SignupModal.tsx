import { X, User, Phone, Mail, Lock } from "lucide-react";

import type { ReactElement } from "react";

interface SignupModalProps {
    open: boolean;
    onClose: () => void;
}

export default function SignupModal({ open, onClose }: SignupModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 sm:px-4">
            {/* Modal Card */}
            <div
                className="
          bg-white
          w-full
          max-w-[95%]
          sm:max-w-lg
          md:max-w-xl
          lg:max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl sm:rounded-3xl
          p-5 sm:p-7 md:p-8 lg:p-10
          relative
          shadow-2xl
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-red-600 transition"
                    aria-label="Close signup modal"
                >
                    <X size={22} />
                </button>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-red-600 mb-2">
                    Create Account
                </h2>

                <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                    Fill in your details to get started
                </p>

                {/* Form */}
                <form className="space-y-4 sm:space-y-5 md:space-y-6">
                    <InputWithIcon icon={<User size={20} />} placeholder="Type your first name" />
                    <InputWithIcon icon={<User size={20} />} placeholder="Type your last name" />
                    <InputWithIcon icon={<User size={20} />} placeholder="Type your ID / Passport" />
                    <InputWithIcon icon={<Phone size={20} />} placeholder="Type your phone number" />
                    <InputWithIcon icon={<Mail size={20} />} placeholder="Type your email" type="email" />
                    <InputWithIcon icon={<Lock size={20} />} placeholder="Type your password" type="password" />

                    {/* Consent Text */}
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        By submitting my personal data, I consent to{" "}
                        <span className="font-medium text-gray-700">Super-Metro Classic Limited</span>{" "}
                        collecting, processing, and storing my information in accordance with the{" "}
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
              mt-4 sm:mt-5
              bg-red-600
              text-white
              py-3 sm:py-4
              rounded-full
              text-base sm:text-lg md:text-xl
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
    Reusable Input With Icon (Responsive)
-------------------------------------------------- */

interface InputWithIconProps {
    icon: ReactElement<{ size?: number }>;
    placeholder: string;
    type?: string;
}

function InputWithIcon({ icon, placeholder, type = "text" }: InputWithIconProps) {
    return (
        <div
            className="
        flex
        items-center
        gap-3 sm:gap-4
        border
        border-gray-300
        rounded-full
        px-4 sm:px-5 md:px-6
        py-2.5 sm:py-3 md:py-4
        focus-within:ring-2
        focus-within:ring-red-500
        transition
      "
        >
            {/* Wrap icon in a span for styling */}
            <span className="text-gray-400 flex-shrink-0">
                {icon}
            </span>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none text-sm sm:text-base md:text-lg placeholder-gray-400"
            />
        </div>
    );
}
