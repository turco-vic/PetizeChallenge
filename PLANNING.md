# Planejamento do Projeto — PetizeChallenge

**Desafio:** Estágio React Petize — Q2 2026
**Candidato:** Enzo Alves Turcovic
**Repositório:** https://github.com/turco-vic/PetizeChallenge
**Deploy:** Vercel (em andamento)

---

## Objetivo

Construir uma aplicação React que busque o perfil de desenvolvedores na API pública do GitHub e exiba seus repositórios com uma estratégia de scroll infinito.

---

## Histórias de Usuário — Checklist

### Requisitos funcionais
- [ ] Todas as telas devem ser responsivas (desktop e mobile)
- [ ] Na home, buscar usuário do GitHub por username e exibir dados na página de perfil
- [ ] Exibir mensagem informativa quando o username não for encontrado
- [ ] Na página de perfil, listar repositórios com scroll infinito (10 por página)
- [ ] Listagem de repositórios com opção de ordenação por todos os parâmetros da API do GitHub
- [ ] O componente de ordenação não está no Figma — deve ser criado seguindo o estilo visual existente
- [ ] Nomes dos repositórios devem ser links para o repositório original no GitHub
- [ ] Se o usuário tiver site no perfil, exibir botão que abre o site
- [ ] Se o usuário tiver Twitter no perfil, exibir botão que abre o Twitter

### Requisitos técnicos
- [ ] Framework: React
- [ ] Biblioteca de UI: Chakra UI v2
- [ ] Código escrito em inglês
- [ ] Internacionalização com i18next — Português e Inglês
- [ ] Duas rotas: `/` (home) e `/profile/:username` (enviável como link)
- [ ] Entidades User e Repository modeladas com Zod
- [ ] Repositório público no GitHub
- [ ] Deploy na Vercel ou GitHub Pages (diferencial)

---

## Roteiro de Implementação

### Fase 1 — Fundação
- [x] Criar projeto com Vite + React + TypeScript
- [x] Publicar repositório público no GitHub
- [x] Instalar todas as dependências (Chakra UI v2, React Router, Zod, i18next)
- [x] Configurar Chakra UI v2 + tema customizado (roxo `#7B2FBE`, azul `#4A90D9`)
- [x] Configurar React Router — rotas `/` e `/profile/:username`
- [x] Configurar i18next + arquivos de locale (`en.json` / `pt.json`)
- [x] Limpar arquivos de boilerplate do Vite

### Fase 2 — Schemas Zod
- [ ] `user.schema.ts` — modelar entidade User do GitHub
- [ ] `repository.schema.ts` — modelar entidade Repository do GitHub
- [ ] Exportar tipos TypeScript inferidos (`z.infer<typeof Schema>`)

### Fase 3 — Camada de Serviço da API
- [ ] `github.service.ts` — `getUser(username)` com validação Zod
- [ ] `github.service.ts` — `getRepositories(username, page, sort)` com validação Zod
- [ ] Todas as respostas da API validadas na camada de serviço, não nos componentes

### Fase 4 — Custom Hooks
- [ ] `useGitHubUser(username)` — busca o usuário, expõe `{ data, isLoading, error }`
- [ ] `useInfiniteRepos(username, sort)` — paginação com IntersectionObserver sentinel

### Fase 5 — Componentes
- [ ] `RepositoryCard` — exibe um repositório (nome como link, estrelas, data de atualização)
- [ ] `RepositorySort` — componente Select de ordenação estilizado com Chakra UI
- [ ] `UserProfile` — sidebar esquerda (avatar, nome, bio, stats, info de contato, botões)
- [ ] `Header` — logo + barra de busca (visível na página de perfil)

### Fase 6 — Páginas
- [ ] `Home.tsx` — busca centralizada, ao submeter navega para `/profile/:username`
- [ ] `Profile.tsx` — monta Header, UserProfile, RepositorySort, lista de RepositoryCard + sentinel

### Fase 7 — i18n
- [ ] Substituir todas as strings hardcoded pelo hook `useTranslation()`
- [ ] Testar alternância PT → EN

### Fase 8 — Polimento e Deploy
- [ ] Tratar todos os estados de UI: loading, erro, vazio, usuário não encontrado
- [ ] Revisão de responsividade mobile
- [ ] Auditar histórico de commits — garantir commits convencionais em todo o projeto
- [ ] Deploy na Vercel
- [ ] Atualizar README com link da demo

---

## Referência da API do GitHub

| Finalidade | Endpoint |
|---|---|
| Buscar perfil | `GET https://api.github.com/users/{username}` |
| Listar repositórios | `GET https://api.github.com/users/{username}/repos?page={n}&per_page=10&sort={sort}` |

### Opções de ordenação (todos os valores da API do GitHub)

| Valor `sort` | Label (PT) | Label (EN) |
|---|---|---|
| `updated` | Atualizado Recentemente | Recently Updated |
| `pushed` | Último Push | Last Pushed |
| `full_name` | Nome (A–Z) | Name (A–Z) |
| `created` | Mais Novo | Newest |
| `stars` | Mais Estrelas | Most Stars |

---

## Estratégia de Scroll Infinito

Utilizando `IntersectionObserver` nativo em um `<div>` sentinela posicionado no final da lista de repositórios. Quando o sentinela entra no viewport e ainda há páginas a carregar, a próxima página é buscada e adicionada à lista.

**Importante:** quando o parâmetro de ordenação muda, a lista de repos e o contador de página devem ser resetados para evitar dados desatualizados.

```
sentinela <div> entra no viewport
  → hasMore é true?
    → sim: setPage(prev => prev + 1) → busca próxima página → adiciona à lista
    → não: observer desconecta
```

---

## Convenção de Commits

Seguindo [Conventional Commits](https://www.conventionalcommits.org/):

| Prefixo | Quando usar |
|---|---|
| `chore:` | Setup, configuração, tooling, dependências |
| `feat:` | Nova funcionalidade ou história implementada |
| `fix:` | Correção de bug |
| `style:` | Alterações visuais/UI apenas, sem lógica |
| `refactor:` | Reestruturação de código sem mudança de comportamento |
| `docs:` | README, PLANNING ou atualizações de documentação |

---

## Decisões de Design — Gaps Propositais

O protótipo do Figma não inclui o componente de ordenação. Decisão: implementá-lo como um `Select` do Chakra UI posicionado acima da lista de repositórios, usando a cor roxa (`#7B2FBE`) já presente nas demais telas para manter consistência visual.

O protótipo exibe um botão "Contato" na sidebar do perfil. Decisão: renderizar esse botão apenas quando o usuário tiver o campo `blog` (site) preenchido no GitHub, e um botão separado de Twitter apenas quando `twitter_username` estiver presente — ambos abrindo em nova aba.

---
---

# Project Planning — PetizeChallenge

**Challenge:** Petize React Internship — Q2 2026
**Candidate:** Enzo Turcovic
**Repository:** https://github.com/turco-vic/PetizeChallenge
**Deploy:** Vercel (in progress)

---

## Objective

Build a React application that searches GitHub developer profiles via the public GitHub REST API and displays their repositories using an infinite scroll strategy.

---

## User Stories — Checklist

### Functional requirements
- [ ] All screens must be responsive (desktop and mobile)
- [ ] On the home page, search a GitHub user by username and display their data on the profile page
- [ ] When a username is not found, show an informative message
- [ ] On the profile page, list repositories with infinite scroll (10 per page)
- [ ] Repository list must have a sort option supporting all parameters allowed by the GitHub API
- [ ] The sort component is not in the Figma prototype — must be created following the existing visual style
- [ ] Repository names must be links to the original GitHub repository
- [ ] If the user has a website in their profile, show a button that opens it
- [ ] If the user has a Twitter account in their profile, show a button that opens it

### Technical requirements
- [ ] Framework: React
- [ ] UI library: Chakra UI v2
- [ ] Code written in English
- [ ] Internationalization with i18next — Portuguese and English
- [ ] Two routes: `/` (home) and `/profile/:username` (shareable link)
- [ ] Entities (User and Repository) modeled with Zod
- [ ] Public GitHub repository
- [ ] Deploy on Vercel or GitHub Pages (differential)

---

## Implementation Roadmap

### Phase 1 — Foundation
- [x] Create project with Vite + React + TypeScript
- [x] Publish public repository on GitHub
- [x] Install all dependencies (Chakra UI v2, React Router, Zod, i18next)
- [x] Configure Chakra UI v2 + custom theme (purple `#7B2FBE`, blue `#4A90D9`)
- [x] Configure React Router — routes `/` and `/profile/:username`
- [x] Configure i18next + locale files (`en.json` / `pt.json`)
- [x] Clean up Vite boilerplate files

### Phase 2 — Zod Schemas
- [ ] `user.schema.ts` — model GitHub User entity
- [ ] `repository.schema.ts` — model GitHub Repository entity
- [ ] Export inferred TypeScript types (`z.infer<typeof Schema>`)

### Phase 3 — API Service Layer
- [ ] `github.service.ts` — `getUser(username)` with Zod validation
- [ ] `github.service.ts` — `getRepositories(username, page, sort)` with Zod validation
- [ ] All API responses validated at the service boundary, not in components

### Phase 4 — Custom Hooks
- [ ] `useGitHubUser(username)` — fetch user, expose `{ data, isLoading, error }`
- [ ] `useInfiniteRepos(username, sort)` — pagination with IntersectionObserver sentinel

### Phase 5 — Components
- [ ] `RepositoryCard` — displays single repo (name as link, stars, updated date)
- [ ] `RepositorySort` — sort Select component styled with Chakra UI
- [ ] `UserProfile` — left sidebar (avatar, name, bio, stats, contact info, buttons)
- [ ] `Header` — logo + search bar (visible on profile page)

### Phase 6 — Pages
- [ ] `Home.tsx` — centered search, on submit navigate to `/profile/:username`
- [ ] `Profile.tsx` — assembles Header, UserProfile, RepositorySort, RepositoryCard list + sentinel

### Phase 7 — i18n
- [ ] Replace all hardcoded strings with `useTranslation()` hook
- [ ] Test PT → EN switching

### Phase 8 — Polish & Deploy
- [ ] Handle all UI states: loading, error, empty, user not found
- [ ] Mobile responsiveness review
- [ ] Audit commit history — ensure conventional commits throughout
- [ ] Deploy to Vercel
- [ ] Update README with live demo link

---

## GitHub API Reference

| Purpose | Endpoint |
|---|---|
| Get user profile | `GET https://api.github.com/users/{username}` |
| List user repositories | `GET https://api.github.com/users/{username}/repos?page={n}&per_page=10&sort={sort}` |

### Sort options (all GitHub API values)

| `sort` value | Label (PT) | Label (EN) |
|---|---|---|
| `updated` | Atualizado Recentemente | Recently Updated |
| `pushed` | Último Push | Last Pushed |
| `full_name` | Nome (A–Z) | Name (A–Z) |
| `created` | Mais Novo | Newest |
| `stars` | Mais Estrelas | Most Stars |

---

## Infinite Scroll Strategy

Using native `IntersectionObserver` on a sentinel `<div>` at the bottom of the repository list. When the sentinel enters the viewport and there are more pages to load, the next page is fetched and appended to the list.

**Important:** when the sort parameter changes, the repo list and page counter must be reset to avoid stale data.

---

## Commit Convention

Following [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | When to use |
|---|---|
| `chore:` | Setup, config, tooling, dependencies |
| `feat:` | New feature or user story implemented |
| `fix:` | Bug fix |
| `style:` | UI/visual changes only, no logic |
| `refactor:` | Code restructuring without behavior change |
| `docs:` | README, PLANNING or documentation updates |

---

## Design Decisions & Intentional Gaps

The Figma prototype does not include the sort component. Decision: implement it as a Chakra UI `Select` above the repository list, using the purple (`#7B2FBE`) accent already present in the other screens.

The prototype shows a "Contato" button on the profile sidebar. Decision: render it only when `blog` is present in the GitHub profile, and a separate Twitter button only when `twitter_username` is present — both opening in a new tab.
