# Discord Tickets Bot

A self-hosted Discord bot for ticket management (support channels, helpdesks, etc.). Based on [discord-tickets/bot](https://github.com/discord-tickets/bot) v4.0.50.

## How to run

The workflow `Start application` runs `node .` — just press **Run** or start the workflow.

The bot connects to Discord and starts an HTTP management panel at port 5000.

## Stack

- **Runtime:** Node.js 20
- **Database:** SQLite (stored in `user/database.db` — persists between runs)
- **ORM:** Prisma (schema in `prisma/`, migrations applied automatically on start)
- **Discord library:** discord.js v14
- **HTTP server:** Fastify (serves the web management panel)

## Environment variables

Set in Replit Secrets / environment:

| Variable | Description |
|---|---|
| `DISCORD_TOKEN` | Bot token from Discord Developer Portal |
| `DISCORD_SECRET` | OAuth2 client secret from Discord Developer Portal |
| `ENCRYPTION_KEY` | 48+ char key for encrypting stored data (auto-generated) |
| `DB_PROVIDER` | `sqlite` (configured) |
| `HTTP_PORT` | `5000` (configured) |
| `HTTP_HOST` | `0.0.0.0` (configured) |
| `HTTP_EXTERNAL` | Public URL of the web panel (set to Replit dev domain) |

## First-time Discord setup

1. **Invite the bot** to your server — go to Discord Developer Portal → OAuth2 → URL Generator, select `bot` + `applications.commands` scopes, and the permissions you want.
2. **Set OAuth2 redirect URL** — in Discord Developer Portal → OAuth2, add `<HTTP_EXTERNAL>/auth/callback` as a redirect URI. The `HTTP_EXTERNAL` value is the Replit dev domain URL already set as an env var.
3. **Configure the bot** — use `/settings` in your Discord server or log into the web panel to set up ticket categories, staff roles, etc.

## Key source files

```
src/
  index.js          # Entry point — boots client, HTTP server, loads handlers
  client.js         # Extended Discord.js Client class
  env.js            # Environment variable validation
  http.js           # Fastify HTTP server setup
  commands/         # Slash commands (/new, /close, /claim, etc.)
  buttons/          # Button interaction handlers
  listeners/        # Discord event listeners
  routes/           # HTTP API routes (web panel backend)
db/
  sqlite/           # Prisma schema + migrations for SQLite
  mysql/            # Prisma schema + migrations for MySQL
  postgresql/       # Prisma schema + migrations for PostgreSQL
user/               # Runtime data (database.db, uploads, etc.) — gitignored
```

## User preferences

- Keep SQLite as the database (no external DB needed on Replit)
- Node.js 20 is required (`fast-jwt` dependency requires ≥20)
