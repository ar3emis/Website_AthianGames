# Google Sign-In "Site Can't Be Reached" - SOLUTION

## Problem
After clicking "Continue with Google" and signing in, you get "This site can't be reached" error.

## Root Cause
The redirect URI that Google is trying to send you back to doesn't match what's configured in Google Cloud Console.

## IMMEDIATE FIX

### Step 1: Add Redirect URIs to Google Console

1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your OAuth 2.0 Client ID (the one with ID: 975225386822-...)
3. Click on it to edit
4. Scroll to "Authorized redirect URIs"
5. Add BOTH of these URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3001/api/auth/callback/google`
6. Click SAVE (bottom of page)

### Step 2: Verify Your .env File

Open `D:\MyWebsite\athian-games\.env` and ensure these lines are present:

```env
GOOGLE_CLIENT_ID=975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXTAUTH_SECRET=athian-games-secret-key-2026-production-change-this-in-prod
NEXTAUTH_URL=http://localhost:3000
```

### Step 3: Restart Your Server

```bash
# In terminal, press Ctrl+C to stop current server
# Then run:
npm run dev
```

### Step 4: Clear Browser Cache

1. Open DevTools (F12)
2. Right-click the refresh button → "Empty Cache and Hard Reload"
3. Or use Incognito/Private window

### Step 5: Test Again

1. Go to: http://localhost:3000/auth/login (or 3001 if that's your port)
2. Click "Continue with Google"
3. Sign in with your Google account
4. You should now be redirected back successfully!

## Why This Happens

NextAuth needs to know where to send users after Google authentication. The URL must be:
1. Set in your `.env` as `NEXTAUTH_URL`
2. Registered in Google Cloud Console as an authorized redirect URI
3. Match EXACTLY (including the port number)

## If Still Not Working

### Check Server Port
Look at your terminal when you run `npm run dev`. It shows:
```
- Local:        http://localhost:3000
```
If it shows 3001 instead, update `NEXTAUTH_URL` in `.env` to `http://localhost:3001`

### Check Google Console Settings
The redirect URI in Google Console must be EXACTLY:
```
http://localhost:PORT/api/auth/callback/google
```
Where PORT is either 3000 or 3001 (that's why we add both)

### Enable Debug Mode
NextAuth is already in debug mode for development. Check your terminal for detailed error messages after clicking "Continue with Google".

### Common Error Messages

**"redirect_uri_mismatch"**
- Solution: The redirect URI in Google Console doesn't match. Add the exact URI shown in the error.

**"This site can't be reached"**
- Solution: Add both :3000 and :3001 redirect URIs to Google Console

**"Configuration error"**
- Solution: Check that GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are in .env with no typos

## Production Deployment

When you deploy to production (https://athiangames.com):

1. Add production redirect URI:
   ```
   https://athiangames.com/api/auth/callback/google
   ```

2. Update environment variables on your hosting platform:
   ```
   NEXTAUTH_URL=https://athiangames.com
   GOOGLE_CLIENT_ID=975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=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
   NEXTAUTH_SECRET=[generate new one with: openssl rand -base64 32]
   ```

## Test Checklist

- [ ] Added both localhost:3000 and localhost:3001 redirect URIs to Google Console
- [ ] Saved changes in Google Console
- [ ] Updated .env file with correct credentials
- [ ] Restarted dev server (npm run dev)
- [ ] Cleared browser cache or using incognito
- [ ] Checked which port server is running on
- [ ] NEXTAUTH_URL matches the running port
- [ ] MongoDB is running (if using database)

## Quick Verification

Run this in terminal to check auth endpoints:
```bash
curl http://localhost:3000/api/auth/providers
```

Should return JSON with Google provider. If it returns an error, your server isn't running properly.

## Need More Help?

1. Check terminal output for errors
2. Check browser console (F12 → Console tab)
3. Try signing in with a different Google account
4. Make sure you're using http://localhost (not 127.0.0.1)
5. Restart your computer if environment variables aren't loading

## Files Modified

All fixes have been applied to:
- ✅ `.env` - Updated with correct Google credentials and NextAuth secret
- ✅ `lib/auth/authOptions.ts` - Added redirect callback and better error handling
- ✅ `app/auth/error/page.tsx` - Shows detailed error messages
- ✅ `GOOGLE_AUTH_SETUP.md` - Complete setup guide
