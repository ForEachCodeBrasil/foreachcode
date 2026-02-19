# Agent Guidelines for ForEachCode

## Project Overview

ForEachCode - Site institucional em Laravel 12 + Vue 3 SPA com TypeScript, Tailwind CSS v4, e tema cyberpunk/hacker (baseado no design do Lycento).

## Project Structure

```
foreachcode/
├── app/
│   ├── Http/Controllers/      # API controllers
│   │   └── ContactController.php
│   ├── Http/Requests/         # Form requests
│   │   └── ContactRequest.php
│   └── Models/                # Eloquent models
├── resources/
│   ├── js/
│   │   ├── views/             # Page components (Vue)
│   │   ├── components/        # Reusable components
│   │   ├── router/            # Vue Router config
│   │   └── assets/            # Static assets
│   ├── css/
│   │   └── app.css            # Tailwind + custom CSS
│   └── views/
│       └── app.blade.php      # SPA entry point
├── routes/
│   ├── web.php                # SPA catch-all
│   └── api.php                # API routes
└── tests/                     # Pest tests
```

## Build Commands

```bash
# Development
npm run dev           # Start Vite dev server
php artisan serve     # Start Laravel server (or use Herd)

# Production build
npm run build         # Build frontend assets

# Run both (concurrently)
composer dev          # Laravel + Vite + Queue + Logs (if configured)
```

## Testing Commands

```bash
# Run all tests
php artisan test
./vendor/bin/pest

# Run specific test file
./vendor/bin/pest tests/Feature/ContactTest.php

# Run specific test
./vendor/bin/pest --filter="test_contact_form_submission"
```

## Linting & Code Style

```bash
# PHP linting with Laravel Pint
./vendor/bin/pint
./vendor/bin/pint --test     # Check without fixing
```

## PHP Code Style

- **Namespace**: `App\` prefix, PSR-4 autoloading
- **Return types**: Always declare return types (`: JsonResponse`, `: void`)
- **Quotes**: Single quotes for strings
- **Indentation**: 4 spaces, no tabs
- **Arrays**: Short syntax `[]`, trailing commas in multi-line
- **Error handling**: Use try/catch with `\Throwable`, return proper HTTP status codes
- **Validation**: Use Form Request classes for validation

## Vue/TypeScript Code Style

- **Script setup**: Always use `<script setup lang="ts">`
- **Imports**: Single quotes, no semicolons
- **Component names**: PascalCase
- **Styling**: Tailwind classes for layout/utilities, scoped styles when needed
- **Quotes**: Single quotes in TS/JS, double in HTML templates
- **Indentation**: 2 spaces for Vue/TS

## Design System (Cyberpunk Theme)

### Colors
- **Background**: `#0d1117` (deep space black)
- **Surface**: `#161b22` (cards, elevated surfaces)
- **Border**: `#21262d` (subtle), `#30363d` (highlight)
- **Primary Accent**: `#22c55e` (neon green)
- **Text**: `#f3f4f6` (primary), `#9ca3af` (secondary), `#6b7280` (muted)

### Typography
- **Font**: JetBrains Mono (monospace)
- **Base size**: 14px (text-sm)
- **Line height**: 1.6

### Components
- **Border radius**: `rounded-sm` (2px) or minimal rounding
- **Borders**: Use `border-gray-800` as base
- **Glow effects**: `hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]`
- **Background grid**: Use `.bg-grid` class for grid pattern

## Key Conventions

- **SPA Routing**: All non-API routes return `view('app')` with catch-all regex
- **API Responses**: Always return `JsonResponse` with proper HTTP codes
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin
- **TypeScript**: Strict mode enabled
- **SEO**: Meta tags e Schema.org implementados no template Blade

## Deployment

### Local Development (Laravel Herd)
- Site automaticamente disponível em: `https://foreachcode.test`
- Herd gerencia PHP, nginx e SSL automaticamente

### Produção (Coolify)
1. Configurar Nixpacks/Docker
2. Build: `composer install && npm ci && npm run build`
3. Documentação completa em `docs/deploy.md`

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form

## Commits

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `docs:` - Documentation
- `style:` - Styling changes
- `test:` - Tests

All in English.
