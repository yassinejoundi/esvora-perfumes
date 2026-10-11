# ESVORA agent guide

Read `DESIGN.md` and `.project/context.md` before changing the interface. `DESIGN.md` is the active visual and interaction specification. The concept brief supplies brand meaning and scent notes; it does not prove product availability or commerce claims.

This repository uses Next.js 16.4.0. Before changing Next.js code, read the relevant local guide in `node_modules/next/dist/docs/`. Preserve the `next dev` block below: the framework recreates it when removed.

Build one complete slice at a time. Keep every homepage section in a separate file under `components/`. Prefer server components for static sections and client components only for motion or interaction. Reuse semantic color and type tokens from `app/globals.css`. Use original image assets from `public/images/`; do not fetch placeholder images at runtime.

Honor keyboard access, visible focus, readable contrast, 320px layout, and reduced motion. Keep copy poetic but plain. Do not invent testimonials, prices, inventory, shipping terms, or verified ingredient sourcing. Verify with `npm run lint` and `npm run build` after interface changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
