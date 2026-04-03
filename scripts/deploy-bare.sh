#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_ROOT="${DEPLOY_ROOT:-$ROOT_DIR/.deploy}"
APP_DIR="$DEPLOY_ROOT/current"
PID_FILE="$DEPLOY_ROOT/app.pid"
LOG_FILE="$DEPLOY_ROOT/app.log"
PORT="${PORT:-3000}"
HOSTNAME="${HOSTNAME:-0.0.0.0}"

mkdir -p "$DEPLOY_ROOT"

cd "$ROOT_DIR"

is_our_process() {
  local pid="$1"
  local command

  if ! kill -0 "$pid" 2>/dev/null; then
    return 1
  fi

  command="$(ps -p "$pid" -o command= 2>/dev/null || true)"
  [[ "$command" == *"$APP_DIR/server.js"* ]]
}

echo "[1/5] Installing dependencies"
npm ci

echo "[2/5] Building production bundle"
npm run build

echo "[3/5] Refreshing deployment directory"
rm -rf "$APP_DIR"
mkdir -p "$APP_DIR/.next"
cp -R .next/standalone/* "$APP_DIR/"
cp -R .next/static "$APP_DIR/.next/static"
cp -R public "$APP_DIR/public"

if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID="$(cat "$PID_FILE")"

  if is_our_process "$EXISTING_PID"; then
    echo "[4/5] Stopping previous process"
    kill "$EXISTING_PID"
    rm -f "$PID_FILE"
  else
    echo "[4/5] Existing PID file does not point to this app, skipping stop"
    rm -f "$PID_FILE"
  fi
fi

echo "[5/5] Starting app on $HOSTNAME:$PORT"
(
  cd "$APP_DIR"
  nohup env NODE_ENV=production PORT="$PORT" HOSTNAME="$HOSTNAME" node server.js \
    >>"$LOG_FILE" 2>&1 &
  echo $! >"$PID_FILE"
)

echo "Deployment complete."
echo "PID: $(cat "$PID_FILE")"
echo "Logs: $LOG_FILE"
