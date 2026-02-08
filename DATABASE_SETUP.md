# Production Database Setup Guide

This guide will help you set up a production-ready database for your Athian Games website on Netlify.

## Option 1: Turso (Recommended - Serverless SQLite)

Turso is a serverless SQLite database that works perfectly with Netlify and other edge platforms.

### Steps:

1. **Sign up for Turso**
   - Visit: https://turso.tech
   - Sign up with GitHub
   - Free tier includes 9GB storage and 1B row reads/month

2. **Install Turso CLI**
   ```bash
   # Windows (PowerShell)
   iwr -useb https://turso.tech/install.ps1 | iex
   
   # macOS/Linux
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

3. **Login to Turso**
   ```bash
   turso auth login
   ```

4. **Create a database**
   ```bash
   turso db create athian-games
   ```

5. **Get connection URLs**
   ```bash
   turso db show athian-games --url
   turso db tokens create athian-games
   ```

6. **Update your `.env` and Netlify environment variables**
   ```env
   # Production Database (Turso)
   DATABASE_URL="libsql://athian-games-[your-org].turso.io"
   TURSO_AUTH_TOKEN="your-token-here"
   ```

7. **Update Prisma schema** (`prisma/schema.prisma`)
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

8. **Push your schema to Turso**
   ```bash
   # Set the DATABASE_URL temporarily
   $env:DATABASE_URL="libsql://athian-games-[your-org].turso.io?authToken=your-token"
   
   # Push the schema
   npx prisma db push
   ```

9. **Add to Netlify**
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add `DATABASE_URL` with your Turso URL including auth token
   - Format: `libsql://athian-games-[your-org].turso.io?authToken=your-token`

---

## Option 2: Neon (PostgreSQL - More Robust)

Neon is a serverless PostgreSQL database with a generous free tier.

### Steps:

1. **Sign up for Neon**
   - Visit: https://neon.tech
   - Sign up with GitHub
   - Free tier: 0.5GB storage, always-available compute

2. **Create a new project**
   - Create project named "athian-games"
   - Select region closest to your users
   - Copy the connection string

3. **Update Prisma schema** (`prisma/schema.prisma`)
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
     directUrl = env("DIRECT_DATABASE_URL")
   }
   ```

4. **Update `.env`**
   ```env
   DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require&pgbouncer=true"
   DIRECT_DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require"
   ```

5. **Run migrations**
   ```bash
   npx prisma db push
   ```

6. **Add to Netlify**
   - Add both `DATABASE_URL` and `DIRECT_DATABASE_URL` to Netlify environment variables

---

## Option 3: Supabase (PostgreSQL + More Features)

Supabase provides PostgreSQL with built-in authentication, storage, and real-time features.

### Steps:

1. **Sign up for Supabase**
   - Visit: https://supabase.com
   - Sign up with GitHub
   - Free tier: 500MB database, 1GB file storage

2. **Create a new project**
   - Create project "athian-games"
   - Set a strong database password
   - Select region

3. **Get connection string**
   - Go to Project Settings → Database
   - Copy the "Connection string" (Pooler mode)

4. **Update Prisma schema** (same as Neon)
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
     directUrl = env("DIRECT_DATABASE_URL")
   }
   ```

5. **Update `.env`**
   ```env
   DATABASE_URL="postgresql://postgres.xxx:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_DATABASE_URL="postgresql://postgres:[password]@db.xxx.supabase.co:5432/postgres"
   ```

6. **Run migrations**
   ```bash
   npx prisma db push
   ```

---

## Updating Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site (athian-games)
3. Go to Site Settings → Environment Variables
4. Click "Add a variable"
5. Add the following (based on your chosen provider):

### For Turso:
- `DATABASE_URL` = `libsql://athian-games-[your-org].turso.io?authToken=your-token`

### For Neon/Supabase:
- `DATABASE_URL` = Connection string with `?pgbouncer=true`
- `DIRECT_DATABASE_URL` = Direct connection string

### Other required variables:
- `NEXTAUTH_SECRET` = (generate with `openssl rand -base64 32`)
- `NEXTAUTH_URL` = `https://athiangames.com`
- `GOOGLE_CLIENT_ID` = (your Google OAuth client ID)
- `GOOGLE_CLIENT_SECRET` = (your Google OAuth secret)
- `NEXT_PUBLIC_SITE_URL` = `https://athiangames.com`

---

## Testing Your Setup

1. **Deploy to Netlify**
   ```bash
   git add .
   git commit -m "Add production database"
   git push
   ```

2. **Test Beta Signup**
   - Visit https://athiangames.com/products/fabric-ai
   - Scroll to Beta Signup form
   - Fill in and submit

3. **Check Admin Panel**
   - Visit https://athiangames.com/admin/beta
   - You should see the signup in the list

---

## Viewing Beta Signups

Once your database is set up, you can view beta signups at:

**Admin URL:** `http://localhost:3000/admin/beta` (local) or `https://athiangames.com/admin/beta` (production)

Features:
- ✅ View all signups grouped by product
- ✅ Filter by product
- ✅ See signup statistics
- ✅ Update signup status (pending → invited → accepted)
- ✅ Export to CSV
- ✅ Delete signups
- ✅ Refresh data

---

## Troubleshooting

### "Error code 14: Unable to open the database file"
- **Local:** Make sure `DATABASE_URL="file:./prisma/dev.db"` in `.env`
- **Production:** Make sure you've set up a cloud database (Turso/Neon/Supabase)

### "Failed to fetch beta signups"
- Check Netlify environment variables are set
- Check database connection string is correct
- Run `npx prisma db push` to sync schema

### Prisma Client errors
- Delete `node_modules/.prisma` folder
- Run `npx prisma generate`
- Restart dev server

---

## Recommended Setup (My Choice)

I recommend **Turso** for your use case because:
- ✅ Serverless SQLite (familiar, no new syntax)
- ✅ Edge-optimized (fast globally)
- ✅ Generous free tier
- ✅ No connection pooling needed
- ✅ Works perfectly with Netlify
- ✅ Easy migration from local SQLite

---

## Quick Commands

```bash
# Regenerate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# View database
turso db shell athian-games
```

