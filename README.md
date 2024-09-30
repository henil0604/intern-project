# Intern Project

## Setup

1. Clone the repository.

2. Install the required packages:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open http://localhost:5173 in your browser.

## Technical Guidelines

The project is built using [React.js](https://react.dev) and [TypeScript](https://www.typescriptlang.org) with the [Vite](https://vitejs.dev) template. TypeScript was chosen to ensure better type safety throughout the codebase.

### Design

The project utilizes [shadcn UI](https://ui.shadcn.com) for pre-built components, ensuring consistent design across the application.

### Type Safety

[Eslint](https://eslint.org) is employed to catch linting warnings and errors before any code changes are published. This is enforced through git hooks, using [Husky](https://typicode.github.io/husky/). Whenever code is committed, eslint checks are automatically triggered to maintain consistency and adherence to best practices.

### Commits

Commit messages are validated for clarity and consistency using git hooks and [commitlint](https://commitlint.js.org).
