//
// TODO DASHBOARD PASIEN
//
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Calendar, ClipboardList, FileText, Star } from "lucide-react";

export default function PatientDashboard() {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#BB8525]">
                        Dashboard Pasien
                    </h2>
                    <span className="text-[#F3F3E6] bg-[#BB8525] px-3 py-1 rounded-lg">
                        Halo, {auth.user.name}!
                    </span>
                </div>
            }
        >
            <Head title="Dashboard Pasien" />

            <div className="py-8 bg-[#1E1E1E] min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Info Pasien */}
                    <div className="bg-[#BB8525] p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-[#F3F3E6]">
                            Selamat datang, {auth.user.name}! 👋
                        </h3>
                        <p className="text-[#F3F3E6] mt-2">
                            Lihat informasi janji temu, riwayat perawatan, dan
                            tagihan Anda.
                        </p>
                    </div>

                    {/* Statistik */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <StatCard
                            title="Janji Temu"
                            value="3"
                            icon={Calendar}
                        />
                        <StatCard
                            title="Riwayat Perawatan"
                            value="5"
                            icon={ClipboardList}
                        />
                        <StatCard
                            title="Tagihan"
                            value="Rp 500.000"
                            icon={FileText}
                        />
                        <StatCard
                            title="Ulasan Anda"
                            value="4.5/5 ⭐"
                            icon={Star}
                        />
                    </div>

                    {/* Akses Cepat */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-[#F3F3E6] mb-4">
                            Akses Cepat
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ActionCard
                                title="Buat Janji Baru"
                                href="/appointments"
                                icon={Calendar}
                            />
                            <ActionCard
                                title="Lihat Riwayat"
                                href="/history"
                                icon={ClipboardList}
                            />
                            <ActionCard
                                title="Bayar Tagihan"
                                href="/billing"
                                icon={FileText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// Komponen Kartu Statistik
function StatCard({ title, value, icon: Icon }) {
    return (
        <div className="bg-[#D2A63C] p-6 rounded-lg shadow-md flex items-center space-x-4 border-l-4 border-[#BB8525]">
            <Icon size={32} className="text-[#1E1E1E]" />
            <div>
                <p className="text-lg font-semibold text-[#1E1E1E]">{title}</p>
                <p className="text-2xl font-bold text-[#F3F3E6]">{value}</p>
            </div>
        </div>
    );
}

// Komponen Kartu Aksi
function ActionCard({ title, href, icon: Icon }) {
    return (
        <a
            href={href}
            className="bg-[#A5A5A5] p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-[#BB8525] transition"
        >
            <Icon size={28} className="text-[#1E1E1E]" />
            <p className="text-lg font-semibold text-[#1E1E1E]">{title}</p>
        </a>
    );
}
