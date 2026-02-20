# Documentação de Deploy - ForEachCode

## Ambiente de Desenvolvimento Local (Laravel Herd)

### Pré-requisitos
- macOS com Laravel Herd instalado
- PHP 8.4+
- Node.js 20+
- Composer

### Configuração

1. **Herd detecta automaticamente** o site quando você navega até o diretório:
   ```bash
   cd /Volumes/scandisk2TB/dev/Pessoal/foreachcode
   herd open
   ```

2. **Acesse o site** em:
   - http://foreachcode.test (HTTP)
   - https://foreachcode.test (HTTPS com certificado automático)

3. **Banco de dados** (SQLite para desenvolvimento):
   ```bash
   touch database/database.sqlite
   php artisan migrate
   ```

4. **Instalar dependências**:
   ```bash
   composer install
   npm install
   ```

5. **Copiar .env**:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

6. **Iniciar desenvolvimento**:
   ```bash
   npm run dev
   # ou
   composer dev
   ```

---

## Deploy em Produção (Coolify)

### Configuração Nixpacks

Criar arquivo `nixpacks.toml` na raiz do projeto:

```toml
[phases.build]
cmds = [
  "npm ci",
  "npm run build",
  "composer install --no-dev --optimize-autoloader",
  "php artisan optimize",
  "php artisan config:cache",
  "php artisan route:cache",
  "php artisan view:cache",
]

[phases.setup]
nixPkgs = [
  "php84",
  "nodejs_20",
  "composer",
]

[start]
cmd = "php artisan serve --host=0.0.0.0 --port=$PORT"
```

### Variáveis de Ambiente (Coolify)

Configure no painel do Coolify:

```bash
APP_NAME=ForEachCode
APP_ENV=production
APP_KEY=<gerar-novo>
APP_URL=https://foreachcode.net

DB_CONNECTION=sqlite
DB_DATABASE=/app/database/database.sqlite

CACHE_STORE=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync

MAIL_MAILER=smtp
MAIL_SCHEME=smtps
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=foreachcode@foreachcode.net
MAIL_PASSWORD=<senha-da-caixa-hostinger>
MAIL_FROM_ADDRESS=foreachcode@foreachcode.net
MAIL_FROM_NAME="ForEachCode"
MAIL_CONTACT_EMAIL=foreachcode@foreachcode.net
```

### Preparar para Deploy

1. **Build local** (testar antes):
   ```bash
   npm run build
   ```

2. **Adicionar ao .gitignore**:
   ```
   /public/build/hot
   /storage/framework/views/*.php
   ```

3. **Commit**:
   ```bash
   git add .
   git commit -m "chore: production build"
   git push origin main
   ```

### Configuração no Coolify

1. Criar novo projeto
2. Selecionar repositório Git
3. Escolher branch `main`
4. Configurar como **Nixpacks**
5. Adicionar variáveis de ambiente
6. Deploy!

---

## Checklist Pré-Deploy

- [ ] Testes passando: `./vendor/bin/phpunit`
- [ ] Build funcionando: `npm run build`
- [ ] Pint lint: `./vendor/bin/pint --test`
- [ ] `.env.example` atualizado
- [ ] `composer.json` com scripts otimizados
- [ ] Documentação atualizada

---

## Troubleshooting

### Erro 404 em rotas API
Verificar `bootstrap/app.php` - deve incluir:
```php
->withRouting(
    web: __DIR__.'/../routes/web.php',
    api: __DIR__.'/../routes/api.php',
    // ...
)
```

### Assets não carregam
Verificar `resources/views/app.blade.php`:
```php
@vite(['resources/css/app.css', 'resources/js/main.ts'])
```

### Emails não enviam
Verificar configuração SMTP e logs:
```bash
tail -f storage/logs/laravel.log
```
