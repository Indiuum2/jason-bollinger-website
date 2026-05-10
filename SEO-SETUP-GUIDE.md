# SEO Setup Guide for JasonBollinger.com

## ✅ What I Just Added to Your Site

### 1. Meta Tags on All Pages
- **Title tags** optimized with keywords like "leadership speaker," "keynote speaker," "organizational development"
- **Meta descriptions** that tell search engines what each page is about
- **Keywords meta tags** with relevant search terms
- **Open Graph tags** for better social media sharing (LinkedIn, Facebook)
- **Twitter Card tags** for Twitter sharing
- **Canonical URLs** to prevent duplicate content issues

### 2. New Files Created
- **sitemap.xml** - Tells search engines all your pages
- **robots.txt** - Instructs search engines how to crawl your site

---

## 🚀 Step 1: Upload Updated Files to Netlify/GitHub

Upload these updated files:
1. index.html (with new SEO meta tags)
2. speaking.html (with new SEO meta tags)
3. books.html (with new SEO meta tags)
4. writings.html (with new SEO meta tags)
5. sitemap.xml (NEW FILE)
6. robots.txt (NEW FILE)

---

## 🔍 Step 2: Submit Your Site to Search Engines

### Google Search Console (Most Important)
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `thejasonbollinger.com`
4. Verify ownership using one of these methods:
   - **DNS verification** (recommended - add a TXT record in GoDaddy)
   - **HTML file upload** (Google gives you a file to upload to your site)
   - **Meta tag** (add a tag to your homepage)
5. Once verified, submit your sitemap:
   - Click "Sitemaps" in left menu
   - Enter: `https://thejasonbollinger.com/sitemap.xml`
   - Click Submit

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add your site: `thejasonbollinger.com`
4. Verify (can import from Google Search Console)
5. Submit sitemap: `https://thejasonbollinger.com/sitemap.xml`

---

## 📊 Step 3: Add Google Analytics (Optional but Recommended)

Track who visits your site:

1. Go to https://analytics.google.com
2. Create an account
3. Set up a property for `thejasonbollinger.com`
4. Get your tracking code (looks like `G-XXXXXXXXXX`)
5. Add this to the `<head>` section of ALL your HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual tracking ID.

---

## 🎯 Step 4: Local SEO (Google Business Profile)

Since you're in Florida and want speaking gigs:

1. Go to https://business.google.com
2. Create a profile (or claim existing one)
3. Fill out completely:
   - Business name: Jason Bollinger - Leadership Speaker
   - Category: Public Speaker, Business Consultant
   - Service area: Florida (and other states you'll travel to)
   - Website: thejasonbollinger.com
   - Phone number
   - Business hours (or "By appointment only")
4. Add photos (headshots, speaking photos)
5. Get reviews from past clients/attendees

This helps you show up in "leadership speaker near me" searches.

---

## 📝 Step 5: Content Optimization Tips

### On Every Page:
- Use **H1 tags** for main headings (search engines look for these)
- Use **H2/H3 tags** for subheadings
- Include keywords naturally in your content
- Add **alt text** to images: `<img src="photo.jpg" alt="Jason Bollinger speaking at leadership conference">`

### Speaking Page Specifically:
Add structured data (schema markup) to help Google understand you're a speaker:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jason Bollinger",
  "jobTitle": "Leadership Speaker & Organizational Development Expert",
  "url": "https://thejasonbollinger.com",
  "sameAs": [
    "https://www.linkedin.com/in/jasonbollinger/",
    "https://www.instagram.com/jason.bollinger/"
  ],
  "description": "Keynote speaker helping leaders build high-performing teams, drive strategic change, and create cultures where people and organizations thrive."
}
</script>
```

Add this before the closing `</head>` tag on your homepage.

---

## 🔗 Step 6: Build Backlinks

Search engines rank sites higher when other sites link to them:

### High-Value Backlinks:
1. **LinkedIn articles** - Link back to your site in every article
2. **Guest posts** - Write for leadership blogs, include author bio with link
3. **Directory listings:**
   - Speaker directories (National Speakers Association, etc.)
   - Local business directories
   - Industry-specific directories
4. **Press coverage** - The Space Foundation article linking to you is GOLD
5. **Event listings** - Every speaking gig should link to your site

---

## 📱 Step 7: Social Media Integration

Make sure all your profiles link to your website:

- LinkedIn: Add website to profile, mention in posts
- Instagram: Add to bio
- Twitter/X: Add to bio
- Every LinkedIn article you publish should link to relevant pages

---

## 🎬 Step 8: Video SEO (When You Add Video)

When you get speaking footage:

1. Upload to YouTube with keyword-rich titles:
   - "Jason Bollinger - Leadership Keynote: Building High-Performing Teams"
2. Add detailed descriptions with links to your site
3. Add tags: leadership speaker, keynote speaker, organizational development
4. Embed videos on your speaking page (Google loves video)

---

## ⏱️ Timeline: When Will You See Results?

- **Immediate:** Sitemap submitted, Google starts crawling
- **1-2 weeks:** Pages start appearing in search results (low ranking)
- **1-3 months:** Rankings improve as Google understands your content
- **3-6 months:** Optimal rankings if you're consistently adding content

---

## 📈 How to Track Progress

### In Google Search Console:
- Check "Performance" to see:
  - What searches show your site
  - How many clicks you're getting
  - Your average position in results

### Target Keywords to Track:
- "jason bollinger speaker"
- "leadership speaker florida"
- "organizational development speaker"
- "change management keynote speaker"
- "strategic planning speaker"

---

## 🚨 Common Mistakes to Avoid

1. **Keyword stuffing** - Don't repeat keywords unnaturally
2. **Duplicate content** - Don't copy/paste the same text across pages
3. **Slow site** - Keep images optimized (under 200KB each)
4. **Broken links** - Check all links work
5. **No mobile optimization** - Already handled! ✅

---

## 💡 Quick Wins for Better SEO

### This Week:
1. ✅ Upload all updated files with meta tags
2. ✅ Submit sitemap to Google Search Console
3. Create Google Business Profile
4. Add schema markup to homepage

### This Month:
1. Write 1 new article/week on your Writings page
2. Share every article on LinkedIn with link to your site
3. Ask AMF event organizers to add a link to your site from their event page
4. Get 3-5 testimonials on your speaking page

### Ongoing:
1. Publish weekly content (articles, LinkedIn posts)
2. Every speaking engagement = new content on your site
3. Monitor Google Search Console monthly
4. Update sitemap when you add new pages

---

## 🎯 Keywords Added to Your Site

### Homepage:
- leadership speaker
- organizational development expert
- keynote speaker
- Florida leadership speaker
- strategic planning expert

### Speaking Page:
- book leadership speaker
- hire keynote speaker
- leadership workshop facilitator
- conference speaker
- team building speaker

### Writings Page:
- leadership articles
- strategic leadership
- tactical to strategic playbook
- delegation framework

### Books Page:
- leadership book reviews
- business book reviews
- productivity books

---

## 📞 Need Help?

If you need assistance with:
- Setting up Google Search Console
- Adding Google Analytics
- Creating schema markup
- Optimizing images
- Writing meta descriptions for new pages

Just ask!

---

**Next Action:** Upload the updated HTML files + sitemap.xml + robots.txt to Netlify, then set up Google Search Console.
