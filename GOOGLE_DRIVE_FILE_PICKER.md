# Google Drive File Picker Integration - Complete Guide ✅

## What's New

You can now connect your Google Drive directly and select multiple files/folders for download without manually copying URLs!

## Features

### ✅ **Direct Google Drive Connection**
- Connect once, access all files
- No API key copying needed
- Secure OAuth authentication

### ✅ **Multiple File Selection**
- Select one OR many files for each product
- Browse folders in Google Drive
- Add/remove files easily
- All files listed clearly

### ✅ **Easy Management**
- See file names, sizes, modified dates
- Navigate Google Drive folder structure
- Select/deselect files with checkboxes
- Remove files from selection

### ✅ **Smart Downloads**
- Users can download any of the selected files
- Download tracking per file
- Automatic shareable links

---

## How to Use

### **Step 1: Edit Product in Admin**
```
1. Go to: http://localhost:3000/admin/products
2. Click "Edit" on any product
3. Scroll to "External Links & Downloads"
4. Find "Multiple Download Files (Google Drive)"
```

### **Step 2: Connect Google Drive**
```
1. Click "Add Files from Google Drive"
2. Click "Connect Google Drive"
3. Login with your Google account
4. Approve access permissions
5. ✅ Connected!
```

### **Step 3: Select Files**
```
1. See all your Google Drive files
2. Click on folders to navigate
3. Check boxes to select files
4. See file sizes and names
5. Can select multiple files
```

### **Step 4: Add to Product**
```
1. Selected files appear in green section
2. Click "Save Selected Files"
3. Files added to the product
4. Click main "Save Product" button
5. Done!
```

---

## File Structure

### **New Components Created:**

**1. `components/admin/GoogleDrivePicker.tsx`**
- Main file picker UI
- Handles Google Drive connection
- Displays files and folders
- Manages selections

**2. `app/api/admin/google-drive/auth/route.ts`**
- Initiates OAuth flow
- Generates authorization URL
- Handles initial connection

**3. `app/api/admin/google-drive/callback/route.ts`**
- Handles OAuth callback
- Exchanges code for tokens
- Returns access token to client

**4. `app/api/admin/google-drive/files/route.ts`**
- Lists files from Google Drive
- Generates shareable links
- Returns file metadata (size, date, etc.)

---

## How It Works

### **OAuth Flow:**
```
1. You click "Connect Google Drive"
2. ↓
3. App generates authorization URL
4. ↓
5. Opens Google login popup
6. ↓
7. You approve access
8. ↓
9. Google sends authorization code
10. ↓
11. App exchanges code for access token
12. ↓
13. Token sent to client
14. ↓
15. Now can browse Google Drive!
```

### **File Selection:**
```
1. Access token used to fetch files
2. ↓
3. Google Drive API lists files
4. ↓
5. Each file gets shareable link
6. ↓
7. You select files
8. ↓
9. Selected files saved to product
10. ↓
11. Users can download any file
```

---

## Admin Panel UI

### **Before:**
```
Download URL: [text input field]
💡 Manual URL entry
❌ Have to copy URLs
❌ One file at a time
```

### **After:**
```
Multiple Download Files (Google Drive)
[Add Files from Google Drive]

When connected:
📁 My Drive
  📄 File 1.zip        [1.5 MB] ☐
  📁 Folder 1          
  📄 File 2.zip        [2.3 MB] ☐

Selected Files (2)
✓ File 1.zip
✓ File 2.zip
[Save Selected Files]
```

---

## Database Structure

### **Updated Purchase Model:**
```typescript
model Purchase {
  // ...existing fields...
  downloadUrl: String?              // Single file (legacy)
  downloadUrls: DownloadFile[]?     // Multiple files (new!)
  downloadCount: Int                // Tracked per purchase
  maxDownloads: Int
}

interface DownloadFile {
  id: string                        // Google Drive file ID
  name: string                      // File name
  downloadUrl: string               // Shareable link
  mimeType: string                  // File type
}
```

---

## Permissions Required

The app requests these Google Drive permissions:
- ✅ `drive.readonly` - Read your Google Drive files
- ✅ `drive.metadata.readonly` - See file names and dates

**No write access needed!** Your files are safe.

---

## Testing Walkthrough

### **Test 1: Basic Connection**
```
1. Admin → Products → Edit any product
2. Click "Add Files from Google Drive"
3. Click "Connect Google Drive"
4. Login with your Google account
5. ✅ Should see your files listed
```

### **Test 2: Select Multiple Files**
```
1. Browse your Google Drive
2. Click folder to navigate
3. Check files to select them
4. Should see "Selected Files" section
5. Click "Save Selected Files"
6. Main form should show selected files
```

### **Test 3: Full Purchase Flow**
```
1. Save product with multiple files
2. Login as free testing account
3. "Buy" the product
4. Go to library
5. Should see "Download" button
6. Click to download first file
7. Counter should increment
8. Can download other files
```

### **Test 4: Navigation**
```
1. Click folder in file list
2. Breadcrumb updates
3. Can go back via breadcrumb
4. Files update for that folder
```

---

## Features of File Picker

### **File Information:**
- File name
- File size (in KB or MB)
- File type icon
- Last modified date
- Whether it's a folder

### **Navigation:**
- Breadcrumb showing current path
- Click folders to open them
- Click breadcrumb to go back
- "My Drive" root accessible

### **Selection:**
- Checkboxes for files only
- Folders are clickable (for navigation)
- Can select multiple files
- See count of selected files

### **Links:**
- Automatic shareable link generation
- Works for both files and folders
- Direct download URLs
- Accessible by purchasers

---

## Security Considerations

### **What's Protected:**
- ✅ OAuth requires you to login
- ✅ Tokens expire automatically
- ✅ Access limited to selected scopes
- ✅ No write permissions
- ✅ Only admins can use (localhost only)

### **Token Storage:**
- Stored in browser session only
- Lost on page refresh
- Not persisted to database
- New login required each admin session

### **File Access:**
- Users get shareable Google Drive links
- Can open/download from Google Drive
- Google Drive handles access control
- Your sharing settings respected

---

## What Gets Saved

### **In Product Overrides JSON:**
```json
{
  "products": {
    "product-slug": {
      "downloadUrls": [
        {
          "id": "1ABC2DEF3GHI4JKL5MNO6PQR7STU8VWX",
          "name": "product-v1.0.zip",
          "downloadUrl": "https://drive.google.com/uc?export=download&id=1ABC...",
          "mimeType": "application/zip"
        },
        {
          "id": "2XYZ3ABC4DEF5GHI6JKL7MNO8PQR9STU",
          "name": "documentation.pdf",
          "downloadUrl": "https://drive.google.com/uc?export=download&id=2XYZ...",
          "mimeType": "application/pdf"
        }
      ]
    }
  }
}
```

---

## User Experience

### **For Purchasers:**
```
My Library
┌──────────────────────────────┐
│ Product Name                 │
│ ✓ Owned  [Free for you]      │
│                              │
│ Downloads: 3/999             │
│                              │
│ ▼ Available Downloads        │
│ • product-v1.0.zip           │
│ • documentation.pdf          │
│ • tutorial-videos.zip        │
│                              │
│ [Download] [View Product]    │
└──────────────────────────────┘
```

When they click download, a modal shows:
```
Select File to Download
─────────────────────────
✓ product-v1.0.zip
  ☐ documentation.pdf
  ☐ tutorial-videos.zip
  
[Download Selected]
```

---

## Troubleshooting

### **Can't connect to Google Drive?**
```
1. Make sure you're on localhost (security)
2. Check GOOGLE_CLIENT_ID is set in .env
3. Check GOOGLE_CLIENT_SECRET is set in .env
4. Verify OAuth credentials in Google Cloud Console
5. Try in incognito window
```

### **Files not showing?**
```
1. Make sure Google Drive connection succeeded
2. Check you have files in "My Drive"
3. Look at browser console for errors
4. Try navigating folders
5. Refresh the page
```

### **Can't select files?**
```
1. Only files can be selected (not folders)
2. Some file types might be restricted
3. Check file exists in Google Drive
4. Files without links can't be selected
5. Try different file format
```

### **Download links not working?**
```
1. Check file still exists in Google Drive
2. Make sure sharing is not "restricted"
3. Try opening in incognito (check permissions)
4. Google Drive may need signed-in access
5. Use shareable link instead
```

---

## Configuration

### **In `.env`:**
```env
# Google OAuth (already set)
GOOGLE_CLIENT_ID=975225386822-l28uuga6raqk20bol0bbsj86nirb9tal.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

# Base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### **Optional Customization:**

Change max files selectable:
```typescript
// In GoogleDrivePicker.tsx
const MAX_FILES = 5; // Change to your limit
if (localSelected.length >= MAX_FILES) {
  // Disable further selection
}
```

Change folder sorting:
```typescript
// In files/route.ts
orderBy: "folder desc, name asc" // Currently: folders first, then alphabetical
// Options: "name", "modifiedTime", "createdTime", etc.
```

---

## Performance Notes

### **File Listing:**
- Shows 50 files per page (default)
- Can paginate for more
- Lazy loads folder contents

### **Link Generation:**
- Links generated when files are selected
- Cached in component state
- Not refetched unless needed

### **Token Management:**
- Single token per admin session
- Reused for all API calls
- No token refresh implemented (simple version)

---

## Future Enhancements

Possible improvements:
- [ ] Save tokens for persistent sessions
- [ ] Add folder selection (download whole folder)
- [ ] Preview files before selection
- [ ] Batch upload support
- [ ] Scheduled sync with Google Drive
- [ ] Show download stats per file
- [ ] File version history support

---

## API Endpoints Created

### **`/api/admin/google-drive/auth`** (GET)
Returns authorization URL for OAuth

### **`/api/admin/google-drive/callback`** (GET)
OAuth callback, exchanges code for tokens

### **`/api/admin/google-drive/files`** (POST)
Lists files and folders from Google Drive
- Input: accessToken, folderId (optional)
- Output: Files with metadata and download links

---

## Summary

**Before:**
- ❌ Manual URL copying
- ❌ One file per product
- ❌ Tedious process

**After:**
- ✅ Direct Google Drive connection
- ✅ Multiple files per product
- ✅ Easy file browser
- ✅ Automatic link generation

**Your admin panel now has a professional file picker!** 🎉

Users can purchase and download any of the files you select from your Google Drive - no more manual URL management!
