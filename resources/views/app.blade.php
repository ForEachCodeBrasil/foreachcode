@php
    $locale = $page['locale'];
    $siteUrl = config('site.url');
    $ogImage = $siteUrl.'/images/og/foreachcode-'.$locale.'.png';
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'ProfessionalService',
        'name' => 'ForEachCode',
        'url' => $siteUrl,
        'email' => 'foreachcode@foreachcode.net',
        'image' => $ogImage,
        'areaServed' => ['BR', 'US', 'Remote'],
        'founder' => [
            '@type' => 'Person',
            'name' => 'Mateus Galasso',
            'sameAs' => ['https://www.linkedin.com/in/mateus-galasso'],
        ],
        'serviceType' => [
            'Software Development',
            'Technical Discovery',
            'Payments Integration',
            'API and Backend Development',
        ],
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ $locale === 'pt' ? 'pt-BR' : 'en' }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $page['title'] }}</title>

    <meta name="description" content="{{ $page['description'] }}">
    @if ($noindex)
        <meta name="robots" content="noindex">
    @else
        <link rel="canonical" href="{{ $canonical }}">
        @foreach ($alternates as $lang => $href)
            <link rel="alternate" hreflang="{{ $lang }}" href="{{ $href }}">
        @endforeach
    @endif

    <meta property="og:title" content="{{ $page['ogTitle'] }}">
    <meta property="og:description" content="{{ $page['ogDescription'] }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ForEachCode">
    <meta property="og:locale" content="{{ $locale === 'pt' ? 'pt_BR' : 'en_US' }}">
    <meta property="og:url" content="{{ $canonical }}">
    <meta property="og:image" content="{{ $ogImage }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $page['ogTitle'] }}">
    <meta name="twitter:description" content="{{ $page['ogDescription'] }}">
    <meta name="twitter:image" content="{{ $ogImage }}">

    <script type="application/ld+json">{!! json_encode($structuredData, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}</script>

    @vite(['resources/css/app.css', 'resources/js/main.ts'])
</head>
<body class="antialiased">
    <div id="app">{!! $html !!}</div>
</body>
</html>
