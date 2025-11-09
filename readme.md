# 🚀 Imersão Next.js - Serra Jr Engenharia

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma)
![NextAuth](https://img.shields.io/badge/NextAuth-4.24-purple?style=for-the-badge)

---

## 📖 Sobre a Imersão

Este repositório é o **ponto central de referência** para a **Imersão Next.js** da Serra Jr Engenharia. Aqui você encontrará o cronograma completo, guias práticos passo a passo, materiais de apoio e links úteis para acompanhar o programa.

### 🎯 Objetivos do Programa

- **Capacitar** os membros da Serra Jr no desenvolvimento web moderno com Next.js
- **Construir** uma aplicação full-stack completa do zero (frontend + backend + autenticação + SEO)
- **Dominar** conceitos essenciais: Server Components, Server Actions, Prisma ORM, NextAuth, otimização e SEO
- **Preparar** para projetos reais utilizando tecnologias de mercado

---

## 📅 Cronograma da Imersão

### 📌 Semana 1: Fundamentos Next.js + Tailwind CSS

**🎯 Objetivo:** Criar estrutura básica de uma aplicação Next.js com navegação, layout responsivo e estilização.

**📚 Conteúdo:**

- Criação de projeto Next.js 15 com App Router
- Configuração do Tailwind CSS v4
- Estruturação de componentes (Header, Footer)s
- Roteamento baseado em arquivos (`/`, `/login`, `/cadastro`, `/posts`)
- Criação de layout responsivo com menu mobile
- Estilização com classes customizadas do Tailwind

**🛠️ Tecnologias:**

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Lucide React (ícones)

**📂 Material:**

- [Guia Semana 1](https://www.notion.so/serrajr/Imers-o-Next-js-21cd253980c180a3a9f6f77b1597b078?p=277d253980c180df8276d4f0e28093da&pm=c)

**✅ Entregável:**

- Aplicação Next.js funcional com 4 páginas navegáveis e layout completo

---

### 📌 Semana 2: Prisma + SQLite + Server Actions

**🎯 Objetivo:** Criar aplicação CRUD completa com banco de dados SQLite usando Server Actions.

**📚 Conteúdo:**

- Instalação e configuração do Prisma ORM
- Modelagem de dados (model Post com campos id, userId, title, body)
- Criação de migrations e Prisma Client
- Implementação de Server Actions (`createPost`, `deletePost`)
- Revalidação de cache com `revalidatePath`
- CRUD completo sem necessidade de API Routes

**🛠️ Tecnologias:**

- Prisma ORM 6.x
- SQLite
- Server Actions (Next.js)

**📂 Material:**

- [Guia Semana 2](https://www.notion.so/serrajr/Imers-o-Next-js-21cd253980c180a3a9f6f77b1597b078?p=277d253980c180cb9342df19ba43aa3e&pm=c)

**✅ Entregável:**

- Sistema de posts funcional com criação, listagem e exclusão persistidos no banco

---

### 📌 Semana 3: Autenticação com NextAuth

**🎯 Objetivo:** Adicionar autenticação completa com NextAuth (Credentials + OAuth).

**📚 Conteúdo:**

- Instalação do NextAuth 4.24 + Prisma Adapter
- Configuração de provedores: Credentials, Google, GitHub
- Criação de models NextAuth (Account, Session, VerificationToken)
- Implementação de middleware para proteger rotas
- Páginas de login e cadastro com formulários
- Integração com Server Actions (criação de posts requer autenticação)
- Hash de senhas com bcryptjs
- Sessões JWT

**🛠️ Tecnologias:**

- NextAuth 4.24
- Prisma Adapter
- bcryptjs
- OAuth (Google, GitHub)

**📂 Material:**

- [Guia Semana 3](https://www.notion.so/serrajr/Imers-o-Next-js-21cd253980c180a3a9f6f77b1597b078?p=277d253980c18094b2add9b89358db4a&pm=c)

**✅ Entregável:**

- Sistema completo com registro, login (credentials + OAuth), proteção de rotas e controle de ownership (só dono pode deletar post)

---

### 📌 Semana 4: SEO e Otimização

**🎯 Objetivo:** Preparar a aplicação para produção com SEO completo e otimizações de performance.

**📚 Conteúdo:**

- Adição de logo otimizado no Header com `next/image`
- Criação de favicon
- Metadata global e por página (Open Graph, Twitter Cards)
- Sitemap dinâmico (gera URLs de posts automaticamente)
- Robots.txt (controle de crawlers)
- Página 404 customizada
- ISR (Incremental Static Regeneration) na página de posts
- Configuração para Google Search Console

**🛠️ Tecnologias:**

- Next.js Metadata API
- ISR (Incremental Static Regeneration)
- Sitemap e Robots (MetadataRoute)

**📂 Material:**

- [Guia Semana 4: SEO e Otimização](https://www.notion.so/serrajr/Imers-o-Next-js-21cd253980c180a3a9f6f77b1597b078?p=277d253980c18029aad0d7d224cf7ee5&pm=c)

**✅ Entregável:**

- Aplicação pronta para produção com SEO completo, sitemap dinâmico, robots.txt e otimizações de performance

---

## 🎓 Competências Desenvolvidas

Ao concluir as 4 semanas, você terá desenvolvido:

### 💻 Técnicas

- ✅ Criação de aplicações full-stack com Next.js 15
- ✅ Modelagem de dados e ORM com Prisma
- ✅ Autenticação completa (Credentials + OAuth)
- ✅ Server Actions e Server Components
- ✅ SEO e otimização de performance
- ✅ Deploy e produção

### 🧠 Conceituais

- ✅ App Router vs Pages Router
- ✅ Client vs Server Components
- ✅ SSR, SSG, ISR
- ✅ JWT e sessões
- ✅ Middleware e proteção de rotas
- ✅ Metadata e Open Graph

### 🚀 Soft Skills

- ✅ Leitura e interpretação de documentação técnica
- ✅ Resolução autônoma de problemas
- ✅ Debugging e troubleshooting
- ✅ Versionamento de código (Git)

---

### 📝 Para Alunos da Imersão

Os alunos devem criar uma **branch com seu nome** no projeto para desenvolver as atividades. A correção será feita diretamente na sua branch.

**Exemplo:**

```bash
git checkout -b nome-sobrenome
git push origin nome-sobrenome
```

---

## 📄 Licença

Este projeto é mantido pela Serra Jr Engenharia para fins educacionais.

---

**🚀 Boa sorte na Imersão! Let's build amazing things with Next.js! 💙**

**Serra Jr Engenharia** - Imersão Next.js 2025
