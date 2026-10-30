<?php

declare(strict_types=1);

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

// Enviado na hora, sem fila: o deploy não roda worker de fila.
class ContactMail extends Mailable
{
    public function __construct(
        public array $contactData
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new \Illuminate\Mail\Mailables\Address(
                config('mail.from.address', 'foreachcode@foreachcode.net'),
                config('mail.from.name', 'ForEachCode')
            ),
            subject: 'Novo contato: '.$this->contactData['service'],
            replyTo: [new \Illuminate\Mail\Mailables\Address($this->contactData['email'], $this->contactData['name'])],
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.contact',
            with: [
                'data' => $this->contactData,
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
