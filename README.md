# I Gotta Take This website

Static GitHub Pages site for https://igottatakethis.com.

## Pages
- `index.html` — Home
- `how-it-works.html` — How It Works
- `practical-uses.html` — Practical Uses
- `features.html` — Features
- `privacy.html` — Privacy Policy
- `support.html` — Support

## App-store links
The App Store and Google Play buttons link to the live listings:
- App Store: https://apps.apple.com/us/app/i-gotta-take-this/id6793546098
- Google Play: https://play.google.com/store/apps/details?id=com.igottatakethis.app

Store URLs are centralized in `site.js` as `STORE_URLS.apple` and `STORE_URLS.google`. Keep the fallback links in `index.html` and `practical-uses.html` in sync so the badges also work without JavaScript.

## Brand asset
`assets/igtt-icon.png` is the production IGTT app icon used in the header, CTA, footer, and supporting page art. The favicon and Apple touch icon are derived from it.

## Hosting
The existing `CNAME` file is preserved for GitHub Pages and points to `igottatakethis.com`.

## Production brand asset
The redesigned site uses `assets/igtt-icon.png` as the production IGTT app icon in the header, download callouts, footer, and supporting page art. Browser/favicon assets are derived from the same production icon.
