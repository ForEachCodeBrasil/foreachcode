<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        Log::debug('[CONTACT] Starting request processing');

        $data = $request->validated();
        Log::debug('[CONTACT] Data validated', $data);

        $locale = $data['locale'] ?? null;
        $recipient = $this->resolveContactRecipient($locale);
        Log::debug('[CONTACT] Resolved recipient', ['recipient' => $recipient, 'locale' => $locale]);

        Log::debug('[CONTACT] Creating database record...');
        $submission = ContactSubmission::create([
            ...$data,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);
        Log::debug('[CONTACT] Database record created', ['submission_id' => $submission->id]);

        Log::debug('[CONTACT] Starting email send process', ['to' => $recipient]);
        try {
            $mail = new ContactMail($data);
            Log::debug('[CONTACT] ContactMail instance created');

            Mail::to($recipient)->send($mail);
            Log::info('[CONTACT] Email sent successfully', [
                'to' => $recipient,
                'submission_id' => $submission->id,
            ]);
        } catch (\Throwable $e) {
            Log::error('[CONTACT] Email send failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'submission_id' => $submission->id,
                'recipient' => $recipient,
            ]);
        }

        Log::info('[CONTACT] Request completed', [
            'submission_id' => $submission->id,
            'recipient' => $recipient,
        ]);

        return response()->json([
            'message' => 'Mensagem enviada com sucesso!',
            'data' => [
                'id' => $submission->id,
                'name' => $data['name'],
                'email' => $data['email'],
            ],
        ], 201);
    }

    private function resolveContactRecipient(?string $locale): string
    {
        $defaultRecipient = config('mail.contact.default', 'foreachcode@foreachcode.net');

        if (in_array($locale, ['pt', 'en'], true)) {
            return (string) config("mail.contact.{$locale}", $defaultRecipient);
        }

        return (string) $defaultRecipient;
    }
}
