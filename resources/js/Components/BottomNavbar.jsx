import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Home, Users, CalendarClock, Activity, Star } from "lucide-react";
import Navbar from "@/Components/Navbar";

export default function AppLayout({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navbar */}
            <Navbar />

            {/* Konten Utama */}
            <main className="flex-1">{children}</main>

            {/* Bottom Navigation untuk Mobile */}
            {isMobile && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-black/70 backdrop-blur-md border border-[#BB8525] shadow-lg shadow-[#BB8525]/50 rounded-2xl py-3 flex justify-around">
                    <NavItem href="/" icon={Home} label="Home" />
                    <NavItem href="/doctors" icon={Users} label="Doctors" />
                    <NavItem
                        href="/emergency"
                        icon={CalendarClock}
                        label="Emergency"
                        activeColor="text-red-500"
                    />
                    <NavItem href="/statistics" icon={Activity} label="Stats" />
                    <NavItem href="/testimonial" icon={Star} label="Reviews" />
                </div>
            )}
        </div>
    );
}

function NavItem({ href, icon: Icon, label, activeColor = "text-[#D2A63C]" }) {
    return (
        <Link
            href={href}
            className={`flex flex-col items-center text-[#F3F3E6] hover:${activeColor} transition duration-300`}
        >
            <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
                <Icon size={22} className="text-current" />
            </div>
            <span className="text-xs mt-1">{label}</span>
        </Link>
    );
}
