# Git and Deployment Rules

- **Strict User Authorization Required:** NEVER execute `git commit`, `git push`, or any deployment commands (`vercel`, `vercel --prod`, etc.) automatically or autonomously.
- **Local-Only Development:** Keep all changes and validations strictly in the local environment.
- **Explicit Instruction Only:** Only execute git commits, pushes to remote repositories, or deployments to staging/production when the user explicitly and directly instructs you to do so.
