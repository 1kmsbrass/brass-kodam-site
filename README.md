# Kodam Wholesale Hugo Site — with built-in editor

No custom domain needed — this deploys to a free `*.pages.dev` address on Cloudflare.
Once set up, you edit and publish everything from a browser at `yoursite.pages.dev/admin/`
— no code, no local Hugo install, no terminal. Add a blog post with photos/video, hit
Publish, and it's live in about a minute.

## One-time setup (~15 min)

1. **Create a GitHub repo** and push this folder to it (branch: `main`).

2. **Connect it to Cloudflare Pages**
   Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
   Build command: `hugo --minify`  |  Build output directory: `public`
   Environment variable: `HUGO_VERSION` = `0.134.0`
   Deploy — you'll get a URL like `https://kodam-wholesale.pages.dev`. That's your live site.

3. **Create a GitHub OAuth App** (this is what lets the editor log you in)
   GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
   - Homepage URL: your `.pages.dev` URL from step 2
   - Authorization callback URL: `https://YOUR-SITE.pages.dev/api/callback`
   Save it, then generate a Client Secret. Copy both the Client ID and Client Secret.

4. **Add those as secrets in Cloudflare Pages**
   Your Pages project → Settings → Environment variables → add:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`

5. **Point the editor at your repo**
   Edit `static/admin/config.yml`:
   - `repo:` → `your-github-username/your-repo-name`
   - `base_url:` → your `.pages.dev` URL
   Commit and push (Cloudflare redeploys automatically).

6. **Start editing**
   Go to `https://YOUR-SITE.pages.dev/admin/`, click "Login with GitHub", authorize once.
   You'll see a form-based editor: Blog Posts, Products, Locations, Site Pages.
   Add a photo, paste a YouTube link, write the text, hit **Publish** — it commits to
   GitHub and the live site rebuilds automatically.

## Adding a YouTube or Instagram embed inside any article body
In the markdown body, on its own line:
    {{< youtube VIDEO_ID >}}
    {{< instagram https://www.instagram.com/p/POST_ID/ >}}

## Local preview (optional, needs Hugo installed on your own computer)
    hugo server -D

## Before your first real post
- Replace placeholder phone/email/city in `hugo.toml` `[params]`.
- Replace `baseURL` in `hugo.toml` with your `.pages.dev` URL.
