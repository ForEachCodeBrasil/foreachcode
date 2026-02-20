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
        $submission = ContactSubmission::create([
            ...$data,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        try {
            Mail::to(config('mail.contact.email', 'foreachcode@foreachcode.net'))
                ->send(new ContactMail($data));
        } catch (\Throwable $e) {
            Log::warning('Contato salvo, mas houve falha ao enviar email', [
                'error' => $e->getMessage(),
                'submission_id' => $submission->id,
            ]);
        }

        Log::info('Novo contato recebido', [
            ...$data,
            'submission_id' => $submission->id,
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
}
