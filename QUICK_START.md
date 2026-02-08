# Quick Start Guide

Get your Athian Games website running in under 10 minutes.

## Prerequisites

- Node.js 18+ installed
- MongoDB running (local or Atlas)
- Stripe account (test mode is fine)

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create `.env` file:

```bash
cp .env.example .env
```

Edit `.env` with minimum required values:

```env
# Database (use local MongoDB for quick start)
MONGODB_URI=mongodb://localhost:27017/athian-games
DATABASE_URI=mongodb://localhost:27017/athian-games

# Payload CMS (generate a random secret)
PAYLOAD_SECRET=your-secret-key-change-this
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Stripe (get from https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_your_test_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_test_key_here
STRIPE_WEBHOOK_SECRET=whsec_we_will_get_this_later

# Email (optional for quick start - can skip contact form)
CONTACT_EMAIL=your-email@example.com
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` - you should see the homepage!

## Initial CMS Setup

### 1. Create Admin Account

Navigate to `http://localhost:3000/admin`

Create your first admin user:
- Email: your-email@example.com
- Password: (set a strong password)

### 2. Add Your First Product

In the admin dashboard:

1. Go to "Products" → "Create New"
2. Fill in:
   - **Name**: "Test Product"
   - **Slug**: "test-product"
   - **Description**: "This is a test product"
   - **Short Description**: "Test product for development"
   - **Price**: 29.99
   - **Category**: Select "Plugins"
   - **License**: Select "Multi-Project"
   - **Engine Compatibility**: Add "UE 5.3"
3. Save

### 3. Upload Media (Optional)

Go to "Media" → Upload a test image for your product

## Testing Stripe Checkout

### 1. Set Up Webhook (Local Testing)

In a new terminal:

```bash
# Install Stripe CLI
# Windows (with Scoop): scoop install stripe
# Mac (with Homebrew): brew install stripe/stripe-cli/stripe
# Or download from: https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret and add to `.env`:

```env
STRIPE_WEBHOOK_SECRET=whsec_xxx_from_stripe_cli
```

### 2. Test a Purchase

1. Go to `http://localhost:3000/store`
2. Click on your test product
3. Click "Purchase Now"
4. Use test card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits
5. Complete checkout

You should see success! Check your terminal with `stripe listen` for webhook events.

## Pages Overview

Visit these URLs to see all pages:

- Homepage: `http://localhost:3000`
- Store: `http://localhost:3000/store`
- Product Detail: `http://localhost:3000/store/test-product`
- Marketplace: `http://localhost:3000/marketplace`
- Plugins: `http://localhost:3000/plugins`
- About: `http://localhost:3000/about`
- Contact: `http://localhost:3000/contact`
- CMS Admin: `http://localhost:3000/admin`

## Customization Quick Wins

### 1. Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 265 80% 60%;    /* Change these numbers */
  --accent: 45 93% 58%;      /* HSL color values */
}
```

### 2. Update Social Links

Edit `components/layout/Footer.tsx` and `components/layout/Header.tsx`:

```typescript
const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@youraccount",  // Change this
    icon: Youtube,
  },
  // ... etc
];
```

### 3. Edit Homepage Content

Edit `components/home/HeroSection.tsx`:

```typescript
<h1 className="mb-6 text-gradient">
  Your Custom Headline Here
</h1>
```

### 4. Update Stats

Edit `components/home/SocialProof.tsx`:

```typescript
const stats = [
  {
    icon: Youtube,
    value: "10K",      // Change your numbers
    label: "YouTube Subscribers",
    // ...
  },
];
```

## Common Issues

### MongoDB Connection Error

**Problem**: `MongooseServerSelectionError`

**Solution**:
- Ensure MongoDB is running: `mongod` (or use MongoDB Compass)
- Check connection string in `.env`
- Try `mongodb://127.0.0.1:27017/athian-games`

### Stripe Checkout Not Working

**Problem**: Checkout button doesn't work

**Solution**:
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` starts with `pk_test_`
- Check browser console for errors
- Ensure product has `id` field in the mock data

### Images Not Loading

**Problem**: Product images show placeholder

**Solution**:
- This is expected with mock data
- Upload real images via CMS admin
- Or add images to `public/images/products/`

### TypeScript Errors

**Problem**: Build fails with type errors

**Solution**:
```bash
# Regenerate Payload types
npm run generate:types

# Check for errors
npm run build
```

## Next Steps

Now that you have it running:

1. **Read the docs**:
   - `README.md` - Full documentation
   - `DEPLOYMENT.md` - Production deployment
   - `SITE_ARCHITECTURE.md` - Technical details

2. **Add real content**:
   - Create your actual products
   - Upload product images
   - Customize copy and branding

3. **Configure integrations**:
   - Set up email service (SendGrid/Resend)
   - Connect to production database
   - Configure live Stripe keys

4. **Deploy to production**:
   - Push to GitHub
   - Deploy to Vercel
   - Configure custom domain

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# CMS
npm run payload         # Run Payload CLI
npm run generate:types  # Generate TypeScript types

# Code quality
npm run lint            # Run linter
```

## Getting Help

- Check `README.md` for detailed documentation
- Review `SITE_ARCHITECTURE.md` for technical details
- See `DEPLOYMENT.md` for production setup
- Contact: sameek.kundu@athiangames.com

---

You're ready to build! Start customizing and make it yours.
