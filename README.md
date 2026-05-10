# Jason Bollinger - Personal Brand Website
## LATEST COMPLETE VERSION - All Files Clean & Updated

**Download Date:** February 16, 2026  
**Status:** ✅ Ready to Deploy

---

## 📦 Complete File List (10 Files)

### HTML Pages (5 files)
1. **index.html** - Homepage with hero, overview, and **NEW: Featured Press section**
2. **about.html** - About page with bio and expertise
3. **writings.html** - Articles and insights
4. **books.html** - Book reviews (no ratings, just takeaways)
5. **speaking.html** - Speaking engagements with inquiry form

### Component Files (2 files)
6. **header.html** - Centralized navigation (edit once, updates all pages)
7. **footer.html** - Centralized footer with social links

### Supporting Files (3 files)
8. **styles.css** - All styling including press section
9. **scripts.js** - JavaScript for dynamic loading
10. **profile-photo.png** - Your professional headshot

---

## ✨ What's New in This Version

### Featured Press Section Added!
Your homepage now includes a professional "Featured Press" section showcasing your Space Foundation article about the Artemis II mission. This appears between your expertise overview and the footer.

**Highlights from the article:**
- Third-generation space veteran
- Director of Enterprise Support Operations for Amentum
- Responsible for final crew and vehicle preparations for Artemis II
- Quote: "My team and I bring all the LEGO® pieces together"

---

## 🚀 Quick Deploy to Netlify

1. **Download all 10 files** above
2. Go to [netlify.com](https://www.netlify.com) and sign up (free)
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag all 10 files into the upload area
5. Wait 30 seconds - your site is LIVE!

**IMPORTANT:** All 10 files must be uploaded together.

---

## ⚠️ About the Footer Issue

If you're seeing weird footer behavior when opening files directly on your computer, this is NORMAL and EXPECTED:

**Why:** The header and footer use JavaScript's `fetch()` to load dynamically. Browsers block this when opening files with the `file://` protocol.

**Solution:** The footer will work perfectly once uploaded to Netlify. Test there, not locally.

**To test locally:** Run a local server (see TEST-LOCALLY-README.html for instructions) or just upload to Netlify now.

---

## ✏️ Quick Customization Guide

### Update Social Media (ONE file updates ALL pages)
**Edit:** `footer.html`

Replace:
- `yourusername` → your Instagram handle
- `yourusername` → your Twitter/X handle  
- `jason@example.com` → your real email

### Update Your Bio
**Edit:** `about.html`

### Add More Press Articles
**Edit:** `index.html`

Copy the `press-card` div and update with new article details.

### Add Articles
**Edit:** `writings.html`

Replace sample articles with your real ones and update the links.

### Add Book Reviews
**Edit:** `books.html`

Update with your actual book reviews and cover images.

---

## 🌐 Custom Domain Setup

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update DNS records at your registrar with Netlify's instructions
4. Wait 24-48 hours for DNS propagation
5. Netlify auto-provisions free SSL certificate

---

## 📧 Making Forms Work

### Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. In `speaking.html`, change:
   ```html
   <form id="speaking-form">
   ```
   to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Netlify Forms (Simplest if using Netlify)
In `speaking.html`, add `netlify` attribute:
```html
<form id="speaking-form" netlify>
```

Done! Netlify handles it automatically.

---

## 🎨 Site Features

✅ Clean, minimal professional design  
✅ Fully responsive (mobile-ready)  
✅ Featured Press section with Artemis II article  
✅ Centralized header & footer  
✅ Book reviews (no star ratings)  
✅ Speaking inquiry form  
✅ Smooth scroll animations  
✅ Professional color scheme  
✅ Free SSL ready  

---

## 📁 File Structure

```
Your Website
├── Homepage (index.html)
│   ├── Hero with your photo
│   ├── Expertise overview
│   └── Featured Press (Artemis II article) ← NEW!
│
├── About (about.html)
│   └── Bio & expertise areas
│
├── Writings (writings.html)
│   └── Article previews
│
├── Book Reviews (books.html)
│   └── Book takeaways
│
└── Speaking (speaking.html)
    └── Topics & inquiry form
```

---

## 🔧 Colors & Branding

Current theme (edit in `styles.css`):
- Primary: #1a1a1a (dark text)
- Accent: #2a5d84 (professional blue)
- Background: #fafafa (off-white)

---

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Update footer.html with your social media handles
- [ ] Update about.html with your real bio
- [ ] Replace sample articles in writings.html
- [ ] Add your book reviews to books.html
- [ ] Update speaking topics if needed
- [ ] Upload all 10 files to Netlify
- [ ] Test navigation on live site
- [ ] Verify all links work

---

## 🆘 Troubleshooting

**"Footer looks weird on my computer"**
- This is normal! It works on Netlify. See "About the Footer Issue" above.

**"Header/footer not showing"**
- You're opening files directly. Upload to Netlify or run a local server.

**"Profile photo not showing"**
- Make sure `profile-photo.png` is uploaded with all other files.

---

**Version:** Latest (February 16, 2026)  
**Includes:** Featured Press section with Space Foundation article  
**Status:** Production ready ✅

Upload to Netlify now - everything is ready to go!
