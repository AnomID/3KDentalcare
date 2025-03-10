<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/AuthPage', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
public function store(LoginRequest $request): RedirectResponse
{
    // Validasi input
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:8',
    ]);

    $remember = $request->boolean('remember');

    // Coba autentikasi
    if (!Auth::attempt($request->only('email', 'password'), $remember)) {
        return back()->withErrors(['email' => 'Email atau password salah.']);
    }

    // Regenerasi session setelah login sukses
    $request->session()->regenerate();

    return redirect()->intended(route('dashboard'));
}



    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
