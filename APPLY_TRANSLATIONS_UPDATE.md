# Apply this update to `cardrona-mini-preview`

**Recommended: use GitHub Desktop.** This is an update to the full original Cardrona project, not a replacement website.

1. Download and extract this ZIP.
2. In GitHub Desktop, select your `cardrona-mini-preview` repository and choose Repository → Show in Explorer / Finder.
3. Copy the **contents** of this ZIP into the repository's root folder. Merge the `src` folder and allow replacement of existing files.
4. In GitHub Desktop review the changed files, commit with the message `Translate customer journeys and preview WeChat Pay`, and click Push origin.
5. On GitHub, check Actions → Deploy Cardrona to GitHub Pages. Existing Pages configuration and npm 11.20.0 pin remain unchanged.
6. Open `https://ckapapa.github.io/cardrona-mini-preview/#/` and refresh. On Safari, if old wording persists, open a Private tab to bypass the previous cached bundle.

**QA on iPhone (English → 中文):** Home → Passes → Book → Cart → Checkout → WeChat Pay → confirmation sheet → Cancel → try again → Simulate payment → Orders → Account → Help. Switch to English and verify labels return to English. Check the Visa/Mastercard demo too.

**Scope:** Checkout has WeChat Pay and card preview only (no Alipay); this is a GitHub Pages demo and no real money is charged. Source-level admin/dashboard translations and real payment integration are not included.
