# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase
- Feature 03 (Auth) — complete

## Current Goal
- Feature 04 — pending selection/spec.

## Completed

- Feature 01: Design System — dark-only Tailwind v4 token system implemented in `app/globals.css`, Geist Sans/Mono wired through `app/layout.tsx`, shadcn configuration added via `components.json`, `lib/utils.ts` `cn()` helper added, lucide-react and Radix/shadcn support dependencies installed, and Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea primitives added under `components/ui/`. Home page has a minimal tokenized foundation.
- Feature 02: Editor Chrome — `EditorNavbar` added with a fixed top bar and `PanelLeftOpen`/`PanelLeftClose` toggle. `ProjectSidebar` added as a fixed left overlay with Projects title, close button, My Projects/Shared tabs, empty states, and New Project button. `/editor/layout.tsx` now wraps editor routes with `EditorLayoutClient`, which owns the shared navbar/sidebar state; `/editor/page.tsx` renders only the editor home content. Next.js 16 local docs were consulted before adding the App Router page/layout and client component boundary. `npm run lint` and `npm run build` pass.
- Feature 03: Auth — Clerk provider wired in `app/layout.tsx` with the `@clerk/ui` dark theme and token-based appearance variables. `proxy.ts` added at the project root to protect all non-public routes by default while allowing auth pages and the root redirect route. `/sign-in` and `/sign-up` catch-all pages added with a minimal two-panel large-screen auth shell and form-only small-screen layout. `/` now redirects authenticated users to `/editor` and unauthenticated users to `/sign-in`. The editor navbar now includes Clerk's built-in `UserButton`. `npm run lint` and `npm run build` pass.

## In Progress

- None.

## Next Up
- Select and implement the next feature spec.

## Open Questions

- `context/feature-space/02-editor.md` is empty. The implementation is using the prior tracker description for Feature 02 as the source of truth.

## Architecture Decisions

- shadcn/ui over Tailwind v4 (CSS-based token config via `@theme inline` in globals.css, no tailwind.config.js).
- Dark-only theme: all shadcn `:root` variables set to dark values directly — no `.dark` class switching.
- Do not modify generated `components/ui/*` files after shadcn installation.

## Session Notes

- Using Next.js 16.2.6 with React 19 and Tailwind CSS v4.
- Next.js local docs consulted before adding the `/editor` App Router page and client component boundary.
- Feature 02 verification pass: new editor layout/navbar/sidebar components compile through `npm run build`, `npm run lint` is clean, and `components/ui/dialog.tsx` is available as the centered dark dialog pattern for future editor dialogs.
- Feature 03 auth implementation completed after reading `context/feature-space/03-auth.md`; Next.js 16 proxy/page/layout docs and Clerk setup guidance consulted. `@clerk/ui` installed for the Clerk dark theme. First `npm run build` attempt failed inside the sandbox when `next/font` could not fetch Google fonts; rerunning with approved network access succeeded.
- Feature 03 auth UI refinement: sign-in/sign-up shell updated to a true 50/50 desktop split, the left panel now uses the app's accent tint to distinguish it from the base dark background, and Clerk/auth shell typography explicitly inherits the Geist Sans tokenized font stack.
