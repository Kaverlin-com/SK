# Luma Skin — Next.js + Storyblok

Premium skincare website scaffold built with Next.js App Router, Tailwind CSS, Framer Motion, and Storyblok.

## Stack
- Next.js (App Router, React 19-ready)
- Tailwind CSS
- Framer Motion (subtle micro-interactions)
- Storyblok official SDK (`@storyblok/react`)

## Quickstart
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Storyblok integration
- `lib/storyblok.ts` initializes `storyblokInit` and API plugin.
- `components/storyblok/component-map.tsx` maps CMS component names to React components.
- Homepage fetches `home` Storyblok story and renders dynamic blocks.

## Folder structure
- `app/*` routes: homepage, shop (PLP), product (PDP), about, ingredients, journal, cart, contact
- `components/storyblok/*` reusable Storyblok block renderers
- `components/ui/*` design system primitives (`Button`, `Card`, `Container`, `Section`)
- `storyblok.schema.json` example schema definitions

## Accessibility + performance notes
- Semantic landmarks and labels
- Focus-visible ring utility
- `next/image` optimization + remote domains
- Mobile-first responsive layouts

## Production checklist
- Connect real product / review data
- Add cart state + checkout backend
- Add Storyblok visual editor bridge hooks per-page story IDs
- Configure analytics and consent 
