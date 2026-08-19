# RMS Frontend

Next.js (App Router) + TypeScript + Material UI scaffold for the Restaurant
Management System, built from `RMS_Frontend_Architecture.txt`. Tailwind is
still used for a few bespoke layout/utility spots (see "Design system"
below), but all interactive controls and data display — buttons, text
fields, selects, tabs, tables, cards, app bar — are real MUI components.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/login`.

## What's wired up

- **`/login`** — `RoleSelectorToggle` swaps between `ClientLoginForm`,
  `RestaurantAdminLoginForm` (with `RestaurantDropdownSelect`), and
  `WebsiteAdminLoginForm`, inside a shared `AuthLayout`. Submitting any form
  sets the role in an in-memory session (`lib/session-context.tsx`) and
  redirects to `/`.
- **`/`** — reads the current role from session and renders one of three
  views: the client home (`HeroSection`, `MenuSection` with
  `CategoryTabs`/`MealGrid`/`MealCard`, `Footer`), the restaurant admin home
  (`AnalyticsDashboard`, `PopularMealsWidget`, `StaffManagementSection`), or
  the website admin home (`SuperAdminDashboard`, `RestaurantsDirectoryTable`,
  `SystemControlPanel`).
- **`/meals/[mealId]`** — `MealHeader`, `MealDescription`,
  `QuantitySelector`, `AddToOrderButton`. Adding a meal pushes it into the
  session's current order.
- **`/my-orders`** — `SessionOrderSummary` (the open session ticket) and
  `OrderHistoryList` / `OrderItemCard` (past closed sessions).

## Data

Everything reads from `lib/mock-data.ts` — placeholder restaurants, meals,
staff, analytics, and order history matching the shapes in `lib/types.ts`.
Swap the functions in that file for real API calls (e.g. the restaurant list
for `RestaurantDropdownSelect`, meals for `MenuSection`) once backend
endpoints exist; nothing downstream should need to change shape.

Auth is a placeholder too: `lib/session-context.tsx` is an in-memory React
context, not a real auth flow. Login forms don't validate credentials — they
just set a role and redirect. Wire real auth calls into the `handleSubmit`
functions in `components/auth/*Form.tsx`.

## Design system

The visual language is a "ticket/receipt" motif (see `.ticket-rail` and
`.leader-line` in `app/globals.css`, and `components/ui/TicketRail.tsx` /
`PriceLine.tsx`) — a nod to the fact that every screen in an RMS, from the
diner's menu to the platform admin's dashboard, is ultimately a view onto an
order ticket. Fonts: **Fraunces** (display), **Public Sans** (body), **IBM
Plex Mono** (prices, stats, tabular data), loaded via `next/font/google` in
`app/layout.tsx`.

### Material UI theming

`lib/theme.ts` exports two MUI themes:

- `theme` (default, light) — used for the client-facing pages and the
  restaurant admin dashboard (cream background).
- `darkTheme` — used for the login page, the website admin (super admin)
  views, and the open session-order ticket (ink background). Any section
  that needs the dark surface wraps its content in
  `<ThemeProvider theme={darkTheme}>`.

The accent color is **blue** (`primary.main`, `#2F5FE0`, with `#6E93FF` as
the lighter variant used for text/outlines on dark backgrounds) — swapped
in from the original amber/yellow. `success` (sage green) and `error`
(clay brown) are unchanged; the restaurant-subscription "trial" status,
which used to reuse the amber accent, now uses a separate `warning` teal
so it doesn't compete visually with the new primary blue. All of this lives
in `lib/theme.ts` — change the hex values there to retheme the whole app.

### Hero animations (client home page)

Three new pieces on the diner-facing hero, GitHub-homepage-style:

- **`components/home/client/Globe3D.tsx`** — an interactive Three.js/WebGL
  globe (wireframe icosahedron + pulsing point markers), drag-to-rotate via
  `OrbitControls`, auto-rotating when idle. Markers plot
  `lib/mock-data.ts`'s `mockLiveActivity` (illustrative global
  orders-per-minute data, separate from the Egypt-only restaurant
  directory — swap for a real live-orders feed later). Loaded via
  `next/dynamic` with `ssr: false` since it needs `window`/`canvas`, and
  disposes all Three.js resources on unmount.
- **`components/home/client/ScrollStory.tsx`** — GSAP + `ScrollTrigger`
  scroll-driven reveal for three feature "beats" below the hero, plus a
  vertical progress rail that fills as you scroll. Uses `gsap.context()`
  for cleanup so it's safe with React's dev-mode double-invoke and route
  changes.
- **Glow/gradient effects** — `.glow-blob` and `.grid-overlay` utility
  classes in `app/globals.css`, applied behind the hero and the scroll
  story to give the ink background depth without an image asset.

These three all live only on the client home hero for now (per the current
scope) — the restaurant-admin and website-admin views are unchanged.
