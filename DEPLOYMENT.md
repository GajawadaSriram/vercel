## Vercel Deployment Guide

This repository is now structured so the React front end and Express API can be deployed together on Vercel.

### Project structure

- `package.json` – Root workspace definition used by Vercel to install backend/frontend dependencies once.
- `Frontend/` – Vite + React application built with Tailwind CSS.
- `api/index.js` – Vercel serverless entry point that wraps the Express application.
- `Backend/` – Express application and MongoDB models reused by the serverless function.
- `vercel.json` – Build configuration that deploys the API and bundles the front end as static assets.

### Required environment variables

Create a project in Vercel and configure the following environment variables in the dashboard (Production / Preview / Development as needed):

- `JWT_SECRET` – Secret string used to sign JSON Web Tokens.
- `MONGODB_URI` – Connection string for your MongoDB database (for example, an Atlas cluster).
- `FRONTEND_URL` – Comma-separated list of allowed origins for CORS (e.g. `https://your-project.vercel.app`).

### Deployment steps

1. Push these changes to your Git repository.
2. Import the repository into Vercel and select the root of the repository.
3. Vercel will automatically detect the `vercel.json` configuration:
   - The API is built with `@vercel/node` from `api/index.js`.
   - The front end runs `npm install && npm run build` inside `Frontend/`, outputting to `Frontend/dist`.
4. Assign the environment variables in Vercel and trigger a deployment.

Vercel automatically whitelists preview and production domains through `VERCEL_URL` / `VERCEL_BRANCH_URL`; add `FRONTEND_URL` if you need to allow custom domains or additional origins.

### Local development

1. Run `npm install` at the repository root to bootstrap the workspaces.
2. API: `npm run dev:api`
3. Front end: `npm run dev`

When testing locally with `vercel dev`, Vercel will read the same configuration and spin up both the API and the front end. Environment values are pulled from `.env` inside `Backend/` (if present) or the root `.env` file.


