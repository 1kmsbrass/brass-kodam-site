# Site Editor Guide — How to Add Photos, Videos & Edit Posts

## Accessing the Editor

Once your site is live on Cloudflare Pages, go to:
```
https://YOUR-SITE.pages.dev/admin/
```

You'll see a login screen. Click **"Login with GitHub"** and authorize. You'll then land on the **Collections** page.

---

## Collections (What You Can Edit)

- **Blog Posts / Updates** — articles with text, photos, video
- **Products** — product pages with galleries
- **Bulk Kg-Rate & Engraving** — service offerings
- **Locations We Serve** — state and city pages
- **Site Pages** — Homepage, Contact, About

---

## Editing an Existing Page

1. Click on a collection (e.g., "Blog Posts")
2. Click the post title you want to edit
3. You'll see a form with fields:
   - **Title** — page heading
   - **Description** — Google search snippet (155 chars)
   - **Date** — publication date
   - **Keywords** — comma-separated, for SEO
   - **Cover Photo** — main image
   - **YouTube Video URL** — embed video
   - **Body** — main text (markdown)
   - **FAQs** — Q&A section

4. Make your changes and click **"Publish"**

---

## Creating a New Blog Post

1. Go to **Collections → Blog Posts / Updates**
2. Click **"New Blog Post"** (green button)
3. Fill in the form:
   - **Title:** e.g., "How to Order Kodam in Bulk"
   - **Description:** 155 chars max (shows in Google search)
   - **Date:** today
   - **Keywords:** `kodam, wholesale, bulk` (comma-separated)
   - **Cover Photo:** click to upload a photo
   - **YouTube Video URL:** paste the full YouTube URL if you have one
   - **Body:** write your article using markdown (see examples below)
   - **FAQs:** add Q&A if relevant

4. Click **"Publish"** — it goes live in 1–2 minutes

---

## Creating a New Product Page

1. Go to **Collections → Products**
2. Click **"New Product"**
3. Fill in:
   - **Title:** e.g., "Brass Kodam No.2"
   - **Description:** Google snippet (155 chars)
   - **Keywords:** `brass kodam, no.2, wholesale`
   - **Photos** (Gallery): click **"+ Add item"** to add multiple photos
   - **Body:** product description and specs
4. Click **"Publish"**

---

## Adding Photos

### Where Do They Go?
Every photo you upload is stored in `/images/uploads/` on your site. You can reuse the same photo in multiple posts.

### How to Upload
In any photo field (Cover Photo, Gallery, etc.):
1. Click **"Choose different image"** or **"+ Add item"**
2. Click **"Upload"** in the pop-up
3. Select a photo from your computer
4. Give it a good filename: `brass-kodam-no1-front.jpg` (not `IMG_123.jpg`)
5. Add **alt text** if available: "Brass Kodam No.1 front view" (helps Google Images)
6. Done — photo is now on your site

### Photo Tips for SEO
- **Filename:** use descriptive names like `copper-kodam-no3-side-view.jpg`
- **Alt text:** write what the photo shows — "Brass Kodam No.2 with polished finish"
- **Size:** resize to 600–1200px wide on your computer before uploading (faster)

---

## Embedding YouTube Videos

1. Go to YouTube and copy the full video URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
2. Paste it into the **YouTube Video URL** field in the editor
3. The video embeds automatically on your live page

Or in the **Body** text, use:
```
{{< youtube VIDEO_ID >}}
```
(Replace VIDEO_ID with just the ID part, e.g., `dQw4w9WgXcQ`)

---

## Embedding Instagram Posts

1. Go to Instagram and copy the post URL: `https://www.instagram.com/p/ABC123XYZ/`
2. Paste it into the **Instagram Post URL** field
3. The post embeds on your live page

Or in **Body** text:
```
{{< instagram https://www.instagram.com/p/ABC123XYZ/ >}}
```

---

## Markdown (Writing Text)

In the **Body** field, you can use simple markdown:

```
# Main Heading (largest)
## Subheading
### Smaller heading

**bold text**
_italic text_
[link text](https://example.com)

- bullet point
- another bullet
  - nested bullet

1. numbered list
2. second item
```

---

## Publishing

Click **"Publish"** and:
1. Your changes save to GitHub
2. Cloudflare rebuilds your site (~1–2 minutes)
3. Page goes live at `YOUR-SITE.pages.dev`

**No staging step** — publish = live immediately. Review before publishing!

---

## Updating the Size Chart

1. Go to **Collections → Products → Size Guide**
2. Find the table in the **Body** field
3. Edit the numbers directly:
   ```
   | No.0 | 10 cm | 8 cm | 0.5 kg | 0.55 kg | 1 litre |
   | No.1 | 12 cm | 10 cm | 0.8 kg | 0.9 kg | 1.5 litre |
   ```
4. Save & Publish

---

## Quick Example: Adding a Blog Post with Photos and Video

1. Open **Blog Posts**
2. Click **"New Blog Post"**
3. **Title:** "Kumbabhishekam Preparation Guide"
4. **Description:** "Learn how to prepare and place kodam for your Kumbabhishekam ceremony."
5. **Date:** Today
6. **Keywords:** `kumbabhishekam, kodam, preparation`
7. **Cover Photo:** Click → Upload a photo of kodam setup
8. **YouTube Video URL:** Paste `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`
9. **Body:**
   ```
   ## Getting Your Kodam Ready

   Before Kumbabhishekam, follow these steps:

   1. Inspect for cracks or damage
   2. Clean thoroughly with water
   3. Dry completely before filling

   ### Placement

   Place kodam in a circle, largest in center.

   See our size guide for details.
   ```
10. **FAQs:** (optional)
    - **Q:** "How much water to fill?"
    - **A:** "Fill 3/4 full with filtered or well water."

11. Click **"Publish"** — live in 1–2 minutes

---

That's it! No code, no tech knowledge needed. Just forms, uploads, and clicks.
