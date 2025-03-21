import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function PatientForm({ patient }) {
    const { auth } = usePage().props;
    const isEmployee = auth.user.role === "employee";
    const isPatient = auth.user.role === "patient";

    const { data, setData, post, put, processing, errors } = useForm({
        name: patient?.name || "",
        birth_place: patient?.birth_place || "",
        birth_date: patient?.birth_date || "",
        age: patient?.age || "",
        identity_type: patient?.identity_type || "KTP",
        no_identity: patient?.no_identity || "",
        citizenship: patient?.citizenship || "",
        gender: patient?.gender || "Male",
        occupation: patient?.occupation || "",
        address: patient?.address || "",
        phone: patient?.phone || "",
        blood_type: patient?.blood_type || "A",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (patient) {
            put(route("patient.update", patient.id));
        } else {
            post(route("patient.store"));
        }
    };

    return (
        <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                {patient ? "Update Patient Profile" : "Register New Patient"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "name",
                        "birth_place",
                        "birth_date",
                        "age",
                        "citizenship",
                        "occupation",
                        "address",
                        "phone",
                    ].map((key) => (
                        <div
                            key={key}
                            className={key === "address" ? "md:col-span-2" : ""}
                        >
                            <label className="block text-gray-700 font-medium mb-1">
                                {key.replace("_", " ").toUpperCase()}
                            </label>
                            <input
                                type={
                                    key === "birth_date"
                                        ? "date"
                                        : key === "age"
                                        ? "number"
                                        : "text"
                                }
                                value={data[key]}
                                onChange={(e) => setData(key, e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                            />
                            {errors[key] && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors[key]}
                                </p>
                            )}
                        </div>
                    ))}

                    {/* Gender Dropdown */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Gender
                        </label>
                        <select
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                        >
                            {["Male", "Female"].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Blood Type Dropdown */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Blood Type
                        </label>
                        <select
                            value={data.blood_type}
                            onChange={(e) =>
                                setData("blood_type", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                        >
                            {["A", "B", "AB", "O"].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Identity Type & No Identity only for Employee */}
                    {isEmployee &&
                        ["identity_type", "no_identity"].map((key) => (
                            <div key={key}>
                                <label className="block text-gray-700 font-medium mb-1">
                                    {key.replace("_", " ").toUpperCase()}
                                </label>
                                <input
                                    type="text"
                                    value={data[key]}
                                    onChange={(e) =>
                                        setData(key, e.target.value)
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-gray-900"
                                />
                                {errors[key] && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors[key]}
                                    </p>
                                )}
                            </div>
                        ))}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition ${
                        processing
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                >
                    {processing
                        ? "Processing..."
                        : patient
                        ? "Update Data"
                        : "Save Data"}
                </button>
            </form>
        </div>
    );
}
