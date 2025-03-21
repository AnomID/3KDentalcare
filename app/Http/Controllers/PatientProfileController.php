<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class PatientProfileController extends Controller
{
    public function show(): Response
    {
        $user = Auth::user();

        // Cek apakah pasien sudah memiliki data
        $patient = Patient::where('user_id', $user->id)->first();

        if (!$patient) {
            // Jika data belum ada, arahkan ke form pendaftaran
            return Inertia::render('Pasien/Form', [
                'message' => 'Silakan lengkapi data pasien terlebih dahulu.',
            ]);
        }

        // Jika data ada, tampilkan profil pasien
        return Inertia::render('Pasien/Profile', [
            'patient' => $patient
        ]);
    }
}
