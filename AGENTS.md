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
| `develop` | `portfolio-staging` | staging.alessandrozanni.dev, portfolio-staging.vercel.app | Vercel login on all deploys |

DNS is on Cloudflare. CI (`.github/workflows/ci.yml`) runs lint and typecheck
on `main`, `develop` and PRs. `VERCEL_TOKEN` lives in `.envrc` (direnv, not
committed); no env vars on Vercel.

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
