import { X, User, Lock } from "lucide-react";
import React from "react";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            {/* Modal Card */}
            <div className="
        bg-white
        w-full
        max-w-2xl
        min-h-[620px]
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
                    aria-label="Close login modal"
                >
                    <X size={28} />
                </button>

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center text-red-600 mb-3">
                    Login
                </h2>

                <p className="text-center text-gray-500 text-lg mb-10">
                    Hello! Welcome to your account
                </p>

                {/* Form */}
                <form className="space-y-8">

                    {/* Email */}
                    <InputWithIcon
                        icon={<User size={24} />}
                        placeholder="Type your email"
                        type="email"
                    />

                    {/* Password */}
                    <InputWithIcon
                        icon={<Lock size={24} />}
                        placeholder="Type your password"
                        type="password"
                    />

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a
                            href="/forgot-password"
                            className="text-base text-red-600 hover:underline hover:text-red-700 transition"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="
              w-full
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
                        Login Account
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
      gap-5
      border
      border-gray-300
      rounded-full
      px-8
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
