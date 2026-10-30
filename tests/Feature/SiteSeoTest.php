<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

class SiteSeoTest extends TestCase
{
    private string $manifest;

    protected function setUp(): void
    {
        parent::setUp();

        $this->manifest = tempnam(sys_get_temp_dir(), 'pages').'.json';
        file_put_contents($this->manifest, json_encode([
            '/pt/services' => [
                'title' => 'Serviços | ForEachCode',
                'description' => 'Pacotes com escopo e prazo.',
                'ogTitle' => 'Serviços',
                'ogDescription' => 'Pacotes com escopo e prazo.',
                'html' => '<section id="ssr-marker">serviços</section>',
            ],
        ]));
        config(['site.ssr_manifest' => $this->manifest, 'site.url' => 'https://foreachcode.net']);
    }

    protected function tearDown(): void
    {
        @unlink($this->manifest);

        parent::tearDown();
    }

    public function test_page_uses_prerendered_html_and_meta(): void
    {
        $this->get('/pt/services')
            ->assertOk()
            ->assertSee('<html lang="pt-BR"', false)
            ->assertSee('<title>Serviços | ForEachCode</title>', false)
            ->assertSee('<section id="ssr-marker">serviços</section>', false)
            ->assertSee('<link rel="canonical" href="https://foreachcode.net/pt/services">', false)
            ->assertSee('hreflang="en" href="https://foreachcode.net/en/services"', false)
            ->assertSee('https://foreachcode.net/images/og/foreachcode-pt.png', false);
    }

    public function test_english_page_falls_back_to_default_meta_and_english_lang(): void
    {
        $this->get('/en/work')
            ->assertOk()
            ->assertSee('<html lang="en"', false)
            ->assertSee('ForEachCode | B2B Software Development Studio', false)
            ->assertSee('foreachcode@foreachcode.net', false);
    }

    public function test_legacy_slug_redirects_to_portuguese(): void
    {
        $this->get('/contact')->assertStatus(301)->assertRedirect('/pt/contact');
    }

    public function test_unknown_page_is_404_and_noindex(): void
    {
        $this->get('/pt/nao-existe')
            ->assertNotFound()
            ->assertSee('<meta name="robots" content="noindex">', false);
    }

    public function test_sitemap_lists_every_page_with_alternates(): void
    {
        $response = $this->get('/sitemap.xml');

        $response->assertOk();
        $this->assertStringContainsString('application/xml', (string) $response->headers->get('Content-Type'));
        $this->assertSame(16, substr_count($response->getContent(), '<url>'));
        $response->assertSee('<loc>https://foreachcode.net/en/contact</loc>', false);
        $response->assertSee('hreflang="x-default" href="https://foreachcode.net/pt/contact"', false);
    }
}
