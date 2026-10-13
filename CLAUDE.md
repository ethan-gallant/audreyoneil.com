# audreyoneil.com

Artist website for Audrey O'Neil (ceramic artist). **Astro** static site (no UI framework) + one tiny **Cloudflare Worker** for the contact form. Ethan rebuilt it from Vue/GitHub Pages in Oct 2026 and has authorised Claude to change or build pretty much anything needed.

## Run / deploy
- Preview while editing: `npm run dev` (Astro, port 8022, live reload). To test the contact form locally use `npm run preview` (wrangler dev; emails are written to `.wrangler/tmp/email/`, not sent).
- Put live: `npm run deploy` (= `scripts/deploy.sh`: build + `wrangler deploy`). Uses the token in `~/.config/cloudflare/` (account "Cloud Weave - Ethan Gallant"). If that fails, ask Audrey to run `npx wrangler login` in Ghostty from this folder — Claude can't do the browser login.
- Also commit + push to `main` on GitHub (ethan-gallant/audreyoneil.com) for history. Pushing does NOT deploy.
- Worker name `audreyoneil-com`; config in `wrangler.jsonc`. Zone `audreyoneil.com` id ee211e6b854c34443786496215f16476.

## Email
- Audrey's inbox me@audreyoneil.com is **Google Workspace** (Google MX on the apex) — never touch apex MX/SPF.
- Contact form sends via Cloudflare Email Service from `contact@mail.audreyoneil.com` (sending enabled on the `mail.` subdomain only), reply-to = the visitor. Code: `worker/index.js`. Spam guard: Cloudflare Turnstile (widget "audreyoneil.com contact form", sitekey in contact.astro, secret = worker secret TURNSTILE_SECRET; `.dev.vars` holds the always-pass test secret) + hidden honeypot field.

## Where things live (what Audrey will ask to change)
- `src/site.js` – name, tagline, email, Instagram link.
- `src/content/home/` – pictures on the home page. `src/content/portfolio/` – portfolio pictures. Just drop image files in (jpg/png/webp, any size — Astro optimises them). File name = caption (`02-blue-moon-vase.jpg` → "Blue moon vase"; leading number sets order).
- `src/content/bio.md` – biography text.
- `src/styles.css` – colours (top of file) and fonts. Background = logo charcoal `#222`, accent = hot pink. All text uses Barlow Condensed (closest free match to the name lettering in the logo, which is outlines, not a font).
- `src/layouts/Base.astro` – top menu + footer (Instagram + email) on every page.
- `src/pages/` – one file per page (index, portfolio, biography, contact). New page = new file + add to the `pages` list in Base.astro.
- `src/assets/logo.svg` – logo, recoloured light for the dark background (original was greys #31363D/#6D6E71).

## Working with Audrey (artist, not a developer)
- Requests come in plain language ("make it more purple", "add my TikTok"). Interpret generously, make the change, show it in the browser preview, explain in one or two plain sentences — no jargon, no code in replies.
- Keep it cheap: small targeted edits, read only the file you need (map above), don't refactor unasked.
- Images she gives you: copy into the right `src/content/` folder with a descriptive file name.
- Before going live, ask "Ready to put this live?", then `npm run deploy` and commit + push.
- Truly large changes (shop/payments, accounts, a CMS, switching hosting) — write an **"Ethan Prompt"** (fenced block starting `Ethan Prompt:`, self-contained technical description) for her to forward, unless clearly safe to do yourself.
