# EEU Archive System — User Manual

A bilingual (English / አማርኛ) user manual website for the **Ethiopian Electric Utility (EEU) Archive System** — a hybrid document archival and retrieval system built for utility companies that rely on physical document storage.

Built with React as part of an EEU internship project.

---

## What it does

This manual guides Archive Staff and Viewers through the main features of the EEU Archive System:

- **Find a File** — search customers by name or BP number and locate their physical folder
- **Add a File** — register a new customer and assign their folder a storage location
- **Update a File** — edit customer records and relocate folders
- **File Tracking** — borrow, return, and report missing files
- **Storage & QR Codes** — manage shelves, rows, folders, and generate QR stickers
- **Document Records** — log document types inside a customer's folder

The manual is role-aware: selecting **Archive Staff** shows all sections, while **Viewer** hides staff-only content automatically. Language switches instantly between English and Amharic without a page reload.

---

## Project structure

```
eeu-manual/
├── public/
│   ├── index.html
│   └── logo.png              ← drop your EEU logo here
├── src/
│   ├── components/
│   │   ├── EEULogo.jsx       ← logo component
│   │   ├── Header.jsx        ← top nav bar with language toggle
│   │   ├── Hero.jsx          ← landing section + role selector
│   │   ├── Sidebar.jsx       ← scroll-spy sidebar navigation
│   │   ├── Sections.jsx      ← all manual content sections
│   │   ├── Shared.jsx        ← reusable: StepCard, VideoPlaceholder, etc.
│   │   └── *.module.css      ← scoped styles per component
│   ├── context/
│   │   └── AppContext.jsx    ← global language + role state
│   ├── data/
│   │   └── translations.js   ← all English and Amharic text content
│   ├── App.jsx               ← root layout
│   ├── App.module.css
│   ├── index.js              ← React entry point
│   └── index.css             ← global CSS variables and reset
└── package.json
```

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) — version 18 or higher (LTS recommended)
- npm — comes bundled with Node.js

### Run locally

```bash
# 1. Clone or extract the project
cd eeu-manual

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm start
```

The site opens automatically at `http://localhost:3000`. The server hot-reloads on every file save — no need to restart.

### Build for production

```bash
npm run build
```

This creates an optimized static build in the `/build` folder that can be hosted on any web server or static hosting platform.

---

## Customization

### Replacing the logo

1. Drop your logo image into the `public/` folder and name it `logo.png`
2. If your file is a different format, open `src/components/EEULogo.jsx` and update the `src` attribute to match (e.g. `logo.svg`)

### Adding YouTube video links

Open `src/data/translations.js`. Each section has a `videoLabel` and `videoSub` field. To activate a video placeholder, pass the URL to the `VideoPlaceholder` component in `src/components/Sections.jsx`:

```jsx
<VideoPlaceholder
  label={t.videoFindLabel}
  sub={t.videoFindSub}
  youtubeUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
/>
```

### Adding screenshots

Replace any `<ScreenshotPlaceholder />` in `src/components/Sections.jsx` with a standard `<img>` tag pointing to your screenshot file placed in the `public/` folder:

```jsx
<img src="/screenshots/customer-search.png" alt="Customer search page" />
```

### Editing content or adding translations

All text is in `src/data/translations.js` — one object for `en` and one for `am`. Edit any label, step, or FAQ item there without touching component files.

### Adding a new section

1. Add the section entry to `sidebarSections` in both `en` and `am` inside `translations.js`
2. Write the section component in `Sections.jsx` following the same pattern as existing sections
3. Add `<YourSection />` and `<Divider />` in the main `Sections` export

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| Styling | CSS Modules |
| Fonts | DM Sans, Noto Sans Ethiopic (Google Fonts) |
| State | React Context API |
| Build tool | Create React App |

---

## Role permissions reference

| Feature | Archive Staff | Viewer |
|---|---|---|
| Search customers | Yes | Yes |
| View file locations | Yes | Yes |
| View document records | Yes | Yes |
| Add / update files | Yes | No |
| Borrow & return files | Yes | No |
| Report missing files | Yes | No |
| Manage storage & QR | Yes | No |

---

## Hosting (optional)

To share the manual over a link without any server setup, the `/build` output can be deployed to:

- **GitHub Pages** — free, works well for internal tools
- **Netlify** — drag and drop the `/build` folder at netlify.com/drop
- **Vercel** — connect your repo and it deploys automatically

---

## Project context

Built as part of the **EEU Internship Program**. The underlying archive system is a monorepo using NestJS (backend), Next.js (frontend), Prisma + MongoDB (database), and JWT authentication.

This manual is a standalone React app — it does not connect to the archive system backend.

---

*Ethiopian Electric Utility — Internal use only*
