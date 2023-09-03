# Nextjs + NextAuth + RTK Query + Prisma + Mui Starter

This is a starter template for building web applications using Next.js, Redux Toolkit, Prisma, Material-UI, and NextAuth.js. Create robust and secure web applications with a focus on ease of development, state management, database access, UI components, and user authentication.

## Features

- Next.js: A React framework for building server-rendered React applications.
- Prisma: A modern database toolkit for Node.js and TypeScript, enabling type-safe database access and migrations.
- NextAuth.js: A complete authentication solution for Next.js applications, supporting various authentication providers.
- MUI: A popular React UI framework for creating elegant and responsive user interfaces.
- Redux Toolkit (RTK): A library developed by the Redux team to simplify and streamline the process of managing state in Redux-based applications.

## Getting Started

Follow these steps to get started with this project:

1. Clone the Repository

```bash
$ git clone
$ cd
```

2. Install Dependencies:

```bash
$ yarn
```

3. Create env file:

create a `.env` file replacing the values in `env` files with your own

4. Set Up the Database:

```bash
$ docker-compose up
$ npx prisma migrate dev

```

5. Run the server

```bash
$ yarn run dev
```

6. Open you Browser

Visit `http://localhost:3000` to see your application running.
