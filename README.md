# ForEachCode

Site institucional da ForEachCode com Laravel 12 + Vue 3 SPA + TypeScript + Tailwind CSS v4.

## Stack

- Backend: Laravel 12 (PHP 8.2+)
- Frontend: Vue 3 + Vue Router + TypeScript
- Build: Vite
- Estilo: Tailwind CSS v4 (tema cyberpunk)
- Banco: SQLite (local e produção atual)

## Features principais

- SPA com rotas localizadas: `/{locale}`
- Idiomas: PT e EN (`/pt`, `/en`)
- Páginas de conversão: Home, Services, Work, About, Contact
- Formulário de diagnóstico integrado em `POST /api/contact`
- Persistência de leads na tabela `contact_submissions`
- Envio de email do lead para `MAIL_CONTACT_EMAIL`
- SEO on-page com metadados por rota + JSON-LD
- Eventos GA4 no funil (se `VITE_GA_MEASUREMENT_ID` estiver configurado)

## Estrutura do projeto

```text
app/
  Http/Controllers/ContactController.php
  Http/Requests/ContactRequest.php
  Mail/ContactMail.php
  Models/ContactSubmission.php

resources/
  js/
    views/
    components/
    content/site-content.ts
    router/index.ts
  views/app.blade.php

database/
  migrations/

tests/
  Feature/ContactTest.php
```

## Setup local

1. Instalar dependências:

```bash
composer install
npm install
```

2. Configurar ambiente:

```bash
cp .env.example .env
php artisan key:generate
```

3. Criar banco SQLite e migrar:

```bash
touch database/database.sqlite
php artisan migrate
```

4. Rodar aplicação:

```bash
npm run dev
php artisan serve
```

## Build e testes

```bash
npm run build
php artisan test
./vendor/bin/pint --test
```

## Variáveis de ambiente importantes

### App / Banco

```env
APP_NAME=ForEachCode
APP_ENV=production
APP_URL=https://foreachcode.net

DB_CONNECTION=sqlite
DB_DATABASE=/app/database/database.sqlite
```

### Email (Hostinger SMTP)

```env
MAIL_MAILER=smtp
MAIL_SCHEME=smtps
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=foreachcode@foreachcode.net
MAIL_PASSWORD=<senha-da-caixa>
MAIL_FROM_ADDRESS=foreachcode@foreachcode.net
MAIL_FROM_NAME=ForEachCode
MAIL_CONTACT_EMAIL=foreachcode@foreachcode.net
```

Observação:
- O `from` é fixo no domínio para entregabilidade.
- O `reply-to` do email enviado usa o email preenchido no formulário.

### Analytics (opcional)

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Endpoints

- `GET /api/health`
- `POST /api/contact`

Payload esperado em `POST /api/contact`:

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Company Ltd",
  "service": "Discovery + Architecture",
  "budget": "R$ 25k - R$ 60k",
  "message": "Contexto e objetivo do projeto",
  "locale": "pt"
}
```

## Deploy (Coolify + Nixpacks)

- Arquivo de deploy: `nixpacks.toml`
- Start script cria `.env` de runtime e aplica migrations automaticamente.

Após alterar variáveis no Coolify, execute no container:

```bash
php artisan config:clear
php artisan config:cache
```

## Troubleshooting

### Erro no formulário: `no such table: contact_submissions`

Rode:

```bash
php artisan migrate --force
php artisan optimize:clear
```

### Email não chega

1. Verifique `MAIL_PASSWORD` no ambiente do servidor.
2. Confirme host/porta/credenciais SMTP.
3. Veja logs:

```bash
tail -f storage/logs/laravel.log
```

## Licença

Projeto proprietário da ForEachCode.
