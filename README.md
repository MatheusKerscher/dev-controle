# Dev Controle

Dev Controle é uma aplicação desenvolvida com [Next.js](https://nextjs.org) para gerenciar atendimentos e clientes de forma eficiente.

![Thumbnail](./public/thumbnail.png)

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [NextAuth](https://next-auth.js.org)
- [Axios](https://axios-http.com)

## 💻 Funcionalidades

- Gerenciamento de chamados (criação, edição e fechamento).
- Cadastro e gerenciamento de clientes.
- Autenticação com Google via NextAuth.
- Interface responsiva e moderna utilizando TailwindCSS.

## 📦 Como executar o projeto

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusKerscher/dev-controle.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd dev-controle
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias, como `DATABASE_URL`, `NODE_ENV`, `NEXTAUTH_URL`, `HOST_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET.`

   Crie uma conta Google e acesse o Google Cloud para fazer a configuração de autenticação com o Google e conseguir gerar os dados para as variáveis `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET.`

5. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate
   ```

6. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

7. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## 🛠 Estrutura do Projeto

- **`src/app`**: Contém as páginas e layouts da aplicação.
- **`src/components`**: Componentes reutilizáveis.
- **`src/lib`**: Configurações e bibliotecas auxiliares.
- **`src/providers`**: Contextos globais da aplicação.
- **`src/utils`**: Funções e tipos utilitários.
- **`prisma`**: Arquivos relacionados ao Prisma, incluindo o schema do banco de dados.

---

Feito com ❤️ por [Matheus Kerscher](https://github.com/MatheusKerscher)
