# Admin Panel Guide - Athian Games

## 📍 Accessing the Admin Panel

**Local:** http://localhost:3000/admin
**Production:** https://athiangames.com/admin

## 🔑 Authentication

The admin panel is protected and only accessible from localhost (local development) or by authenticated admin users (production).

---

## 📊 Admin Dashboard Features

### 1. **Overview Dashboard** (`/admin`)

View key statistics:
- Total products count
- Featured products
- External products
- Categories
- Quick actions to manage products, beta signups, and configuration

---

### 2. **Product Management** (`/admin/products`)

**Features:**
- ✅ View all products in a grid layout
- ✅ Filter by category (Plugins, VFX, Tools, etc.)
- ✅ Edit product details
- ✅ Add new products
- ✅ Delete products (soft delete - can be restored)
- ✅ View product thumbnails and descriptions

**Editing a Product:**
1. Click on any product card
2. Update fields:
   - Basic info (name, slug, category, price)
   - Descriptions (top text, bottom text, summary, full description)
   - External links (marketplace URL, documentation, Discord, video tutorial)
   - Download URLs (Google Drive integration)
   - Engine versions
   - Features with images
   - Media (thumbnail, banner, video ID)
3. Click "Save Product"
4. Changes are saved to `data/product-overrides.json` and applied immediately

**Adding a New Product:**
1. Click "Add New Product" button
2. Fill in all required fields
3. Add features and upload images
4. Save

**Deleting a Product:**
1. Click the delete button on a product card
2. Product is marked as deleted (soft delete)
3. Product won't appear on the website
4. Can be restored by editing `data/product-overrides.json`

---

### 3. **Beta Signups** (`/admin/beta`)

**View and manage beta program signups (e.g., for FabricAI)**

**Features:**
- ✅ View all beta signups grouped by product
- ✅ See signup statistics (total, pending, invited, accepted)
- ✅ Filter by product
- ✅ Update signup status (pending → invited → accepted)
- ✅ Export to CSV
- ✅ Delete signups
- ✅ View user details (email, name, message, signup date)

**Managing Signups:**

1. **View All Signups:**
   - All signups are displayed grouped by product
   - Each product shows total count and status breakdown

2. **Update Status:**
   - Click the status badge on any signup
   - Change from "Pending" to "Invited" or "Accepted"
   - Timestamps are automatically recorded

3. **Export Data:**
   - Click "Export CSV" button
   - Downloads a CSV file with all signup data
   - Useful for email campaigns or analysis

4. **Delete Signup:**
   - Click the trash icon next to any signup
   - Confirms before deletion
   - Permanently removes from database

**Signup Statuses:**
- 🕐 **Pending** - User signed up, awaiting review
- 📧 **Invited** - User has been invited to beta
- ✅ **Accepted** - User has accepted and is in beta
- ❌ **Declined** - User declined or was rejected

**Best Practices:**
- Check signups regularly (daily for active beta programs)
- Move to "Invited" when you send beta access
- Move to "Accepted" when user confirms participation
- Export data before sending email campaigns

---

### 4. **Configuration** (`/admin/config`)

**Features:**
- ✅ Update site configuration
- ✅ Change homepage trailer video
- ✅ Update social media links
- ✅ Configure Patreon and Discord URLs
- ✅ Manage site metadata

---

### 5. **Availability Management** (`/admin/availability`)

**Manage your availability for consultation bookings**

Features:
- Set available time slots
- Configure working hours
- Set buffer times between consultations
- Block specific dates

---

### 6. **Documentation** (`/admin/docs`)

**Features:**
- Upload and manage product documentation
- Create documentation pages
- Link docs to products

---

## 🗄️ Database and Data Storage

### Local Development
- **Database:** SQLite (`prisma/dev.db`)
- **Product Overrides:** `data/product-overrides.json`
- **Images:** `public/images/`

### Production
- **Database:** Turso/Neon/Supabase (see `DATABASE_SETUP.md`)
- **Product Overrides:** Same file, committed to repo
- **Images:** Uploaded to `public/images/` and deployed with site

---

## 📧 Viewing Beta Signups - Quick Guide

### From Admin Panel:

1. **Go to:** http://localhost:3000/admin/beta (local) or https://athiangames.com/admin/beta (production)

2. **You'll see:**
   - Total signups count at the top
   - Products grouped with their signup counts
   - Each product expandable to show individual signups

3. **For each signup, you can see:**
   - 👤 **Name** (if provided)
   - 📧 **Email address**
   - 💬 **Message** (user's note about why they want to join)
   - 📅 **Signup date**
   - 🏷️ **Status** (Pending/Invited/Accepted)

4. **Actions you can take:**
   - **Update Status:** Click status badge to change
   - **Export All:** Click "Export CSV" to download all signups
   - **Delete:** Click trash icon to remove a signup
   - **Refresh:** Click refresh icon to reload data

### Via API (Advanced):

**Endpoint:** `GET /api/admin/beta/signups`

**Query Parameters:**
- `productSlug` - Filter by product (e.g., `fabric-ai`)
- `status` - Filter by status (e.g., `pending`)

**Example:**
```bash
curl http://localhost:3000/api/admin/beta/signups?productSlug=fabric-ai
```

**Response:**
```json
{
  "success": true,
  "signups": [...],
  "byProduct": [...],
  "totalSignups": 5
}
```

---

## 🔒 Security Notes

### Admin Access Control

**Local Development:**
- Admin routes are accessible from `localhost` only
- No authentication required for development

**Production:**
- Admin routes should be protected by NextAuth
- Only authenticated admin users can access
- Uses session-based authentication

### Environment Variables

**Never commit these to Git:**
- `NEXTAUTH_SECRET`
- `DATABASE_URL` (production)
- `GOOGLE_CLIENT_SECRET`
- `STRIPE_SECRET_KEY`
- `PAYPAL_CLIENT_SECRET`

**Always set in:**
- Local: `.env` file (gitignored)
- Production: Netlify Environment Variables

---

## 🚀 Quick Actions

### Export All Beta Signups
1. Go to `/admin/beta`
2. Click "Export CSV"
3. Open in Excel/Google Sheets

### Send Beta Invites
1. Export CSV from `/admin/beta`
2. Use email addresses for campaign
3. Update status to "Invited" after sending
4. Track acceptances

### Add Product Discount
1. Go to `/admin/products`
2. Click product to edit
3. Update price field
4. Save

### Update Homepage Carousel
1. Edit `components/home/HeroSection.tsx`
2. Change `productOrder` array with product slugs
3. Commit and deploy

---

## 📞 Support

If you encounter issues:
1. Check console for errors (F12 → Console)
2. Verify environment variables are set
3. Check database connection
4. Review logs in Netlify deployment
5. Check `DATABASE_SETUP.md` for database issues

---

## 🎓 Training Resources

**Learn Admin Panel:**
- Explore `/admin` dashboard
- Try editing a test product
- Create a test beta signup
- Practice exporting data

**Learn Product Management:**
- Watch: How to add a new product
- Read: Product data structure in `lib/products/productData.ts`
- Practice: Clone an existing product and modify

**Learn Database:**
- Read: `DATABASE_SETUP.md`
- Try: `npx prisma studio` to view database
- Practice: Query data with Prisma

---

## 📝 Cheat Sheet

**View Beta Signups:**
```
/admin/beta
```

**Edit Product:**
```
/admin/products → Click product → Edit
```

**Export Beta Data:**
```
/admin/beta → Export CSV
```

**View Database:**
```bash
npx prisma studio
```

**Push Schema:**
```bash
npx prisma db push
```

**Check Logs:**
```
Netlify Dashboard → Deploys → Functions → Logs
```

