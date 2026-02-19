# GEMINI.md - ForEachDev Project Context

## Project Overview
**ForEachDev** is a modern institutional website for a software development company. It is built using a **Laravel 12** backend as a REST API and a **Vue 3 SPA** frontend with **TypeScript**. The application features a distinctive **cyberpunk/hacker** design theme (dark mode, neon green accents, monospace typography).

### Core Technologies
- **Backend:** Laravel 12, PHP 8.2+, SQLite.
- **Frontend:** Vue 3 (Composition API with `<script setup>`), TypeScript, Vite.
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite`).
- **Architecture:** Single Page Application (SPA) with a catch-all route in Laravel and Vue Router for client-side navigation.

---

## Building and Running

### Initial Setup
To set up the project from scratch, run the following command:
```bash
composer setup
```
This script handles:
1. `composer install`
2. `.env` file creation
3. `php artisan key:generate`
4. `php artisan migrate`
5. `npm install`
6. `npm run build`

### Development
To start the development environment (Server, Vite, Queue, and Logs concurrently):
```bash
composer dev
```
Alternatively, run them separately:
- **Backend:** `php artisan serve`
- **Frontend:** `npm run dev`

### Production Build
To build the frontend assets for production:
```bash
npm run build
```

### Testing
The project uses PHPUnit (configured in `composer.json` and `phpunit.xml`):
```bash
# Run all tests
composer test
# Or
php artisan test
```

---

## Development Conventions

### PHP Backend
- **Code Style:** PSR-12, enforced by **Laravel Pint**. Run `./vendor/bin/pint` to fix styling.
- **Type Safety:** Always declare return types and use strict typing where possible.
- **Validation:** Use **Form Request** classes (e.g., `App\Http\Requests\ContactRequest`).
- **Routing:** 
    - API routes in `routes/api.php`.
    - SPA catch-all in `routes/web.php` (redirects all non-API paths to the Vue app).

### Vue & TypeScript Frontend
- **Components:** Use PascalCase for component names and files.
- **Script Setup:** Always use `<script setup lang="ts">`.
- **Indentation:** 2 spaces for `.vue` and `.ts` files.
- **Styling:** Use Tailwind CSS v4 utility classes. Prefer `rounded-sm` (2px) and neon glow effects (`shadow-[0_0_15px_rgba(34,197,94,0.3)]`).
- **Imports:** Relative paths are used in the router (e.g., `../views/HomeView.vue`).

### Git Conventions
- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/) in English (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).

---

## Key Project Structure
- `app/Http/Controllers/`: Contains API controllers (e.g., `ContactController.php`).
- `resources/js/views/`: Vue page components (Home, Services, Portfolio, About, Contact, Blog).
- `resources/js/components/`: Reusable Vue components (AppHeader, AppFooter).
- `resources/js/router/index.ts`: Vue Router configuration.
- `Plan.md`: Detailed development roadmap and status.
- `AGENTS.md`: Specific guidelines and project details for AI agents.
- `docs/deploy.md`: Deployment instructions (Coolify/Nixpacks).
