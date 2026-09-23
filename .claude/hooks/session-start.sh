#!/bin/bash
# SessionStart hook: bring the checkout up to date with its remote branch
# and install dependencies so typecheck/validate work.
set -uo pipefail

# Only run in Claude Code on the web.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR" || exit 0

# Pull the latest commits for the current branch. Fast-forward only so local
# work is never merged or rewritten; a failure here must not block the session.
branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
if [ -n "$branch" ] && [ "$branch" != "HEAD" ]; then
  if git ls-remote --exit-code --heads origin "$branch" >/dev/null 2>&1; then
    if git pull --ff-only origin "$branch" >&2; then
      echo "session-start: $branch is up to date with origin ($(git rev-parse --short HEAD))" >&2
    else
      echo "session-start: could not fast-forward $branch from origin; continuing with local state" >&2
    fi
  else
    echo "session-start: origin/$branch does not exist yet; skipping pull" >&2
  fi
fi

# Install dev dependencies (tsc, tsx) for typecheck and validate.
npm install --no-audit --no-fund >&2 || echo "session-start: npm install failed" >&2

exit 0
