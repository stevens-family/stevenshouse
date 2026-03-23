# Stevens Family PWA - Product Requirements Document

## Original Problem Statement
Build a Progressive Web App style family portal called "Stevens Family" with a modern luxury family legacy aesthetic - dark luxury theme, gold accents, strong typography. Installable on phone home screen, static site for GitHub Pages.

## Core Requirements
- PWA with manifest.json and service worker
- Luxury dark theme with gold accents + light/dark mode toggle
- Mobile-first, app-like design
- No backend/database/auth
- GitHub Pages compatible (static HTML/CSS/JS)

## Design System
**Theme**: Dark Luxury + Light Mode
- Dark BG: #0D0D0F | Light BG: #FDFCFA
- Gold Accent: #C9B896 (dark) / #8B7D5E (light)
**Typography**: Playfair Display (headings) + Plus Jakarta Sans (body)
**Branding**: Placeholder SF crest logo (to be replaced later)

## What's Been Implemented (March 2026)

### Static Site (Final Deliverable)
Pure HTML/CSS/JS static site — no React, no build step, GitHub Pages ready.

**Files delivered:**
- 10 HTML pages: index, calendar, photos, finance, closet, recipes, find, dinner, upload, activities
- css/styles.css — Full theme system with CSS variables, dark/light modes
- js/script.js — Theme toggle, nav menu, hero slideshow, PWA registration
- manifest.json + service-worker.js for PWA
- 27 image assets: logo (SVG+PNG), favicon (SVG+PNG), app icons (192+512, SVG+PNG), 3 hero photos, 9 tile icon SVGs
- Total size: ~512KB (393KB zipped)

**Features:**
- Dark/light mode toggle with localStorage persistence
- Rotating hero background slideshow
- 9 dashboard tiles with hover effects
- Sticky header with crest logo + navigation dropdown
- Responsive layout (2-col mobile, up to 5-col desktop)
- Google embed areas on Calendar, Finance, Find Items, Dinner pages
- External link buttons to Google Drive, Acloset, etc.
- PWA installable with manifest + service worker

### Previous React App
Also available but superseded by the static site. Includes the same features built in React with HashRouter.

## Prioritized Backlog

### P0 (Must Do)
- Replace placeholder Google URLs with actual Calendar/Drive/Sheets links
- Upload static site to GitHub repository

### P1 (Should Do)
- Replace placeholder SF crest with final designed logo
- Configure custom domain (stevensfamily.god-1st.com)
- Test PWA install on iOS and Android devices

### P2 (Nice to Have)
- Gold accent animations on page load
- Parallax effects
- Family member avatars section
