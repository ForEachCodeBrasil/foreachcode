<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_root_redirects_to_portuguese_home(): void
    {
        $this->get('/')->assertRedirect('/pt')->assertStatus(301);
    }

    public function test_health_check_responds(): void
    {
        $this->get('/health')->assertOk();
    }
}
