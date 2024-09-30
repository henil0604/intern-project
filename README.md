# Intern Project

## Setup

1. Clone the repo

2. Install Packages

   ```bash
   pnpm install
   ```

3. Run the development server

   ```bash
   pnpm run dev
   ```

4. Visit http://localhost:5173

## Technical Guidelines

The project uses [React.js](https://react.dev) and [Typescript](https://www.typescriptlang.org) Template provided by [Vite](https://vitejs.dev). The choice of Typescript was necessary in-order to have better type-safety across the codebase.

### Design

The project uses [shadcn UI](https://ui.shadcn.com) for ready-made components to have consistant design across the application.

### Type-safety

[Eslint](https://eslint.org) has been utilised to check for linting warnings/errors for the projects before any code changes are published. This is achieved via git-hooks using [husky](https://typicode.github.io/husky/). Whenever the code changes are commited, the eslint checks are triggered ensuring consistant code and best-practices.

### Commits

Each commit message is checked to have consistant and easy-to-understand message using git-hooks and [commitlint](https://commitlint.js.org).
