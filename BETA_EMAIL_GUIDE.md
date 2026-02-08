# 📧 Automated Beta Invite Email System - Complete Guide

## 🎉 What I've Built For You

A fully automated email system that lets you send professional beta invites to your signups with just one click!

---

## ✅ What's Included

### 1. **Email Service** (`lib/email/emailService.ts`)
- Beautiful HTML email template with your branding
- Plain text fallback for compatibility
- Bulk sending with rate limiting
- Error handling and logging
- Test email configuration

### 2. **API Endpoint** (`app/api/admin/beta/send-invites/route.ts`)
- Send invites to all pending signups for a product
- Automatic status update to "invited"
- Bulk sending support
- Error tracking

### 3. **Admin UI** (Updated `/admin/beta` page)
- "Send Invites" button (appears when you select a product with pending signups)
- Real-time progress indicator
- Success/failure notifications
- Automatic refresh after sending

---

## 🚀 Setup Instructions

### Step 1: Configure Email (Gmail Recommended)

#### For Gmail:

1. **Go to your Google Account:**
   - Visit: https://myaccount.google.com

2. **Enable 2-Factor Authentication:**
   - Go to Security → 2-Step Verification
   - Enable it if not already enabled

3. **Create App Password:**
   - Go to Security → App passwords
   - Select "Mail" and "Windows Computer" (or Other)
   - Click "Generate"
   - Copy the 16-character password

4. **Update .env file:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password-here
   ```

#### For Other Email Providers:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

**Custom SMTP:**
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### Step 2: Update Netlify Environment Variables

1. Go to Netlify Dashboard
2. Site Settings → Environment Variables
3. Add these variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
4. Redeploy your site

---

## 📋 How to Use

### Sending Beta Invites (Step by Step):

1. **Go to Admin Panel:**
   ```
   http://localhost:3000/admin/beta  (local)
   https://athiangames.com/admin/beta  (production)
   ```

2. **Select a Product:**
   - Click on a product button (e.g., "FabricAI")
   - You'll see only signups for that product

3. **Click "Send Invites":**
   - Button appears only if there are pending signups
   - Shows count: "Send Invites to X Pending"

4. **Confirm:**
   - Click the button
   - Confirm the dialog

5. **Wait:**
   - Progress shows "Sending..."
   - Takes ~1 second per email (rate limited)

6. **Result:**
   - Success banner shows how many were sent
   - Failed emails are listed (if any)
   - Signups automatically updated to "Invited" status

---

## 📧 What Users Receive

### Email Preview:

**Subject:** `🎉 You're Invited to FabricAI Beta!`

**Content:**
- Welcome message with product name
- What's next instructions
- Download button (if you've set downloadUrl)
- Discord button (if you've set discordUrl)
- Documentation button (if you've set documentationUrl)
- Beta terms and conditions
- Professional branding with Athian Games logo

**Example:**
```
Hi John,

Great news! You've been selected to join the exclusive beta 
program for FabricAI.

We're excited to have you as one of our early testers. Your 
feedback will be invaluable in shaping the final product.

[📥 Download Beta] [💬 Join Discord] [📖 Read Docs]

Beta Terms:
- This is a beta version - expect bugs
- Please report any issues
- Do not use in production projects
...
```

---

## 🎨 Customizing the Email Template

### Edit the Template:

**File:** `lib/email/emailService.ts`

**What You Can Customize:**

1. **Subject Line:**
```typescript
subject: (productName: string) => `🎉 You're Invited to ${productName} Beta!`,
```

2. **Colors:**
```css
/* Change gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your brand colors: */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

3. **Content:**
```html
<!-- Edit any text in the html() function -->
<p>Hi ${params.name || 'there'},</p>
<p>Great news! You've been selected...</p>
```

4. **Logo:**
```html
<!-- Change AG to your logo or image -->
<div class="logo">AG</div>
```

---

## 🔧 Advanced Features

### Send to Specific Users:

You can modify the API to send to specific signups:

```typescript
// In your admin panel, you could add checkboxes
// and pass selected IDs:

const response = await fetch("/api/admin/beta/send-invites", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ 
    productSlug: "fabric-ai",
    signupIds: ["id1", "id2", "id3"]  // Optional: specific users
  }),
});
```

### Test Email Configuration:

Create a test endpoint to verify your email settings:

```typescript
// app/api/admin/test-email/route.ts
import { testEmailConfig } from "@/lib/email/emailService";

export async function GET() {
  const result = await testEmailConfig();
  return NextResponse.json(result);
}
```

---

## 📊 Email Sending Limits

### Gmail (Free):
- **Limit:** 500 emails per day
- **Rate:** ~1 email per second (we use 1s delay)
- **Recommendation:** For >500 signups, use a dedicated email service

### Recommended for Large Volume:
1. **SendGrid** (100 emails/day free)
2. **Mailgun** (5,000 emails/month free)
3. **Amazon SES** (62,000 emails/month free)

To switch, update `lib/email/emailService.ts` with new SMTP settings.

---

## 🐛 Troubleshooting

### "Failed to send invites"

**Check 1: Email Configuration**
```bash
# Test if SMTP credentials are correct
# Add console.log in emailService.ts:
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_USER:", process.env.SMTP_USER);
```

**Check 2: Gmail App Password**
- Make sure you're using App Password, not regular password
- 16 characters, no spaces
- 2FA must be enabled

**Check 3: Firewall/Network**
- Port 587 must be open
- Some networks block SMTP

**Check 4: Console Logs**
```bash
# Check server logs for detailed error
npm run dev
# Watch console when sending invites
```

### "Some emails failed"

**Common Reasons:**
- Invalid email addresses
- Recipient's inbox full
- Spam filters blocked
- Rate limit exceeded

**Solution:**
- Export failed emails from result
- Manually review and resend
- Check email validity

### "Button doesn't appear"

**Requirements for "Send Invites" button:**
1. Must select a specific product (not "All Products")
2. Product must have pending signups
3. Button shows: "Send Invites to X Pending"

---

## 📈 Workflow Example

### Complete Beta Launch Workflow:

1. **Users Sign Up:**
   - Visit `/products/fabric-ai`
   - Fill beta signup form
   - Status: "Pending"

2. **You Review Signups:**
   - Go to `/admin/beta`
   - Click "FabricAI" filter
   - Review pending signups
   - Delete spam if any

3. **Configure Product:**
   - Go to `/admin/products`
   - Edit FabricAI product
   - Set Download URL (Google Drive link)
   - Set Discord URL
   - Set Documentation URL
   - Save

4. **Send Invites:**
   - Back to `/admin/beta`
   - Select FabricAI
   - Click "Send Invites to X Pending"
   - Confirm
   - Wait for completion

5. **Monitor Results:**
   - Check success banner
   - See updated statuses: "Invited"
   - Export CSV for records

6. **Track Responses:**
   - Users download beta
   - Join Discord
   - Update status to "Accepted" manually or automatically

---

## 🔐 Security Best Practices

### Email Security:

1. **Never commit .env to Git**
   - Already in .gitignore
   - Use Netlify env vars for production

2. **Use App Passwords**
   - Not your main email password
   - Revoke if compromised

3. **Rate Limiting**
   - Built-in 1s delay between emails
   - Prevents spam/abuse

4. **Validate Recipients**
   - Email validation on signup
   - Remove invalid emails before sending

---

## 📝 Email Content Checklist

Before sending invites, ensure product has:

- [ ] Download URL (Google Drive link or marketplace link)
- [ ] Discord URL (for support)
- [ ] Documentation URL (getting started guide)
- [ ] Clear beta terms in email
- [ ] Contact info for support

---

## 🎯 Quick Commands

### Local Development:
```powershell
# 1. Set up .env with SMTP credentials
# 2. Start dev server
npm run dev

# 3. Test beta signup
# Visit: http://localhost:3000/products/fabric-ai

# 4. Send invites
# Visit: http://localhost:3000/admin/beta
```

### Production:
```powershell
# 1. Add SMTP vars to Netlify
# 2. Deploy
git add .
git commit -m "Add automated beta invite system"
git push

# 3. Wait for deploy
# 4. Test on https://athiangames.com/admin/beta
```

---

## ✅ Summary

**You Now Have:**
✅ Professional email template
✅ One-click invite sending
✅ Automatic status updates
✅ Bulk sending with rate limiting
✅ Error handling and reporting
✅ Beautiful admin interface

**To Send Invites:**
1. Configure SMTP in `.env`
2. Select product in admin panel
3. Click "Send Invites" button
4. Done! 🎉

---

## 📞 Support

**Email Template Issues:**
- Edit `lib/email/emailService.ts`
- Test with a few emails first

**SMTP Issues:**
- Check Gmail App Password
- Verify .env configuration
- Check server console logs

**Netlify Deployment:**
- Add env vars to Netlify
- Redeploy after changes

---

**Your automated beta invite system is ready to use!** 🚀

Just configure your email and click "Send Invites"!

