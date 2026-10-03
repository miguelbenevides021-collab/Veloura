# Veloura

E-commerce moderno de moda e lifestyle, desenvolvido com Next.js, Prisma e autenticação com NextAuth. O projeto inclui landing page, categorias, destaques de produtos, login e cadastro de usuários.

## Visão geral

O Veloura é uma loja fictícia voltada para moda, estética premium e experiência de compra elegante. A aplicação já conta com:

- página inicial com destaque de coleção e produtos
- seção de categorias
- cards de produtos com filtros
- autenticação de usuários por e-mail e senha
- registro de usuários com hash de senha
- integração com banco de dados MySQL via Prisma

## Stack principal

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Prisma
- MySQL
- NextAuth
- bcryptjs
- shadcn/ui

## Estrutura do projeto

```bash
.
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── register/
│   │           └── route.ts
│   ├── (auth)/
│   │   ├── login/
│   │   └── cadastro/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── auth.ts
├── components/
├── lib/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── sections/
├── public/
├── .env
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 20+
- npm ou pnpm/yarn
- MySQL em execução

## Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/ecommerce"
AUTH_SECRET="sua_chave_secreta"
```

Observações:

- `DATABASE_URL` deve apontar para seu banco MySQL local ou remoto.
- `AUTH_SECRET` é necessário para a autenticação do NextAuth.

## Instalação

```bash
npm install
```

## Banco de dados

Gerar cliente Prisma e aplicar o schema:

```bash
npx prisma generate
npx prisma db push
```

Se quiser criar migrações:

```bash
npx prisma migrate dev --name init
```

## Execução

### Modo desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

- http://localhost:3000

### Build de produção

```bash
npm run build
npm run start
```

## Scripts disponíveis

```bash
npm run dev     # inicia o projeto em desenvolvimento
npm run build   # gera a build de produção
npm run start   # inicia a aplicação em produção
npm run lint   # executa o ESLint
```

## Autenticação

O sistema usa `next-auth` com provider de credenciais (`credentials`). O fluxo atual inclui:

- cadastro de usuário com nome, e-mail, senha e termos
- validação de e-mail duplicado
- hash da senha com `bcryptjs`
- login por e-mail e senha
- sessão JWT com `session.strategy: "jwt"`

## Modelo de usuário

No Prisma, o modelo principal é:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  terms     Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Observações

- Este projeto ainda está em desenvolvimento e possui a base frontend e autenticação funcionando.
- Há telas de login/cadastro e página inicial prontas, com estrutura pronta para expansão de e-commerce completo.
- O projeto pode ser extendido com carrinho, catálogo dinâmico, checkout, painel administrativo e pagamentos.

## Licença

Este projeto é destinado para fins de estudo e desenvolvimento pessoal.

## Autor

Miguel B.
