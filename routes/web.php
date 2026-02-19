<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Healthcheck endpoint
Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});

// SPA catch-all route
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api|health).*')->name('home');
