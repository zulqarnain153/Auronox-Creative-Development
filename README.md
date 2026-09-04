# Auronox Creative

Next.js 15 + TypeScript + Tailwind. Built to deploy the same way as Annax Auto Traders: push to GitHub, then import the repo into Vercel — no local build needed.

## Before this goes live, two things are still open:

1. **Contact form access key** — `app/contact/page.tsx` has a placeholder `YOUR_WEB3FORMS_ACCESS_KEY`. Get a free key at [web3forms.com](https://web3forms.com) and swap it in, same as the Annax site.
2. **Real contact details** — the Contact page currently only has the form. Once you have a business email/phone, they can be added to the Contact page and footer.

## Structure

- `lib/services.ts` / `lib/work.ts` — all page content lives here as data. Add a new service or project by adding an object; the `/services/[slug]` and `/work/[slug]` pages pick it up automatically.
- `components/Reveal.tsx` — the one reusable scroll-reveal wrapper used across every page.
- `components/AuroraGlow.tsx` — the hero's aurora visual with mouse parallax.
