<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Mail\ContactMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactTest extends TestCase
{
    public function test_contact_form_submission_succeeds_with_valid_data(): void
    {
        Mail::fake();
        Log::spy();

        $response = $this->postJson('/api/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'service' => 'Web Development',
            'message' => 'This is a test message with more than 10 characters.',
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'message' => 'Mensagem enviada com sucesso!',
                'data' => [
                    'name' => 'John Doe',
                    'email' => 'john@example.com',
                ],
            ]);

        Mail::assertQueued(ContactMail::class, function ($mail) {
            return $mail->hasTo(config('mail.contact.email', 'foreachdev@foreachdev.com'));
        });

        Log::shouldHaveReceived('info')
            ->with('Novo contato recebido', \Mockery::subset([
                'name' => 'John Doe',
                'email' => 'john@example.com',
            ]));
    }

    public function test_contact_form_fails_with_missing_required_fields(): void
    {
        $response = $this->postJson('/api/contact', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'service', 'message']);
    }

    public function test_contact_form_fails_with_invalid_email(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'service' => 'Web Development',
            'message' => 'This is a test message with more than 10 characters.',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    public function test_contact_form_fails_with_short_message(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'service' => 'Web Development',
            'message' => 'Short',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['message']);
    }

    public function test_health_endpoint_returns_ok(): void
    {
        $response = $this->getJson('/api/health');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'timestamp',
            ])
            ->assertJson([
                'status' => 'ok',
            ]);
    }
}
