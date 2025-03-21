<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index(): Response
    // {
    //     $user = Auth::user();

    //     if ($user->role === 'patient') {
    //         // Jika pasien login, hanya tampilkan datanya sendiri
    //         $patients = Patient::where('user_id', $user->id)->latest()->paginate(10);
    //     } else {
    //         // Jika dokter atau karyawan, tampilkan semua pasien
    //         $patients = Patient::latest()->paginate(10);
    //     }

    //     return Inertia::render('Pasien/Profile', ['patients' => $patients]);
    // }

    /**
     * Store a newly created resource in storage.
     */
public function store(Request $request)
{
    $user = Auth::user();

    // Cek apakah pasien sudah memiliki data
    if ($user->role === 'patient' && Patient::where('user_id', $user->id)->exists()) {
        return redirect()->route('patient.profile')->with('warning', 'Anda sudah memiliki data pasien. Silakan perbarui data yang ada.');
    }

    $rules = [
        'name' => 'required|string|max:255',
        'birth_place' => 'required|string|max:255',
        'birth_date' => 'required|date',
        'age' => 'required|integer|min:0',
        'citizenship' => 'required|string|max:100',
        'gender' => 'required|string|max:10',
        'occupation' => 'nullable|string|max:255',
        'address' => 'required|string',
        'phone' => 'required|string|max:15|unique:patients,phone',
        'blood_type' => 'required|in:A,B,AB,O',
    ];

    // Jika employee, tambahkan identity_type dan no_identity
    if ($user->role === 'employee') {
        $rules['identity_type'] = 'required|in:KTP,PASSPORT';
        $rules['no_identity'] = 'nullable|string|unique:patients,no_identity';
    }

    $validated = $request->validate($rules);

    // Set user_id jika yang menambahkan adalah pasien
    if ($user->role === 'patient') {
        $validated['user_id'] = $user->id;
    }

    Patient::create($validated);

    return redirect()->route('patient.profile')->with('success', 'Data Pasien Berhasil Disimpan');
}


    /**
     * Update the specified resource in storage.
     */

     public function update(Request $request, Patient $patient)
{
    $user = Auth::user();

    // Pastikan pasien hanya bisa mengedit data dirinya sendiri
    if ($user->role === 'patient' && $patient->user_id !== $user->id) {
        abort(403, 'Anda tidak memiliki izin untuk mengedit data ini.');
    }

    $rules = [
        'name' => 'required|string|max:255',
        'birth_place' => 'required|string|max:255',
        'birth_date' => 'required|date',
        'age' => 'required|integer|min:0',
        'citizenship' => 'required|string|max:100',
        'gender' => 'required|string|max:10',
        'occupation' => 'nullable|string|max:255',
        'address' => 'required|string',
        'phone' => 'required|string|max:15|unique:patients,phone,' . $patient->id,
        'blood_type' => 'required|in:A,B,AB,O',
    ];

    // Jika employee, izinkan edit identity_type dan no_identity
    if ($user->role === 'employee') {
        $rules['identity_type'] = 'required|in:KTP,PASSPORT';
        $rules['no_identity'] = 'nullable|string|unique:patients,no_identity,' . $patient->id;
    }

    $validated = $request->validate($rules);
    
    $patient->update($validated);

    return redirect()->route('pasien.profile')->with('success', 'Data Pasien Berhasil Diperbaharui');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $user = Auth::user();

        // Hanya dokter atau karyawan yang dapat menghapus pasien
        if (!in_array($user->role, ['doctor', 'employee'])) {
            abort(403, 'Anda tidak memiliki izin untuk menghapus data ini.');
        }

        $patient->delete();
        return redirect()->route('pasien.profile')->with('success', 'Data Pasien Berhasil Dihapus');
    }
}
