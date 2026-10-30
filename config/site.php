<?php

return [

    /*
    | URL pública usada em canonical, hreflang, og:url e sitemap.
    */
    'url' => rtrim(env('SITE_URL', 'https://foreachcode.net'), '/'),

    /*
    | Manifesto gerado por `npm run build` (scripts/prerender.mjs).
    */
    'ssr_manifest' => env('SITE_SSR_MANIFEST', base_path('bootstrap/ssr/pages.json')),

];
