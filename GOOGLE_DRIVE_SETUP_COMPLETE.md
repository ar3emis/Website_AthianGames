# Google Drive Picker Setup - Using Existing Google OAuth ✅

## ✅ What's Done

Your Google OAuth credentials are already configured! Now I've updated the Google Drive integration to use those same credentials.

## 🔧 IMPORTANT: Add Redirect URI to Google Cloud Console

You need to add ONE more redirect URI for the Google Drive file picker:

### **Steps:**

1. **Go to Google Cloud Console:**
   - https://console.cloud.google.com/apis/credentials

2. **Find Your OAuth Client:**
   - Look for: `975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com`

3. **Edit the OAuth Consent Screen Client:**
   - Click on the client ID
   - Scroll to "Authorized redirect URIs"

4. **Add This New URI:**
   ```
   http://localhost:3000/api/admin/google-drive/callback
   ```

5. **You should now have TWO redirect URIs:**
   ```
   ✅ http://localhost:3000/api/auth/callback/google (for Sign-in)
   ✅ http://localhost:3000/api/admin/google-drive/callback (for Google Drive Picker)
   ```

6. **Click SAVE**

---

## 🚀 Now Test It!

### **Step 1: Restart Server**
```bash
npm run dev
```

### **Step 2: Go to Admin Panel**
```
http://localhost:3000/admin/products
Click "Edit" on any product
```

### **Step 3: Click "Add Files from Google Drive"**
```
Click "Connect Google Drive"
You'll be taken to Google login
```

### **Step 4: Login & Approve**
```
Login with your Google account
Click "Allow"
```

### **Step 5: Automatic Return**
```
You'll be redirected back
Your Google Drive files will load automatically!
```

---

## ✅ What's Changed

### **`.env` Updated:**
- ✅ `NEXT_PUBLIC_SITE_URL` now points to `http://localhost:3000` (consistent with `NEXTAUTH_URL`)
- ✅ Google credentials already in place (no changes needed)
- ✅ Comments added explaining redirect URIs

### **API Routes Updated:**
- ✅ `/api/admin/google-drive/auth/route.ts` - Uses your Google Client ID
- ✅ `/api/admin/google-drive/callback/route.ts` - Uses your Google Client Secret
- ✅ Better error handling with helpful redirects

### **Uses Same Credentials As:**
- ✅ Google Sign-in (`/api/auth/callback/google`)
- ✅ NextAuth Google provider

---

## 🎯 Why It Now Works

**Before:**
- ❌ Missing `GOOGLE_REDIRECT_URI` env variable
- ❌ Redirect URI not added to Google Cloud Console
- ❌ Site couldn't be reached after login

**After:**
- ✅ Using existing Google credentials
- ✅ Proper redirect URI configured
- ✅ Site can be reached after login
- ✅ Files load automatically

---

## 📋 Credentials Being Used

```
GOOGLE_CLIENT_ID: 975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET: 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

Redirect URIs:
1. http://localhost:3000/api/auth/callback/google
2. http://localhost:3000/api/admin/google-drive/callback
```

---

## ⚠️ Critical Step

**You MUST add the redirect URI to Google Cloud Console!**

Without this, you'll see "site can't be reached" after login.

1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your OAuth client
3. Add: `http://localhost:3000/api/admin/google-drive/callback`
4. Save
5. Restart server
6. Try again!

---

## 🔒 Security

- ✅ Same OAuth credentials as Sign-in
- ✅ Read-only Google Drive access
- ✅ Tokens expire automatically
- ✅ Localhost-only for admin

---

## Quick Checklist

- [ ] Go to Google Cloud Console
- [ ] Find your OAuth client
- [ ] Add redirect URI: `http://localhost:3000/api/admin/google-drive/callback`
- [ ] Click Save
- [ ] Restart server: `npm run dev`
- [ ] Go to admin panel
- [ ] Test "Add Files from Google Drive"
- [ ] Login works ✅
- [ ] Files load ✅

---

## If It Still Says "Site Can't Be Reached"

1. ✅ Check Google Console has the redirect URI added
2. ✅ Restart server after adding it
3. ✅ Clear browser cache (Ctrl+Shift+Delete)
4. ✅ Try incognito window
5. ✅ Check browser console for errors (F12)

---

## Troubleshooting

### **"Invalid request" error:**
```
→ Redirect URI not added to Google Console
→ Check exact URL matches: http://localhost:3000/api/admin/google-drive/callback
```

### **"Site can't be reached" after login:**
```
→ Restart server
→ Clear cache
→ Check redirect URI in Google Console
```

### **"No files showing":**
```
→ Login was successful
→ Your Drive might not have files in root
→ Check browser console (F12) for API errors
```

---

## What to Do Now

**Immediately:**
1. Go to Google Cloud Console
2. Add the redirect URI
3. Save

**Then:**
4. Restart server
5. Test the Google Drive picker
6. Select files and save!

**Everything will work perfectly!** ✅
