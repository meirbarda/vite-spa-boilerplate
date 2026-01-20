# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MindWave AI - A React 19 + Vite single-page application for a brain-computer interface product. Marketing/product landing page with Apple-inspired design aesthetic.

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

Requires Node.js 18+.

## Architecture

**Tech Stack**: React 19, Vite 7, vanilla CSS with CSS variables

**Component Structure**:
- `App.jsx` - Root component orchestrating all sections
- `components/` - Section-based components, each with dedicated `.jsx` and `.css` files
- `index.css` - Global styles and design tokens (CSS custom properties)

**Key Components**:
- `Navigation` - Uses `useState`/`useEffect` for scroll detection and mobile menu toggle
- `Hero`, `Features`, `HowItWorks`, `UseCases`, `Specifications`, `Footer` - Content sections

## Design System

CSS variables defined in `index.css`:
- Primary color: `#0071e3` (blue)
- Text: `#1d1d1f`, Secondary text: `#86868b`
- Background: `#ffffff`, Secondary background: `#f5f5f7`
- Font: Inter with system fallbacks
- Max content width: 1200px
- Mobile breakpoint: 768px

Button classes: `.btn-primary`, `.btn-secondary`, `.btn-text`

## Code Patterns

- Component-scoped CSS files (e.g., `Navigation.jsx` paired with `Navigation.css`)
- Inline SVG components with gradient definitions
- Scroll event listeners cleaned up in `useEffect` return
- Mobile-first responsive design using `clamp()` for fluid typography
