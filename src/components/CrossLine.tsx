import { Bell, Settings } from "lucide-react";

interface HeaderProps {
    title?: string;
    children?: React.ReactNode;
}

export default function CrossLine({
    title = "The Official Super-Metro Classic Website",
    children,
}: HeaderProps) {
    return (
        <div className="w-full mb-6">
            {/* Full-width card */}
            <div className="w-full bg-red-600 flex justify-center rounded-none shadow-md py-6">
                {/* Inner flex container to align icons and title */}
                <div className="flex items-center space-x-4">
                    <Bell className="w-10 h-10 text-white" />
                    <span className="text-white font-bold text-2xl md:text-4xl text-center">
                        {title}
                    </span>
                    <Settings className="w-10 h-10 text-white" />
                </div>

                {/* Optional children, if provided */}
                {children && (
                    <div className="ml-6 flex items-center space-x-2">{children}</div>
                )}
            </div>
        </div>
    );
}
