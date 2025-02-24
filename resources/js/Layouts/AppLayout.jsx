import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Home, Users, CalendarClock, Activity, Star } from "lucide-react";
import Navbar from "@/Components/Navbar";
import BottomNavbar from "@/Components/BottomNavbar";

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
        <div className="min-h-screen flex flex-col bg-[#1D1912] text-white">
            {/* Navbar */}
            <Navbar />
            {/* Konten Utama */}
            <main className="flex-1">{children}</main>
            {/* Bottom Navigation untuk Mobile */}
            {isMobile && <BottomNavbar />}
        </div>
    );
}

function NavItem({ href, icon: Icon, label, activeColor = "text-[#D2A63C]" }) {
    return (
        <Link
            href={href}
            className="flex flex-col items-center text-[#F3F3E6] hover:text-[#D2A63C] transition duration-300 group"
        >
            <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#D2A63C] group-hover:shadow-[0_0_10px_rgba(210,166,60,0.8)] transition-all duration-300">
                <Icon size={22} className="text-current" />
            </div>
            <span className="text-xs mt-1">{label}</span>
        </Link>
    );
}
