# WeChat Pay demo + bilingual customer screens

## Customer journey changes

- The existing Cardrona / Treble Cone interface and original dashboard remain intact.
- The customer storefront now has a shared English–Simplified Chinese display adapter for the home, passes, booking, cart, guest forms, orders, account, help and nested product pages.
- WeChat Pay appears first at checkout; Visa/Mastercard remains an alternative preview. Alipay is **not** shown in the new customer checkout.
- Payment demo sequence: review cart → guest form → choose method and accept terms → confirm amount → simulate wallet authorization → simulate server verification → local demo receipt.
- Closing the payment sheet or cancelling retains the cart. No real payment, booking, QR validation or server API is used.

## Production notes

A native WeChat Mini Program must eventually use `wx.requestPayment` with server-created transaction parameters. Do not issue usable passes solely on the client callback; verify merchant transaction status server-side and ensure idempotent booking issuance. A GitHub Pages site is only a browser preview.

## Publishing to cardrona-mini-preview

Copy **all files and directories inside** this project to the `main` branch of `CKapapa/cardrona-mini-preview` using GitHub Desktop or Codespaces. Do not upload the ZIP itself, and do not nest everything inside an extra folder. Keep `.github/workflows/deploy.yml` (it pins npm 11.20.0 to support the original lockfile). In Settings → Pages use Source = GitHub Actions.

## Scope / QA

Localization is a demo-layer display adapter over an inherited codebase with many literal English strings, not a production-grade message-catalog migration. Review all text and legal/policy translations with a native speaker and Cardrona's legal team before any production launch. Admin console translations are not in the scope of this update. The demo must be tested on a real iPhone and in GitHub Actions after upload.
