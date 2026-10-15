<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Git workflow

- Commit and push directly to `main`. Create a branch only when explicitly asked.

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
