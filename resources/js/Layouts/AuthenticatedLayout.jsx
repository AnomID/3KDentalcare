import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import BottomNavbar from "@/Components/BottomNavbar";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="min-h-screen bg-[#1E1E1E] text-[#F3F3E6]">
            {/* Navbar */}
            <nav className="border-b border-[#BB8525] bg-[#1E1E1E] shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo & Links */}
                    <div className="flex items-center space-x-6">
                        <Link href="/">
                            <ApplicationLogo className="h-10 w-auto text-[#BB8525]" />
                        </Link>
                        <div className="hidden sm:flex space-x-6">
                            <NavLink href={route("dashboard")}>
                                Dashboard
                            </NavLink>
                            <NavLink href="/appointments">Janji Temu</NavLink>
                            <NavLink href="/history">Riwayat</NavLink>
                            <NavLink href="/billing">Tagihan</NavLink>
                        </div>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="hidden sm:flex">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="px-4 py-2 bg-[#BB8525] text-[#1E1E1E] rounded-md font-medium hover:bg-[#D2A63C] transition">
                                    {auth.user.name}
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden p-2 text-[#BB8525]"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="sm:hidden bg-[#1E1E1E]">
                        <NavLink href={route("dashboard")}>Dashboard</NavLink>
                        <NavLink href="/appointments">Janji Temu</NavLink>
                        <NavLink href="/history">Riwayat</NavLink>
                        <NavLink href="/billing">Tagihan</NavLink>
                        <div className="border-t border-[#BB8525] py-4">
                            <NavLink href={route("profile.edit")}>
                                Profile
                            </NavLink>
                            <NavLink
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-[#BB8525] text-[#1E1E1E] shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-6">{header}</div>
                </header>
            )}

            {/* Main Content */}
            <main className="py-10">{children}</main>

            {/* Bottom Navbar */}
            <BottomNavbar />
        </div>
    );
}
