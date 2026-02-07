# Google OAuth Setup Guide - FIXED

## ⚠️ IMPORTANT: Google Cloud Console Configuration

Your Google OAuth credentials are already set:
- **Client ID**: `975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com`
- **Client Secret**: `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`

## Critical Fix: Add These Redirect URIs

Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and add BOTH of these redirect URIs:

```
http://localhost:3000/api/auth/callback/google
http://localhost:3001/api/auth/callback/google
```

**Why both?** Your Next.js server may run on port 3000 or 3001 depending on availability.

### Step-by-Step to Add Redirect URIs:

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your OAuth 2.0 Client ID
3. Under "Authorized redirect URIs", click **+ ADD URI**
4. Add: `http://localhost:3000/api/auth/callback/google`
5. Click **+ ADD URI** again
6. Add: `http://localhost:3001/api/auth/callback/google`
7. Click **SAVE** at the bottom

## Testing the Fix

1. **Check which port your server is using:**
   ```bash
   # The terminal will show something like:
   - Local: http://localhost:3000
   # OR
   - Local: http://localhost:3001
   ```

2. **Update NEXTAUTH_URL to match:**
   - Open `.env`
   - Set `NEXTAUTH_URL=http://localhost:3000` (or 3001 if that's your port)

3. **Restart your server:**
   ```bash
   # Stop with Ctrl+C, then:
   npm run dev
   ```

4. **Test Google Sign-In:**
   - Go to: http://localhost:YOUR_PORT/auth/login
   - Click "Continue with Google"
   - Should redirect properly now!

## Common Errors & Solutions

### Error: "Site can't be reached" after Google sign-in
**Cause:** Redirect URI mismatch between Google Console and your app
**Fix:** 
1. Add BOTH redirect URIs (port 3000 AND 3001) to Google Console
2. Make sure `NEXTAUTH_URL` in `.env` matches your running port
3. Restart the dev server

### Error: "redirect_uri_mismatch"
**Cause:** The redirect URI in Google Console doesn't match exactly
**Fix:**
- Check the error message for the exact URI it's trying to use
- Add that EXACT URI to Google Console (including http://, port, and path)

### Error: "Configuration"
**Cause:** Environment variables not loaded
**Fix:**
- Check `.env` file has the credentials
- Restart the server after changing `.env`
- Verify credentials are correct (no extra spaces)

## Current Configuration

Your `.env` should have:
```env
GOOGLE_CLIENT_ID=975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXTAUTH_SECRET=athian-games-secret-key-2026-production-change-this-in-prod
NEXTAUTH_URL=http://localhost:3000
```

## Production Deployment

When deploying to production (athiangames.com):

1. Add production redirect URI to Google Console:
   ```
   https://athiangames.com/api/auth/callback/google
   ```

2. Update `.env.production`:
   ```env
   NEXTAUTH_URL=https://athiangames.com
   NEXT_PUBLIC_SITE_URL=https://athiangames.com
   ```

3. Generate a NEW `NEXTAUTH_SECRET` for production:
   ```bash
   openssl rand -base64 32
   ```

## Verify Setup is Working

✅ Checklist:
- [ ] Both redirect URIs added to Google Console (3000 and 3001)
- [ ] `.env` has correct `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- [ ] `.env` has `NEXTAUTH_SECRET` set
- [ ] `.env` has `NEXTAUTH_URL` matching your dev server port
- [ ] Server restarted after changing `.env`
- [ ] MongoDB is running (`mongod` or service)
- [ ] Can access http://localhost:YOUR_PORT/api/auth/providers

If all checked and still not working:
1. Clear browser cookies for localhost
2. Try incognito/private window
3. Check terminal for error messages with debug enabled
4. Check browser console (F12) for errors

## Quick Test Command

Run this to check if auth endpoints are accessible:
```bash
curl http://localhost:3000/api/auth/providers
```

Should return JSON with Google provider listed.


## Quick Fix Checklist

If you're getting a Google sign-in error, check these:

### 1. Environment Variables
Make sure your `.env` file has:
```env
# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-actual-client-secret

# NextAuth Configuration
NEXTAUTH_SECRET=your-generated-secret-key
NEXTAUTH_URL=http://localhost:3001
```

**Generate NEXTAUTH_SECRET:**
```bash
# On Windows PowerShell:
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))

# On Linux/Mac:
openssl rand -base64 32
```

### 2. Google Cloud Console Setup

#### Step 1: Create OAuth 2.0 Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Select **Web application**

#### Step 2: Configure Authorized URLs
Add these URLs in your OAuth client configuration:

**Authorized JavaScript origins:**
```
http://localhost:3001
http://localhost:3000
https://athiangames.com
https://www.athiangames.com
```

**Authorized redirect URIs:**
```
http://localhost:3001/api/auth/callback/google
http://localhost:3000/api/auth/callback/google
https://athiangames.com/api/auth/callback/google
https://www.athiangames.com/api/auth/callback/google
```

#### Step 3: Copy Credentials
After creating, copy:
- **Client ID** → paste into `GOOGLE_CLIENT_ID` in `.env`
- **Client secret** → paste into `GOOGLE_CLIENT_SECRET` in `.env`

### 3. Database Setup
Make sure your Prisma database is set up:

```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Or run migrations
npx prisma migrate dev
```

### 4. Restart Development Server
After updating `.env`:
```bash
# Stop current server (Ctrl+C)
npm run dev
```

## Common Errors & Solutions

### Error: "OAuthCallback"
**Problem:** Redirect URI mismatch
**Solution:** 
- Check that `NEXTAUTH_URL` in `.env` matches your current localhost port
- Verify the redirect URI in Google Console matches exactly: `http://localhost:3001/api/auth/callback/google`

### Error: "Configuration"
**Problem:** Missing or invalid Google credentials
**Solution:**
- Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set in `.env`
- Check that credentials are copied correctly (no extra spaces)

### Error: "OAuthAccountNotLinked"
**Problem:** Email already registered with different method
**Solution:**
- Sign in using the original method (email/password)
- Or use a different email address

### Error: "Access Denied"
**Problem:** OAuth consent screen not configured
**Solution:**
1. Go to Google Cloud Console
2. Navigate to **APIs & Services** > **OAuth consent screen**
3. Configure the consent screen
4. Add your email to test users (if using external)

## Testing Google Sign-In

1. Start your server: `npm run dev`
2. Go to: `http://localhost:3001/auth/login`
3. Click "Continue with Google"
4. Sign in with your Google account
5. Grant permissions
6. You should be redirected back to your site

## Production Deployment

When deploying to production:

1. Update `.env` (or environment variables):
```env
NEXTAUTH_URL=https://athiangames.com
NEXT_PUBLIC_SITE_URL=https://athiangames.com
```

2. Add production URLs to Google Console:
- Authorized JavaScript origins: `https://athiangames.com`
- Redirect URI: `https://athiangames.com/api/auth/callback/google`

3. Set OAuth consent screen to "Published" (not testing mode)

## Verification

To verify your setup is working:

1. Check environment variables are loaded:
```bash
# In terminal:
echo $GOOGLE_CLIENT_ID
echo $NEXTAUTH_URL
```

2. Check NextAuth API endpoint:
Visit: `http://localhost:3001/api/auth/providers`
Should show Google provider

3. Enable debug mode (already enabled in development):
Check terminal for detailed error messages

## Still Having Issues?

1. Check terminal output for detailed error messages
2. Check browser console for client-side errors
3. Verify all URLs use the same port (3001 or 3000)
4. Make sure MongoDB is running: `mongod`
5. Clear browser cookies and try again

## Current Configuration

Your current setup:
- Server running on: **http://localhost:3001**
- Auth callback: **http://localhost:3001/api/auth/callback/google**
- Database: **MongoDB (localhost:27017)**

Make sure your Google Console redirect URI matches the port your server is running on!
