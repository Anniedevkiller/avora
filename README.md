# Avora Support — Marketing Website

Production-ready marketing website for Avora Support. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Fonts | Manrope (headings), Inter (body) via `next/font` |
| Icons | lucide-react, inline SVGs |
| Email | Resend |
| Validation | Client-side only (Zod ready for extension) |
| Deployment | Vercel |

---

## Quick Start

```bash
# 1. Clone and install
cd avora
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Fill in .env.local (see below)

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create `.env.local` from `.env.example` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key from resend.com |
| `CONTACT_EMAIL` | Internal email address to receive leads and applications |
| `FROM_EMAIL` | Verified sender address in Resend (e.g. `Avora Support <hello@avorasupport.com>`) |
| `NEXT_PUBLIC_SITE_URL` | Full public URL (e.g. `https://avorasupport.com`) |

---

## Project Structure

```
src/
  app/                     # All pages and API routes (App Router)
    page.tsx               # Home (/)
    services/page.tsx
    pricing/page.tsx
    industries/page.tsx
    about/page.tsx
    careers/page.tsx
    book/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    api/
      contact/route.ts     # POST — contact form
      book/route.ts        # POST — discovery call form
      careers/apply/route.ts  # POST — job application + CV upload
    layout.tsx             # Root layout (fonts, header, footer)
    globals.css            # Design tokens (@theme), base styles
    sitemap.ts             # Auto-generated sitemap.xml
    robots.ts              # robots.txt

  components/
    ui/                    # Reusable UI primitives
      Button.tsx
      Container.tsx
      Section.tsx
      Accordion.tsx
      FormField.tsx
      SocialLinks.tsx
      PricingCard.tsx
    layout/                # Site-wide layout components
      Header.tsx           # Sticky header with mobile menu (focus trap)
      Footer.tsx
      CTABand.tsx
    sections/              # Page-level content sections
      HeroSection.tsx
      ServicesPreview.tsx
      IndustriesSection.tsx
      HowItWorks.tsx
      PricingPreview.tsx
      QualitySection.tsx
      FAQSection.tsx
      RolesList.tsx
      ApplicationForm.tsx
      BookingForm.tsx
      ContactForm.tsx

  config/
    site.ts                # ← Brand name, social URLs, emails, Calendly link

  data/
    careers.ts             # ← Open roles (add/edit roles here)
    faq.ts                 # FAQ items
    pricing.ts             # ← Package, staffing and add-on data
    industries.ts

  lib/
    utils.ts               # cn(), formatCurrency()
```

---

## How to Edit Content

### Change the brand name or contact details
Edit [`src/config/site.ts`](src/config/site.ts). This is the single source of truth for all brand identity, social links, email addresses, and the Calendly booking link.

### Add or edit open roles
Edit [`src/data/careers.ts`](src/data/careers.ts). Add a new object to the `roles` array. The careers page and application form update automatically.

### Edit pricing
Edit [`src/data/pricing.ts`](src/data/pricing.ts). Update `pricingPackages`, `staffingServices`, or `addOns`. Both the pricing preview on the home page and the full pricing page use this data.

### Edit FAQ items
Edit [`src/data/faq.ts`](src/data/faq.ts).

---

## Setting Up Email

1. Create a [Resend](https://resend.com) account.
2. Add and verify your sending domain.
3. Create an API key.
4. Set `RESEND_API_KEY` and `FROM_EMAIL` in `.env.local`.

Email is used for:
- Contact form notifications
- Discovery call lead notifications + prospect confirmations
- Job application notifications + applicant confirmations

---

## Setting Up the Booking Link

1. Create a [Calendly](https://calendly.com) (or similar) booking page.
2. Paste the URL into `siteConfig.bookingUrl` in `src/config/site.ts`.

---

## Deploy to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel
```

Add all environment variables from `.env.example` to your Vercel project settings under **Settings → Environment Variables**.

The site is fully static-compatible except for the three API routes (contact, book, careers/apply). These run as Vercel serverless functions automatically.

---

## Legal Pages

`/privacy` and `/terms` contain **draft** placeholder text clearly marked "Draft — have this reviewed before publishing." Do not remove this notice until you have had the pages reviewed by a solicitor, particularly regarding:
- Cross-border data transfer between Nigeria and the United States
- Placement fee terms
- Liability limitations

---

## Accessibility

- Semantic HTML throughout
- Skip-to-content link
- All interactive elements have visible focus states
- Mobile menu includes focus trap and Escape-key close
- Accordion uses proper ARIA roles
- All form fields are labelled with inline error messages
- Minimum 44px tap targets
- `prefers-reduced-motion` respected

---

## Performance Notes

- Fonts loaded via `next/font` (no layout shift)
- All images use `next/image` (when added)
- Static generation for all pages; API routes are serverless
- Tailwind v4 with Turbopack — fast dev builds
