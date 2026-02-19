# Plano de Desenvolvimento - ForEachDev

## Resumo do Projeto
Site institucional moderno para ForEachDev (empresa de desenvolvimento de software) usando Laravel 12 + Vue 3 SPA com design cyberpunk/hacker (tema escuro baseado no Lycento) e arquitetura REST API.

## Status Atual
- [x] Setup inicial Laravel 12 + Vue 3
- [x] Configuração Tailwind CSS v4 com tema cyberpunk
- [x] Componentes base (Header, Footer)
- [x] Páginas principais (Home, Services, Portfolio, About, Contact, Blog)
- [x] API REST para formulário de contato
- [x] SEO básico implementado
- [x] Build do Vite funcionando
- [x] Testes PHPUnit configurados e passando
- [x] Envio real de emails configurado (ContactMail)
- [x] Documentação de deploy criada

## Problemas Resolvidos
1. **Build do Vite**: Corrigidos imports relativos no `router/index.ts` (de `./views/` para `../views/`)
2. **Rotas API**: Adicionada configuração `api` no `bootstrap/app.php`
3. **Testes**: Implementados testes de feature para formulário de contato com Mail fake

## Deploy

### Local (Laravel Herd)
- URL: https://foreachdev.test
- Certificado SSL automático
- Desenvolvimento com `npm run dev` + `php artisan serve`

### Produção (Coolify)
- Documentação completa em `docs/deploy.md`
- Configuração Nixpacks incluída
- Build assets otimizado

## Comandos Úteis
```bash
# Desenvolvimento
cd /Volumes/scandisk2TB/dev/Pessoal/foreachdev
npm run dev
php artisan serve

# Build
npm run build

# Testes
./vendor/bin/phpunit
./vendor/bin/phpunit tests/Feature/ContactTest.php

# Lint
./vendor/bin/pint
./vendor/bin/pint --test
```

## Estrutura do Projeto
```
foreachdev/
├── app/Http/Controllers/ContactController.php
├── app/Http/Requests/ContactRequest.php
├── app/Mail/ContactMail.php
├── resources/js/
│   ├── views/ (Home, Services, Portfolio, About, Contact, Blog)
│   ├── components/ (AppHeader, AppFooter)
│   ├── router/index.ts
│   └── main.ts
├── resources/views/emails/contact.blade.php
├── tests/Feature/ContactTest.php
├── docs/deploy.md
└── AGENTS.md
```

## Design System
- Cores: #0d1117 (fundo), #22c55e (neon green), #161b22 (cards)
- Fonte: JetBrains Mono
- Estilo: Cyberpunk/Hacker
- Framework: Tailwind CSS v4

## Próximos Passos Opcionais
- [ ] Adicionar mais testes (frontend com Vitest)
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Adicionar analytics
- [ ] Otimizar SEO (sitemap.xml, robots.txt)
- [ ] Configurar CDN para assets

---

**Projeto pronto para deploy!**

Última atualização: 19/02/2026
