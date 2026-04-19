# Pebkkk — Portfolio

A modern, dark/light-mode personal portfolio for **Pebkkk** — Discord Server Manager & Community · Creator Manager.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## 🛠 Local Development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## ✏️ Editing Content

All site content lives in **`data/index.ts`**. Edit that single file to update:

- Name, tagline, location, description
- Expertise list
- Strengths
- Experience entries
- Tools & bots
- Philosophy
- Goals & vision
- Contact info

No need to touch any component files unless you want to change layout/design.

---

## 🚀 Deploy to Vercel

1. Push this repo to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import this repo.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. (Optional) Add a custom domain in the Vercel dashboard.

No environment variables are required for the base site.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles, CSS vars (accent palette, dark/light)
│   ├── layout.tsx        # Root layout + metadata/SEO
│   └── page.tsx          # Main page (assembles all sections)
├── components/           # One file per section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Expertise.tsx
│   ├── Strengths.tsx
│   ├── Experience.tsx
│   ├── Tools.tsx
│   ├── Philosophy.tsx
│   ├── Goals.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── index.ts          # ← Edit this to update site content
├── lib/
│   └── theme.tsx         # Dark/light theme context + toggle
└── public/               # Static assets (favicon, OG image)
```

---

## 🎨 Accent / Theme

The accent palette (purple → violet → blue) is defined as CSS custom properties in `app/globals.css`. Change `--accent` and `--accent-light` there to retheme the whole site instantly.
