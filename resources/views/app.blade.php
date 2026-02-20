<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'ForEachCode') }} | B2B Software Development Studio</title>

    <meta name="description" content="ForEachCode delivers fixed-scope software projects for B2B SaaS and SMEs with senior execution and predictable outcomes.">
    <meta property="og:title" content="ForEachCode | B2B Software Development Studio">
    <meta property="og:description" content="Web platforms, APIs, and modernization services with clear scope, technical quality, and business focus.">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ForEachCode">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:url" content="{{ rtrim(config('app.url', 'https://foreachcode.net'), '/') }}/pt">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="ForEachCode | B2B Software Development Studio">
    <meta name="twitter:description" content="Senior software execution for B2B products with fixed scope and predictable delivery.">

    @php
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'ProfessionalService',
            'name' => 'ForEachCode',
            'url' => rtrim(config('app.url', 'https://foreachcode.net'), '/'),
            'email' => 'foreachcode@foreachcode.net',
            'areaServed' => ['BR', 'US', 'Remote'],
            'serviceType' => [
                'Software Development',
                'Technical Discovery',
                'Web Platform Engineering',
                'API and Backend Development',
            ],
        ];
    @endphp
    <script type="application/ld+json">{!! json_encode($structuredData, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}</script>

    @vite(['resources/css/app.css', 'resources/js/main.ts'])
</head>
<body class="antialiased">
    <div id="app"></div>
</body>
</html>
