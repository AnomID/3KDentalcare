import { useState, Fragment } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PatientForm from "./Partials/PatientForm";
export default function Profile({ mustVerifyEmail, status, auth, patient }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Form Patient
                </h2>
            }
        >
            <Head title="Patient Form" />
            <PatientForm patient={patient} />
        </AuthenticatedLayout>
    );
}
