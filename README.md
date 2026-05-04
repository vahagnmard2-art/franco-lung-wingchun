# Franco Lung Wing Chun — Website

Next.js 16 website for Grandmaster Franco Lung's Wing Chun school in Temple City, CA.

---

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel via GitHub

### Step 1 — Push to GitHub

```bash
cd franco-lung-wingchun
git init
git add .
git commit -m "Initial commit"
```

Create a new repo at [github.com/new](https://github.com/new) (e.g., `franco-lung-wingchun`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/franco-lung-wingchun.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `franco-lung-wingchun` repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

Your site will be live at `https://franco-lung-wingchun.vercel.app` (or similar).

---

## Customisation Checklist

### Must-Do Before Launch

- [ ] **Phone number** — Uncomment and update the phone section in `app/contact/page.tsx`
- [ ] **Contact email** — Update `info@francolungwingchun.com` in `app/contact/page.tsx` if different
- [ ] **Class schedule** — Update the schedule table in `app/classes/page.tsx` with actual days/times
- [ ] **YouTube URL** — Confirm and update the YouTube channel link in `app/gallery/page.tsx` and `components/Footer.tsx`
- [ ] **Contact form** — Set up [Formspree](https://formspree.io) (free) and replace `YOUR_FORMSPREE_ID` in `app/contact/page.tsx`

### Photos

Add photos to `/public/images/` and replace the placeholder `<div>` blocks with `<Image>` components from `next/image`.

#### Example replacement (in any page):
```tsx
// Before (placeholder):
<div className="aspect-[3/4] bg-ink-200 ...">
  <span>FL</span>
</div>

// After (real photo):
import Image from "next/image";
<div className="relative aspect-[3/4]">
  <Image src="/images/sifu-portrait.jpg" fill className="object-cover" alt="Grandmaster Franco Lung" />
</div>
```

### Gallery Photos
Replace placeholder grids in `app/gallery/page.tsx` with real images the same way. Remove the orange instruction banner once photos are in place.

### Testimonials
Update the 3 testimonials in `app/page.tsx` (`testimonials` array near the top) with real Google reviews.

### Custom Domain
In Vercel dashboard → your project → Settings → Domains → Add your domain `francolungwingchun.com`.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cinzel + Inter (Google Fonts via `next/font`)
- **Icons**: Lucide React
- **Hosting**: Vercel
