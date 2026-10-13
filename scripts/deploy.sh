#!/bin/sh
# Builds the site and puts it live on audreyoneil.com (Cloudflare Workers).
# Uses Ethan's Cloudflare token if present, otherwise your `wrangler login`.
set -e
cd "$(dirname "$0")/.."
if [ -f ~/.config/cloudflare/token ]; then
  export CLOUDFLARE_API_TOKEN="$(cat ~/.config/cloudflare/token)"
  export CLOUDFLARE_ACCOUNT_ID="$(cat ~/.config/cloudflare/account_id)"
fi
npm run build
npx wrangler deploy
