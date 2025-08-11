# Leaf & Latte — MVP Delivery Plan

## Summary

Lean Phase 0 (single repo, Vercel, minimal tooling), then design system, data model, read-only site, ordering + Stripe, admin, realtime, PWA/offline, Instagram, SEO, rewards, QA, launch.

---

## Phase 0 — MVP Setup (Lite)

**Goal:** Single-repo Next.js app with minimal tooling and envs.

- [x] **[P0L-1] Create Repo & App**  
       Scaffold: `npx create-next-app@latest leaf-latte --ts --tailwind --app --src-dir`
- [x] **[P0L-2] Vercel Deploy**  
       Connect repo; auto-deploy `main`; preview PRs.
- [x] **[P0L-3] Env Vars (placeholders)**  
       `NEXT_PUBLIC_SITE_URL`, `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `DATABASE_URL`, `CLOUDINARY_CLOUD_NAME`.
- [x] **[P0L-4] Tooling**  
       Prettier (+ tailwind plugin), ESLint (Next), `lint-staged` + `simple-git-hooks`.
- [x] **[P0L-5] Tailwind Brand Tokens & Fonts**  
       Add colours (#4CAF50, #F4E1D2, #C97B4A), radius `2xl`, shadows; Poppins/Open Sans via `next/font`.
- [ ] **[P0L-6] App Skeleton**  
       Routes: `/`, `/menu`, `/blog`, `/blog/[slug]`, `/contact`, `/cart`, `/checkout`, `/order/[id]`, `/admin`.
- [ ] **[P0L-7] Errors & Analytics (basic)**  
       Error boundary, 404; optional Plausible/GA behind env toggle.

---

## Phase 1 — Design System & Theming

**Goal:** Brand-faithful primitives and accessible baseline.

- [ ] **[P1-1] Tailwind Config Finalise** (tokens, spacing, shadows)
- [ ] **[P1-2] Typography** (Poppins headings, Open Sans body via `next/font`)
- [ ] **[P1-3] Components** (Button, Input, Card, Navbar, Footer, Badge, Toast)
- [ ] **[P1-4] A11y Baseline** (focus states, skip link, contrast ≥ 4.5:1)
- [ ] **[P1-5] `/styleguide` route** (showcase colours, type, components)

---

## Phase 2 — Data Model, DB & CMS

**Goal:** Source of truth for menu, orders, blog; media pipeline.

- [ ] **[P2-1] ERD & SQL Migrations**  
       Tables: `categories`, `menu_items`, `allergens`, `menu_item_allergens`, `orders`, `order_items`, `blog_posts`, `users`, `reward_ledger`.
- [ ] **[P2-2] Seed Data** (core categories/items)
- [ ] **[P2-3] CMS Setup (Strapi/Sanity)**  
       Types: Category, Menu Item, Blog Post, Review Snippet; preview token.
- [ ] **[P2-4] Cloudinary** (upload preset, responsive transforms)
- [ ] **[P2-5] Auth Choice** (Supabase Auth / NextAuth+Supabase adapter)

---

## Phase 3 — Public Site (Read-only MVP)

**Goal:** Fast, SEO-friendly site with real content.

- [ ] **[P3-1] Home** (hero seasonal drink, CTA “Order Now”, mini menu, reviews, IG placeholder)
- [ ] **[P3-2] Menu (read-only)** (filters, item cards, allergens, ISR/SSG)
- [ ] **[P3-3] Blog** (list + post, pagination, OG tags)
- [ ] **[P3-4] Contact** (hours, Google Map, basic form w/ honeypot)
- [ ] **[P3-5] Analytics & Error Tracking** (Plausible/GA, Sentry)
- [ ] **[P3-6] Lighthouse Targets** (≥ 90 perf/SEO mobile)

---

## Phase 4 — Cart & Checkout (Stripe Test Mode)

**Goal:** Add to cart, schedule pickup, pay, persist order.

- [ ] **[P4-1] Cart UX** (add/edit/remove, modifiers, totals)
- [ ] **[P4-2] Pickup Slots** (within opening hours, prep buffer)
- [ ] **[P4-3] Stripe Checkout Session** (server route, redirect)
- [ ] **[P4-4] Webhooks & Persistence** (`checkout.session.completed` → `orders` + `order_items`, idempotent)
- [ ] **[P4-5] Confirmation UX** (success page, email receipt via Resend/SendGrid)

---

## Phase 5 — Admin Dashboard (MVP)

**Goal:** Manage menu and view orders securely.

- [ ] **[P5-1] Admin Auth** (role-gated `/admin`, session timeout, audit log)
- [ ] **[P5-2] Menu CRUD** (create/edit/delete, upload images, specials)
- [ ] **[P5-3] Orders (read-only)** (filters by status/date, pagination)
- [ ] **[P5-4] Blog CRUD** (draft/publish, media embed, preview link)

---

## Phase 6 — Ordering Ops & Live Tracker

**Goal:** Baristas update status; customers see realtime progress.

- [ ] **[P6-1] Order Status API** (Pending → Preparing → Ready → Collected/Cancelled)
- [ ] **[P6-2] Realtime Channel** (WebSocket/SSE or Supabase Realtime; reconnect/heartbeat)
- [ ] **[P6-3] Admin Controls** (update status, sound/visual notification)
- [ ] **[P6-4] Customer Tracker UI** (`/order/[id]` progress steps, auto-updates)

---

## Phase 7 — PWA & Offline Menu

**Goal:** Installable and resilient when offline.

- [ ] **[P7-1] PWA Manifest** (icons, theme colour; install prompt)
- [ ] **[P7-2] Service Worker** (Workbox: images cache-first; pages SWR; checkout network-only)
- [ ] **[P7-3] Offline UX** (banner/toast; disable checkout offline; fallbacks)

---

## Phase 8 — Instagram Integration

**Goal:** Live feed preview on Home.

- [ ] **[P8-1] IG Graph API** (business token, long-lived rotation note)
- [ ] **[P8-2] Feed Component** (lazy grid; graceful fallback on rate limit)

---

## Phase 9 — Local SEO & Marketing Polish

**Goal:** Discoverability and rich snippets.

- [ ] **[P9-1] Technical SEO** (`next-sitemap`, robots, canonicals, OG/Twitter Cards)
- [ ] **[P9-2] Structured Data** (JSON-LD: `LocalBusiness`, `Menu`, `Review`)
- [ ] **[P9-3] Performance** (Cloudinary images, code-split, ISR tuning, LCP ≤ 2.5s)

---

## Phase 10 — Rewards Prototype

**Goal:** Earn points per order; simple account view.

- [ ] **[P10-1] Schema & Accrual** (`reward_ledger`, 1pt/$1, tests)
- [ ] **[P10-2] Customer View** (balance + ledger)
- [ ] **[P10-3] Admin Adjustments** (add/remove with reason, audited)

---

## Phase 11 — QA, Security, Accessibility

**Goal:** Confidence to launch.

- [ ] **[P11-1] Tests** (unit: Vitest/Jest; API: supertest; E2E: Playwright; run in CI)
- [ ] **[P11-2] Security** (rate limits, helmet, CORS, CSRF where needed, webhook signature verify, input sanitisation)
- [ ] **[P11-3] Accessibility** (keyboard nav, ARIA, WCAG 2.1 AA on key pages)
- [ ] **[P11-4] Observability** (structured logs, request IDs, Sentry, uptime monitor)

---

## Phase 12 — Launch & Handover

**Goal:** Smooth release and client autonomy.

- [ ] **[P12-1] Content Freeze & Review** (seasonal hero, menu, prices verified; sign-off)
- [ ] **[P12-2] Rollout** (promote staging → prod, warm ISR, verify live webhooks)
- [ ] **[P12-3] Docs & Training** (admin handbook, incident playbook, token rotation)

---

## Dependencies (at a glance)

- Phase 3 ↔ depends on Phases 1–2
- Phase 4 ↔ depends on 2 & 3
- Phase 5 ↔ depends on 2 & 4
- Phase 6 ↔ depends on 4 & 5
- Phase 7 ↔ after 3 (finalise after 4)
- Phase 8 ↔ after 3 (parallel)
- Phase 9 ↔ after 3 (refine after 7)
- Phase 10 ↔ after 4
- Phase 11 ↔ global
- Phase 12 ↔ last

---

### Conventions

- Branches: `feat/*`, `fix/*`, `chore/*`
- Commits: Conventional Commits
- API: REST `/v1`, idempotent webhook POSTs
- Error model: RFC 9457 Problem Details
- Monitoring: Sentry + analytics, provider logs
