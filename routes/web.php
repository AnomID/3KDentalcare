<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PatientProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

});

Route::middleware(['auth', 'role:patient'])->group(function () {
    Route::get('/pasien-dashboard', [DashboardController::class, 'pasien'])->name('pasien.dashboard');
    Route::get('/patient/profile', [PatientProfileController::class, 'show'])->name('patient.profile');
    Route::resource('patient', PatientController::class);

});

Route::middleware(['auth', 'role:doctor'])->group(function () {
    Route::get('/dokter-dashboard', [DashboardController::class, 'dokter'])->name('dokter.dashboard');
});

Route::middleware(['auth', 'role:employee'])->group(function () {
    Route::get('/karyawan-dashboard', [DashboardController::class, 'karyawan'])->name('karyawan.dashboard');
});

require __DIR__.'/auth.php';
