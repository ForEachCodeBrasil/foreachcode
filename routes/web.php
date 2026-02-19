<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// SPA catch-all route
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api).*')->name('home');
