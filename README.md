# PetizeChallenge — Search d_evs

Aplicação React para busca de perfis de desenvolvedores no GitHub, com listagem de repositórios em scroll infinito.

Desenvolvido como parte do **Desafio Técnico de Estágio React — Petize Q2 2026**.

## Demo

[Ver no Vercel](https://eturcodev-petize-challenge.vercel.app/)

---

## Planejamento

Este projeto foi desenvolvido seguindo um planejamento detalhado documentado em [`PLANNING.md`](./PLANNING.md), contendo:

- Checklist completo de todas as histórias e requisitos técnicos
- Roteiro de implementação em 8 fases
- Decisões de design para os gaps propositais do desafio
- Estratégia de scroll infinito documentada
- Convenção de commits seguida durante o desenvolvimento

---

## Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Biblioteca de UI | Chakra UI v2 |
| Roteamento | React Router v6 |
| Validação de Schemas | Zod |
| Internacionalização | i18next (PT / EN) |
| Fonte de dados | GitHub REST API (pública) |

---

## Funcionalidades

- Busca de usuários do GitHub por username
- Mensagem informativa quando o usuário não é encontrado
- Página de perfil completa: avatar, bio, seguidores, seguindo, empresa, localização, e-mail, site e Twitter
- Listagem de repositórios com scroll infinito (10 por página)
- Ordenação de repositórios por todos os parâmetros suportados pela API do GitHub
- Nomes dos repositórios como links para o GitHub original
- Botões de site e Twitter renderizados condicionalmente conforme os dados do perfil
- URLs de perfil compartilháveis — `/profile/:username`
- Internacionalização completa PT / EN
- Layout responsivo para desktop e mobile

---

## Rotas

| Caminho | Descrição |
|---|---|
| `/` | Home — página de busca |
| `/profile/:username` | Perfil — dados do usuário + repositórios |

---

## Como Executar

### Pré-requisitos

- Node.js v18+
- npm v9+

### Instalação
```bash
# Clone o repositório
git clone https://github.com/turco-vic/PetizeChallenge.git

# Entre na pasta do projeto
cd PetizeChallenge

# Instale as dependências
npm install
```

### Rodando localmente
```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build de produção
```bash
npm run build
```

---

## Estrutura do Projeto
```
src/
├── components/        # Componentes reutilizáveis
│   ├── layout/        # Header
│   ├── repository/    # RepositoryCard, RepositorySort
│   └── user/          # UserProfile
├── hooks/             # useGitHubUser, useInfiniteRepos
├── i18n/              # Configuração do i18next + en.json / pt.json
├── pages/             # Home, Profile
├── schemas/           # Schemas Zod: user.schema.ts, repository.schema.ts
├── services/          # github.service.ts
├── theme/             # Tema customizado do Chakra UI
└── types/             # Tipos TypeScript inferidos dos schemas Zod
```

---

---

# PetizeChallenge — Search d_evs

A React application for searching GitHub developer profiles and browsing their repositories with infinite scroll.

Built as part of the **Petize React Internship Challenge — Q2 2026**.

## Demo

[View on Vercel](https://eturcodev-petize-challenge.vercel.app/)

---

## Planning

This project was developed following a detailed plan documented in [`PLANNING.md`](./PLANNING.md), containing:

- Full checklist of all user stories and technical requirements
- 8-phase implementation roadmap
- Design decisions for the intentional gaps in the challenge
- Documented infinite scroll strategy
- Commit convention followed throughout development

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| UI Library | Chakra UI v2 |
| Routing | React Router v6 |
| Schema Validation | Zod |
| Internationalization | i18next (PT / EN) |
| Data Source | GitHub REST API (public) |

---

## Features

- Search GitHub users by username
- Informative message when user is not found
- Full profile page: avatar, bio, followers, following, company, location, email, website and Twitter
- Repository list with infinite scroll (10 repos per page)
- Sort repositories by all options supported by the GitHub API
- Repository names link directly to the original GitHub repo
- Website and Twitter buttons rendered conditionally based on profile data
- Shareable profile URLs — `/profile/:username`
- Full PT / EN internationalization
- Responsive layout for desktop and mobile

---

## Routes

| Path | Description |
|---|---|
| `/` | Home — search page |
| `/profile/:username` | Profile — user info + repositories |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation
```bash
# Clone the repository
git clone https://github.com/turco-vic/PetizeChallenge.git

# Navigate into the project
cd PetizeChallenge

# Install dependencies
npm install
```

### Running locally
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

---

## Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── layout/        # Header
│   ├── repository/    # RepositoryCard, RepositorySort
│   └── user/          # UserProfile
├── hooks/             # useGitHubUser, useInfiniteRepos
├── i18n/              # i18next setup + en.json / pt.json
├── pages/             # Home, Profile
├── schemas/           # Zod schemas: user.schema.ts, repository.schema.ts
├── services/          # github.service.ts
├── theme/             # Chakra UI custom theme
└── types/             # TypeScript types inferred from Zod schemas
```
```
