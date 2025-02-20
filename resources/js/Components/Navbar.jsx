import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-black1 shadow-lg backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold flex items-center">
                    <img
                        src="/images/3k-logo.png"
                        alt="Logo"
                        className="h-10"
                    />
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-6">
                    {[
                        "Home",
                        "Tentang Klinik",
                        "Layanan",
                        "Berita",
                        "Kontak",
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                            className="relative group transition duration-300 text-white1 hover:text-gold1"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Toggle Menu Mobile */}
                <button
                    className="md:hidden text-white1 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-black1 py-4 absolute top-16 left-0 w-full shadow-lg">
                    {[
                        "Home",
                        "Tentang Klinik",
                        "Layanan",
                        "Berita",
                        "Kontak",
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                            className="block py-2 px-6 text-white1 hover:text-gold1 hover:bg-gray-800 transition duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
