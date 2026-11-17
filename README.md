# Cardrona × Treble Cone · WeChat-style Preview

A **mobile-browser preview of the proposed WeChat Mini Program**, based on the complete original `Chimbo2026/Cardrona-project` source archive. The customer UI has been refreshed; the original storefront flows and separate resort management dashboard remain in the project. This is **not a native WeChat Mini Program build**. It is meant for design review on phones and in the WeChat in-app browser before native implementation.

> **DEMO / NOT PRODUCTION:** Payments, tickets, agent accounts, resort availability and dashboard records are simulated. Do not enter genuine customer or payment data. The original local demo dashboard has no server-side administrator security. See [Original project limitations](docs/ORIGINAL_README.md).

## Publish in your GitHub repository — no terminal required

Repository target: `YOUR-USERNAME/cardrona-mini-preview`.

1. Extract `Cardrona_Full_WeChat_Preview_Redesign.zip` on your computer.
2. Open your **public** `cardrona-mini-preview` repository on GitHub.
3. Choose **Add file → Upload files** (or **uploading an existing file** if empty).
4. Upload **the contents** of the extracted project folder, preserving nested directories including `.github/workflows`, `src`, `public`, `base44`, and `tests`. Do **not** upload the ZIP as one file or put everything inside another subfolder.
5. Commit changes to the `main` branch.
6. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** (NOT Deploy from a branch). The included `.github/workflows/deploy.yml` runs `npm ci`, compiles with Vite, and publishes `dist`.
7. Check the **Actions** tab and wait for `Deploy Cardrona to GitHub Pages` to finish successfully. Open **Settings → Pages → Visit site**.
8. The address will follow `https://YOUR-USERNAME.github.io/cardrona-mini-preview/#/`. The `#/` is intentional: hash routing supports internal app pages on static GitHub hosting.
9. Open the link on your iPhone / inside WeChat to review the applet-style interface. For the operations dashboard, open `https://YOUR-USERNAME.github.io/cardrona-mini-preview/#/dashboard`.

### Already uploaded a one-file preview?

This is the **full React/Vite project**, not the earlier single-file demo. If the existing repository has a single `index.html` and a few CSS/JS files, upload this full project on top of it. Replacing `index.html` and adding the build workflow is expected. After publication via GitHub Actions, GitHub Pages serves the generated `dist` build. Old root demo-only assets can be removed later.

### Troubleshooting

- **404**: check GitHub Actions completed and the Pages Source is **GitHub Actions**.
- **Blank screen / missing images**: check the `src/`, `public/`, `index.html`, `package.json`, `package-lock.json`, and `vite.config.js` are at repository root. Do not place them inside `Cardrona-project-main/`.
- **Build failed**: inspect the red step in Actions → `Deploy Cardrona to GitHub Pages` → `build`. Node 22 is configured in the workflow.
- **Old version showing**: reload, or use a private browser tab after deployment.
- **Broken links**: visit the Pages `/#/` URL instead of a direct `/passes` URL.
- **GitHub upload fails**: GitHub limits web-upload file counts. Use GitHub Desktop, Git CLI or Codespaces for an initial upload if necessary. Upload the entire repo tree, not just the `src` folder.

## Run locally (optional)

Requires Node.js 22.12+ and internet access for the first dependency installation.

```bash
npm ci
npm run dev
```

Open the Vite URL shown in the terminal. `npm run build` creates `dist/`.

## Design updates in this edition

- Smaller, more legible WeChat-style customer header with resort selection and language toggle.
- Stronger mobile hierarchy: mountain overview, one main booking CTA, quick services, eat/stay/play, highlights.
- Compact mountain conditions with expandable tabs and an explicit **historical snapshot** label (not live weather).
- Reusable visual tokens for spacing, type, cards, safe areas and bottom-tab navigation.
- Dynamic cart badge rather than a fixed account notification count.
- More compact lift-pass cards by default, with working `Learn more` expansion.
- Default booking date uses the user's current date instead of a hard-coded date; upcoming/past filtering is date-based.
- Updated Vite Pages base path to derive from **your repository name** at build time (`GITHUB_REPOSITORY`), with HashRouter automatically used when deployed under a project subpath.
- Copy cleanup and clear demo notices for simulated purchases and tickets.

Key modified source files:
- `src/pages/CustomerExperience.jsx`
- `src/pages/customer-refresh.css` (new)
- `src/components/customer/MountainReport.jsx`
- `src/App.jsx`
- `vite.config.js`
- `.github/workflows/deploy.yml`

**Preserved:** Original route tree, product configurators, lessons, rentals, orders, cart, agent demos, dashboard, Base44 reference entities/functions, images and static tests. No production integrations were added.

## Limitations and next stage

The browser version is **not** a Mini Program uploadable to WeChat. A true WeChat Mini Program needs a WeChat AppID, native pages, approved service-domain / payment integration and an authenticated backend. Existing storefront and dashboard data do not synchronize between users or devices. Branding and image usage rights should be cleared before public distribution.

For original project architecture and local data details see [`docs/ORIGINAL_README.md`](docs/ORIGINAL_README.md).
