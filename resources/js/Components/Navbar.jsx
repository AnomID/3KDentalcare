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

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

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

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {[
                        { name: "Home", id: "home" },
                        { name: "Tentang Klinik", id: "tentang" },
                        { name: "Layanan", id: "layanan" },
                        { name: "Berita", id: "berita" },
                        { name: "Kontak", id: "kontak" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="relative group transition duration-300 text-white hover:text-gold"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        {isOpen ? (
                            <X
                                size={32}
                                className="text-gold transition-transform transform rotate-90"
                            />
                        ) : (
                            <Menu
                                size={32}
                                className="text-white transition-transform transform scale-105"
                            />
                        )}
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-lg transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } flex flex-col items-center justify-center space-y-6 text-white text-xl`}
            >
                {[
                    { name: "Home", id: "home" },
                    { name: "Tentang Klinik", id: "tentang" },
                    { name: "Layanan", id: "layanan" },
                    { name: "Berita", id: "berita" },
                    { name: "Kontak", id: "kontak" },
                ].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleScroll(item.id)}
                        className="py-2 px-6 hover:text-gold transition duration-300"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}
