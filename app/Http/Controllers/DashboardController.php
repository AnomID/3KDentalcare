<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Dashboard untuk pasien
     */
    public function index(): Response
    {
        $user = Auth::user();

        return match ($user->role) {
            'pasien' => Inertia::render('Pasien/Dashboard',
            ['title' => 'Dashboard Pasien','message' => 'Selamat datang di dashboard pasien!',
            ]),
            'dokter' => Inertia::render('Dokter/Dashboard',
            [
            'title' => 'Dashboard Dokter',
            'message' => 'Selamat datang di dashboard dokter!', 
            ]),
            'karyawan' => Inertia::render('Karyawan/Dashboard',
            [
            'title' => 'Dashboard Karyawan',
            'message' => 'Selamat datang di dashboard karyawan!',
            ]),
        };
    }
    public function pasien(): Response
    {
        return Inertia::render('Pasien/Dashboard', [
            'title' => 'Dashboard Pasien',
            'message' => 'Selamat datang di dashboard pasien!',
        ]);
    }

    /**
     * Dashboard untuk dokter
     */
    public function dokter(): Response
    {
        return Inertia::render('Dashboard/DokterDashboard', [
            'title' => 'Dashboard Dokter',
            'message' => 'Selamat datang di dashboard dokter!',
        ]);
    }

    /**
     * Dashboard untuk karyawan
     */
    public function karyawan(): Response
    {
        return Inertia::render('Dashboard/KaryawanDashboard', [
            'title' => 'Dashboard Karyawan',
            'message' => 'Selamat datang di dashboard karyawan!',
        ]);
    }
}
