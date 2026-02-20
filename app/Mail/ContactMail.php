<?php

declare(strict_types=1);

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public array $contactData
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Novo contato: '.$this->contactData['service'],
            replyTo: [$this->contactData['email']],
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
