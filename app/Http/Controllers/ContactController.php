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
        $data = $request->validated();
        $locale = $data['locale'] ?? null;
        $recipient = $this->resolveContactRecipient($locale);
        $submission = ContactSubmission::create([
            ...$data,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        try {
            Mail::to($recipient)
                ->send(new ContactMail($data));
        } catch (\Throwable $e) {
            Log::warning('Contato salvo, mas houve falha ao enviar email', [
                'error' => $e->getMessage(),
                'submission_id' => $submission->id,
                'recipient' => $recipient,
            ]);
        }

        Log::info('Novo contato recebido', [
            ...$data,
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
