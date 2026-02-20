<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    protected $fillable = [
        'name',
        'email',
        'company',
        'service',
        'budget',
        'message',
        'locale',
        'ip_address',
        'user_agent',
    ];
}
