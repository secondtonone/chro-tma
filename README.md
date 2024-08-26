# Chrona

This project is built using Vite and TypeScript. Below are the available scripts and environment variables for the project.

## Getting Started

1. Create `.env` file at the root of project

| Variable   | Example Value           | Description                                  |
| ---------- | ----------------------- | -------------------------------------------- |
| `API_URL`  | `http://0.0.0.0:8000`   | **Required**. The base URL for the API.                    |
| `IS_BROWSER` | `true`                | *Optional*. Indicates if the code is running in a browser environment. |

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

| **Command**              | **Description**                            |
|--------------------------|--------------------------------------------|
| `npm run build`          | **Build the project for production**       |
| `npm run serve`          | **Serve the production build**             |
| `npm run type-check`     | **Run type-checking**                      |
| `npm run lint`           | **Lint the code**                          |
| `npm run lint:fix`       | **Automatically fix linting issues**       |
| `npm run format`         | **Format the code**                        |

## Deployment
   Example for local, available on `http://localhost:3000`:

   ```bash
   API_URL=http://0.0.0.0:8000 docker compose up --build
   ```
