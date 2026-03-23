# Stevens Family PWA - Product Requirements Document

## Original Problem Statement
Build a Progressive Web App style family portal called "Stevens Family" with a modern luxury family legacy aesthetic - dark luxury theme, gold accents, strong typography. Installable on phone home screen, static site for GitHub Pages.

## User Personas
- **Primary**: Modern family dynasty - parents and children
- **Usage**: Daily dashboard access for family coordination

## Core Requirements (Static)
- PWA with manifest.json and service worker
- Luxury dark theme with gold accents + light/dark mode toggle
- Mobile-first, app-like design
- No backend/database/auth (Google handles access)
- GitHub Pages compatible (HashRouter)

## Design System
**Theme**: Dark Luxury + Light Mode
- Dark BG: #0D0D0F | Light BG: #FDFCFA
- Card Dark: #16161A | Card Light: #FFFFFF
- Gold Accent: #C9B896 (dark) / #8B7D5E (light)
- Text Primary Dark: #F0EDE6 | Light: #1A1A1A

**Typography**: Playfair Display (headings) + Plus Jakarta Sans (body)

**Branding**: Placeholder shield crest with simple serif "SF" text (to be replaced), STEVENS as primary identity

## What's Been Implemented
**Date: March 2026**

### Pages (10 total)
1. Dashboard - Hero with clean crest + STEVENS typography + tile grid
2. Calendar - Family schedule with Google Calendar embed
3. Photos - Family moments with Drive link
4. Upload - Add memories to shared folder
5. Dinner - Tonight's meal plan
6. Closet - Outfit planner with Acloset links
7. Find Items - Home inventory search
8. Recipes - Family kitchen collection
9. Activities - Sports and events
10. Finance - Family legacy budget

### Features
- Clean shield crest logo (no monogram letter)
- STEVENS as bold hero typography identity
- Light/dark mode toggle with localStorage persistence
- Rotating hero background with family photos
- 9 styled dashboard tiles with gold hover effects
- Sticky header with navigation dropdown
- Back navigation on all sub-pages
- PWA manifest + service worker
- Mobile responsive design
- Playfair Display + Plus Jakarta Sans typography

### Bug Fixes
- Fixed sub-page crash (ThemeProvider wrapping issue) - Verified working
- Multiple logo redesign iterations based on user feedback

## Prioritized Backlog

### P1 (High Priority)
- Replace placeholder Google URLs with actual Calendar/Drive/Sheets links
- Deploy to GitHub Pages (yarn build + gh-pages branch)
- Test PWA install on iOS and Android devices

### P2 (Nice to Have)
- Gold accent animations on page load
- Subtle parallax effects
- Family member avatars section

## Next Tasks
1. User to provide actual Google Calendar/Drive/Sheets URLs
2. Configure custom domain (stevensfamily.god-1st.com)
3. Test PWA install on mobile devices
