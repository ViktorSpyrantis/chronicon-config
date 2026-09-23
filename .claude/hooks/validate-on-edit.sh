#!/bin/bash
# PostToolUse hook: after Claude edits a file under src/, run typecheck and
# validate. On failure, exit 2 so the errors are fed straight back to Claude.
set -uo pipefail

file_path="$(node -e '
  let s = "";
  process.stdin.on("data", (c) => (s += c)).on("end", () => {
    try { process.stdout.write(JSON.parse(s).tool_input?.file_path ?? ""); } catch {}
  });
')"

cd "$CLAUDE_PROJECT_DIR" || exit 0

case "$file_path" in
  "$CLAUDE_PROJECT_DIR"/src/*|src/*) ;;
  *) exit 0 ;;
esac

# Dependencies come from the SessionStart hook; skip quietly if they're missing.
[ -x node_modules/.bin/tsc ] || exit 0

if ! out="$(npx --no-install tsc --noEmit 2>&1)"; then
  echo "npm run typecheck failed after editing ${file_path#"$CLAUDE_PROJECT_DIR"/}:" >&2
  echo "$out" | head -40 >&2
  exit 2
fi

if ! out="$(npx --no-install tsx scripts/validate.ts 2>&1)"; then
  echo "npm run validate failed after editing ${file_path#"$CLAUDE_PROJECT_DIR"/}:" >&2
  echo "$out" | tail -40 >&2
  exit 2
fi

exit 0
