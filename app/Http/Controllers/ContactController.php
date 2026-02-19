<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        $data = $request->validated();

        try {
            Log::info('Novo contato recebido', $data);

            // Enviar email
            Mail::to(config('mail.contact.email', 'contato@foreachcode.net'))
                ->send(new ContactMail($data));

            return response()->json([
                'message' => 'Mensagem enviada com sucesso!',
                'data' => [
                    'name' => $data['name'],
                    'email' => $data['email'],
                ],
            ], 201);
        } catch (\Throwable $e) {
            Log::error('Erro ao processar contato', [
                'error' => $e->getMessage(),
                'data' => $data,
            ]);

            return response()->json([
                'message' => 'Erro ao enviar mensagem. Tente novamente.',
            ], 500);
        }
    }
}
