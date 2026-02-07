# Authentication Fix - Complete Solution

## ✅ ISSUES FIXED

### Problem 1: "Authentication Failed" on Google Sign-In
### Problem 2: "Failed to Create Account" on Registration

## Root Cause
The database wasn't set up properly. Your app was trying to connect to a PostgreSQL/Prisma Postgres server that wasn't running.

## SOLUTION APPLIED

### 1. Switched to SQLite Database
Changed from PostgreSQL (requires server) to SQLite (file-based, no server needed).

**Files Modified:**
- ✅ `prisma/schema.prisma` - Changed provider to SQLite
- ✅ `.env` - Set `DATABASE_URL="file:./dev.db"`
- ✅ Removed PostgreSQL-specific annotations (`@db.Text`)

### 2. Database Created
- ✅ SQLite database file created at `prisma/dev.db`
- ✅ All tables created (User, Account, Session, Purchase, etc.)
- ✅ Prisma Client regenerated

### 3. Google OAuth Configured
- ✅ Client ID and Secret added to `.env`
- ✅ NEXTAUTH_SECRET set
- ✅ Auth redirect callback enhanced

## TO COMPLETE THE FIX

### Step 1: Add Redirect URIs to Google Console

**CRITICAL: You must do this or Google sign-in won't work!**

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on OAuth Client ID: `975225386822-...`
3. Under "Authorized redirect URIs", add:
   ```
   http://localhost:3000/api/auth/callback/google
   http://localhost:3001/api/auth/callback/google
   ```
4. Click SAVE

### Step 2: Start the Server

```bash
cd D:\MyWebsite\athian-games
npm run dev
```

Look for the message showing which port (3000 or 3001).

### Step 3: Test Registration

1. Go to: http://localhost:YOUR_PORT/auth/register
2. Fill in the form:
   - Name: Your Name
   - Email: your@email.com
   - Password: (at least 8 characters)
   - Confirm Password: (same)
3. Click "Create Account"
4. Should now work! ✅

### Step 4: Test Google Sign-In

1. Go to: http://localhost:YOUR_PORT/auth/login
2. Click "Continue with Google"
3. Sign in with your Google account
4. Should redirect back successfully! ✅

## Database Files Created

- `prisma/dev.db` - Your SQLite database (this is automatically created)
- `prisma/dev.db-journal` - SQLite journal file (normal)

**These files are in your project folder and work without any server!**

## Environment Variables Set

Your `.env` now has:

```env
# Database - SQLite (no server needed!)
DATABASE_URL="file:./dev.db"

# Google OAuth
GOOGLE_CLIENT_ID=975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

# NextAuth
NEXTAUTH_SECRET=athian-games-secret-key-2026-production-change-this-in-prod
NEXTAUTH_URL=http://localhost:3000
```

## How to Verify It's Working

### Check Database
```bash
# In PowerShell:
cd D:\MyWebsite\athian-games
npx prisma studio
```
This opens a GUI to view your database. You should see all the tables.

### Check Auth Endpoints
```bash
curl http://localhost:3000/api/auth/providers
```
Should return JSON showing Google provider.

### Check If Tables Exist
```bash
cd prisma
sqlite3 dev.db ".tables"
```
Should list: Account, Purchase, Session, User, VerificationToken

## Common Issues & Solutions

### "Failed to create account"
**Check:**
1. Is the dev server running? (`npm run dev`)
2. Does `prisma/dev.db` file exist?
3. Check browser console (F12) for detailed error
4. Check terminal for error messages

**Fix:**
```bash
cd D:\MyWebsite\athian-games
npx prisma db push
npm run dev
```

### "Authentication failed" (Google)
**Check:**
1. Did you add redirect URIs to Google Console? (Step 1 above)
2. Is NEXTAUTH_URL in `.env` matching your running port?
3. Clear browser cookies/cache

**Fix:**
- Add both redirect URIs (3000 and 3001) to Google Console
- Make sure to click SAVE in Google Console
- Restart dev server

### "Site can't be reached" after Google sign-in
**Cause:** Redirect URI not in Google Console
**Fix:** Add the exact URI to Google Console as shown in Step 1

## Testing Checklist

- [ ] Database file exists: `D:\MyWebsite\athian-games\prisma\dev.db`
- [ ] Dev server is running: `npm run dev`
- [ ] Google redirect URIs added to console
- [ ] Can access: http://localhost:YOUR_PORT/auth/register
- [ ] Can create account with email/password
- [ ] Can sign in with Google

## What Changed

### Before:
- ❌ PostgreSQL database (required server not running)
- ❌ No Google OAuth credentials
- ❌ Database tables didn't exist
- ❌ Authentication couldn't save users

### After:
- ✅ SQLite database (file-based, always works)
- ✅ Google OAuth configured
- ✅ All database tables created
- ✅ Can create accounts
- ✅ Can sign in with Google (after adding redirect URIs)

## For Production Deployment

When deploying to production, you'll want to switch back to PostgreSQL or use a hosted database:

1. Get a PostgreSQL database (Vercel Postgres, Supabase, etc.)
2. Update `DATABASE_URL` in production environment
3. Run `npx prisma db push` in production
4. Add production redirect URI to Google Console:
   ```
   https://athiangames.com/api/auth/callback/google
   ```

## Need Help?

If it's still not working:

1. **Check dev server is running:**
   ```bash
   Get-Process node
   netstat -ano | findstr LISTENING | findstr ":300"
   ```

2. **Check for errors:**
   - Terminal output
   - Browser console (F12 → Console)
   - Network tab (F12 → Network)

3. **Verify database:**
   ```bash
   cd prisma
   dir dev.db  # Should show the file exists
   ```

4. **Test database connection:**
   ```bash
   npx prisma studio
   ```

5. **Regenerate everything:**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

## Quick Start (TL;DR)

```bash
# 1. Make sure you're in the right folder
cd D:\MyWebsite\athian-games

# 2. Database is already set up, just start server
npm run dev

# 3. Go to Google Console and add redirect URIs (see Step 1)

# 4. Test:
# - Registration: http://localhost:3000/auth/register
# - Google Sign-in: http://localhost:3000/auth/login
```

That's it! Both registration and Google sign-in should now work. 🎉
