# Migração Noah's Arc Foundation para Next.js

Este plano detalha a transformação do site institucional "Noah's Arc Foundation" de um arquivo estático HTML para uma aplicação robusta em Next.js, incluindo um painel administrativo para gestão de conteúdo.

## User Review Required

> [!IMPORTANT]
> **Painel de Controle:** Proponho o uso do **Supabase** para Autenticação e Banco de Dados (PostgreSQL) por ser gratuito para projetos deste porte e fácil de configurar com Next.js.
> **Estilização:** Manteremos o **Tailwind CSS**, migrando do CDN para a configuração nativa do Next.js (v4).
> **Linguagem:** Utilizaremos **TypeScript** para garantir maior segurança e manutenibilidade do código.

## Open Questions

- Você já possui uma conta no **Supabase** ou prefere outra solução para o banco de dados (ex: Firebase, Prisma com banco próprio)?
- O painel de edição deve permitir alterar quais partes específicas do site? (Ex: Apenas textos de depoimentos, galeria de imagens, ou todo o conteúdo textual do site?)

## Proposed Changes

### [Foundation] Infraestrutura

#### [NEW] [package.json](file:///Users/tcadigital/Desktop/noahsarc/package.json)
Inicialização do projeto Next.js com as dependências necessárias.

#### [NEW] [next.config.js](file:///Users/tcadigital/Desktop/noahsarc/next.config.js)
Configuração do Next.js.

### [Frontend] Migração de UI

#### [NEW] [app/layout.tsx](file:///Users/tcadigital/Desktop/noahsarc/app/layout.tsx)
Migração da estrutura base.

#### [NEW] [app/page.tsx](file:///Users/tcadigital/Desktop/noahsarc/app/page.tsx)
Migração do conteúdo principal.

### [Admin] Painel de Conteúdo

#### [NEW] [app/admin/dashboard/page.tsx](file:///Users/tcadigital/Desktop/noahsarc/app/admin/dashboard/page.tsx)
Interface para edição dos campos do site.

## Verification Plan

### Automated Tests
- `npm run build`: Verificar compilação.
- `python .agent/scripts/checklist.py .`: Auditoria de segurança.

### Manual Verification
- Testar o fluxo de login no painel.
- Validar a responsividade mobile.
