# Cardrona / Treble Cone — redesign handoff & QA notes

## Goal
Retain the original React demo and its customer/agent/admin flows while presenting the storefront like a compact, native-feeling WeChat Mini Program for management review. Do not mistake GitHub Pages for a WeChat Mini Program deployment.

## Changes applied
1. **Navigation**: Header, resort switcher and language toggle resized for small screens; bottom navigation has meaningful active states and a cart count derived from the cart, not a hard-coded `3` on Account.
2. **Homepage**: Mountain image + archive-status summary, prominent red booking CTA, quick links, dining/activity/stay gallery, and feature rail.
3. **Conditions**: Retained mountain-specific condition/weather/road information, but placed older report values behind a disclosure labelled as a snapshot, with a direct link to the official resort report.
4. **Catalog**: Pass cards are collapsed initially; clicking `Learn more` expands inclusions. Card padding, typography and appearance refined.
5. **Dates & orders**: Default checkout date uses the actual current day, and order tabs classify past/upcoming records using the current date.
6. **Localization**: Common homepage labels, main booking CTA, nav tabs and mountain-report headings have Chinese variants. Many inner demo pages are still English; full Simplified Chinese audit remains necessary.
7. **GitHub Pages**: `vite.config.js` now takes the public repository name from GitHub Actions, and `src/App.jsx` uses HashRouter when built under a subpath.

## What was deliberately not changed
- Dashboard layout, data definitions or backend behavior.
- Product prices, waiver validity, simulated payment flow, refund policy or season-pass business rules.
- Mock authentication, agent permissions and demo-local storage architecture.
- Base44 entity/function reference files. They are **not** active production backend services in this edition.

## Automated checks performed
- TypeScript JSX syntax parse on edited React files: **passed**, zero syntax diagnostics.
- Plain JavaScript syntax check of `vite.config.js`: **passed**.
- Original-file preservation: **all 321 original files present**, with a small number of targeted edits plus new CSS and docs.

## Checks that still need to happen in GitHub Actions / browser
These were **not** completed here because npm registry access was unavailable during package installation.

- `npm ci` then `npm run build` in GitHub Actions.
- Open Pages `/#/` on iPhone and Android; inspect 320px and 390px widths.
- Homepage: switch Cardrona / Treble Cone, switch EN / 中文, expand Mountain Conditions, open official source link.
- Passes: tap filters, open pass, toggle favourite, expand pass details, check season-pass configurator.
- Booking: select pass, add to cart, change quantities, step through guest details, waiver and simulated payment; verify orders and refund/change flows.
- Open Lessons, Rentals, Transport, Trail Map, Shop, Eat/Stay/Play and Support.
- Agent login/demo routes and pricing controls.
- Admin dashboard `/#/dashboard` and major pages from side navigation, including mobile/tablet layouts.
- Browser console: check for missing image requests, failed imports, runtime exceptions and navigation back behavior.

## Production blockers
- Web app is not a native WeChat Mini Program (no WXML/WXSS or WeChat APIs in this source tree).
- No secure cloud identity, cross-device persistence, live Aspenware bookings or real WeChat Pay.
- Admin demo is not protected by server-side authentication.
- Actual resort photographs/brand content require publication rights and approved data freshness practices.

## Design notes for next pass
Use **one prominent action per screen**, sensible minimum font sizes, restrained red accent, authentic mountain photography and error states that tell users what to do next. Avoid decorative gradients or repetitive identical cards without an information purpose.
