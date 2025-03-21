import { Link, usePage } from "@inertiajs/react";
import {
    Home,
    Users,
    LogIn,
    Briefcase,
    Star,
    LayoutDashboard,
    CalendarCheck,
    ClipboardList,
    CreditCard,
    User,
} from "lucide-react";

export default function BottomNavbar() {
    const { auth } = usePage().props;
    const user = auth.user;
    const role = user ? user.role : "none";
    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-[#BB8525] shadow-lg shadow-[#BB8525]/50 py-3 flex justify-around z-50">
            {/* Navbar untuk Non-Login */}
            {!user && (
                <>
                    <NavItem href="/" icon={Home} label="Home" />
                    <NavItem href="/doctors" icon={Users} label="Dokter" />
                    <NavItem href="/login" icon={LogIn} label="Login" />
                    <NavItem
                        href="/services"
                        icon={Briefcase}
                        label="Layanan"
                    />
                    <NavItem href="/testimonial" icon={Star} label="Ulasan" />
                </>
            )}

            {/* Navbar untuk Pasien */}
            {role === "patient" && (
                <>
                    <NavItem href="/dashboard" icon={Home} label="Dashbiard" />
                    <NavItem
                        href="/appointments"
                        icon={CalendarCheck}
                        label="Janji Temu"
                    />
                    <NavItem
                        href="/history"
                        icon={ClipboardList}
                        label="Riwayat"
                    />
                    <NavItem
                        href="/billing"
                        icon={CreditCard}
                        label="Tagihan"
                    />
                    <NavItem
                        href={route("patient.profile")}
                        icon={User}
                        label="Profil"
                    />
                </>
            )}
        </div>
    );
}

function NavItem({ href, icon: Icon, label }) {
    return (
        <Link
            href={href}
            className="flex flex-col items-center text-[#F3F3E6] hover:text-[#D2A63C] transition duration-300"
        >
            <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
                <Icon size={22} className="text-current" />
            </div>
            <span className="text-xs mt-1">{label}</span>
        </Link>
    );
}
