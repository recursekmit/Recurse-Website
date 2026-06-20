# Recurse Website

A responsive Next.js website for Recurse, KMIT's technical club.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

The homepage is statically prerendered by the Next.js App Router.

## Before launch

- Replace the gallery placeholders with optimized event photos.
- Add the current recruitment form URL.
- Add profile photos and social links for core members when available.
- Download and self-host the fonts if the site must work without external requests.

## Structure

- `app/layout.jsx` — document metadata and root layout
- `app/page.jsx` — homepage route
- `app/team/page.jsx` — club heads and core members route
- `app/globals.css` — visual system, responsive layout, and motion
- `components/ClubSite.jsx` — complete homepage structure
- `components/TeamSite.jsx` — leadership and core-member page
- `components/timelineEvents.js` — event history
- `components/useSiteInteractions.js` — navigation, reveals, filters, counters, canvas network, and terminal behavior
- `public/icon.svg` — site icon
