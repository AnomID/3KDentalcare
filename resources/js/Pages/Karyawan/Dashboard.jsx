import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import {
    User,
    Calendar,
    ClipboardList,
    Activity,
    Settings,
} from "lucide-react";

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Dashboard
                    </h2>
                    <span className="text-gray-600">
                        Welcome, {auth.user.name}!
                    </span>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Grid Statistik */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <StatCard
                            title="Appointments"
                            value="24"
                            icon={Calendar}
                        />
                        <StatCard title="Patients" value="120" icon={User} />
                        <StatCard
                            title="Completed Treatments"
                            value="75"
                            icon={ClipboardList}
                        />
                        <StatCard
                            title="Activity Logs"
                            value="5"
                            icon={Activity}
                        />
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Quick Actions
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ActionCard
                                title="Manage Appointments"
                                icon={Calendar}
                            />
                            <ActionCard title="View Patients" icon={User} />
                            <ActionCard title="Settings" icon={Settings} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function StatCard({ title, value, icon: Icon }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 border-l-4 border-blue-500">
            <Icon size={32} className="text-blue-500" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}

function ActionCard({ title, icon: Icon }) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-200 transition">
            <Icon size={28} className="text-gray-700" />
            <p className="text-lg font-semibold text-gray-800">{title}</p>
        </div>
    );
}
