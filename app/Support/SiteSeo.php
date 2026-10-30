<?php

namespace App\Support;

/**
 * Metadados e HTML pré-renderizado de cada página do site (pt/en).
 */
class SiteSeo
{
    public const LOCALES = ['pt', 'en'];

    public const SLUGS = ['', 'services', 'work', 'about', 'team', 'skills', 'philosophy', 'contact'];

    public const LEGACY_SLUGS = ['services', 'work', 'about', 'team', 'skills', 'philosophy', 'contact'];

    private const FALLBACK = [
        'pt' => [
            'title' => 'ForEachCode | Desenvolvimento de software B2B',
            'description' => 'Projetos de software para SaaS B2B e PMEs com escopo fechado, execução sênior e entrega previsível.',
        ],
        'en' => [
            'title' => 'ForEachCode | B2B Software Development Studio',
            'description' => 'Fixed-scope software projects for B2B SaaS and SMEs with senior execution and predictable delivery.',
        ],
    ];

    private ?array $pages = null;

    public function __construct(private string $manifestPath) {}

    public static function fromConfig(): self
    {
        return new self((string) config('site.ssr_manifest'));
    }

    /**
     * @return list<string>
     */
    public static function paths(): array
    {
        $paths = [];

        foreach (self::LOCALES as $locale) {
            foreach (self::SLUGS as $slug) {
                $paths[] = self::localizedPath($locale, $slug);
            }
        }

        return $paths;
    }

    public static function localizedPath(string $locale, string $slug): string
    {
        return $slug === '' ? "/{$locale}" : "/{$locale}/{$slug}";
    }

    public static function url(string $path): string
    {
        return config('site.url').$path;
    }

    public function isPage(string $path): bool
    {
        return in_array($path, self::paths(), true);
    }

    /**
     * @return array{locale: string, slug: string, title: string, description: string, ogTitle: string, ogDescription: string, html: string}
     */
    public function page(string $path): array
    {
        [$locale, $slug] = $this->split($path);
        $page = $this->pages()[$path] ?? [];
        $fallback = self::FALLBACK[$locale];

        return [
            'locale' => $locale,
            'slug' => $slug,
            'title' => $page['title'] ?? $fallback['title'],
            'description' => $page['description'] ?? $fallback['description'],
            'ogTitle' => $page['ogTitle'] ?? $page['title'] ?? $fallback['title'],
            'ogDescription' => $page['ogDescription'] ?? $page['description'] ?? $fallback['description'],
            'html' => $page['html'] ?? '',
        ];
    }

    /**
     * @return array<string, string> hreflang => URL
     */
    public function alternates(string $slug): array
    {
        return [
            'pt-BR' => self::url(self::localizedPath('pt', $slug)),
            'en' => self::url(self::localizedPath('en', $slug)),
            'x-default' => self::url(self::localizedPath('pt', $slug)),
        ];
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function split(string $path): array
    {
        $parts = explode('/', trim($path, '/'), 2);
        $locale = in_array($parts[0], self::LOCALES, true) ? $parts[0] : 'pt';

        return [$locale, $parts[1] ?? ''];
    }

    private function pages(): array
    {
        if ($this->pages !== null) {
            return $this->pages;
        }

        $json = is_file($this->manifestPath) ? file_get_contents($this->manifestPath) : false;
        $this->pages = $json === false ? [] : (json_decode($json, true) ?: []);

        return $this->pages;
    }
}
