# Quick Start — 5 Minutes to Your First Post

## Step 1: Push to GitHub

Extract the site folder on your computer. Open Terminal/Command Prompt:

```bash
cd kodam-site
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your GitHub username and repo name (e.g., `john-kodam-wholesale`).

## Step 2: Connect to Cloudflare Pages

1. Go to **https://dash.cloudflare.com**
2. Click **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Authorize GitHub and select your repo
4. **Build command:** `hugo --minify`
5. **Build output directory:** `public`
6. Click **Environment variables** → **Add variable:**
   - Name: `HUGO_VERSION`
   - Value: `0.134.0`
7. Click **Deploy**

Wait 2–3 minutes. Your site goes live at `https://YOUR-REPO-NAME.pages.dev` 🎉

## Step 3: Create GitHub OAuth App (for editor login)

1. Go to **https://github.com/settings/developers**
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name:** e.g., "Kodam Site Editor"
   - **Homepage URL:** `https://YOUR-REPO-NAME.pages.dev`
   - **Authorization callback URL:** `https://YOUR-REPO-NAME.pages.dev/api/callback`
4. Click **Register application**
5. Copy the **Client ID** and generate a **Client Secret**

## Step 4: Add Secrets to Cloudflare

1. In Cloudflare Pages, go to your project → **Settings** → **Environment variables**
2. Add two variables:
   - `GITHUB_CLIENT_ID` = (paste the Client ID from step 3)
   - `GITHUB_CLIENT_SECRET` = (paste the Client Secret from step 3)
3. Click **Save**

## Step 5: Update the Editor Config

1. In your repo, open `static/admin/config.yml`
2. Change:
   - `repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME`
   - `base_url: https://YOUR-REPO-NAME.pages.dev`
3. Commit and push (Cloudflare redeploys automatically)

## Step 6: Start Editing

Go to: **https://YOUR-REPO-NAME.pages.dev/admin/**

Log in with GitHub, and you'll see forms to:
- Create blog posts with photos and videos
- Edit product pages
- Add new locations
- etc.

Fill in the form, click **Publish**, and it's live in 1–2 minutes.

---

## First Post Walkthrough

1. Open `/admin/` and click **Blog Posts / Updates**
2. Click **New Blog Post**
3. Fill in:
   - **Title:** "First Post: Brass Kodam Bulk Ordering"
   - **Description:** "Learn how to order brass kodam in bulk for Kumbabhishekam"
   - **Keywords:** `kodam, bulk, brass`
   - **Cover Photo:** click → Upload a photo of your kodam
   - **YouTube Video URL:** (if you have one)
   - **Body:** write some text about your product
4. Click **Publish**

Check your live site — the post appears within 1–2 minutes.

---

**Questions?** See `EDITOR_GUIDE.md` for detailed editor help, or `README.md` for deployment FAQ.
