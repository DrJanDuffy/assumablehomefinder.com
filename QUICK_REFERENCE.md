# Quick Reference Guide
## AssumableHomeFinder.com - Key Information

---

## 🎯 Site Overview

**Domain:** assumablehomefinder.com  
**Purpose:** Lead generation for assumable mortgage opportunities  
**Target Market:** Las Vegas, Henderson, North Las Vegas, Nevada  
**Agent:** Dr. Jan Duffy  
**License:** S.0197614.LLC  
**Brokerage:** Berkshire Hathaway HomeServices Nevada Properties

---

## 📞 Contact Information

**Primary Phone:** (702) 500-1971  
**Email:** DrJanDuffy@bhhsnv.com  
**Service Areas:** Las Vegas, Henderson, North Las Vegas, Nevada

---

## 🔑 Key Pages & URLs

### Main Pages
- `/` - Homepage (Assumable mortgage overview)
- `/how-it-works` - 6-step assumption process guide
- `/fha-assumable-loans` - FHA loan assumption details
- `/va-assumable-loans` - VA loan assumption guide
- `/usda-assumable-loans` - USDA loan information
- `/calculator` - Savings calculator tool
- `/find-homes` - Home search with RealScout widgets
- `/for-sellers` - Marketing assumable mortgages
- `/faq` - Frequently asked questions
- `/about` - Dr. Jan Duffy bio and expertise
- `/contact` - Contact form and information
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/privacy` - Privacy policy

### Technical
- `/sitemap.xml` - Dynamic sitemap
- `/robots.txt` - Robots configuration
- `/og` - Dynamic Open Graph image generation

---

## 🎨 Design System

### Colors
- **Primary:** `#1e3a5f` (Deep Blue)
- **Primary Dark:** Darker shade for hover states
- **Primary Light:** Lighter shade for gradients
- **Secondary/Accent:** `#d4a84b` (Gold/Amber)
- **Accent Dark:** Darker accent for text
- **Success:** `#22c55e` (Green)

### Typography
- **Headings:** Bold, tracking-tight
- **Body:** Inter/Open Sans family
- **Responsive:** Mobile-first sizing (text-3xl → sm:text-4xl → md:text-5xl)

---

## 📐 Component Structure

### Layout Components
- `Header.tsx` - Sticky navigation with mobile menu
- `Footer.tsx` - Footer with NAP and links
- `AuthorBox.tsx` - Author display (full/compact/inline)
- `ExpertInsight.tsx` - Expert quote component

### Section Components
- `Hero.tsx` - Hero section with CTAs
- `Stats.tsx` - Animated statistics
- `HowItWorks.tsx` - Process steps
- `LoanTypes.tsx` - Loan type cards
- `FAQ.tsx` - FAQ accordion
- `ContactForm.tsx` - Lead capture form
- `AgentBio.tsx` - Agent bio section

### UI Components
- `Button.tsx` - Button with variants (primary/secondary/outline)
- `Card.tsx` - Card container
- `Input.tsx` - Form input with validation
- `Accordion.tsx` - FAQ accordion item

---

## 🗂️ File Organization

```
app/
├── components/
│   ├── author/          # Authority components
│   ├── calculator/      # Calculator components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── (pages)/             # All page.tsx files
└── layout.tsx           # Root layout

lib/
├── author-info.ts       # Author data & schemas
├── constants.ts         # Site constants
├── schema-generators.ts # Schema markup
├── seo-config.ts        # SEO utilities
├── calculator-utils.ts  # Calculator logic
└── content-library/     # Long-tail content library
```

---

## 🔍 SEO Checklist

### Every Page Must Have:
- ✅ One H1 tag
- ✅ Minimum 3 H2 tags
- ✅ Multiple H3 tags
- ✅ 1500+ words of content
- ✅ Unique meta title & description
- ✅ Schema markup (WebPage + specific types)
- ✅ BreadcrumbList schema
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Twitter Card tags

### Schema Types by Page:
- **Homepage:** Organization, RealEstateAgent, WebPage
- **Loan Pages:** WebPage, BreadcrumbList
- **How It Works:** HowTo, WebPage, BreadcrumbList
- **Calculator:** Calculator, WebPage, BreadcrumbList
- **FAQ:** FAQPage, WebPage, BreadcrumbList
- **Blog Posts:** Article/BlogPosting, Person (author)
- **About:** Person, RealEstateAgent, WebPage

---

## 📱 Mobile Optimization

### Touch Targets
- Minimum 44px × 44px for all interactive elements
- Buttons: `min-h-[48px]` for better touch
- Links: `min-h-[48px]` with proper spacing

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Tablet: `sm:` (≥ 640px)
- Desktop: `md:` (≥ 768px), `lg:` (≥ 1024px)

### Mobile-First Patterns
- Stack columns on mobile, grid on desktop
- Full-width buttons on mobile (`fullWidthMobile={true}`)
- Larger font sizes on mobile (text-base = 16px)
- Touch-friendly spacing (gap-4, p-4)

---

## 🎯 Authority Indicators

### Dr. Jan Duffy Authority Signals:
1. **Experience:** 30+ years highlighted
2. **Expertise:** Assumable mortgage specialist
3. **Credentials:** License S.0197614.LLC displayed
4. **Brokerage:** Berkshire Hathaway affiliation
5. **Author Schema:** Person schema with E-E-A-T signals
6. **Expertise Areas:** FHA, VA, USDA loans
7. **Market Knowledge:** Las Vegas market expert
8. **Published Content:** Expert articles and guides

---

## 📊 Content Library Usage

### Long-Tail Questions
Located in: `lib/content-library/long-tail-questions.ts`

**To add new blog posts:**
1. Use questions from library
2. Run `generateArticleContent()` function
3. Create MDX/blog post file
4. Add to blog posts list

**Priority Questions:**
- Check `prioritizedQuestions` for highest Information Gain
- Focus on low-competition questions first
- Build internal links between related questions

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server

# Build (use Vercel CLI)
vercel build         # Production build
vercel dev           # Vercel dev environment

# Type Checking
npm run type-check   # Check TypeScript
```

---

## 📈 Performance Optimization

- **Images:** Use Next.js `<Image>` component
- **Preconnect:** RealScout widgets (em.realscout.com)
- **DNS-Prefetch:** External domains
- **Analytics:** Vercel Analytics + Speed Insights
- **Code Splitting:** Dynamic imports for heavy components

---

## ✅ Pre-Deployment Checklist

- [ ] All pages have proper H1/H2/H3 structure
- [ ] All pages have 1500+ words
- [ ] Schema markup validated
- [ ] Mobile responsive tested
- [ ] All forms working
- [ ] Calculator functioning correctly
- [ ] RealScout widgets loading
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured

---

## 📝 Notes

- **Viewport Metadata:** Currently in metadata export (Next.js 15 recommends separate viewport export, but works correctly)
- **RealScout:** Widgets require script in `<head>` and components in `<body>`
- **Calculator:** Uses React Hook Form + Zod validation
- **Blog:** MDX-based with contentlayer

---

**Last Updated:** 2025-01-17
