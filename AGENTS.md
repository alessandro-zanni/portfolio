<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Git workflow

- Work on `develop`; `feat/` and `fix/` branches start from `develop`. `main` is
  production: merging into it is the user's call.

## Hosting and deploy

Vercel team AZ Projects (the personal account, not a dedicated one: a dedicated
account needs a phone number already in use). Native Git integration, no deploy
workflow: each project builds only its own branch through the ignore step
`[ "$VERCEL_GIT_COMMIT_REF" != <branch> ]`. Functions in `fra1` (`vercel.json`).

| Branch    | Vercel project      | URL                                              | Protection                  |
| --------- | ------------------- | ------------------------------------------------ | --------------------------- |
| `main`    | `portfolio`         | www.alessandrozanni.dev (public)                 | Vercel login except domains |
| `develop` | `portfolio-staging` | staging.alessandrozanni.dev, portfolio-staging-eta.vercel.app | Vercel login on all deploys |

DNS is on Cloudflare. CI (`.github/workflows/ci.yml`) runs lint and typecheck
on `main`, `develop` and PRs. `VERCEL_TOKEN` lives in `.envrc` (direnv, not
committed); no env vars on Vercel.

## Adding a project

1. An entry in `lib/projects.ts`: `kind` (group on `/projects`), `featured`
   (shown on the homepage, keep it to about four), `role`, `status`, links.
2. `content/projects/<slug>.mdx` with the four fixed sections: `## The problem`,
   `## What I built`, `## How it's built`, `## Outcome`. Only facts the public
   repo, live product or merged PR shows (rule in `PRODUCT.md`).
3. Cover in `public/projects/<slug>/cover.(jpg|svg)`, 16:10; SVGs follow the
   style of the existing ones. Screenshots never show real users' data.
4. Renaming a slug: add a permanent redirect in `next.config.ts`.

## Static analysis (SonarQube)

Local only, not in CI: the shared SonarQube Community server lives in
`~/projects/sonarqube/` (Docker, see its README). Here there are only
`sonar-project.properties` (`projectKey=portfolio`) and the `sonar` script.

```bash
cd ~/projects/sonarqube && docker compose up -d   # UI http://localhost:9000
bun run sonar                                      # SONAR_TOKEN from the shell
```

No tests yet, so coverage is excluded. Run it before a large release; fix new
bugs and vulnerabilities, triage code smells.
