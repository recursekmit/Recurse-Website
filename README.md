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

Set `NEXT_PUBLIC_SITE_URL` to the final production origin if it changes from
`https://recursekmit.vercel.app`. Canonical URLs, the sitemap, robots metadata,
and structured data use this value.

## Opportunity board

- The public board is available at `/opportunities`.
- Add approved listings to `components/opportunityListings.js` using the
  exported sample as the field reference.
- Student submissions are validated, saved locally as pending, and opened as a
  prepared email to Recurse for moderation.
- To send submissions directly to an automation or form backend, set
  `NEXT_PUBLIC_OPPORTUNITY_SUBMIT_URL` to an endpoint that accepts JSON POST
  requests. The email workflow remains the fallback.

## Before launch

- Replace the gallery placeholders with optimized event photos.
- Add the current recruitment form URL.
- Add profile photos and social links for core members when available.
- Download and self-host the fonts if the site must work without external requests.

## Structure

- `app/layout.jsx` — document metadata and root layout
- `app/page.jsx` — homepage route
- `app/team/page.jsx` — club heads and core members route
- `app/opportunities/page.jsx` — searchable opportunity board route
- `app/robots.js`, `app/sitemap.js`, `app/manifest.js` — search and install metadata
- `app/globals.css` — visual system, responsive layout, and motion
- `components/ClubSite.jsx` — complete homepage structure
- `components/TeamSite.jsx` — leadership and core-member page
- `components/OpportunityBoard.jsx` — filters, saved roles, details, and submission workflow
- `components/opportunityListings.js` — approved public listings and listing schema
- `components/timelineEvents.js` — event history
- `components/useSiteInteractions.js` — navigation, reveals, filters, counters, canvas network, and terminal behavior
- `public/icon.svg` — site icon
