# Configuração do ForEachCode no Coolify

## URL do Dashboard
http://147.79.110.245:8000

## Passo a Passo

### 1. Acessar o Dashboard
- Abra http://147.79.110.245:8000 no navegador
- Faça login com suas credenciais

### 2. Criar Novo Projeto
1. Clique em "+ New Project"
2. Nome: `ForEachCode`
3. Descrição: `Site institucional ForEachCode`
4. Clique em "Create Project"

### 3. Adicionar Aplicação
1. No projeto criado, clique em "+ New Resource"
2. Selecione "Application"
3. Escolha "Public Repository"
4. Repository URL: `https://github.com/ForEachCodeBrasil/foreachcode`
5. Branch: `main`
6. Clique em "Continue"

### 4. Configurar Build
1. **Build Pack**: Selecione `Nixpacks`
2. **Port**: `80`
3. **Base Directory**: `/`
4. **Nixpacks Configuration File**: `nixpacks.toml`

### 5. Configurar Variáveis de Ambiente
Adicione as seguintes variáveis:

```bash
APP_NAME=ForEachCode
APP_ENV=production
APP_KEY=<gerar-novo-com-php-artisan-key-generate>
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

### 6. Configurar Domínio
1. Na aba "Domains"
2. Adicione: `foreachcode.net`
3. Ative "SSL Certificate" (Let's Encrypt)
4. Ative "Auto Renew"

### 7. Configurar Health Check (opcional)
1. Na aba "Healthcheck"
2. Path: `/api/health`
3. Port: `80`

### 8. Deploy
1. Clique em "Deploy"
2. Aguarde o build completo
3. Verifique os logs em caso de erro

## Verificação Pós-Deploy

Acesse:
- Site: https://foreachcode.net
- Health Check: https://foreachcode.net/api/health

## Troubleshooting

### Erro 404 em rotas
Verifique se o `nixpacks.toml` está configurado corretamente com o root `/app/public`

### Assets não carregam
Verifique se o build do Vite foi executado: `npm run build`

### Erro de permissão no SQLite
O banco SQLite precisa ter permissão de escrita no container

## Comandos Úteis no Servidor

```bash
# Ver logs do Coolify
ssh coolify "docker logs coolify -f"

# Ver logs da aplicação
ssh coolify "docker logs -f <container-id>"

# Restart da aplicação
ssh coolify "docker restart <container-id>"

# Acessar container
ssh coolify "docker exec -it <container-id> sh"
```

## Configuração DNS

Aponte o domínio `foreachcode.net` para:
- **A Record**: `147.79.110.245`
- **AAAA Record** (opcional): `2a02:4780:14:f190::1`
