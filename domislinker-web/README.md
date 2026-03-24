# DomisLink International Services – Web App

**DomisLink International Services** is a Progressive Web App (PWA) for a trusted international logistics and courier company.

## Business Information

| | |
|---|---|
| **Name** | DomisLink International Services |
| **Address** | 19 Powerline, Asiwaju Dada, Lagos, Nigeria |
| **Phone** | +234 904 983 7474 |

---

## Installing the PWA

The app can be installed directly to your device from a modern browser — no app store required.

### Chrome / Edge (Desktop & Android)
1. Open the app URL in Chrome or Edge.
2. Look for the **Install** button (⊕) in the address bar, or tap the **"📲 Install App"** button on the page.
3. Follow the on-screen prompts to add the app to your home screen or desktop.

### Safari (iPhone / iPad)
1. Open the app URL in Safari.
2. Tap the **Share** button (the box with an arrow pointing up).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add** to confirm.

### Firefox (Android)
1. Open the app URL in Firefox.
2. Tap the three-dot menu → **"Install"**.

Once installed, the app works **offline** and launches like a native app.

---

## Development

This project is built with [React](https://react.dev/) and [Vite](https://vite.dev/).

### Prerequisites
- Node.js ≥ 18

### Setup

```bash
npm install
```

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server at `http://localhost:5173` |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### PWA Assets

| File | Purpose |
|---|---|
| `public/manifest.json` | Web App Manifest (name, icons, theme color) |
| `public/sw.js` | Service Worker (offline cache) |
| `public/icon-192.png` | PWA icon – 192 × 192 px |
| `public/icon-512.png` | PWA icon – 512 × 512 px |

> **Tip:** Replace the placeholder icons with a proper logo PNG (192 × 192 and 512 × 512) for production use.

