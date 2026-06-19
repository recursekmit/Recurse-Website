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
- Confirm the active CIG names.
- Replace the placeholder `recurse@kmit.in` email address.
- Add the current recruitment form URL.
- Replace qualitative impact content with verified club metrics where available.
- Download and self-host the fonts if the site must work without external requests.

## Structure

- `app/layout.jsx` — document metadata and root layout
- `app/page.jsx` — homepage route
- `app/globals.css` — visual system, responsive layout, and motion
- `components/ClubSite.jsx` — complete homepage structure
- `components/useSiteInteractions.js` — navigation, reveals, filters, counters, canvas network, and terminal behavior
- `public/icon.svg` — site icon
