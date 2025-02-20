import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Home, User, Calendar, BarChart, MessageCircle } from "lucide-react";
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
                <div className="fixed bottom-0 left-0 right-0 bg-black1 py-2 flex justify-around border-t border-gold shadow-lg">
                    <Link
                        href="/"
                        className="flex flex-col items-center text-gold transition duration-300 hover:text-white"
                    >
                        <Home size={20} />
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link
                        href="/doctors"
                        className="flex flex-col items-center text-gold transition duration-300 hover:text-white"
                    >
                        <User size={20} />
                        <span className="text-xs">Doctors</span>
                    </Link>
                    <Link
                        href="/emergency"
                        className="flex flex-col items-center text-red-600 transition duration-300 hover:text-white"
                    >
                        <Calendar size={20} />
                        <span className="text-xs">Emergency</span>
                    </Link>
                    <Link
                        href="/statistics"
                        className="flex flex-col items-center text-gold transition duration-300 hover:text-white"
                    >
                        <BarChart size={20} />
                        <span className="text-xs">Statistic</span>
                    </Link>
                    <Link
                        href="/testimonial"
                        className="flex flex-col items-center text-gold transition duration-300 hover:text-white"
                    >
                        <MessageCircle size={20} />
                        <span className="text-xs">Testimonial</span>
                    </Link>
                </div>
            )}
        </div>
    );
}
