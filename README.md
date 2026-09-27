# Blockchain & Innovation Landscape

Corporate website for Blockchain & Innovation Landscape (BIL), an emerging-technology company.

Slogan: Build. Research. Advise. Innovate.

## Stack

- React frontend in `apps/web` (Vite)
- Next.js API in `apps/api`
- MySQL
- TypeScript
- Tailwind CSS
- pnpm workspaces

## Requirements

- Node.js 20.9 or newer
- pnpm 10

Use pnpm only. Do not use npm, Yarn or Bun in this repository.

## Installation

```bash
pnpm install
```

Copy the environment example and fill in values when email delivery is ready:

```bash
cp .env.example .env
```

MySQL must be running before the API starts. `docker compose up mysql -d` starts the database on host port 3307.

## Development

```bash
pnpm dev
```

The React app runs at [http://localhost:5173](http://localhost:5173) and proxies `/api` to the Next.js API on port 3001.

## Quality checks

```bash
pnpm typecheck
pnpm test
pnpm build
```

## Environment variables

| Name | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Public site origin used in structured data |
| `MYSQL_HOST` | MySQL host for the API |
| `MYSQL_PORT` | MySQL port |
| `MYSQL_USER` | MySQL user |
| `MYSQL_PASSWORD` | MySQL password |
| `MYSQL_DATABASE` | MySQL database name |
| `CONTACT_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender passed to Resend |
| `RESEND_API_KEY` | Server-only Resend API key |

If email variables are missing in development, validated submissions are written to the server log. In production, the form reports that delivery is not configured. Do not commit `.env.local`.

## Project structure

```text
apps/web           React frontend
apps/api           Next.js API
packages/shared    Insight records, content types and form validation
```

## Brand assets

Logo files live in `public/brand`. The header uses the symbol. The footer uses the full lockup. `src/components/brand/Logo.tsx` chooses the file.

```text
public/brand/logo.png
public/brand/logo-light.png
public/brand/logo-dark.png
public/brand/logo-mark.png
public/brand/logo-mark-light.png
public/brand/logo-mark-dark.png
public/brand/sizes/
```

`sizes/` holds display widths for the full logo (320 to 1024) and symbol edges from 16 to 512, plus square app icons on the navy field. `src/app/icon.png` and `src/app/apple-icon.png` are the browser icons.

`Logo` accepts `variant` (`full` or `mark`) and `theme` (`light` or `dark`). `dark` is the navy wordmark for light backgrounds. `light` keeps the symbol and uses a white wordmark for the dark footer.

## Content

Insights live in `src/content/insights.ts` and match the `Insight` type. Every current entry is marked `sample: true` and is labelled in the interface. Do not present samples as BIL publications.

`ResearchPublication` and `CaseStudy` types are ready for later records. Published case studies and research reports stay empty until real, cleared material exists. A CMS or MDX source can replace the TypeScript content file without changing the page components, as long as it returns the same types.

## Deployment

`docker compose up --build` starts MySQL, the Next.js API, and the React site.

`VITE_SITE_URL` is read when the frontend image is built. Mail settings are read when the API container starts.

```bash
docker compose up --build
```

The site is published on port 3000. Copy `.env.example` to `.env` before building when the public origin or mail delivery should change.

```bash
docker compose build --no-cache
docker compose up -d
```

Stop it with `docker compose down`.

## Development conventions

- TypeScript strict mode. Avoid `any`.
- Keep new copy specific. Do not invent clients, offices, statistics, awards or publications.
- Prefer the existing design tokens in `apps/web/src/app/globals.css`.
- Package changes go through pnpm so `pnpm-lock.yaml` stays the lockfile.
