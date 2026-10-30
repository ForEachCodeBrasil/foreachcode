<?php

use App\Support\SiteSeo;
use Illuminate\Http\Request;
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

Route::get('/sitemap.xml', function () {
    $seo = SiteSeo::fromConfig();

    return response()
        ->view('sitemap', [
            'entries' => collect(SiteSeo::SLUGS)->flatMap(fn (string $slug) => collect(SiteSeo::LOCALES)->map(fn (string $locale) => [
                'loc' => SiteSeo::url(SiteSeo::localizedPath($locale, $slug)),
                'alternates' => $seo->alternates($slug),
            ])),
        ])
        ->header('Content-Type', 'application/xml; charset=UTF-8');
});

Route::get('/', fn () => redirect('/pt', 301));

foreach (SiteSeo::LEGACY_SLUGS as $slug) {
    Route::get("/{$slug}", fn () => redirect("/pt/{$slug}", 301));
}

// SPA: HTML pré-renderizado + metadados por página
Route::get('/{any}', function (Request $request) {
    $path = '/'.trim($request->path(), '/');

    if (str_ends_with($request->getPathInfo(), '/')) {
        return redirect($path, 301);
    }

    $seo = SiteSeo::fromConfig();

    if (! $seo->isPage($path)) {
        return response()->view('app', [
            'page' => $seo->page('/pt'),
            'html' => '',
            'canonical' => SiteSeo::url('/pt'),
            'alternates' => [],
            'noindex' => true,
        ], 404);
    }

    $page = $seo->page($path);

    return view('app', [
        'page' => $page,
        'html' => $page['html'],
        'canonical' => SiteSeo::url($path),
        'alternates' => $seo->alternates($page['slug']),
        'noindex' => false,
    ]);
})->where('any', '^(?!api|health).*')->name('home');
