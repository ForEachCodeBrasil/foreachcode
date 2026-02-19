<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'ForEachDev') }}</title>

    <meta name="description" content="ForEachDev builds and ships software products with engineering clarity and delivery discipline.">
    <meta property="og:title" content="ForEachDev | Software Delivery Studio">
    <meta property="og:description" content="Product engineering, backend systems, and senior technical execution for modern teams.">
    <meta property="og:type" content="website">

    @vite(['resources/css/app.css', 'resources/js/main.ts'])
</head>
<body class="antialiased">
    <div id="app"></div>
</body>
</html>
