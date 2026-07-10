# DeakinPay

A polished, responsive marketing website for DeakinPay — an Indian domestic money transfer (DMT) platform that helps retailers offer NEFT and IMPS transfer services from their outlets.

## Run & Operate

- `pnpm --filter @workspace/deakinpay-website run dev` — run the frontend (workflow: `artifacts/deakinpay-website: web`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, Lucide React
- Typography: Plus Jakarta Sans (Google Fonts)
- No backend required — static marketing site

## Where things live

- `artifacts/deakinpay-website/src/` — all frontend source
- `artifacts/deakinpay-website/src/components/` — reusable section components (Logo, Navbar, Hero, DMT, Retailer, HowItWorks, WhyChoose, CTA, Footer)
- `artifacts/deakinpay-website/src/index.css` — brand palette (navy `#0A2240`, green `#16A34A`) and CSS variables

## Architecture decisions

- Single-page scrolling layout — no routing; all sections rendered in one App component
- Brand palette defined as CSS variables (`--color-primary`, `--color-secondary`) in `index.css`
- All CTA/partner buttons use `mailto:support@deakinpay.in` as the conversion path (placeholder)
- Framer Motion for all scroll-triggered entrance animations and hover effects
- Content strictly limited to domestic payment/money transfer — no iGaming, forex, crypto

## Product

Marketing website with 7 sections: Hero, DMT Service (feature cards), Retailer Network (stats), How It Works (4-step flow), Why Choose DeakinPay (5 benefit cards), CTA, and Footer.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- All forms are placeholder only — no real payment processing
- "Partner With Us" and "Become a Partner" buttons use `mailto:` — wire to a real form when a contact/lead-capture flow is added

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
