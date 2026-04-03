This is the Silvortex official website, built with [Next.js](https://nextjs.org/).

## Development

Run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm ci
npm run build
npm run start
```

## Bare Metal Deploy

The repo includes a simple standalone deployment script:

```bash
chmod +x scripts/deploy-bare.sh
PORT=3000 ./scripts/deploy-bare.sh
```

This will:

- install dependencies with `npm ci`
- build the app in Next.js standalone mode
- copy production files into `.deploy/current`
- stop the previous process if it exists
- start the app in the background with `nohup`

Useful environment variables:

- `PORT`
- `HOSTNAME`
- `DEPLOY_ROOT`
- `GITHUB_TOKEN`

Logs are written to `.deploy/app.log`.

## Container Deploy

Build and run with Docker Compose:

```bash
docker compose up -d --build
```

Optional environment variables:

- `PORT`
- `GITHUB_TOKEN`

The container listens on port `3000` internally.

## GitHub Progress

The site can read public repository activity from the `Team-silvortex` GitHub organization.
If you need higher API limits, provide `GITHUB_TOKEN` in production.
