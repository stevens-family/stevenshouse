# Stevens Family PWA - Product Requirements Document

## Original Problem Statement
Build a Progressive Web App style family portal called "Stevens Family" with a modern luxury family legacy aesthetic - dark luxury theme, gold accents, strong typography.

## User Personas
- **Primary**: Modern family dynasty - parents and children
- **Usage**: Daily dashboard access for family coordination

## Core Requirements (Static)
- PWA with manifest.json and service worker
- Luxury dark theme with gold accents
- Mobile-first, app-like design
- No backend/database/auth (Google handles access)
- GitHub Pages compatible (HashRouter)

## Design System
**Theme**: Dark Luxury
- Background: #0B0C0F (rich black)
- Card: #171A20
- Text Primary: #F5F5F5
- Text Secondary: #A7AAB3
- Gold Accent: #C6A85A (used sparingly)

**Typography**: Plus Jakarta Sans (headings) + Inter (body)

**Branding**: SF Monogram with gold border

## What's Been Implemented ✅
**Date: March 2026**

### Pages (10 total)
1. Dashboard - Luxury dark tiles with gold hover effects
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
- ✅ Dark luxury theme (#0B0C0F background)
- ✅ SF monogram logo with gold border
- ✅ Sticky top navigation with dropdown menu
- ✅ Gold hover effects on tiles (lift + gold border)
- ✅ Plus Jakarta Sans + Inter typography
- ✅ PWA manifest with dark theme colors
- ✅ Service worker for offline shell
- ✅ Mobile-first responsive design
- ✅ Minimal line icons (Lucide)
- ✅ No emojis, no stock photos on tiles

## Prioritized Backlog

### P0 (Critical for Launch)
- ✅ All complete

### P1 (High Priority)
- Replace placeholder Google URLs with actual links
- Deploy to GitHub Pages
- Test PWA install on devices

### P2 (Nice to Have)
- Add gold accent animations on page load
- Implement subtle parallax effects
- Add family member avatars section

## Next Tasks
1. User to provide actual Google Calendar/Drive/Sheets URLs
2. Configure custom domain (stevensfamily.god-1st.com)
3. Test PWA install on iOS and Android
