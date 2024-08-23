# Chrona

This project is built using Vite and TypeScript. Below are the available scripts and environment variables for the project.

## Environment Variables

Create `.env` file at the root of project

| Variable   | Default Value           | Description                                  |
| ---------- | ----------------------- | -------------------------------------------- |
| `API_URL`  | `http://0.0.0.0:8000`   | The base URL for the API.                    |
| `IS_BROWSER` | `true`                | Indicates if the code is running in a browser environment. |

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

#### Build the project for production:
   ```bash
   npm run build
   ```

#### Serve the production build:
   ```bash
   npm run serve
   ```

#### Run type-checking:
   ```bash
   npm run type-check
   ```

#### Lint the code:
   ```bash
   npm run lint
   ```

#### Automatically fix linting issues:
   ```bash
   npm run lint:fix
   ```

#### Format the code:
   ```bash
   npm run format
   ```
