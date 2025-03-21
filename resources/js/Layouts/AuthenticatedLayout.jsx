import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import BottomNavbar from "@/Components/BottomNavbar";
import Navbar from "@/Components/Navbar"; // Import Navbar
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="min-h-screen bg-[#1E1E1E] text-[#F3F3E6]">
            {/* Navbar Utama */}
            <Navbar />
            {/* Main Content */}
            <main className="py-10 max-w-7xl mx-auto px-4">{children}</main>

            {/* Bottom Navbar */}
            <BottomNavbar />
        </div>
    );
}
