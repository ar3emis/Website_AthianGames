# Athian Games Website

Modern, production-ready website for Athian Games - an independent Unreal Engine studio and creator brand.

## 🎯 Overview

This is a full-stack Next.js application featuring:

- **Direct Sales Store** - Sell custom UE assets and plugins with Stripe integration
- **External Marketplace Aggregation** - Links to Fab, Unreal Marketplace, and Gumroad
- **Plugins & Tools Showcase** - Highlight proprietary Unreal Engine tools
- **Creator Hub** - Personal brand landing page on subdomain
- **CMS Integration** - Payload CMS for easy content management
- **Professional Design** - Dark, minimal, game-dev-focused aesthetic

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Payload CMS
- **Database**: MongoDB
- **Payments**: Stripe
- **Hosting**: Vercel (recommended)

## 📁 Project Structure

```
athian-games-website/
├── app/                      # Next.js app router pages
│   ├── (routes)/
│   │   ├── page.tsx         # Homepage
│   │   ├── store/           # Product store
│   │   ├── marketplace/     # External listings
│   │   ├── plugins/         # Plugins showcase
│   │   ├── about/           # About page
│   │   └── contact/         # Contact form
│   ├── creator/             # Creator hub (subdomain)
│   ├── api/                 # API routes
│   │   ├── checkout/        # Stripe checkout
│   │   ├── contact/         # Contact form handler
│   │   └── webhooks/        # Stripe webhooks
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Header, Footer
│   ├── ui/                  # Reusable UI components
│   ├── products/            # Product-related components
│   ├── forms/               # Form components
│   └── home/                # Homepage sections
├── lib/                     # Utilities and integrations
│   ├── stripe/              # Stripe client & server
│   ├── payload/             # Payload CMS utilities
│   └── utils/               # Helper functions
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
├── payload.config.ts        # Payload CMS configuration
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or Atlas)
- Stripe account
- (Optional) Email service for contact form

### Installation

1. **Clone and install dependencies**

```bash
npm install
```

2. **Set up environment variables**

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/athian-games
DATABASE_URI=mongodb://localhost:27017/athian-games

# Payload CMS
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=sameek.kundu@athiangames.com
```

3. **Run development server**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

4. **Access CMS Admin**

Navigate to `http://localhost:3000/admin` to access Payload CMS admin panel.

First time setup:
- Create an admin account
- Add products, plugins, and marketplace listings

## 📦 Building for Production

1. **Build the application**

```bash
npm run build
```

2. **Start production server**

```bash
npm start
```

## 🎨 Customization

### Design System

All design tokens are defined in `tailwind.config.ts` and `app/globals.css`:

- **Colors**: HSL-based color system with CSS variables
- **Typography**: Inter for UI, JetBrains Mono for code
- **Spacing**: Consistent scale using Tailwind defaults

### Adding Products

Via Payload CMS Admin:

1. Navigate to `/admin`
2. Go to "Products" collection
3. Click "Create New"
4. Fill in product details:
   - Name, slug, description
   - Price and category
   - Images and features
   - Engine compatibility
   - License type

### Content Management

All content can be managed through Payload CMS:

- **Products**: Direct sales items
- **Marketplace Listings**: External platform links
- **Plugins**: Plugin showcase entries
- **Media**: Image and video uploads

## 💳 Stripe Integration

### Setup

1. Get your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com)
2. Add keys to `.env`
3. Set up webhook endpoint at `/api/webhooks/stripe`

### Testing

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

### Webhook Configuration

1. Install Stripe CLI for local testing:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

2. For production, add webhook in Stripe Dashboard:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`

## 🌐 Subdomain Setup

The creator hub (`sameekkundu.athiangames.com`) is handled via middleware:

### Development

Test locally using hosts file:
```
127.0.0.1 sameekkundu.athiangames.local
```

### Production (Vercel)

1. Add custom domain in Vercel dashboard
2. Configure DNS records:
   - Main: `athiangames.com` → Vercel
   - Subdomain: `sameekkundu.athiangames.com` → Vercel
3. Update `NEXT_PUBLIC_MAIN_DOMAIN` in environment variables

## 📧 Contact Form

The contact form at `/contact` requires SMTP configuration.

### Email Service Options

1. **Gmail** (development)
   - Enable 2FA and create App Password
   - Use SMTP settings in `.env`

2. **SendGrid** (production)
   - Better deliverability
   - Update `/app/api/contact/route.ts` to use SendGrid SDK

3. **Resend** (recommended)
   - Modern, developer-friendly
   - Replace nodemailer with Resend SDK

## 🔍 SEO

SEO is handled via Next.js metadata:

- Dynamic metadata per page
- Open Graph tags
- Twitter cards
- Sitemap generation
- Robots.txt

To generate sitemap:
```bash
npm run build
```

## 🎯 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

Requirements:
- Node.js server
- MongoDB instance
- HTTPS/SSL certificate

```bash
npm run build
npm start
```

## 🛠️ Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run payload` - Run Payload CLI

## 📝 Site Map

### Main Site
- `/` - Homepage with hero, featured products, social proof
- `/store` - Product listing with filters
- `/store/[slug]` - Individual product pages with Stripe checkout
- `/marketplace` - External marketplace aggregation
- `/plugins` - Plugins and tools showcase
- `/about` - Studio narrative and philosophy
- `/contact` - Contact form and inquiries

### Creator Hub (Subdomain)
- `sameekkundu.athiangames.com` - Personal brand landing page
  - Bio and about
  - YouTube embeds/links
  - Patreon integration
  - Recent content

### Admin
- `/admin` - Payload CMS dashboard

## 🎨 Key Features

### Homepage
- Animated hero with gradient effects
- Featured products grid
- Social proof statistics
- Multi-CTA section (Store, Patreon, YouTube)

### Store
- Product filtering (category, engine version, price)
- Product detail pages with galleries
- Stripe checkout integration
- Feature lists and technical specs

### CMS
- User-friendly admin interface
- Rich text editor for descriptions
- Image upload and management
- Relationship fields for linking content

## 🔐 Security

- Environment variables for sensitive data
- Stripe webhook signature verification
- HTTPS enforcement (production)
- Input validation on forms
- SQL injection prevention (MongoDB)

## 📊 Analytics

To add Google Analytics:

1. Add `NEXT_PUBLIC_GA_ID` to `.env`
2. Install analytics library:
```bash
npm install @next/third-parties
```
3. Add to `app/layout.tsx`

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check connection string format
- Verify network access (if using Atlas)

### Stripe Checkout Not Working
- Verify publishable/secret keys match (test vs live)
- Check webhook endpoint is accessible
- Review Stripe Dashboard logs

### Image Upload Errors
- Check `public/uploads` directory permissions
- Verify Payload media configuration
- Ensure file size limits

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Support

For issues or questions:
- Email: sameek.kundu@athiangames.com
- GitHub Issues (if open source)

## 📄 License

Copyright © 2026 Athian Games. All rights reserved.

---

Built with Next.js, TypeScript, and Tailwind CSS. Designed for serious creators.
