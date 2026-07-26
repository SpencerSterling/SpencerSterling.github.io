@AGENTS.md

## GitHub Pages deployment

The `.github/workflows/deploy.yml` workflow deploys to the `github-pages` environment. That environment has protection rules restricting which branches may deploy — if the deploy job fails with "Branch main is not allowed to deploy to github-pages due to environment protection rules," go to repo **Settings → Environments → github-pages → Deployment branches and rules** and allow the `main` branch (or set it to "All branches").
