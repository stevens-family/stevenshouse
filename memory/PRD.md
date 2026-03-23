# Stevens Family PWA - Product Requirements Document

## Original Problem Statement
Build a Progressive Web App style family portal called "Stevens Family" that functions as both a beautiful website on desktop and an app-like experience on mobile, installable to phone home screen, for static GitHub Pages hosting.

## User Personas
- **Primary**: Blended family members (parents and children)
- **Usage**: Daily dashboard access for family coordination

## Core Requirements (Static)
- PWA with manifest.json and service worker
- Mobile-first, app-like design
- Dark mode support
- No backend/database/auth (Google handles access)
- GitHub Pages compatible (HashRouter)

## What's Been Implemented ✅
**Date: March 2026**

### Pages (10 total)
1. Dashboard (index) - Bento grid with 9 tiles
2. Calendar - Google Calendar embed placeholder
3. Photos - Google Drive link
4. Upload - Google Drive upload folder link
5. Dinner - Meal planning embed placeholder
6. Closet - Acloset app integration
7. Find Items - Home inventory embed placeholder
8. Recipes - Family recipe collection
9. Activities - Family activity ideas
10. Finance - Budget dashboard embed placeholder
11. More - Full navigation menu

### Features
- ✅ PWA manifest.json with app icons (SVG)
- ✅ Service worker for offline shell
- ✅ Dark/Light mode toggle with persistence
- ✅ Bottom navigation bar
- ✅ Warm Terracotta color palette (#E07A5F primary)
- ✅ Responsive design (mobile-first)
- ✅ Touch-optimized tiles (44px minimum)
- ✅ Google Fonts (Nunito + DM Sans)
- ✅ HashRouter for GitHub Pages
- ✅ Data-testid on all interactive elements

### Design System
- Primary: #E07A5F (Warm Terracotta)
- Secondary: #81B29A (Sage Green)
- Accent: #F2CC8F (Soft Gold)
- Background Light: #F4F1DE (Soft Sand)
- Background Dark: #1D1D1F (Deep Charcoal)

## Prioritized Backlog

### P0 (Critical for Launch)
- ✅ All complete

### P1 (High Priority)
- Replace placeholder Google URLs with actual links
- Generate PNG icons from SVG for broader browser support
- Add splash screens for iOS

### P2 (Nice to Have)
- Add pull-to-refresh gesture
- Implement offline caching for static content
- Add push notification support
- Create family photo slideshow feature

## Next Tasks
1. User to provide actual Google Calendar/Drive/Sheets URLs
2. Deploy to GitHub Pages
3. Test PWA install on iOS and Android devices
4. Configure custom domain (stevensfamily.god-1st.com)
