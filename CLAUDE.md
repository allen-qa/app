# PottyTime Web

## Project Structure

- `src/index.js` — Main app source code
- `public/` — Static assets served by Cloudflare Pages
- `screenshots/` — Source screenshot files (NOT served directly)

## Important: Updating Screenshots

The site serves static assets from the **`public/`** directory. When updating screenshot images:

1. Place the new image in **`public/screenshots/`** (not `screenshots/`)
2. If the filename stays the same, add or bump a cache-busting query param (e.g., `?v=3`) in `src/index.js` to avoid Cloudflare serving the cached old version
3. Update both the `<img>` tags and the `lbImages` array in `src/index.js`

## Deployment

- Hosted on **Cloudflare Pages** (Workers)
- Deploys automatically on push to `main`
- Worker name in `wrangler.toml` must be `"app"` to match Cloudflare CI
