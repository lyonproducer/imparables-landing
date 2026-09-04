#!/usr/bin/env bash
#
# sync-landing.sh — One-command sync from the socio monorepo to this landing repo.
#
# Copies web/ (imparables-nexus, branch develop-landing) into the root of this
# repo, commits and pushes. Run it every time the socio updates develop-landing:
#
#   ./sync-landing.sh           # sync + commit + push
#   ./sync-landing.sh --deploy  # also deploy to Vercel production
#
# Notes:
# - The socio repo is read at the filesystem level, so local (unpushed) commits
#   on develop-landing are included.
# - We do NOT use `git subtree` here: this repo keeps the app at the root while
#   the monorepo keeps it under web/, and git subtree cannot map to the root
#   (prefix '.' is rejected; empty prefix is rejected; split requires the
#   directory to exist locally). A plain rsync + commit keeps exact parity,
#   including deletions, without touching the local agent tooling.

set -euo pipefail

SOCIO_REPO="${SOCIO_REPO:-/Users/leonardohernandez/Desktop/Trabajo/Eprisma/nexus/imparables-nexus}"
SOCIO_WEB="$SOCIO_REPO/web"
DO_DEPLOY=0
for arg in "$@"; do
  case "$arg" in
    --deploy) DO_DEPLOY=1 ;;
    *) echo "Unknown argument: $arg" >&2; exit 1 ;;
  esac
done

SYNC_PATHS="app components lib design-system public next.config.ts package.json package-lock.json postcss.config.mjs tsconfig.json skills-lock.json"

# --- Guards -----------------------------------------------------------
[ -d "$SOCIO_WEB" ] || { echo "Socio repo not found at $SOCIO_REPO" >&2; exit 1; }
if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Run this from inside the landing repo" >&2
  exit 1
fi
if ! git diff --quiet -- $SYNC_PATHS; then
  echo "You have uncommitted changes in the sync paths. Commit or stash first." >&2
  git status --short -- $SYNC_PATHS
  exit 1
fi

# --- Copy web/ -> repo root (delete anything that no longer exists upstream)
for dir in app components lib design-system public; do
  rsync -a --delete \
    --exclude '.DS_Store' --exclude 'node_modules' --exclude '.next' \
    "$SOCIO_WEB/$dir/" "$dir/"
done
rsync -a \
  "$SOCIO_WEB/next.config.ts" \
  "$SOCIO_WEB/package.json" \
  "$SOCIO_WEB/package-lock.json" \
  "$SOCIO_WEB/postcss.config.mjs" \
  "$SOCIO_WEB/tsconfig.json" \
  "$SOCIO_WEB/skills-lock.json" \
  ./

# --- Keep local convenience scripts after package.json is overwritten ---
node -e "
const fs = require('fs');
const p = JSON.parse(fs.readFileSync('package.json', 'utf8'));
p.scripts = { ...p.scripts, sync: './sync-landing.sh', 'sync:deploy': './sync-landing.sh --deploy' };
fs.writeFileSync('package.json', JSON.stringify(p, null, 2) + '\n');
"

# --- Reinstall when dependencies changed ------------------------------
if ! git diff --quiet -- package-lock.json; then
  echo "Dependencies changed; running npm install..."
  npm install --no-audit --no-fund
fi

# --- Commit + push ----------------------------------------------------
git add -A -- $SYNC_PATHS
if git diff --cached --quiet; then
  echo "No changes to sync."
  exit 0
fi

git commit -m "sync: import landing from nexus develop-landing"
git push origin main

# --- Optional Vercel production deploy --------------------------------
if [ "$DO_DEPLOY" = "1" ]; then
  echo "Deploying to Vercel production..."
  vercel --prod --yes
fi

echo "Done."